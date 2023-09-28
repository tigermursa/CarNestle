import React from "react";
import Modal from "react-modal";


const customStyles = {
  overlay: {
    zIndex: 1000,
  },
  content: {
    zIndex: 1001,
  },
};
const CarModal = ({ car, isOpen, closeModal }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Car Details Modal"
    >
      <div className="modal-content">
        <button className="close-modal bg-blue-600 text-white p-2 rounded-md flex " onClick={closeModal}>
          Close 
        </button>
        <div className="modal-header">
          <h2 className="text-3xl font-bold mt-3">{car.name}</h2>
        </div>
        <div className="modal-body">
          <img
            className="w-2/3 flex justify-center items-center mx-auto"
            src={car.image}
            alt={car.name}
          />
          <p className="text-justify">{car.dis}</p>
          <div className="car-info text-start mt-4">
            <ul>
              <li>
                <strong>Type:</strong> {car.type}
              </li>
              <li>
                <strong>Location:</strong> {car.location}
              </li>
              <li>
                <strong>Price per day:</strong> ${car.price}
              </li>
              <li>
                <strong>Transmission:</strong> {car.info[0].text}
              </li>
              <li>
                <strong>Seats:</strong> {car.info[1].text}
              </li>
              <li>
                <strong>Fuel Type:</strong> {car.info[2].text}
              </li>
              <li>
                <strong>Engine Power:</strong> {car.info[3].text}
              </li>
              <li>
                <strong>Wheel Type:</strong> {car.info[4].text}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CarModal;
