import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import changeNumber from "../redux/reducers/contactReducer";
import { toast } from "react-toastify";

const Edit = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const { id } = useParams();
  // console.log(id)
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const totalData = contacts.changeNumber;
  //   console.log(contacts)
  // console.log(totalData.length)
  // console.log(totalData[id].name);
  const currentId = [];
  useEffect(() => {
    if (totalData) {
      setInfo({
        name: totalData[id].name,
        email: totalData[id].email,
        number: totalData[id].number,
      });
    }
  }, [totalData]);
  for (let i = 0; i < totalData.length; i++) {
    // console.log(id)
    // console.log(totalData[i].id);
    if (totalData[i].id == id) {
      // console.log("true")
      currentId.push(id);
    }
  }

  const len = currentId.length > 0;
  // console.log(len);

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmail = [];
    const checkNumber = [];
    for (let i = 0; i < contacts.changeNumber.length; i++) {
      if (
        contacts.changeNumber[i].email == info.email &&
        contacts.changeNumber[i].id !== id
      ) {
        checkEmail.push(info.email);
      }
      if (
        contacts.changeNumber[i].number == info.number &&
        contacts.changeNumber[i].id !== id
      ) {
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
    const lastId = contacts.changeNumber.length;

    const data = {
      id: id,
      name: info.name,
      email: info.email,
      number: info.number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Student Updated Successfully!");
    navigate("/");
    // console.log(`Data is ${data.email}`);
  };

  return (
    <div className="container">
      {len ? (
        <>
          <div className="row">
            <h1 className="display-3 text-center">Edit Student {id}</h1>
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

                <div className="form-group">
                  <input
                    type="submit"
                    name=""
                    id=""
                    value="Update"
                    className="btn  btn-dark mt-2 "
                  />

                  <Link to="/" className="btn btn-danger mt-2 ms-2 ">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student Contact with id {id} not exists
        </h1>
      )}
    </div>
  );
};

export default Edit;
