import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";


const Info = () => {
  const newTab = url => window.open(url)
  return (
        <div className="info">
            <img src="val.jpg" className="img"/>
            <h1 className="title">Valarie Oyieke</h1>
            <h3 className="subtitle">Front-end Developer</h3>
            <div className="btns">
                <button className="email-btn"><MdEmail size={16}/>Email</button>
                <button onClick={()=>newTab('https://www.linkedin.com/in/valarie-oyieke-92b8a3185')}className="linkedin-btn"><FaLinkedin size={16}/> LinkedIn</button>
            </div>
        </div>
     );
}
 
export default Info;
