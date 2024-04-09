import React, { useState } from "react";
import vectorGraphic from '../assets/vector1.gif'
import "../css/option.css";
import Layout from "./Layout/Layout";
import { useNavigate } from 'react-router-dom'; 

const Option = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (designation) => {
    setSelectedOption(selectedOption === designation ? null : designation);
  };
  const handleNextClick = () => {
    navigate('/verifyEmail'); 
  };

  const dummyObject = [
    { image: vectorGraphic, heading: "I'm a designer looking to share my work", para: "With over 7 million shorts from a vast community of designers. Dummy is the leading source for design inspiration." , designation:"designer" },
    { image: vectorGraphic, heading: "I'm looking to hire a designer", para: "With over 7 million shorts from a vast community of designers. Dummy is the leading source for design inspiration." , designation:"hire" },
    { image: vectorGraphic, heading: "I'm a looking for design inspiration", para: "With over 7 million shorts from a vast community of designers. Dummy is the leading source for design inspiration." , designation:"inspiration" },
  ];

  return (
    <>
      <Layout>
        <section className="options">
          <h2 className="heading">
            What brings you to <span>dummy</span> ?
          </h2>
          <p>
            Select the options that describe you. Don't worry, you can explore
            other options later.
          </p>

          <div className="grid-three">
            {dummyObject.map((item,index )=> (
              <div className="card" key={index}>
                <img src={item.image} alt="image-1" width="200px" style={{ transform: selectedOption === item.designation ? ' translateY(-2rem)' : 'scale(1)'}}/>
                <h3>{item.heading}</h3>
                {selectedOption === item.designation && <p>{item.para}</p>}
                <input type="checkbox" name="option" onChange={() => handleCheckboxChange(item.designation)} />
              </div>
            ))}
          </div>
          <span>
            Anything else? You can select multiple
          </span>

          <div className="btn-finish">
            <button className="btn" disabled={!selectedOption} onClick={handleNextClick}>Finish</button>
            <p>or Press RETURN</p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Option;
