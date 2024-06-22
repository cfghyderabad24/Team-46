import React, { useState } from 'react';
import axios from 'axios';
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'react-bootstrap';
import '../App.css';


function Contactus() {
  let { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleCloseFailure = () => setShowFailure(false);

  let sendQuery = function (queryData) {
    console.log(queryData);
    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: queryData
    }).then((response) => {
      if (response.data.status === 'success') {
        setShowSuccess(true);
        reset();
      } else if (response.data.status === 'fail') {
        setShowFailure(true);
      }
    });
  }

  return (
    <div className='container w-75 h-75 my-auto bg-light'>
      <div className='p-4'></div>
      <div className='rounded-lg'>
        <div className='row mt-5 my-auto'>
          <div className='col-lg-6 p-5 rounded bg-white mt-5'>
            <h3 className='display-3'>Contact us</h3>
            <p className='lead'>Our Details</p>
            <ul className='list-unstyled'>
              <li className='d-flex'>
                <p className=''><CiLocationOn className='me-1' /> Kondapur Main Road, SBI Officers Quarters, Gachibowli <br />  Hyderabad <br /> Telangana, India - 500 090</p>
              </li>
              <li>
                <p><GoMail className='me-1' /> hello@gooduniverse.org</p>
              </li>
            </ul>
            <h5 className='fs-3 lead'> Connect with us</h5>
            <div className='d-flex'>
              <a href="https://www.instagram.com/cfg.hyd/" target="_blank" rel="noopener noreferrer">
                <i className="ci ci-instagram ci-xl mt-1"></i></a>
              <a href="https://www.linkedin.com/company/cfg.hyd/" target="_blank" rel="noopener noreferrer">
                <i className="ci ci-linkedin ci-xl mt-1 ms-3"></i></a>
            </div>
          </div>
          <div className='col-lg-6 p-5 mt-5 bg-dark'>
            <form onSubmit={handleSubmit(sendQuery)}>
              <div className='d-flex'>
                <div className="form-group mt-4 mb-1 me-3">
                  <input type="text" className="contact-input form-control" id="firstName" placeholder="First Name" {...register('firstName', { required: true })} />
                  {errors.firstName?.type === 'required' && <p className='text-danger lead'>First Name is required</p>}
                </div>
                <div className="form-group mt-4 mb-1">
                  <input type="text" className="contact-input form-control" id="lastName" placeholder="Last Name" {...register('lastName', { required: true })} />
                  {errors.lastName?.type === 'required' && <p className='text-danger lead'>Last Name is required</p>}
                </div>
              </div>
              <div className="form-group mt-4 mb-1">
                <input type="email" className="contact-input form-control" id="email" placeholder="Enter email" {...register('email', { required: true })} />
                {errors.email?.type === 'required' && <p className='text-danger lead'>Email is required</p>}
              </div>
              <div className="form-group mt-4 mb-1">
                <textarea className="form-control contact-input" id="exampleFormControlTextarea1" rows="5" placeholder='Your Message' {...register('msg', { required: true, minLength: 5 })}></textarea>
                {errors.msg?.type === 'required' && <p className='text-danger lead'>Cannot be blank</p>}
                {errors.msg?.type === 'minLength' && <p className='text-warning lead'>At least 5 characters</p>}
              </div>
              <div className="form-group mt-4 mb-1">
                <textarea className="form-control contact-input" id="exampleFormControlTextarea1" rows="5" placeholder='Any beneficiaries let us know here' {...register('req', { required: false, minLength: 5 })}></textarea>
                {errors.msg?.type === 'minLength' && <p className='text-warning lead'>At least 5 characters</p>}
              </div>
              <div>

              </div>
              <button type="submit" className="btn btn-info w-50 contact-btn mt-4 d-block text-white">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal show={showSuccess} onHide={handleCloseSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your message has been sent successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseSuccess}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Failure Modal */}
      <Modal show={showFailure} onHide={handleCloseFailure}>
        <Modal.Header closeButton>
          <Modal.Title>Message Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>There was an error sending your message. Please try again later.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseFailure}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contactus;