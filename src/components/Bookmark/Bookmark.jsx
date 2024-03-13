import PropTypes from 'prop-types'

function Bookmark({bookmarks}) {
    
  return (
    <div>
        
        <div >
        
        {
            bookmarks.map(( blog, idx) => {
                return (
                    <div key={idx} className='bg-[#fff] rounded-xl p-6 mt-4'>

                        <h1 className='text-base font-bold' key={blog.id}> {blog.title}</h1>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

Bookmark.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmark
