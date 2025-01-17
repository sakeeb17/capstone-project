import React ,{useState} from 'react';
import Header from './Header';
import '../CSS/Patientprofile.css';
import image1 from'../images/create_record.jpg';
import image2 from'../images/view_record.jpg';
import image3 from '../images/Request-record.jpg';
import {useNavigate} from 'react-router-dom';
export default function Patientprofile() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick1=()=>{
    navigate('/Hospitalreport');
    setIsClicked(true);
  }
  const handleClick2=()=>{
    navigate('./Hospitalcomponent');
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
          onClick={handleClick1}
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
          onClick={handleClick2}
          onMouseLeave={handleMouseLeave}>
        <div className="container1">
          <div className="container-inner1">
            <img
              className="circle1"
              src={image2}
              alt="Update Record"
            />
          </div>
        </div>
        <div className="divider1"></div>
        <div className="name1">Update Record</div>
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
