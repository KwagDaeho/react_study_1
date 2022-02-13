import React from "react";

function Form2() {
  const [message, setMessage] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("your phone number : " + phoneNumber);
  };

  const handleChange = (event) => {
    if (event.target.value.startsWith(0)) {
      setMessage("your phone number is valid.");
      setPhoneNumber(event.target.value);
    } else if (event.target.value.length === 0) {
      setPhoneNumber("");
      setMessage("");
    } else {
      setMessage("your phone number should starts with 0 ");
      setPhoneNumber("");
    }
  };
  const [id, setId] = React.useState("");
  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  const Id = ({ handleIdChange }) => {
    return (
      <div>
        <label htmlFor="Id">ID : </label>
        <input
          type="text"
          name="Id"
          onChange={handleIdChange}
          value={id}
        ></input>
      </div>
    );
  };
  const [pw, setPw] = React.useState("");
  const handlePwChange = (e) => {
    setPw(e.target.value);
  };
  const Pw = ({ handlePwChange }) => {
    return (
      <div>
        <label htmlFor="Pw">PW : </label>
        <input
          type="password"
          name="Pw"
          onChange={handlePwChange}
          value={pw}
        ></input>
      </div>
    );
  };
  const handleLoginClick = () => {
    alert(`id : ${id}, pw: ${pw}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Phone">Phone Number : </label>
      <input
        id="phone"
        name="phone"
        onChange={handleChange}
        value={phoneNumber}
      />
      <br />
      <p>{message}</p>
      <button
        type="submit"
        disabled={
          phoneNumber.length === 0 || message !== "your phone number is valid."
        }
      >
        Submit
      </button>
      <p>{phoneNumber}</p>
      <Id handleIdChange={handleIdChange} />
      <Pw handlePwChange={handlePwChange} />
      <input
        type="button"
        value="Login"
        disabled={id.length === 0 || pw.length === 0}
        onClick={handleLoginClick}
      />
    </form>
  );
}

export default Form2;
