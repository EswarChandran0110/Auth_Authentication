// src/components/PermissionPage.js
import React from 'react';
import UserPermissionTable from '../Components/UserPermissionTable';

function PermissionPage() {
  return (
    <div>
      <h1>User Permissions</h1>
      <UserPermissionTable />
    </div>
  );
}

export default PermissionPage;
