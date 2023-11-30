"use client";

import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { testRequest } from "../reducer";

interface JsonTreeProps {
  data: any;
  level?: number;
}

const JsonTree: React.FC<JsonTreeProps> = ({ data, level = 0 }) => {
  return (
    <div style={{ marginLeft: `${level * 20}px` }}>
      {Object.keys(data).map((key, index) => {
        if (typeof data[key] === "object" && data[key] !== null) {
          return (
            <div key={index}>
              <strong>{key}:</strong>
              <JsonTree data={data[key]} level={level + 1} />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <strong>{key}:</strong> {JSON.stringify(data[key])}
            </div>
          );
        }
      })}
    </div>
  );
};

export default function Page() {
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState("");

  const getTest = (data: any) => {
    dispatch(testRequest(data));
  };

  // get data from redux store
  const sampleUserData = useAppSelector((state) => state.dashboard.data);

  return (
    <>
      <Row>
        <Col>
          <div style={{ marginTop: 30 }}>
            <input
              type="text"
              placeholder="Enter a user id"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
            <button
              onClick={() => {
                getTest(userId);
              }}
            >
              Submit
            </button>
          </div>
        </Col>
        <Col>
          <div className="content-container">
            {sampleUserData && (
              <div>
                <h5>JSON Tree View</h5>
                <JsonTree data={sampleUserData} />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
}
