import axios from "../../Axios";
import React, { useState } from "react";
import "./HomeContent.css";
import NavigationModal from "../Modal/NavigationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeContent() {
  const [value, setValue] = useState("");
  const [valuetype, setValuetype] = useState("message");
  const [time, setTime] = useState("60");
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [response, setResponse] = useState("");
  const handleSubmit = () => {
    try {
      if (value === "") {
        toast.error("please text somthing");
      }
      setModalOpen(false);
      axios
        .post("/msg&link/addData", { value, valuetype, time })
        .then((res) => {
          console.log(res);
          if (res.data) {
            setModalOpen(true);
            setResponse(res.data.unique);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 3,
        width: "50%",
      }}
    />
  );

  return (
    <div>
      <div>
        <div>
          <div className="headingDiv">
            <label className="labelForHeading">
              Create a disappearing&nbsp;
            </label>

            <select
              value={valuetype}
              onChange={(e) => setValuetype(e.target.value)}
              className="selectTag"
            >
              <option value="message">message&nbsp;</option>
              <option value="link">link&nbsp;</option>
            </select>
          </div>
          <div className="hrParantDiv">
            <ColoredLine color="black" />
          </div>
          <div>
            <ToastContainer />
            <p>Self-destruct Timer</p>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="selectTag"
              name="cars"
              id="cars"
            >
              <option value="60">1 minute</option>
              <option value="600">10 minute</option>
              <option value="3600">1 hour</option>
              <option value="86400">1 day</option>
              <option value="604800">1 week</option>
            </select>
          </div>
          {modalOpen && (
            <NavigationModal valuetype={valuetype} response={response} />
          )}
          <div>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="what do you want to say"
            />
            <button onClick={handleSubmit}>Generate</button>
          </div>
          <div>
            <h2>About</h2>
            <p>Disappearing URLs and messages!</p>
            <p>
              Create short, temporary, self-destructing messages and links that
              automatically expire in anywhere from a minute to a week.
            </p>
            <p>
              Extend the url.dev functionality. Build your own Apps using the
              full API on Autocode.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
