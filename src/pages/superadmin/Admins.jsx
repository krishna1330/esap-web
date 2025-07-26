import React from 'react';
import AdminList from '../../components/admin/AdminList';
import CreateAdminModal from '../../components/admin/CreateAdminModal';

const Admins = () => {
  return (
    <div className="container mt-4">
      {/* Heading, Search, and Button Row */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-3">
        <h2 className="mb-0">Admins</h2>

        {/* Search Box */}
        <div className="flex-grow-1 mx-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or email..."
            id="adminSearch"
          />
        </div>

        {/* Create Admin Button */}
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#createAdminModal"
        >
          <i className="bi bi-person-plus me-1"></i> Create Admin
        </button>
      </div>

      {/* Admin List */}
      <AdminList searchInputId="adminSearch" />

      {/* Create Admin Modal */}
      <CreateAdminModal onAdminCreated={() => window.location.reload()} />
    </div>
  );
};

export default Admins;
