import { Post } from "@/app/utils/models/Post"
import LabelTag from "../label-tag"

const PostSection = ({
  id,
  title,
  subTitle,
  author,
  createdDate,
  isNew,
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
        <div className="post-meta flex justify-between items-center mb-[-20px]">
          <p>Posted by <b>{author}</b> on {createdDate}</p>
          {isNew ? (
            <LabelTag name='New post' />
          ) : null}
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default PostSection