// src/app/admin/appointments/page.jsx

"use client";

import AppointmentForm from '../components/AppointmentForm';

const AppointmentsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Appointments</h1>
      <AppointmentForm />
    </div>
  );
};

export default AppointmentsPage;
