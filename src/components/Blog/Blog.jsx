import PropTypes from "prop-types";
import bookmark from '../../assets/images/Frame.svg'
function Blog({ blog }) {
  const { cover, author, author_img } = blog;
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
            <h3 className="font-bold text-base">Mr. Raju</h3>
            <h4 className="text-[#363636] text-sm">Mar 14 (4 Days ago)</h4>
          </div>
        </div>
        <div className="flex gap-2 items-center">
            <h4>05 min read</h4>
            <img src={bookmark} alt="" />
        </div>
      </div>
      <h2 className="text-4xl font-bold pt-4">
            How to get your first job as a self-taught programmer
      </h2>
    </div>
  );
}
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
