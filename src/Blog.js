import notFound from "./images/notfound404.jpg";
const Blog = () => {
  return (
    <div>
      <img
        src={notFound}
        alt="Trouble Connecting server..."
        style={{ width: "auto", height: "auto" }}
      ></img>
    </div>
  );
};

export default Blog;
