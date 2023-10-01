"use client";
import CarSlider2 from "@/app/components/CarSlider2";
import Footer from "@/app/components/Footer";
import MyLoaderComponent from "@/app/components/MyLoaderComponent";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SingleCar = ({ params }) => {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((fetchedCars) => {
        setCars(fetchedCars);

        // Find the car with the matching ID
        const selectedCar = fetchedCars.find((car) => car.id === params.id);
        setCar(selectedCar);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [params.id]);

  // Function to copy phone number
  const copyPhoneNumber = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber);
    // You can add your notification logic here
  };

  // Function to handle booking confirmation
  const handleBookNow = () => {
    Swal.fire({
      title: `Confirm Booking`,
      text: `Are you sure you want to book this car at ${car.price}00 \u09F3/day?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, book it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Save the booked car information to localStorage
        const bookedCar = {
          id: car.id,
          name: car.name,
          price: car.price,
          location: car.location,
          image: car.image,
        };

        // Retrieve existing booked cars from localStorage (if any)
        const bookedCars = JSON.parse(localStorage.getItem("bookedCars")) || [];

        // Add the newly booked car to the list
        bookedCars.push(bookedCar);

        // Save the updated list back to localStorage
        localStorage.setItem("bookedCars", JSON.stringify(bookedCars));

        setBookingConfirmed(true);
        Swal.fire({
          title: "Booking Confirmed!",
          text: `You have successfully booked the car at ${car.price}00 \u09F3/day.`,
          icon: "success",
        });
      }
    });
  };

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <MyLoaderComponent />
      </div>
    ); // You can add a loading indicator here
  }

  return (
    <div className="bg-white p-4 md:p-8">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="text-4xl font-bold font-mono mb-3">{car.name}</h2>
          <h3>
            <strong>Location:</strong>
            <span className="font-semibold"> {car.location}</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-3">
          <div className="md:w-1/2">
            <Image
              src={car.image}
              alt={car.name}
              width={700}
              height={700}
              loading="lazy"
            />
          </div>
          <div className="text-justify w-full">
            <h1 className="font-bold">Description:</h1>
            <p>
              {car.dis}
              {car.dis}
            </p>
            <Link href={"/"}>
              <button className="btn-accent bg-red-500 text-lg mt-3 w-20 text-white rounded-xl">
                Back
              </button>
            </Link>
          </div>
        </div>
        <div className="modal-body mt-4 md:flex md:justify-between md:items-center gap-5">
          <div className="car-info w-full md:w-1/2">
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
              <button
                className={`btn btn-accent btn-lg text-2xl mt-5 w-1/2 ${
                  bookingConfirmed ? "bg-gray-500" : ""
                }`}
                onClick={bookingConfirmed ? null : handleBookNow}
                disabled={bookingConfirmed}
              >
                {bookingConfirmed ? "Booked" : "Book now"}
              </button>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-black font-bold text-2xl">
              Other Available Cars
            </p>
            <CarSlider2 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleCar;
