import { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import React from "react";
import useFetch from "../Customhook/useFetch";
import ReactPaginate from "react-paginate";
import "../App.css";
import Header from "./Header";

const Blogs = () => {
  const location = useLocation();
  let { id } = useParams();
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  let { data1 } = useFetch("https://bulkaccounts.com/api/blogs");

  const [items, setItems] = useState(null);

  const fetchBlogs = (currentPage) => {
    
    fetch("https://bulkaccounts.com/api/blogs?page=" + currentPage)
      .then((res) => res.json())
      .then((data) => setData(data));
    data1 = null;
    
    return data;
  };

  // console.log(data);

  const handlePageClick = async (data) => {
    setIsLoading(true);
    let currentPage = data.selected + 1;
    console.log(currentPage);
    const blogsFromServer = await fetchBlogs(currentPage);
    // console.log(blogsFromServer);
    setItems(blogsFromServer);
    setIsLoading(false);
  };

  const renderBlogContent = () => {
    if (isloading) {
      return (
        <>
        <div class="loader4"></div>
        </>
      )
    }
    if (error) {
      return (
        <>
          <h1> Error </h1>
          <p className="error">{String(error)}</p>
        </>
      );
    }
  };

  let showData = "";
  if (data != null) {
    showData = (
      <>
      
     
        <div className="flex-container">
          {data &&
            data.datas.data.map((item) => {
              return (
                <>
                  
                    <div className="blog-card">
                      
                        <Link to={"/blog/" + item.slug}>
                          <img
                            src={`https://bulkaccounts.com/${item.attachment.media_url}`}
                            alt="" 
                          />
                        </Link>
                      
                      <div className="blog-card-container">
                        <Link to={"/blog/" + item.slug} className="title">
                          <h3>{item.title}</h3>
                        </Link>
                        <p className="desc">{item.meta_description}</p>
                        
                        
                      </div>
                    </div>
                  
                </>
              );
            })}
        </div>
      </>
    );
  } else {
    showData = (
      <>
      
      
        <div className="flex-container">
          {data1 &&
            data1.datas.data.map((item) => {
              return (
                <>
                  
                    <div className="blog-card">
                      
                        <Link to={"/blog/" + item.slug}>
                          <img
                            src={`https://bulkaccounts.com/${item.attachment.media_url}`}
                            alt="" 
                          />
                        </Link>
                      
                      <div className="blog-card-container">
                        <Link to={"/blog/" + item.slug} className="title">
                          <h3>{item.title}</h3>
                        </Link>
                        
                        <p className="desc">{item.meta_description}</p>
                        
                        
                      </div>
                    </div>
                  
                </>
              );
            })}
        </div>
      </>
    );
  }

  return (
    <>
      <Header/>
      {renderBlogContent()}
      {showData}
      <div
        className="pagen"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 20,
          boxSizing: "border-box",
          width: "100%",
          height: "100%"
        }}
      >
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={data1 && data1.max_pages}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center pagination-sm"}
          pageClassName={"page-item item pagination-page"}
          pageLinkClassName={"page-link item"}
          previousClassName={"page-item item "}
          previousLinkClassName={"page-link"}
          // nextClassName={"page-item"}
          nextClassName={"item next "}
          nextLinkClassName={"page-link"}
          // breakClassName={"page-item"}
          breakClassName={"item break-me "}
          breakLinkClassName={"page-link"}
          activeClassName={"item active"}
        />
      </div>
    </>
  );
};

export default Blogs;
