import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <>

<div className='card-conatiner'>
   <div className='foto'>
    <div className='main-card'>
    <h2>Popular this month</h2>
    <p>Presented by:</p>
    <p>Adaired</p>
    </div>

        </div>

        
        
    <div className='cards'>

        <div className='card'>
            <h2><Link to="/" className='home-card-title'>Title</Link></h2>
            <p>This is an article and it has some content. </p>
        </div>
        <div className='card'>
            <Link to="#" className='home-card-title'><h2>Title</h2></Link>
            <p>This is an article and it has some content. </p>
        </div>
        <div className='card' >
            <Link to="#" className='home-card-title'><h2>Title</h2></Link>
            <p>This is an article and it has some content. </p>
        </div>
        <div className='card' >
            <Link to="#" className='home-card-title'><h2>Title</h2></Link>
            <p>This is an article and it has some content. </p>
        </div>
        <div className='card' >
            <Link to="#" className='home-card-title'><h2>Title</h2></Link>
            <p>This is an article and it has some content. </p>
        </div>
        <div className='card' >
            <Link to="#" className='home-card-title'><h2>Title</h2></Link>
            <p>This is an article and it has some content. </p>
        </div>
        <div className='card' >
            <Link to="#" className='home-card-title'><h2>Title</h2></Link>
            <p>This is an article and it has some content. </p>
        </div>

    </div>
    
    </div>

    </>
  )
}

export default Cards

// import { useState } from "react";
// import { useParams, useLocation, Link } from "react-router-dom";
// import React from "react";
// import useFetch from "../Customhook/useFetch";
// import "../App.css";

// const Cards = () => {
//   const location = useLocation();
//   let { id } = useParams();
//   const [error, setError] = useState(null);
//   const [isloading, setIsLoading] = useState(false);
//   const [data, setData] = useState(null);
//   let { data1 } = useFetch("https://bulkaccounts.com/api/blogs");

//   const [items, setItems] = useState(null);

//   const fetchBlogs = (currentPage) => {
//     setIsLoading(true);
//     fetch("https://bulkaccounts.com/api/blogs?page=" + currentPage)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//     data1 = null;
//     setIsLoading(false);
//     return data;
//   };

// //   console.log(data);

//   const handlePageClick = async (data) => {
//     let currentPage = data.selected + 1;
//     console.log(currentPage);
//     const blogsFromServer = await fetchBlogs(currentPage);
//     // console.log(blogsFromServer);
//     setItems(blogsFromServer);
//   };

//   let showData = "";

//   showData = (
//     <>
//       <div className="card-container">
//         <div className="foto">
//           <div className="main-card">
//             <h2>Popular this month</h2>
//             <p>Presented by:</p>
//             <p>Adaired</p>
//           </div>
//         </div>
//         {data1 &&
//           data1.datas.data.map((item) => {
//             return (
//               <>
//                 <div className="cards">
//                   <div className="card">
//                     <Link
//                       to={"/blog/" + item.slug}
//                       style={{ textDecoration: "none" }}
//                     >
//                       <h2>{item.title}</h2>
//                     </Link>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//       </div>
//     </>
//   );

//   return <>{showData}</>;
// };

// export default Cards;
