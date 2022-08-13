import React, { useRef } from "react";

export const Resume = React.forwardRef((props, ref) => {
  const {
    fullname,
    email,
    phone,
    languages,
    professionalsummary,
    jobtitle,
    skills,
    employmentsummary,
    projectdetails,
    highestqualification,
    institute,
    certifications,
  } = props.formData;
  console.log(props.formData);
  return (
    <section className='resume-page' ref={ref}>
      <div className='card'>
        <div className='card-header p-3'>
          <div className='d-flex'>
            <h4 className='mb-0'>{fullname}</h4>{" "}
            <i
              className='fas fa-edit pt-2 ms-2'
              onClick={() => props.setPage(0)}
            ></i>
          </div>

          <p className='mb-1'>{jobtitle}</p>
          <p className='mb-0'>{professionalsummary}</p>
        </div>
        <div className='card-body'>
          <div className='resume-body d-flex justify-content-between flex-wrap'>
            <div className='exp-edu-cer' style={{ width: "70%" }}>
              <div className='exp'>
                <div className='d-flex'>
                  <h5>Experience</h5>
                  <i
                    className='fas fa-edit pt-2 ms-2'
                    onClick={() => props.setPage(2)}
                  ></i>
                </div>
                {projectdetails.map((item, index) => {
                  return (
                    <div className='item' key={item.id}>
                      <h5>Company {index + 1}</h5>
                      <p>{item.cname}</p>
                      <p>{item.pname}</p>
                      <p>{item.psummary}</p>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <div className='edu'>
                <div className='d-flex'>
                  <h5>Heighest Qualification</h5>
                  <i
                    className='fas fa-edit pt-2 ms-2'
                    onClick={() => props.setPage(3)}
                  ></i>
                </div>
                <h5>{institute}</h5>
                <p>{highestqualification}</p>
                <hr />
              </div>
              <div className='cer'>
                <div className='d-flex'>
                  <h5>Certifications if any</h5>
                  <i
                    className='fas fa-edit pt-2 ms-2'
                    onClick={() => props.setPage(3)}
                  ></i>
                </div>
                {certifications?.length > 0 && certifications[0].cval !== "" ? (
                  certifications.map((item) => {
                    return (
                      <div className='certificates' key={item.id}>
                        <p>{item.cval}</p>
                        <hr />
                      </div>
                    );
                  })
                ) : (
                  <p>no certifications</p>
                )}
              </div>
            </div>
            <div
              className='per-ski'
              style={{ width: "30%", paddingLeft: "10px" }}
            >
              <div className='employment'>
                <div className='d-flex'>
                  <h5>Employment Summary</h5>
                  <i
                    className='fas fa-edit pt-2 ms-2'
                    onClick={() => props.setPage(2)}
                  ></i>
                </div>
                <p>{employmentsummary}</p>
              </div>
              <div className='person mb-2'>
                <h5>Email:</h5>
                <p>{email}</p>
                <h5>Phone:</h5>
                <p>{phone}</p>
                <h5>Languages:</h5>
                <div className='lang-container'>
                  {languages?.map((item, index) => (
                    <span key={index}>{(index ? ", " : "") + item}</span>
                  ))}
                </div>
              </div>
              <div className='skills'>
                <h5>Skills:</h5>
                {skills?.map((item, index) => (
                  <span key={index}>{(index ? ", " : "") + item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='card-footer text-muted text-center'>{email}</div>
      </div>
    </section>
  );
});
