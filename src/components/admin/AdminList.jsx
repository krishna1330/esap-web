import React, { useEffect, useState } from 'react';
import { getAdmins } from '../../api/usersApi';

const AdminList = ({ searchInputId }) => {
    const [admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

    const fetchAdmins = async () => {
        try {
            const res = await getAdmins();
            setAdmins(res.data);
        } catch (err) {
            console.error('Failed to fetch admins:', err);
            setError('Failed to load admin data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdmins();

        const input = document.getElementById(searchInputId);
        if (input) {
            const handler = (e) => setSearch(e.target.value);
            input.addEventListener('input', handler);
            return () => input.removeEventListener('input', handler);
        }
    }, [searchInputId]);

    const filteredAdmins = admins.filter((admin) =>
        `${admin.first_name} ${admin.last_name}`.toLowerCase().includes(search.toLowerCase()) ||
        admin.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            {loading && <div className="alert alert-info">Loading admins...</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            {!loading && !error && (
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>User Id</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Created Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAdmins.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No admins found
                                    </td>
                                </tr>
                            ) : (
                                filteredAdmins.map((admin) => (
                                    <tr key={admin.user_id}>
                                        <td>{admin.user_id}</td>
                                        <td>{admin.first_name} {admin.last_name}</td>
                                        <td>{admin.email}</td>
                                        <td>{admin.phone || '-'}</td>
                                        <td>{admin.created_date ? new Date(admin.created_date).toLocaleDateString() : '-'}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminList;
