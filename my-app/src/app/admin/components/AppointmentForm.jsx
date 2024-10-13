"use client";

import { useEffect, useState } from 'react';
import { CalendarPlus, Clock, DollarSign, Users, Calendar } from 'lucide-react';

const AvailabilityForm = () => {
  const [availability, setAvailability] = useState({ 
    available_date: '', 
    available_start_time: '', 
    available_end_time: '', 
    price: '', 
    numSubscribers: '' 
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [availabilities, setAvailabilities] = useState([]);

  const handleChange = (e) => {
    setAvailability({ ...availability, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(availability),
      });

      if (!response.ok) {
        throw new Error('Failed to create availability event');
      }

      const data = await response.json();
      setSuccess('Availability event created successfully!');
      setAvailability({ 
        available_date: '', 
        available_start_time: '', 
        available_end_time: '', 
        price: '', 
        numSubscribers: '' 
      });

      fetchAvailabilities();

    } catch (err) {
      setError(err.message);
    }
  };

  const fetchAvailabilities = async () => {
    try {
      const response = await fetch('/api/admin/appointments');
      if (!response.ok) {
        throw new Error('Failed to fetch availabilities');
      }
      const data = await response.json();
      setAvailabilities(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAvailabilities();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-800 mb-8">Availability Management</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Availability Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">{error}</div>}
          {success && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">{success}</div>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Available Date</label>
              <div className="relative">
                <CalendarPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  name="available_date"
                  value={availability.available_date}
                  onChange={handleChange}
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-black" // Change to black
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Start Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="time"
                  name="available_start_time"
                  value={availability.available_start_time}
                  onChange={handleChange}
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-black" // Change to black
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">End Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="time"
                  name="available_end_time"
                  value={availability.available_end_time}
                  onChange={handleChange}
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-black" // Change to black
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Price</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  name="price"
                  value={availability.price}
                  onChange={handleChange}
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-black" // Change to black
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Number of Subscribers</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                name="numSubscribers"
                value={availability.numSubscribers}
                onChange={handleChange}
                className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-black" // Change to black
                required
              />
            </div>
          </div>
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center justify-center w-full md:w-auto">
            <CalendarPlus className="mr-2" />
            Create Availability Event
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Existing Availability Events</h2>
        {availabilities.length === 0 ? (
          <p className="text-gray-600">No availability events found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availabilities.map((event) => (
              <div key={event._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                <div className="flex items-center mb-2">
                  <Calendar className="text-indigo-600 mr-2" />
                  <p className="font-semibold text-black">{new Date(event.available_date).toLocaleDateString()}</p> {/* Change to black */}
                </div>
                <div className="flex items-center mb-2">
                  <Clock className="text-indigo-600 mr-2" />
                  <p className="text-black">{event.available_start_time} - {event.available_end_time}</p> {/* Change to black */}
                </div>
                <div className="flex items-center mb-2">
                  <DollarSign className="text-indigo-600 mr-2" />
                  <p className="text-black">${event.price}</p> {/* Change to black */}
                </div>
                <div className="flex items-center">
                  <Users className="text-indigo-600 mr-2" />
                  <p className="text-black">{event.numSubscribers} subscribers</p> {/* Change to black */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailabilityForm;
