import Blogs from './components/Blogs/Blogs'
import Bookmarked from './components/Bookmarked/Bookmarked'
import Header from './components/Header/Header'
import './index.css'

function App() {

  return (
    <div className='container lg:px-24 px-6 mx-auto'>
      <Header></Header>
      <main className='grid grid-cols-3 gap-6'>
      <Blogs></Blogs>
      <Bookmarked></Bookmarked>

      </main>
    </div>
  )
}

export default App
