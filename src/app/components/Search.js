"use client";
import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/search";
import { Menu } from "@headlessui/react";
import { useState } from "react";
import { FaMapMarkerAlt, FaWindowClose } from "react-icons/fa";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import CarList from "./CarList";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
const locations = [
  "Banasree Block A,Dhaka",
  "Banasree Block B,Dhaka",
  "Banasree Block C,Dhaka",
];

const Search = () => {
  const [location, setLocation] = useState("Select Location");
  const { searchActive } = useContext(SearchContext);
  const [filteredCars, setFilteredCars] = useState([]); // State to store filtered cars
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((fetchedCars) => {
        setCars(fetchedCars);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSeeDetailsClick = () => {
    if (location === "Select Location") {
      // Show a SweetAlert error message
      Swal.fire({
        icon: "error",
        title: "Please select a location!",
        text: "Select the place you are currently in!",
      });
    } else {
      const selectedLocation =
        location === "select location" ? locations[0] : location;

      const filtered = cars.filter(
        (car) => car.location.toLowerCase() === selectedLocation.toLowerCase()
      );
      setFilteredCars(filtered);

      // Open the modal
      setIsModalOpen(true);
    }
  };
  const closeModal = () => {
    // Closing the modal and clear the filtered cars
    setIsModalOpen(false);
    setFilteredCars([]);
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
         {/* part-location */}
        <Menu as="div" className="w-full h-full flex xl:flex-row">
          <div className="relative flex-1">
            {/* button */}
            <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
              <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
                <div className="flex flex-col justify-center">
                  <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                    <FaMapMarkerAlt className="text-accent" />
                    <div className="text-[15px] uppercase font-bold ">
                      Select Location
                    </div>
                  </div>
                  <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">
                    {location}
                  </div>
                </div>
              </div>
            </Menu.Button>
            {/* items */}
            <Menu.Items className=" dropdown-menu shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-white max-w-[332px] py-6 rounded-[10px] ">
              {locations.map((location, index) => {
                return (
                  <div
                    onClick={() => setLocation(location)}
                    key={index}
                    className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] uppercase"
                  >
                    {location}
                  </div>
                );
              })}
            </Menu.Items>
          </div>
        </Menu>
       
        <DateSelection />
        <HoursSelection />
        {/* button */}
        <div className="xl:h-full flex items-center px-6 xl:px-0">
          <button
            onClick={handleSeeDetailsClick}
            className={`${
              searchActive
                ? "btn btn-sm btn-accent xl:w-[164px]"
                : "btn btn-lg btn-accent xl:w-[184px]"
            }`}
          >
            Search
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <button
              onClick={closeModal}
              className=" text-accent hover:text-accent-dark"
            >
              <button
                className="close-modal bg-blue-600 hover:bg-red-700 text-white p-2 rounded-md absolute right-72  "
                onClick={closeModal}
              >
                <FaWindowClose />
              </button>
            </button>
            <h2 className="text-2xl font-semibold mb-4">Available Cars(4)</h2>
            <CarList selectedLocation={location} cars={filteredCars} />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Search;
