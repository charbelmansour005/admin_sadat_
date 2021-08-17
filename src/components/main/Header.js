import { useEffect } from "react";
import "../../App.css";
import bell from "../../assets/bell.png";
import settings from "../../assets/settings.png";
import user from "../../assets/user.png";
import home from "../../assets/home.png";
import arrowdown from "../../assets/arrowdown.png";

const Header = (props) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="header">
      <div className="header">
        <div style={{ display: "flex", width: "100%", height: 60 }}>
          <div
            style={{
              width: "33%",
              display: "flex",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <label
              style={{
                width: "35%",
                textAlign: "center",
                marginTop: 18,
                color: "white",
              }}
            >
              {" "}
              RestoWeb
            </label>
          </div>

          <div
            style={{ width: "35%", display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: "35%", marginTop: 18 }}>
              <label
                style={{
                  marginTop: 10,
                  textAlign: "center",
                  color: "white",
                  width: "35%",
                }}
              >
                {" "}
                Back Office{" "}
              </label>
            </div>
          </div>

          <div
            style={{
              width: "28%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-end",
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
                style={{ width: 15, height: 15 }}
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
            <div style={{ marginTop: 18, marginLeft: 10 }}>
              <img
                alt="null"
                style={{ width: 12, height: 12 }}
                src={arrowdown}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
