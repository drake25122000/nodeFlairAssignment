import React from 'react';

function JobCard({details}) {

    console.log(details);
    
    function postedDate() {
        var diffYear = new Date().getFullYear() - new Date(details["postedDate"]).getFullYear();
        var diffMonth = new Date().getMonth() - new Date(details["postedDate"]).getMonth();
        var diffDay = new Date().getDay() - new Date(details["postedDate"]).getDay();
        var diffHour = new Date().getHours() - new Date(details["postedDate"]).getHours();
        var diffMinute = new Date().getMinutes() - new Date(details["postedDate"]).getMinutes();
        var diffSecond = new Date().getSeconds() - new Date(details["postedDate"]).getSeconds();

        if (diffYear == 0) {
            if (diffMonth == 0) {
                if (diffDay == 0) {
                    if (diffHour == 0) {
                        if (diffMinute == 0) {
                            return (
                                <p className="italic">
                                    {diffSecond} seconds ago
                                </p>
                            );
                        } else {
                            return (
                                <p className="italic">
                                    {diffMinute} minutes ago
                                </p>
                            );
                        }
                    } else {
                        return (
                            <p className="italic">
                                {diffHour} hours ago
                            </p>
                        );
                    }
                } else {
                    return (
                        <p className="italic">
                            {diffDay} days ago
                        </p>
                    );
                }
            } else {
                return (
                    <p className="italic">
                        {diffMonth} months ago
                    </p>
                );
            }
        } else {
            return (
                <p className="italic">
                    {diffYear} years ago
                </p>
            );
        }
    }

    return (
        <div className="flex flex-col bg-white col-span-1 m-3 px-5 pt-2 place-content-between transition duration-200 border-2 borders-color-gray rounded-md shadow-sm hover:shadow-lg">
            <div className= "flex sm:flex-row mt-3  md:flex-col">
                <div className="sm: mr-5 md:flex justify-center">
                    <img src={details["img"]} className="rounded md:my-4" alt="apple logo" height="100" width="100"/>
                </div>
                <div className = "text-left text-opacity-50 lg:mb-10">
                    <p className = "text-sm">{details["company"]}</p>
                    <h2 className="text-xl font-bold">{details["role"]}</h2>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex justify-between pb-3 border-b-2">
                    {postedDate()}
                    <div className="px-3 py-1.5 rounded-lg" style={{backgroundColor: '#DDF7E9'}}>
                        <p style={{color:'#1FC76A'}} className="font-medium">{details["type"]}</p>
                    </div>

                </div>

                <div className="text-left space-x-1 overflow-ellipsis overflow-hidden whitespace-nowrap align-text-top" style={{backgroundColor: '#FFFFFF', padding: '12px 0px',minHeight: '54px'}}>
                    {
                        details["techStacks"].map((techStack) => {
                            return (
                                <div className="inline-block truncate" style={{backgroundColor: '#F1F1F1', padding:'5px 8px', color:'#838383', fontWeight:'bold', fontFamily: 'Roboto Mono, Consolas',
                                borderRadius: '5px',
                                maxWidth: '90%'}}>
                                    {techStack}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            
        </div>
    );
}

export default JobCard;

// background-color: #F1F1F1;
//     color: #838383;
//     font-family: 'Roboto Mono', 'Consolas', monospace;
//     font-weight: bold;
//     border-radius: 5px;
//     padding: 5px 8px;
//     display: inline-block;
//     max-width: 90%;
//     text-overflow: ellipsis;
//     overflow: hidden;