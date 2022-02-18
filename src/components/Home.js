import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch()
  // console.log(contacts)
  const totalData = contacts.changeNumber;
  // console.log(totalData)
  // totalData.map((ele)=>{
  //     console.log(ele)
  // })

  const deleteContacts = (id) => {
    // console.log(id);
    dispatch({type:"DELETE_CONTACT", payload:id})
    toast.success("Contact deleted successfully!")

  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5 text-end">
            <Link to="/add" className="btn btn-outline-dark">
              Add Contact
            </Link>
          </div>
          <div className="col-md-10 mx-auto">
            <table className="table table-hover">
              <thead className="text-white bg-dark text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {totalData.map((element) => {
                  const { id, name, email, number } = element;
                  return (
                    <>
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{number}</td>
                        <td>
                          <Link
                            to={`/edit/${id}`}
                            className="btn btn-small btn-primary"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-small btn-danger ms-2"
                            onClick={() => deleteContacts(id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
