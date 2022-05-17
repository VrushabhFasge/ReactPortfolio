import "./Project.css";
import ProjectTiles from "../components/ProjectTiles";
import coder from "../images/programming.png";
const Projects = (props) => {
  return (
    <div>
      <div className="projectImage">
        <h3>My project codes.</h3>
        <img className="coderImg" src={coder} alt="Loading..."></img>
      </div>
      <ProjectTiles
        name={props.items[0].name}
        date={props.items[0].date}
        info={props.items[0].info}
        liveLink={props.items[0].liveLink}
        sourceLink={props.items[0].sourceLink}
      />

      <ProjectTiles
        name={props.items[1].name}
        date={props.items[1].date}
        info={props.items[1].info}
        liveLink={props.items[1].liveLink}
        sourceLink={props.items[1].sourceLink}
      />

      <ProjectTiles
        name={props.items[2].name}
        date={props.items[2].date}
        info={props.items[2].info}
        liveLink={props.items[2].liveLink}
        sourceLink={props.items[2].sourceLink}
      />
      <ProjectTiles
        name={props.items[3].name}
        date={props.items[3].date}
        info={props.items[3].info}
        liveLink={props.items[3].liveLink}
        sourceLink={props.items[3].sourceLink}
      />

      <ProjectTiles
        name={props.items[4].name}
        date={props.items[4].date}
        info={props.items[4].info}
        liveLink={props.items[4].liveLink}
        sourceLink={props.items[4].sourceLink}
      />

      <ProjectTiles
        name={props.items[5].name}
        date={props.items[5].date}
        info={props.items[5].info}
        liveLink={props.items[5].liveLink}
        sourceLink={props.items[5].sourceLink}
      />

      <ProjectTiles
        name={props.items[6].name}
        date={props.items[6].date}
        info={props.items[6].info}
        liveLink={props.items[6].liveLink}
        sourceLink={props.items[6].sourceLink}
      />

      <ProjectTiles
        name={props.items[7].name}
        date={props.items[7].date}
        info={props.items[7].info}
        liveLink={props.items[7].liveLink}
        sourceLink={props.items[7].sourceLink}
      />
      <ProjectTiles
        name={props.items[8].name}
        date={props.items[8].date}
        info={props.items[8].info}
        liveLink={props.items[8].liveLink}
        sourceLink={props.items[8].sourceLink}
      />
      <ProjectTiles
        name={props.items[9].name}
        date={props.items[9].date}
        info={props.items[9].info}
        liveLink={props.items[9].liveLink}
        sourceLink={props.items[9].sourceLink}
      />
      {/* <ProjectTiles
        name={props.items[10].name}
        date={props.items[10].date}
        info={props.items[10].info}
        liveLink={props.items[10].liveLink}
        sourceLink={props.items[10].sourceLink}
      /> */}
      {/* <ProjectTiles
        name={props.items[11].name}
        date={props.items[11].date}
        info={props.items[11].info}
        liveLink={props.items[11].liveLink}
        sourceLink={props.items[11].sourceLink}
      />
      <ProjectTiles
        name={props.items[12].name}
        date={props.items[12].date}
        info={props.items[12].info}
        liveLink={props.items[12].liveLink}
        sourceLink={props.items[12].sourceLink}
      /> */}
    </div>
  );
};

export default Projects;
