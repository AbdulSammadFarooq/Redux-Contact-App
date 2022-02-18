import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"

const Add = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
  });
  const navigate = useNavigate()
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch()
  // console.log(contacts.changeNumber[0].email)
  // console.log(contacts.changeNumber.length)

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name)
    // console.log(value)

    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmail = [];
    const checkNumber = [];
    for (let i = 0; i < contacts.changeNumber.length; i++) {
      if (contacts.changeNumber[i].email == info.email) {
        checkEmail.push(info.email);
      }
      if (contacts.changeNumber[i].number == info.number) {
        checkNumber.push(info.number);
      }
    }

    // console.log("checkemail is" + checkEmail);
    // console.log("checkNumber is" + checkNumber);

    if (!info.name || !info.email || !info.number) {
      return toast.warning("All Fields are required to be filled");
    }
    if (checkEmail.length > 0) {
      return toast.error("This email is already exists");
    }
    if (checkNumber.length > 0) {
      return toast.error("This Number is already exists");
    }
    // console.log(`id is ${contacts.changeNumber.length}`)
    const lastId = contacts.changeNumber.length ;

    const data = {
        id : lastId,
        name:info.name,
        email:info.email,
        number : info.number,
    };

    dispatch({type:"ADD_CONTACT", payload:data})
    toast.success("Student Added Successfully!")
    navigate("/")
    // console.log(`Data is ${data.email}`);
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Add Student</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                className="form-control"
                value={info.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id=""
                placeholder="email"
                className="form-control mt-2"
                value={info.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                name="number"
                id=""
                placeholder="Number"
                className="form-control mt-2"
                value={info.number}
                onChange={handleChange}
              />
            </div>

            <div className="form-group d-grid gap-2">
              <input
                type="submit"
                name=""
                id=""
                value="Add Student"
                className="btn btn-block btn-dark mt-2 "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
