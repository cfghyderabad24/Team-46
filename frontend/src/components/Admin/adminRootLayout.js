/* // AdminRootLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';

function AdminRootLayout() {
  return (
    <div>
      <NavbarAdmin />
      <div style={{ minHeight: "120vh" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminRootLayout;
 */