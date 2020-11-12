import React from "react";
import BlogPost from "./BlogPost";

const BlogPosts = ({ postsData }) => {
  return (
    <div>
      {postsData
        .sort((a, b) => b.modified_date - a.modified_date)
        .map((post) => (
          <BlogPost key={post._id} post={post} />
        ))}
    </div>
  );
};

export default BlogPosts;
