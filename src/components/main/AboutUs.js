import { useEffect } from "react";
import "../../App.css";
import { useSelector } from "react-redux";
const AboutUs = (props) => {
  const { postItem, currentUser } = useSelector((state) => state.postReducer);
  useEffect(() => {
    console.log(postItem);
    console.log("Current User: " + currentUser);
    if (props.postArray === undefined) {
      alert("nO DATA");
    }
    return () => {};
  }, [currentUser, postItem, props.postArray]);
  return (
    <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
      <div>
        <div>
          <h3>About Us</h3>
        </div>
        {props.postArray !== undefined ? (
          <div>
            <ul>
              {props.postArray.map((data) => (
                <div style={{ width: "100%", height: 50 }}>
                  <li key={data.id}> {data.title}</li>
                </div>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default AboutUs;
