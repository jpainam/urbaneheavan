import useGetData from "../../hooks/useGetData";
const Comments = () => {
  const comments = useGetData([], "./data/comments.json");
  return (
    <div className="commetns-section-wrap">
      <div className="comments-headline">
        <h3>Comments (2)</h3>
      </div>
      {comments?.length &&
        comments?.map((cm) => (
          <div key={cm?.id} className="single-comments-wrap">
            <div className="single-comments-inner">
              <div className="comments-autor-thumb">
                <img src={cm?.img} alt="" />
              </div>
              <div className="comments-content">
                <h6>{cm?.name}</h6>
                <p className="comments-date">{cm?.time}</p>
                <p>{cm?.comment}</p>
              </div>
            </div>
            <a href="#" className="reply-btn">
              Reply
            </a>
          </div>
        ))}
    </div>
  );
};

export default Comments;
