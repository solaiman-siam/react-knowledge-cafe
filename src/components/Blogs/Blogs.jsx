import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";


function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
  return (
    <div className="grid col-span-2 space-y-6">
      {
        blogs.map((blog,idx) => <Blog key={idx} blog={blog}></Blog>)
      }
    </div>
  )
}

export default Blogs