import React from "react";
import "./MakeAdmin.css";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:7000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div className="text-center mt-5">
      <h1 >Make admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
       
        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="make as Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;
