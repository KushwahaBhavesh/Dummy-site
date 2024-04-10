import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import '../css/editProfile.css';
import { useNavigate } from 'react-router-dom'; 

const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  // Function to check if the "Next" button should be disabled
  const isNextDisabled = () => {
    return !selectedImage || location.trim() === '';
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleLocationChange = (event) => {
    const { value } = event.target;
    setLocation(value);
  };

  const handleNextClick = () => {
    navigate('/Dummy-site/option'); 
  };
  return (
    <div className='profile'>
      <h2>Welcome! Let's create your profile</h2>
      <p>Let others get to know you better! You can do this later.</p>
      <div className="wrapper">
        <span>Add an avatar</span>
        <div className="file-upload">
          <label htmlFor="file-input">
            {selectedImage ? (
              <img src={URL.createObjectURL(selectedImage)} alt="Avatar" style={{ width: "160px", height: "150px" }} />
            ) : (
              <FaUser />
            )}
          </label>
          <input
            id="file-input"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <button className='btn' disabled={!selectedImage}>Upload Image</button>
      </div>
      <div className='location'>
        <h3>Add your location</h3>
        <input
          type='text'
          name='location'
          placeholder='Enter Location'
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className='btn-next'>
        <button className='btn' disabled={isNextDisabled()}
        onClick={handleNextClick}
        >Next</button>
        <p>or Press RETURN</p>
      </div>
    </div>
  );
};

export default EditProfile;
