import React, {useState} from "react";

const AddVideo = ({addVideo}) => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    const handleTitleChange = (e) => {
      setTitle(e.target.value);
      console.log(e.target.value);
    };

    const handleLinkChange = (e) => {
      setLink(e.target.value);
      console.log(e.target.value)
    };

     const handleAddVideo = () => {
       addVideo(title, link);
       setTitle("");
       setLink("");
     };
  return (
    <div className="add-video-form">
      <label htmlFor="title">
        Title
        <input
          id="title"
          value={title}
          type="text"
          onChange={handleTitleChange}
        ></input>
      </label>

      <label htmlFor="link">
        Link
        <input
          id="link"
          value={link}
          type="text"
          onChange={handleLinkChange}
        ></input>
      </label>

      <button onClick={handleAddVideo}>Add video</button>
    </div>
  );
};

export default AddVideo;