import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createAdmin } from '../../api/usersApi';
import { toast } from 'react-toastify';

const schema = z.object({
    first_name: z.string().min(2, 'First name is required'),
    last_name: z.string().optional(),
    email: z.string().email('Invalid email'),
    phone: z
        .string()
        .min(10, 'Phone must be at least 10 digits')
        .max(15, 'Phone cannot exceed 15 digits')
        .optional()
        .or(z.literal('')),
    password_hash: z.string().min(8, 'Password must be at least 8 characters')
});

const CreateAdminModal = ({ onAdminCreated }) => {
    const [showPwd, setShowPwd] = useState(false);

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            password_hash: 'ESAP@1234'
        }
    });

    const onSubmit = async (formData) => {
        try {
            await createAdmin({ ...formData, created_by: 1 });
            toast.success('Admin created successfully!');
            reset({ first_name: '', last_name: '', email: '', phone: '', password_hash: 'ESAP@1234' });
            onAdminCreated();  // Notify parent to refresh admin list
            const modal = document.getElementById('createAdminModal');
            if (modal) {
                const modalInstance = window.bootstrap?.Modal.getInstance(modal);
                modalInstance?.hide();
            }
        } catch (err) {
            console.error('Failed to create admin:', err);
            toast.error(err?.response?.data?.message || 'Failed to create admin');
        }
    };

    return (
        <div className="modal fade" id="createAdminModal" tabIndex="-1" aria-labelledby="createAdminModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="createAdminModalLabel">Create Admin</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className={`form-control ${errors.first_name ? 'is-invalid' : ''}`} {...register('first_name')} />
                                    {errors.first_name && <div className="invalid-feedback">{errors.first_name.message}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className={`form-control ${errors.last_name ? 'is-invalid' : ''}`} {...register('last_name')} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Email</label>
                                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} {...register('email')} />
                                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} {...register('phone')} />
                                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showPwd ? 'text' : 'password'}
                                            className={`form-control ${errors.password_hash ? 'is-invalid' : ''}`}
                                            {...register('password_hash')}
                                        />
                                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPwd(!showPwd)}>
                                            {showPwd ? <i className="bi bi-eye-slash" /> : <i className="bi bi-eye" />}
                                        </button>
                                    </div>
                                    <small className="text-muted">
                                        Default password is <code>ESAP@1234</code>, but you can change it.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" disabled={isSubmitting}>Cancel</button>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                {isSubmitting ? 'Creating...' : 'Create Admin'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAdminModal;
