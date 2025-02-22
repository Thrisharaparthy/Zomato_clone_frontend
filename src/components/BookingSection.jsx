import React, { useState } from 'react';
import '../styles/BookingSection.css';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted successfully!');
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: ''
    });
  };

  return (
    <section id="booking" className="booking-section">
      <h2>Book a Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        >
          <option value="">Number of Guests</option>
          <option value="1">1 Person</option>
          <option value="2">2 People</option>
          <option value="4">4 People</option>
          <option value="6">6 People</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookingSection;