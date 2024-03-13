import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarked from './components/Bookmarked/Bookmarked'
import Header from './components/Header/Header'
import './index.css'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [markAsRead, setMarkAsRead] = useState(0)

  const handleBookmarks = blog => {
    setBookmarks([...bookmarks, blog])
  }
  
  const handleMarkAsRead = (time) => {
    
    setMarkAsRead(markAsRead + time)
  }

  return (
    <div className='container lg:px-24 px-6 mx-auto'>
      <Header></Header>
      <main className='grid grid-cols-3 gap-6'>
      <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarked bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarked>

      </main>
    </div>
  )
}

export default App
