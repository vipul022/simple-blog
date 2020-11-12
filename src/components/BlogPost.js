import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ history, post, showControls, deleteBlogPost }) => {
  if (!post) {
    return null;
  } else {
    const linkStyles = {
      color: "green",
    };
    const { title, modified_date, content, category } = post;

    const handleDelete = (e) => {
      e.preventDefault();
      deleteBlogPost(post._id);
      history.push("/");
    };
    const handleEdit = (e) => {
      e.preventDefault();
      history.push(`/posts/edit/${post._id}`);
    };
    return (
      <div>
        <Link style={linkStyles} to={`/posts/${post._id}`}>
          <h1>{title}</h1>
        </Link>
        <h3>{category}</h3>
        <h3>{modified_date.toLocaleString()}</h3>
        <p>{content}</p>
        {showControls && (
          <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
};

export default BlogPost;
