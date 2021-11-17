import React from 'react';
import { useForm } from "react-hook-form";

const Contactus = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

    return (
        <div>
            <h1 className="text-center my-5">Contact us</h1>
        <div className="d-flex flex-row justify-content-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="my-3" defaultValue="Your Email" {...register("email")} />
      <br/>
      {/* include validation with required or other standard HTML validation rules */}
      <input className="my-3 py-4" defaultValue="Your Message"{...register("Message", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input className="my-3" type="submit" />
    </form>
        </div>
        <img src="https://alphashooters.b-cdn.net/wp-content/uploads/2021/04/laowa-10-18mm-f4-5-f5-6-sony-a7c-1280px-400x300.jpg" width="img-fluid" className="d-flex mx-auto d-block my-5" alt="" />
</div>        
    );
};

export default Contactus;