import Home from "./Home";
import Project from "./components/Project";
import Blog from "./Blog";
import "./Portfolio.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
const projectList = [
  {
    name: "Twitter React Clone",
    date: "April 2021",
    text:
      "A functional twitter clone that lets you tweet in real time where backend is saved at Firebase.",
    liveLink: "https://twitterclone-vf.netlify.app/",
    sourceLink: "https://github.com/VrushabhFasge/TwitterCloneUpdated"
  },
  {
    name: "Book Suggestion App",
    date: "March 2021",
    text:
      "A heaven for book bugs. We update the book suggestion on weekly basis.",
    liveLink: "https://book-vf.netlify.app/",
    sourceLink: "https://github.com/VrushabhFasge/Book_Recommendation_REACT.js"
  },
  {
    name: "Emoji Interpreter",
    date: "March 2021",
    text:
      "Trouble chosing the correct emoji? Find out the meaning of the emojis that suit your situations.",
    liveLink: "http://emoji-interpreter-vf.netlify.app/",
    sourceLink: "https://github.com/VrushabhFasge/Emoji-Interpreter"
  },
  {
    name: "Open Weather App",
    date: "January 2021",
    text:
      "Access current weather data for any location including over 200,000 cities.We collect and process weather data from different sources such as global and local weather models, satellites, radars and vast network of weather stations.",
    liveLink: "https://currentweather-vf.netlify.app/",
    sourceLink: "https://github.com/VrushabhFasge/current-weather-card"
  },
  {
    name: "Personal Portfolio",
    date: "January 2021",
    text:
      "Do you need your digital profile? You would find a beautiful digital profile for yourself here. .",
    liveLink: "www.google.com",
    sourceLink: "www.yahoo.com"
  },
  {
    name: "Automatic Gradient Creator",
    date: "January 2021",
    text:
      "First look always matters! Boost your engagement with this background creator..",
    liveLink: "https://backgroundgradient-vf.netlify.app/",
    sourceLink: "https://github.com/VrushabhFasge/background-creator"
  },
  {
    name: "Erb-Ferb Latin-lerb!",
    date: "December 2020",
    text: "A fun translation API to convert text to latin spanish. .",
    liveLink: "https://laferb-vf.netlify.app/",
    sourceLink: "https://github.com/VrushabhFasge/LaFerb-API"
  },
  {
    name: "Belo Muak !",
    date: "December 2020",
    text:
      "Minion Fans would love to check this text converter from english to minion language. BANANA!",
    liveLink: "https://banana-speak-vf.netlify.app/",
    sourceLink: "https://github.com/VrushabhFasge/Banana-talk"
  },
  {
    name: "Are you a GOT fan? ",
    date: "December 2020",
    text: "How well do you know GOT characters? Lets play a quiz and see.",
    liveLink: "https://repl.it/@VrushabhFasge/GOT-CLI-quiz-app",
    sourceLink: "https://github.com/VrushabhFasge/Game-of-thrones-CLI/tree/main"
  },
  {
    name: "How well you know me!",
    date: "December 2020",
    text:
      "Do you know who are your real friends? Play this game and find them out!",
    liveLink: "https://repl.it/@VrushabhFasge/CLI-QUIZ-APP#index.js",
    sourceLink: "https://github.com/VrushabhFasge/CLI-quiz-App"
  }
];
function Portfolio() {
  return (
    <div>
      <div className="Header">
        <div className="devName">Vrushabh Fasge</div>
        <div className="Links">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "tags link-active" : "tags"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "tags link-active" : "tags"
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "tags link-active" : "tags"
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          path="/projects"
          element={<Project items={projectList} />}
        ></Route>
        <Route path="/blogs" element={<Blog />}></Route>
      </Routes>
      <div className="footer">
        <h2>
          Lets &lt;/code-connect socially&gt;
          <span role="img" aria-label="">
            ✔️
          </span>
        </h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/_dope_indian_dude_/">
              Instagram
            </a>
          </li>

          <li>
            <a href="https://github.com/VrushabhFasge">Github</a>
          </li>

          <li>
            <a href="linkedin.com/in/vrushabhFasge">Linkedin</a>
          </li>

          <li>
            <a href="twitter.com/vrushabhfasge">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
