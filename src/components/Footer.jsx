import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
    return (  
        <div className="footer">
            <FaTwitterSquare className="fa-icon"/>
            <FaFacebookSquare className="fa-icon"/>
            <FaInstagramSquare className="fa-icon"/>
            <FaGithubSquare className="fa-icon"/>
        </div>   
    
    );
}
 
export default Footer;