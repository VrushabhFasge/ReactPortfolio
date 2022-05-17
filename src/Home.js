import "./Home.css";
import image from "./images/devImage.png";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homePage">
      <div className="devImage">
        <img src={image} alt="errorr" />
      </div>
      <div className="Technologies">
        <h3>Technologies I know.</h3>
        <span>
          I'm familiar with JavaScript,Java, MySQL, HTML5, CSS3, Git, Subverse,
          NodeJS, ReactJS, and Web Hosting.
        </span>
      </div>
      <div className="Projects">
        <h3>Projects</h3>
        <p>
          <p>
            I like to showcase my work and here you can see my projects hosted
            online
          </p>
          <ul>
            <li>
              <Link className="gotoProject" to="/projects">
                See Projects
              </Link>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Home;
