import React, { useState, useRef } from "react";
import Acadamics from "../components/Acadamics";
import EmploymentSummary from "../components/EmploymentSummary";
import PersonalInfo from "../components/PersonalInfo";
import ProfessionalInfo from "../components/ProfessionalInfo";
import { Resume } from "../components/Resume";
import { useReactToPrint } from "react-to-print";
import ProgressBar from "../components/progress/ProgressBar";

export default function ResumePage() {
  const [page, setPage] = useState(0);
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    phone: "",
    languages: [],
    professionalsummary: "",
    jobtitle: "",
    skills: [],
    employmentsummary: "",
    projectdetails: [
      {
        cname: "",
        pname: "",
        psummary: "",
        id: new Date().getTime() * Math.random() * 100000,
      },
    ],
    highestqualification: "",
    institute: "",
    certifications: [
      {
        cname: "certification 1",
        cval: "",
        id: new Date().getTime() * Math.random() * 100000,
      },
    ],
  });
  const titles = [
    "Personal Info",
    "Professional Info",
    "Employment Summary",
    "Acadamics",
    "Resume",
  ];
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const prevFunction = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };
  const nextFunction = () => {
    if (page !== titles.length - 1) {
      setPage(page + 1);
    } else {
      handlePrint();
    }
  };

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setformData={setformData} />;
    } else if (page === 1) {
      return <ProfessionalInfo formData={formData} setformData={setformData} />;
    } else if (page === 2) {
      return (
        <EmploymentSummary formData={formData} setformData={setformData} />
      );
    } else if (page === 3) {
      return <Acadamics formData={formData} setformData={setformData} />;
    } else {
      return (
        <Resume formData={formData} ref={componentRef} setPage={setPage} />
      );
    }
  };
  const automateForm = () => {
    setformData({
      fullname: "Abhilash",
      email: "abc@gmail.com",
      phone: "987654321",
      languages: ["Enlgish", "Hindi", "Tulu", "Kannada"],
      professionalsummary:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      jobtitle: "Web developer",
      skills: ["Js", "React", "Css", "Node"],
      employmentsummary:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      projectdetails: [
        {
          cname: "Mindtree",
          pname: "Loreal",
          psummary:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
          id: 96234114425798780,
        },
      ],
      highestqualification: "B-tech",
      institute: "Mangalore University",
      certifications: [
        {
          cname: "certification 1",
          cval: "js from course-era",
          id: 24124058559440276,
        },
      ],
    });
  };
  console.log(page);

  return (
    <section className='container'>
      <div className='btn-auto btn btn-secondary' onClick={automateForm}>
        Autofill
        <i className='fas fa-magic ps-2'></i>
      </div>
      <div className='card text-center mt-3 top-box'>
        <div className={"card-header" + (page === 4 ? " d-none" : "")}>
          {/* <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div> */}
          <ProgressBar titles={titles} page={page} />
        </div>

        <div className='card-body'>
          <h5 className='card-title'>{titles[page]}</h5>
          <div className='card-text'>{pageDisplay()}</div>
        </div>
        <div className='card-footer text-muted d-flex justify-content-evenly'>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={prevFunction}
          >
            Prev
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={nextFunction}
          >
            {page === titles.length - 1
              ? "Download"
              : page === titles.length - 2
              ? "Submit"
              : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
}
