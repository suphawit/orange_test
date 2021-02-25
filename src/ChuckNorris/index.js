import React, { useState } from "react";
import http from "axios";

export default function ChuckNorris() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [responseText, setResponseText] = useState("");
  const sendData = () => {
    const { firstName, lastName } = formData;
    http["get"]("https://api.icndb.com/jokes/random", {
      params: {
        firstName,
        lastName,
      },
    }).then((res) => {
      const { joke } = res.data.value;
      setResponseText(joke);
    });
  };
  return (
    <>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={(e) => {
          const firstName = e.target.value;
          setFormData({
            ...formData,
            firstName,
          });
        }}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={(e) => {
          const lastName = e.target.value;
          setFormData({
            ...formData,
            lastName,
          });
        }}
      />
      <input
        type="button"
        value="send"
        onClick={() => {
          sendData();
        }}
      />
      <p>{responseText}</p>
    </>
  );
}
