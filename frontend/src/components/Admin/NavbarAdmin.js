import React from 'react';
import './NavbarAdmin.css';
import sample from './image.png';
import { useNavigate } from 'react-router-dom';

function NavbarAdmin() {
  let navigate = useNavigate();

  function handleAddEvent() {
    navigate('/admin/add-event');
  }

  return (
    <div className='navbar-admin d-flex justify-content-between'>
      <div className='logo'>
        <img src={sample} alt="Logo" style={{ width: '200px' }} />
      </div>
      <div>
        <button className="navbar-btn btn btn-dark text-white" onClick={handleAddEvent}> + Add Event</button>
      </div>
    </div>
  );
}

export default NavbarAdmin;
