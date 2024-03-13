import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


function Blogs({handleBookmarks, handleMarkAsRead}) {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
  return (
    <div className="grid col-span-2 space-y-12">
      {
        blogs.map((blog,idx) => <Blog key={idx} blog={blog} handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blog>)
      }
    </div>
  )
}
Blogs.propTypes ={
handleBookmarks: PropTypes.func
}
export default Blogs