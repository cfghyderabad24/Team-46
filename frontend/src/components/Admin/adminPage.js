/* import React, { useState } from 'react';
import AddEvent from './AddEvent';
import './adminPage.css';
import axios from 'axios';

function AdminPage() {
  const [events, setEvents] = useState([]);

  const onAddEvent = (eventData) => {
    const newEvent = {
      eventName: eventData.eventName,
      eventDescription: eventData.eventDescription,
      products: [
        { productName: 'Pads', quantityRequired: eventData.padsQuantity },
        { productName: 'Cups', quantityRequired: eventData.cupsQuantity },
      ],
      location: eventData.location,
    };

    setEvents([...events, newEvent]); // Add the event locally
  };

  const sendEmails = async (eventData) => {
    try {
      const response = await axios.post("http://localhost:4000/admin/send-emails", eventData);
      if (response.status === 200) {
        console.log("Emails sent successfully");
      }
    } catch (error) {
      console.error('Error sending emails:', error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {events.map((event, eventIndex) => (
          <div className="col-md-4 mb-4" key={eventIndex}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{event.eventName}</h5>
                <p className="card-text"><strong>Description:</strong> {event.eventDescription}</p>
                {event.products.map((product, productIndex) => (
                  <div className="product-info" key={productIndex}>
                    <p className="card-text"><strong>Product Name:</strong> {product.productName}</p>
                    <p className="card-text"><strong>Quantity Required:</strong> {product.quantityRequired}</p>
                  </div>
                ))}
                <p className="card-text"><strong>Location:</strong> {event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AddEvent onAddEvent={onAddEvent} />
      <button className="btn btn-primary mt-3" onClick={() => sendEmails(events[events.length - 1])}>Send Emails</button>
    </div>
  );
}

export default AdminPage; */
