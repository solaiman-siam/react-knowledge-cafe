import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

function Bookmarked({bookmarks, markAsRead}) {
  return (
    <div>
        <div className="bg-[#eaeeef] p-7 rounded-xl mb-5">
            <h3 className="text-purple-500 font-bold text-xl">Spent time on read : {markAsRead} min</h3>
        </div>
        <div className="bg-[#eaeeef] p-7 rounded-xl ">
        <h1 className="text-xl font-bold ">Bookmarkes Blogs : {bookmarks.length}</h1>
        
        <Bookmark bookmarks={bookmarks} ></Bookmark>

    </div>
    </div>
  )
}

Bookmarked.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    markAsRead: PropTypes.number
}
export default Bookmarked