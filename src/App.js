import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import blogData from "./data/post_data";
import BlogPosts from "./components/BlogPosts";
import BlogPost from "./components/BlogPost";
import NewBlogPost from "./components/NewBlogPost";
import EditBlogPost from "./components/EditBlogPost";
import Nav from "./components/Nav";

const App = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(blogData);
  }, []);

  const getPostFromId = (id) => {
    return blogPosts.find((p) => p._id === parseInt(id));
  };

  const nextId = () => {
    return (
      blogPosts.reduce((acc, cur) => (acc._id > cur._id ? acc : cur), {
        _id: 0,
      })._id + 1
    );
  };

  const addBlogPost = (post) => {
    setBlogPosts([...blogPosts, post]);
  };

  const deleteBlogPost = (id) => {
    const updatedPosts = blogPosts.filter((p) => p._id !== parseInt(id));
    setBlogPosts(updatedPosts);
  };

  const updateBlogPost = (inPost) => {
    const updatedPosts = blogPosts.map((p) =>
      p._id === inPost._id ? inPost : p
    );
    setBlogPosts(updatedPosts);
  };

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <h1>Blog App :O</h1>
        <Route
          exact
          path="/posts/edit/:id"
          render={(props) => (
            <EditBlogPost
              {...props}
              updateBlogPost={updateBlogPost}
              post={getPostFromId(props.match.params.id)}
            />
          )}
        />
        <Route
          exact
          path="/posts/new"
          render={(props) => (
            <NewBlogPost
              {...props}
              addBlogPost={addBlogPost}
              nextId={nextId()}
            />
          )}
        />
        <Route
          exact
          path="/posts/:id"
          render={(props) => (
            <BlogPost
              {...props}
              post={getPostFromId(props.match.params.id)}
              showControls
              deleteBlogPost={deleteBlogPost}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => <BlogPosts {...props} postsData={blogPosts} />}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
