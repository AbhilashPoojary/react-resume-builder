import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";

export default function Acadamics({ formData, setformData }) {
  const addInputs = () => {
    const certificationName =
      "certification " + Number(formData.certifications.length + 1);
    setformData({
      ...formData,
      certifications: [
        ...formData.certifications,
        {
          cname: certificationName,
          value: "",
          id: new Date().getTime() * Math.random() * 100000,
        },
      ],
    });
  };
  const removeInputs = (itemIdRemove) => {
    const removedItem = formData.certifications.filter(
      (item) => item.id !== itemIdRemove
    );
    if (formData.certifications.length > 1) {
      setformData({ ...formData, certifications: removedItem });
    }
  };
  const certifyChange = (event, Id) => {
    setformData({
      ...formData,
      certifications: formData.certifications.map(function (item) {
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
        <input
          type='text'
          className='form-control mb-2'
          placeholder='highest qualification'
          value={formData.highestqualification}
          onChange={(e) =>
            setformData({ ...formData, highestqualification: e.target.value })
          }
        />
        <input
          type='text'
          className='form-control mb-2'
          placeholder='institue'
          value={formData.institute}
          onChange={(e) =>
            setformData({ ...formData, institute: e.target.value })
          }
        />
        <div className='certification mt-3'>
          <div className='d-flex justify-content-evenly'>
            <h5 className=''>Certifications if any</h5>
            <button className='btn btn-outline-primary' onClick={addInputs}>
              add
            </button>
          </div>
          {formData.certifications?.map((item) => (
            <div className='input-control d-flex mt-2' key={item.id}>
              <input
                type='text'
                className='form-control mb-2 me-2'
                placeholder={item.cname}
                value={item.cval}
                name='cval'
                onChange={(event) => certifyChange(event, item.id)}
              />
              {formData.certifications.length > 1 ? (
                <>
                  <span>
                    <AiFillMinusCircle
                      size={20}
                      fill='rgb(104, 103, 184)'
                      onClick={() => removeInputs(item.id)}
                    />
                  </span>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
