import React , {useState, useEffect}from 'react';

function Task2() {

    const[category, setCategory] = useState("Mountain");
    const[imageList, setImagetList] = useState([]);

    //const accessKey = "VGqRfCaedQYmeCsoeyH6r99xBVcHi64cF23msk2JsgM";

    useEffect( () => {
        retrieveImages();
    },[]);

    var categories = ["Mountain", "Beach", "Bird", "Food"];

    //console.log(jobListings);

    // async function reloadImages(cat) {

    // }

    async function retrieveImages() {
        const urlBase = "https://api.unsplash.com/search/photos?page=1&per_page=12&query=";
        const finalUrl = urlBase + category + "&client_id=VGqRfCaedQYmeCsoeyH6r99xBVcHi64cF23msk2JsgM"
        const response = await fetch(finalUrl);
        const json = await response.json();
        setImagetList(json.results);
        
        console.log(imageList);
    }

    async function changeTo(newCategory){
        setCategory(newCategory);
        const urlBase = "https://api.unsplash.com/search/photos?page=1&per_page=12&query=";
        const finalUrl = urlBase + newCategory + "&client_id=VGqRfCaedQYmeCsoeyH6r99xBVcHi64cF23msk2JsgM"
        const response = await fetch(finalUrl);
        const json = await response.json();
        setImagetList(json.results);
    }
  
    return (
        <div>
            {
                categories.map((key, cat) => {
                    return(
                        <button onClick={() => changeTo(key)} className="inline-block truncate bg-blue-400 m-5 px-4 py-2 rounded-lg">
                            {key}
                        </button>
                    );
                })
            }

            <div>
                <div>
                    {category} Pictures
                </div>
                <div className="grid grid-cols-4">
                    {
                        imageList.map((img) => {
                            return(
                                <img src={img.urls["regular"]} className="mx-10 col-span-1 inline-block truncate max-h-48" alt="apple logo" />
                            );
                        })
                    }
                </div>
            </div>
        </div>
        
    );
}

export default Task2;