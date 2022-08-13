import React, { useState } from "react";

export default function PersonalInfo({ formData, setformData }) {
  console.log(formData);
  const addTags = (event) => {
    if (event.target.value !== "") {
      const tagText =
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1);
      setformData({ ...formData, languages: [...formData.languages, tagText] });
      event.target.value = "";
    }
  };
  const removeTag = (indexToRemove) => {
    const updatedTags = formData.languages.filter(
      (item, index) => item[index] !== item[indexToRemove]
    );
    setformData({
      ...formData,
      languages: [...updatedTags],
    });
  };
  console.log(formData);
  return (
    <section>
      <div className='form-group'>
        <input
          type='text'
          className='form-control mb-2'
          placeholder='full name'
          value={formData.fullname}
          onChange={(e) =>
            setformData({ ...formData, fullname: e.target.value })
          }
        />
        <input
          type='email'
          className='form-control mb-2'
          placeholder='abc@gmail.com'
          value={formData.email}
          onChange={(e) => setformData({ ...formData, email: e.target.value })}
        />
        <input
          type='no'
          name='phone'
          className='form-control mb-2'
          placeholder='phone'
          value={formData.phone}
          onChange={(e) => setformData({ ...formData, phone: e.target.value })}
        />
        <div className='tags-input'>
          <ul id='tags'>
            {formData.languages.map((tag, index) => (
              <li key={index} className='tag'>
                <span className='tag-title'>{tag}</span>
                <span
                  className='tag-close-icon'
                  onClick={() => removeTag(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            type='text'
            className='form-control'
            placeholder='languages (press enter to add languages)'
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          />
        </div>
      </div>
    </section>
  );
}
