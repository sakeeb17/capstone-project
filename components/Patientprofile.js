import React ,{useState} from 'react';
import Header from './Header';
import './Patientprofile.css';
import image1 from'./create_record.jpg';
import image2 from'./view_record.jpg';
import image3 from './Request-record.jpg';
import {useNavigate} from 'react-router-dom';
export default function Patientprofile() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/patientreport');
    setIsClicked(true);
  }
  const handleMouseLeave = () => {
    setIsClicked(false);
  };
  return (
    <>
     <Header/>
     <div id="body1">
      <div className={`person1 ${isClicked ? 'clicked' : ''}`}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}>
        <div className="container1" >
          <div className="container-inner1">
            <img
              className="circle1"
              src={image1}
              alt="Create Record"
            />
          </div>
        </div>
        <div className="divider1"></div>
        <div className="name1">Create Record</div>
      </div>
      
      <div>
      <div className={`person1 ${isClicked ? 'clicked' : ''}`}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}>
        <div className="container1">
          <div className="container-inner1">
            <img
              className="circle1"
              src={image2}
              alt="View record"
            />
          </div>
        </div>
        <div className="divider1"></div>
        <div className="name1">View Record</div>
      </div>
      </div>
      <div>
      <div className="person1" >
        <div className="container1">
          <div className="container-inner1">
            <img
              className="circle1"
              src={image3}
              alt="Available Record"
            />
          </div>
        </div>
        <div className="divider1"></div>
        <div className="name1">Requested Record</div>
      </div>
      </div>
      
      </div>
    </>
  )
}
