import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="mailto:sas.sunny24@gmail.com"><FaInstagram /></a>
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
         <a href="https://www.facebook.com/shashwat.shrestha.5"><FaFacebook /></a>
        </li>
        <li>
          <FaYoutube />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
