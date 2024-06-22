import React from 'react';
import { useForm } from 'react-hook-form';
import './EventForm.css';

function AddEvent({ onAddEvent }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (onAddEvent) {
      onAddEvent(data);
    }
  };

  return (
    <div className="event-form-container mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="event-form">
        <h2 className="text-center">Add Event</h2>
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
          <label htmlFor="padsQuantity">Quantity Required for Pads</label>
          <input
            id="padsQuantity"
            type="number"
            className={`form-control ${errors.padsQuantity ? 'is-invalid' : ''}`}
            {...register('padsQuantity', {
              required: 'Quantity for Pads is required',
              min: { value: 1, message: 'Minimum quantity is 1' },
            })}
          />
          {errors.padsQuantity && (
            <div className="invalid-feedback">{errors.padsQuantity.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="cupsQuantity">Quantity Required for Cups</label>
          <input
            id="cupsQuantity"
            type="number"
            className={`form-control ${errors.cupsQuantity ? 'is-invalid' : ''}`}
            {...register('cupsQuantity', {
              required: 'Quantity for Cups is required',
              min: { value: 1, message: 'Minimum quantity is 1' },
            })}
          />
          {errors.cupsQuantity && (
            <div className="invalid-feedback">{errors.cupsQuantity.message}</div>
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
        <div className="add-button">
          <button type="submit" className="add-btn btn btn-dark mt-3">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddEvent;
