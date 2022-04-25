import axios from "../../Axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DataShow.css";

function DataShow() {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getingData();
  }, []);
  const getingData = () => {
    try {
      axios
        .get(`/msg&link/gettingData/` + id)
        .then(async (result) => {
          console.log(result);
          setData(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="ShowDataMainDiv">
      <div className="card">
        <div>
          <div className="cardContend">
            <p>{data?.value}</p>
          </div>
          <div className="cardContend">
            <p>{data?.valuetype}</p>
          </div>
          <div className="cardContend">
            <p>{data?.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataShow;
