import React, { useState } from "react";
import './TagLine.css';

const TagsInput = ({ tags, setTags }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "," || e.key === " ") {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      e.target.value = "";
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="tags-input-container">
    <div class="input-container">
        <input required="" type="text" class="input" onKeyDown={handleKeyDown} placeholder="Add tags..."/>
        <span class="highlight"></span>
        <span class="bar"></span>
    </div>
    <div className="tags-container">
    {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
          <button type="button" onClick={() => removeTag(index)}>×</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TagsInput;