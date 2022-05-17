import "./ProjectTiles.css";
function ProjectTiles(props) {
  return (
    <div className="projectTiles">
      <div className="projectName">{props.name}</div>
      <div className="projectDate">{props.date}</div>
      <div className="projectInfo">{props.info}</div>
      <a href={props.liveLink} className="liveLink">
        Live Project
      </a>
      <a href={props.sourceLink} className="sourceCode">
        Source Code
      </a>
    </div>
  );
}

export default ProjectTiles;
