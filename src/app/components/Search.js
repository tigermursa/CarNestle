"use client";
import React, { useContext, useState } from "react";
import { SearchContext } from "../context/search";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

const Search = () => {
  const { searchActive } = useContext(SearchContext);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
      type: "Hatchback",
      name: "Ford Focus",
      location: "BANASREE BLOCK A,DHAKA",
      price: 29,
      stars: 3.5,
      image: "images/carSlider/car01.svg",
      info: [
        {
          icon: "icons/carSlider/gearshift.svg",
          text: "Manual",
        },
        {
          icon: "icons/carSlider/seat.svg",
          text: " 5 Seats",
        },
        {
          icon: "icons/carSlider/gas.svg",
          text: "Gas",
        },
        {
          icon: "icons/carSlider/engine.svg",
          text: "1600 HP",
        },
        {
          icon: "icons/carSlider/wheel.svg",
          text: "Front",
        },
      ],
    },
    {
      type: "Sedan",
      name: "Toyota Corolla",
      location: "BANASREE BLOCK B,DHAKA",
      price: 25,
      stars: 5,
      image: "images/carSlider/car02.svg",
      info: [
        {
          icon: "icons/carSlider/gearshift.svg",
          text: "Manual",
        },
        {
          icon: "icons/carSlider/seat.svg",
          text: " 5 Seats",
        },
        {
          icon: "icons/carSlider/gas.svg",
          text: "Gas",
        },
        {
          icon: "icons/carSlider/engine.svg",
          text: "1600 HP",
        },
        {
          icon: "icons/carSlider/wheel.svg",
          text: "Front",
        },
      ],
    },
    {
      type: "SUV",
      name: "Honda CR-V",
      location: "BANASREE BLOCK C,DHAKA",
      price: 35,
      stars: 4.7,
      image: "images/carSlider/car03.svg",
      info: [
        {
          icon: "icons/carSlider/gearshift.svg",
          text: "Automatic",
        },
        {
          icon: "icons/carSlider/seat.svg",
          text: " 5 Seats",
        },
        {
          icon: "icons/carSlider/gas.svg",
          text: "Gas",
        },
        {
          icon: "icons/carSlider/engine.svg",
          text: "1600 HP",
        },
        {
          icon: "icons/carSlider/wheel.svg",
          text: "Front",
        },
      ],
    },
    {
      type: "Convertible",
      name: "Mazda MX-5",
      location: "BANASREE BLOCK D,DHAKA",
      price: 32,
      stars: 4.3,
      image: "images/carSlider/car02.svg",
      info: [
        {
          icon: "icons/carSlider/gearshift.svg",
          text: "Automatic",
        },
        {
          icon: "icons/carSlider/seat.svg",
          text: " 5 Seats",
        },
        {
          icon: "icons/carSlider/gas.svg",
          text: "Gas",
        },
        {
          icon: "icons/carSlider/engine.svg",
          text: "1600 HP",
        },
        {
          icon: "icons/carSlider/wheel.svg",
          text: "Front",
        },
      ],
    },
  ];
  const filteredCars = selectedLocation
    ? cars.filter((car) => car.location === selectedLocation)
    : cars;

  const handleSearch = (car) => {
    setSelectedCar(car);
  };

  return (
    <div
      className={`${
        searchActive
          ? "bg-white rounded-none xl:h-[100px]"
          : "bg-white rounded-[20px] py-6 xl:pr-4  xl:h-[100px]"
      } hidden xl:block w-full relative shadow-lg pt-5`}
    >
      <div className={`flex h-full ${searchActive && "container mx-auto"} `}>
        <LocationSelection onSelectLocation={setSelectedLocation} />
        <DateSelection />
        <HoursSelection />
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            className={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-lg btn-accent xl:w-[184px]"
            }`}
            onClick={() => handleSearch(filteredCars[0])} // Open modal with the first car in the filtered list
          >
            Search
          </button>
        </div>
      </div>

      {selectedCar && (
        <div className="modal">
          <div className="modal-content text-start">
            <button
              className="close-button"
              onClick={() => setSelectedCar(null)}
            >
              <div className="bg-blue-600 p-2 rounded-full text-white">X</div>
            </button>
            <h2 className="font-bold text-2xl">{selectedCar.name}</h2>
            <img src={selectedCar.image} alt={selectedCar.name} />
            <p>Type: {selectedCar.type}</p>
            <p>Location: {selectedCar.location}</p>
            <p className=" font-semibold text-green-600">Price: ${selectedCar.price}</p>
            <p>Stars: {selectedCar.stars}</p>
            <p>Contact Number : +881546688456</p>
            {/* Add more car details here */}
          </div>
        </div>
      )}
      <style>
        {`
          .modal {
            display: ${selectedCar ? "block" : "none"};
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1001;
          }

          .modal-content {
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
          }

          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Search;
