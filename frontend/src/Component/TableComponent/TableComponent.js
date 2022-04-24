import React, { useEffect, useState } from "react";

import "./TableComponent.css";
import axios from "../../Axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableComponent() {
  const [selectValue, setSelectValue] = useState("true");
  const [type, setType] = useState("message");
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    gettingData();
  }, []);
  const gettingData = () => {
    try {
      setError();
      axios
        .post("/msg&link/geting_MsgAndLink", { selectValue, type })
        .then((res) => {
          console.log(res);
          if (res.data) setData(res.data);
          if (res.data.length <= 0) {
            setError("items is empty");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="TableTopBar">
          <div className="tableTopleftdiv">
            <h6>{type}&nbsp;Table</h6>
          </div>
          <div className="tableTopRightdiv">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="TableSelectTag "
            >
              <option value="message">message&nbsp;</option>
              <option value="link">link&nbsp;</option>
            </select>
            <select
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
              className="TableSelectTag "
            >
              <option value="true">active&nbsp;</option>
              <option value="false">disable&nbsp;</option>
            </select>
            <button
              style={{ marginLeft: "30px" }}
              className="btn btn-dark"
              onClick={gettingData}
            >
              filter
            </button>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Content</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row?.value}</TableCell>
                    <TableCell align="center">{row?.valuetype}</TableCell>
                    <TableCell align="center">
                      {row.time === "60"
                        ? "1 minute"
                        : row.time === "600"
                        ? "10 minute"
                        : row.time === "3600"
                        ? "1 hour"
                        : row.time === "86400"
                        ? "1 day"
                        : "1 week"}
                    </TableCell>

                    {row?.isActive ? (
                      <TableCell align="center">active</TableCell>
                    ) : (
                      <TableCell align="center">deactive</TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {error && (
          <div className="errorDiv">
            <span>{error}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default TableComponent;
