import PropTypes from "prop-types";
import bookmark from '../../assets/images/Frame.svg'
function Blog({ blog , handleBookmarks, handleMarkAsRead}) {
  const { cover, author, author_img, posted_date, reading_time, hashtags,title } = blog;
  return (
    <div>

        {/* cover image */}
      <div className="w-full rounded-lg h-[400px] bg-center bg-cover">
        <img className="rounded-lg w-full h-full " src={cover} alt="" />
      </div>

      {/* information */}
      <div className="flex justify-between items-center mt-6 mb-4">
        <div className="flex items-center gap-2  justify-center">
          <div className=" bg-center bg-cover rounded-full">
            <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
          </div>
          <div>
            <h3 className="font-bold text-base">{author}</h3>
            <h4 className="text-[#7c7c7c] text-sm"><span>{posted_date}</span></h4>
          </div>
        </div>
        <div className="flex gap-2 items-center">
            <h4 className="text-[#737373]"><span>{reading_time}</span> min read</h4>
            <button onClick={()=>handleBookmarks(blog)}><img src={bookmark} alt="" /></button>
        </div>
      </div>
      <h2 className="text-4xl font-bold  pb-4">
            {title}
      </h2>
      {
        hashtags.map((tag,idx) => <span className="text-[#797979] mr-2 " key= {idx}> #{tag}</span>)
      }
      {/* <h4 className="pt-3"><a   href="">Mark as read</a></h4> */}
      <button className="underline text-purple-700 font-medium block mt-4" onClick={()=>handleMarkAsRead(reading_time)}> Mark as read</button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func
};
export default Blog;
