import React from "react";

export default function EmploymentSummary({ formData, setformData }) {
  const addProjects = () => {
    setformData({
      ...formData,
      projectdetails: [
        ...formData.projectdetails,
        {
          cname: "",
          pname: "",
          psummary: "",
          id: new Date().getTime() * Math.random() * 100000,
        },
      ],
    });
  };
  const removeProjects = (Id) => {
    const removedProject = formData.projectdetails.filter(
      (item) => item.id !== Id
    );
    setformData({ ...formData, projectdetails: removedProject });
  };
  const changeArrayItem = (Id, event) => {
    setformData({
      ...formData,
      projectdetails: formData.projectdetails.map(function (item) {
        if (item.id === Id) {
          item[event.target.name] = event.target.value;
        }
        return item;
      }),
    });
  };
  console.log(formData);
  return (
    <section>
      <div className='form-group'>
        <div className='form-floating'>
          <textarea
            className='form-control'
            placeholder='Leave a comment here'
            id='floatingTextarea'
            value={formData.employmentsummary}
            onChange={(e) =>
              setformData({ ...formData, employmentsummary: e.target.value })
            }
          />
          <label htmlFor='floatingTextarea'>Employment summary</label>
        </div>
        <div className='project-head d-flex justify-content-evenly mt-3'>
          <h5 className=''>Project details</h5>
          <button
            type='button'
            className='btn btn-outline-primary'
            onClick={addProjects}
          >
            add projects
          </button>
        </div>
        <hr />

        <div className='project-group mt-3'>
          {formData?.projectdetails?.map((item, index) => (
            <div className='project-control mt-3' key={item.id}>
              <div className='d-flex justify-content-evenly'>
                <h6>Project {index + 1}</h6>
                <button
                  className='btn btn-outline-primary'
                  onClick={() => removeProjects(item.id)}
                >
                  remove
                </button>
              </div>

              <input
                type='text'
                className='form-control mt-2'
                placeholder='company name'
                name='cname'
                value={item.cname}
                onChange={(e) => changeArrayItem(item.id, e)}
              />
              <input
                type='text'
                className='form-control mt-2'
                placeholder='project name'
                name='pname'
                value={item.pname}
                onChange={(e) => changeArrayItem(item.id, e)}
              />
              <div className='form-floating mt-2'>
                <textarea
                  className='form-control'
                  placeholder='Leave a comment here'
                  id='floatingTextarea'
                  name='psummary'
                  value={item.psummary}
                  onChange={(e) => changeArrayItem(item.id, e)}
                />
                <label htmlFor='floatingTextarea'>project summary</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
