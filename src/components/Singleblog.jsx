import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header"
const datas = "https://bulkaccounts.com/api/blogs";

function Singleblog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState();
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchBlogBySlug = async () => {
      setIsLoading(true);

      try {
        const res = await axios.get(
          `https://bulkaccounts.com/api/blogs?slug=${slug}`
        );
        console.log(res);
        if (res?.data) {
          setBlog(res.data);
        } else {
          setError("Blog not found.");
        }
      } catch (error) {
        console.log(error);
        setError("Blog not found.");
      }

      
      setIsLoading(false);
    };

    

    fetchBlogBySlug();
  }, [slug]);

//**************************************** */
  const renderBlogContent = () =>{
    if(isloading){
      return (<>
    
        <div class="loader4"></div>
     
  
      </>

      )
    }
    if(error){
      return(
        <>
        <h1> Error </h1>
        <p className="error">{String(error)}</p>
        </>
      )
    }
    return (
      <>
      <div className="single-blog-container">
      <div className="single-blog">
        <h1 className="single-blog-title">  {blog && blog.datas.data[0].category.name} </h1>

        <img src={`https://bulkaccounts.com/${blog && blog.datas.data[0].attachment.media_url}`} alt={blog && blog.datas.data[0].attachment.media_url}/>

        <div className="info">
      <p>Created at:  {blog && blog.datas.data[0].attachment.created_at}</p> 
      <p>Updated at:  {blog && blog.datas.data[0].attachment.updated_at}</p>
      </div>
      </div>

      </div>
      </>
      
    )
  } 
  //************************************** */
  return (
    <>
    <Header/>
      {renderBlogContent()}
      
    </>
  );
}

export default Singleblog;
