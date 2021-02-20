import React from 'react';
import JobCard from './JobCard';

function Task1() {

  var jobListings = [
    {
      "company" : "Apple",
      "role" : "Data Engineer",
      "postedDate" : "2020-04-23T18:25:43.511Z",
      "type" : "Full Stack",
      "img" : "https://media-exp1.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_200_200/0/1595530301220?e=2159024400&v=beta&t=IJmg_K1W7KCh6082rXN9V7gzlrD9GMwYqk_EjCrDxGw",
      "techStacks": ["Oracle", "HDFS", "Hive", "Spark", "yarn", "React", "Swift"]
    },
    {
      "company" : "Binance",
      "role" : "Backend Service Developer",
      "postedDate" : "2012-04-23T18:25:43.511Z",
      "type" : "Backend",
      "img" : "https://public.bnbstatic.com/image/cms/blog/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
      "techStacks": ["Spring", "Java"]
    }, 
    {
      "company" : "Goldman Sachs",
      "role" : "Full Stack Developer (Data Modelling)",
      "postedDate" : "2012-04-23T18:25:43.511Z",
      "type" : "Full Stack",
      "img" : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/1200px-Goldman_Sachs.svg.png",
      "techStacks": ["Analytics", "UDB", "ORM", "Apache", "yarn", "React"]
    }

  ];  
  //console.log(jobListings);

  const jobs = jobListings.map((detail) => {
      return (
        <JobCard details={detail}/>
      );
  });

  return (
    <div style={{backgroundColor: '#f2f2f2'}}  className="h-screen">
      <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-screen-xl" >
        {jobs}
      </div>
    </div>
    
  );
}

export default Task1;