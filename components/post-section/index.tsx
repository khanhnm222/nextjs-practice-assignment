import { Post } from "@/app/utils/models/Post"

const PostSection = ({
  id,
  title,
  subTitle,
  author,
  createdDate,
}: Post) => {

  return (
    <>
      <div className="post-preview">
        <a href={`/post/${id}`}>
          <h2 className="post-title">
            {title}
          </h2>
          <h3 className="post-subtitle">
            {subTitle}
          </h3>
        </a>
        <p className="post-meta">Posted by <a href="#">{author}</a> on {createdDate}</p>
      </div>
      <hr></hr>
    </>
  )
}

export default PostSection