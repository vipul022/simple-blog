import React, { useState } from "react";

const NewBlogPost = ({ history, addBlogPost, nextId }) => {
  const divStyles = {
    display: "grid",
    width: "100vw",
  };
  const inputStyles = {
    width: "70vw",
    margin: ".5em",
  };
  const labelStyles = {
    fontSize: "1.2em",
  };
  const textAreaStyles = {
    height: "200px",
    margin: ".5em",
    width: "70vw",
  };

  const initialFormState = {
    title: "",
    category: "",
    content: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      _id: nextId,
      title: formState.title,
      category: formState.category || "general",
      modified_date: new Date(),
      content: formState.content,
    };
    addBlogPost(newPost);
    history.push(`/posts/${nextId}`);
  };

  return (
    <form id="newPostForm" onSubmit={handleSubmit}>
      <div style={divStyles}>
        <label style={labelStyles}>Title</label>
        <input
          style={inputStyles}
          required
          type="text"
          name="title"
          placeholder="gimme a title"
          onChange={handleChange}
        />
      </div>
      <div style={divStyles}>
        <label style={labelStyles}>Category</label>
        <input
          style={inputStyles}
          required
          type="text"
          name="category"
          placeholder="gimme a category"
          onChange={handleChange}
        />
      </div>
      <div style={divStyles}>
        <label style={labelStyles}>Content</label>
        <textarea
          form="newPostForm"
          required
          style={textAreaStyles}
          name="content"
          placeholder="gimme content"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="New Post"></input>
    </form>
  );
};

export default NewBlogPost;
