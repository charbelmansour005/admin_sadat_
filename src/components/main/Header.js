import { useEffect } from "react";
import "../../App.css";
import bell from "../../assets/bell.png";
import settings from "../../assets/settings.png";
import user from "../../assets/user.png";
import home from "../../assets/home.png";
import arrowdown from "../../assets/arrowdown.png";

const Header = (props) => {
  useEffect(() => {
    return () => { };
  }, []);

  return (
    <div className="header">

      <div style={{ display: "flex", justifyContent: 'center', width: "100%", height: 60 }}>
        <div
          style={{ width:'100%', display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "50%", marginTop: 18,display:'flex',justifyContent:'flex-end',minWidth:150,minHeight:60 }}>
            <label
              style={{
                marginTop: 5,

                textAlign: "center",
                color: "white",
               
              }}
            >
              {" "}
              Back Office{" "}
            </label>
          </div>
        </div>

        <div
          style={{

            width: "50%",
            marginTop:5,
            minHeight:60,
            minWidth:250,
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ marginTop: 18, width: 40, height: 40 }}>
            <img
              alt="null"
              style={{ width: 15, height: 15 }}
              src={home}
            ></img>
          </div>

          <div
            style={{ marginTop: 18, marginLeft: 10, width: 40, height: 40 }}
          >
            <img
              alt="null"
              style={{ width: 15, height: 15 }}
              src={bell}
            ></img>
          </div>
          <div
            style={{ marginTop: 18, marginLeft: 10, width: 40, height: 40 }}
          >
            <img
              alt="null"
              style={{ width: 15, height: 15, minWidth: 15, minHeight: 15 }}
              src={settings}
            ></img>
          </div>
          <div
            style={{ marginTop: 18, marginLeft: 10, width: 40, height: 40 }}
          >
            <img
              alt="null"
              style={{ width: 15, height: 15 }}
              src={user}
            ></img>
          </div>
          <div style={{ marginTop: 18 }}>
            <label style={{ width: "100%", color: "white" }}>Charbel</label>
          </div>
          <div style={{
            marginTop: 18, marginLeft: 10,minWidth:50,minHeight:50
          }}>
            <img
              alt="null"
              style={{ width: 12, height: 12 }}
              src={arrowdown}
            ></img>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Header;
