import { useEffect } from "react";
import { useState } from "react"

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
  return (
    <div>Blogs</div>
  )
}

export default Blogs