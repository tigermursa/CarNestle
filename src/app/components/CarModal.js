import Image from "next/image";
import React from "react";
import { FaClosedCaptioning, FaPhone, FaWindowClose } from "react-icons/fa";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Add a semi-transparent background
  },
  content: {
    zIndex: 1001,
    border: "none", // Remove border
    background: "#fff", // Background color
    maxWidth: "800px", // Set a maximum width
    margin: "auto", // Center the modal
    borderRadius: "8px", // Add border radius
    padding: "0", // Remove padding
    overflow: "hidden", // Hide overflow
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
      <div className="modal-content p-4">
        <button
          className="close-modal bg-blue-600 hover:bg-red-700 text-white p-2 rounded-md flex absolute top-4 right-4"
          onClick={closeModal}
        >
          <FaWindowClose />
        </button>
        <div className="modal-header">
          <h2 className="text-4xl font-bold font-mono mb-3">{car.name}</h2>
          <h3>
            <strong>Location:</strong> {car.location}
          </h3>
        </div>
        <div className="modal-body">
          <div className="flex justify-center items-center">
            <Image
              className="mx-auto"
              src={car.image}
              alt={car.name}
              width={500}
              height={500}
              loading="lazy"
            />
          </div>

          <div className="flex justify-between items-center gap-5 mt-4 ms-4">
            <div className="text-justify w-1/2 hidden md:block">
              <h1 className="font-bold">Description:</h1>
              <p>{car.dis}</p>
            </div>
            <div className="car-info text-start md:w-1/2 w-full">
              <ul>
                <li>
                  <strong>Type:</strong> {car.type}
                </li>
                <li>
                  <strong>Location:</strong> {car.location}
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
                <li>
                  <strong>Price per day:</strong>{" "}
                  <span className="text-green-900 font-semibold">
                    {car.price}00 &#2547; /day
                  </span>
                </li>
                <li className="btn btn-accent btn-lg text-xl md:mt-3 mt-20 w-auto">
                  {car.phone} <FaPhone className=" ms-4" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CarModal;
