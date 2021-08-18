import { useState, useEffect } from "react";
import "../../App.css";
import Loadingbar from "react-top-loading-bar";
import add from "../../assets/add.png";
import { useSelector } from "react-redux";

const Settings = (props) => {
  const [progress, setProgress] = useState(0);
  const [allPost, setAllPosts] = useState([]);
  const { currentUser } = useSelector((state) => state.postReducer);

  useEffect(() => {
    console.log(currentUser);
    setProgress(50);
    getAllPost();
    window.addEventListener("online", () => alert("You are online"));
    window.addEventListener("offline", () => alert("You are offline"));
    return () => {};
  }, [currentUser]);

  let getAllPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((resJson) => {
        setAllPosts(resJson);
        setProgress(100);
      });
  };
  return (
    <div style={{}}>
      <div>
        <div style={{ width: "100%", marginLeft: 100 }}>
          <h3>Settings</h3>
        </div>
        <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <ul className="postList">
            {allPost.map((data) => (
              <div
                style={{
                  width: "100%",
                  borderRadius: 10,
                  margin: 10,
                  opacity: 0.7,
                }}
              >
                <div
                  style={{
                    marginLeft: 10,
                    marginTop: 7,
                    display: "flex",
                    backgroundColor: "lightgray",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <img
                    alt="null"
                    src={add}
                    style={{
                      width: 12,
                      height: 12,
                      textAlign: "center",
                      paddingTop: 5,
                    }}
                  ></img>
                  <li
                    style={{ paddingLeft: 10, marginLeft: 5 }}
                    key={allPost.indexOf(data)}
                  >
                    {" "}
                    {data.title}
                  </li>
                </div>
                <div></div>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Loadingbar color="#f11946" progress={progress}></Loadingbar>
      </div>
    </div>
  );
};
export default Settings;
