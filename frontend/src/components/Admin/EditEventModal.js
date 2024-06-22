import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './EditEventModal.css';

function EditEventModal({ event, onClose, onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: event
  });

  const [products, setProducts] = useState(event.products);

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleFormSubmit = (data) => {
    onSubmit({ ...data, products });
  };

  return (
    <div className="modal-overlay" style={{backgroundColor:"black"}}>
      <div className="modal-content">
        <h2>Edit Event</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group">
            <label htmlFor="eventName">Name of the Event</label>
            <input
              id="eventName"
              className={`form-control ${errors.eventName ? 'is-invalid' : ''}`}
              {...register('eventName', { required: 'Event name is required' })}
            />
            {errors.eventName && (
              <div className="invalid-feedback">{errors.eventName.message}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="eventDescription">Event Description</label>
            <textarea
              id="eventDescription"
              className={`form-control ${errors.eventDescription ? 'is-invalid' : ''}`}
              {...register('eventDescription', { required: 'Event description is required' })}
            />
            {errors.eventDescription && (
              <div className="invalid-feedback">{errors.eventDescription.message}</div>
            )}
          </div>

          {products.map((product, index) => (
            <div key={index} className="form-group">
              <label>Product {index + 1}</label>
              <input
                type="text"
                className="form-control mb-2"
                value={product.productName}
                onChange={(e) => handleProductChange(index, 'productName', e.target.value)}
                placeholder="Product Name"
              />
              <input
                type="number"
                className="form-control"
                value={product.quantityRequired}
                onChange={(e) => handleProductChange(index, 'quantityRequired', e.target.value)}
                placeholder="Quantity Required"
              />
            </div>
          ))}

          <div className="form-group">
            <label htmlFor="location">Location of the Event</label>
            <input
              id="location"
              className={`form-control ${errors.location ? 'is-invalid' : ''}`}
              {...register('location', { required: 'Location is required' })}
            />
            {errors.location && (
              <div className="invalid-feedback">{errors.location.message}</div>
            )}
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEventModal;
