import Axios from "../../Axios";
import axios from "axios";
import React, { useState } from "react";
import "./HomeContent.css";
import NavigationModal from "../Modal/NavigationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeContent() {
  const [value, setValue] = useState("");
  const [valuetype, setValuetype] = useState("message");
  const [link, setLink] = useState("");
  const [time, setTime] = useState("60");
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [loder, setloder] = useState(false);
  const [response, setResponse] = useState("");
  const handleSubmit = () => {
    try {
      if (value === "") return toast.error("please text somthing");
      setModalOpen(false);
      setloder(true);
      Axios.post("/msg&link/addData", { value, valuetype, time })
        .then((res) => {
          console.log(res);
          if (res.data) {
            setModalOpen(true);
            setResponse(res.data.unique);
            setloder(true);
            setValue("");
          }
        })
        .catch((err) => {
          setloder(false);
          console.log(err);
        });
    } catch (error) {
      setloder(false);
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

  const handleSubmitLink = () => {
    if (link === "") return toast.error("please text somthing");
    setModalOpen(false);
    setloder(true);
    axios
      .get(
        `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_7IZRndIznhHnZxZL0hXuWD4auFcEh&domainName=${link}&credits=DA`
      )
      .then((res) => {
        console.log("then method");
        console.log(res.data.DomainInfo.domainAvailability === "UNAVAILABLE");
        if (res.data.DomainInfo.domainAvailability === "UNAVAILABLE") {
          Axios.post("/msg&link/addData", { value: link, valuetype, time })
            .then((res) => {
              console.log(res);
              if (res.data) {
                setModalOpen(true);
                setResponse(res.data.unique);
                setloder(false);
                setLink("");
              }
              setloder(false);
            })
            .catch((err) => {
              toast.error("something unexpected happened. please try again");
              setloder(false);
              console.log(err);
            });
        } else {
          setloder(false);
          toast.error("invalid link");
        }
      })
      .catch((err) => {
        toast.error("invalid link");
        setloder(false);
      });
  };

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
            {valuetype === "message" ? (
              <>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  placeholder="create a message"
                />
                <button onClick={handleSubmit}>message</button>
              </>
            ) : (
              <>
                <input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  type="text"
                  placeholder="create a link"
                />
                {/* <div></div> */}
                {loder ? (
                  <div class="three-body">
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                  </div>
                ) : (
                  <button onClick={handleSubmitLink}>link</button>
                )}
              </>
            )}
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
