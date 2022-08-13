import React, { useState } from "react";

export default function ProfessionalInfo({ formData, setformData }) {
  const [tags, setTags] = useState([]);
  const addTags = (event) => {
    if (event.target.value !== "") {
      const tagText =
        event.target.value.charAt(0).toUpperCase() +
        event.target.value.slice(1);
      setformData({ ...formData, skills: [...formData.skills, tagText] });
      event.target.value = "";
    }
  };
  const removeTag = (indexToRemove) => {
    const updatedTags = formData.skills.filter(
      (item, index) => item[index] !== item[indexToRemove]
    );
    setformData({
      ...formData,
      skills: [...updatedTags],
    });
  };
  return (
    <section>
      <div className='form-group'>
        <div className='form-floating'>
          <textarea
            className='form-control'
            id='floatingTextarea'
            value={formData.professionalsummary}
            onChange={(e) =>
              setformData({ ...formData, professionalsummary: e.target.value })
            }
          />
          <label htmlFor='floatingTextarea'>professional summary</label>
        </div>
        <input
          type='text'
          className='form-control mt-2'
          placeholder='job title'
          value={formData.jobtitle}
          onChange={(e) =>
            setformData({ ...formData, jobtitle: e.target.value })
          }
        />
        <div className='tags-input mt-2'>
          <ul id='tags'>
            {formData.skills.map((tag, index) => (
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
            className='form-control '
            placeholder='skills (press enter to add skills)'
            onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          />
        </div>
      </div>
    </section>
  );
}
