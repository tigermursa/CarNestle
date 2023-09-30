import Image from "next/image";
import React from "react";
import { FaPhone, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const CarList = ({ selectedLocation, cars, openModal }) => {
  // Filter cars based on the selected location
  const filteredCars = cars.filter(
    (car) => car.location.toLowerCase() === selectedLocation.toLowerCase()
  );

  const copyPhoneNumber = (phoneNumber) => {

    
    navigator.clipboard.writeText(phoneNumber);

    // Use SweetAlert2 for notification
    Swal.fire({
      position: "top-center",
      text: "Phone number copied to clipboard",
      timer: 2000, // You can adjust the duration of the notification
      toast: true,
      showConfirmButton: false,
      background: "green", // Background color of the notification
      color: "white",
      customClass: {
        popup: "your-custom-popup-class", // Add custom styling here
      },
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredCars.map((car) => (
        <div
          key={car.id}
          className="max-w-full mx-auto sm:mx-0 border p-3 flex flex-col justify-between"
        >
          <div>
            <div className="relative h-48">
              <Image
                src={car.image}
                layout="fill"
                objectFit="cover"
                alt="Car Image"
              />
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-[13px] text-secondary uppercase">
                  {car.type}
                </div>
                <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                <div className="mb-10 text-accent font-semibold uppercase">
                  {car.price}00 &#2547; /day
                </div>
              </div>
              {/* stars */}
              <div className="flex gap-x-2 text-accent h-max">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          {/* car info */}
          <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
            {car.info.map((item, index) => (
              <div key={index}>
                <div className="bg-primary w-12 h-12 rounded-full flex justify-center mb-2">
                  <Image src={item.icon} width={24} height={24} alt="" />
                </div>
                <div className="text-[12px]">{item.text}</div>
              </div>
            ))}
          </div>
          <button
            className="btn btn-accent btn-lg text-2xl"
            onClick={() => copyPhoneNumber(car.phone)}
          >
            {car.phone} <FaPhone className="ms-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CarList;
