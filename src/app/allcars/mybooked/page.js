"use client";
import MyLoaderComponent from "@/app/components/MyLoaderComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookedCarsTable = () => {
  // Check if we are in a browser environment before using localStorage
  if (typeof window !== "undefined") {
    // Retrieve booked cars from localStorage
    const bookedCars = JSON.parse(localStorage.getItem("bookedCars")) || [];

    // Create a Set to store unique car IDs
    const uniqueCarIds = new Set();

    // Filter bookedCars to remove duplicates based on car ID
    const filteredCars = bookedCars.filter((car) => {
      if (!uniqueCarIds.has(car.id)) {
        uniqueCarIds.add(car.id);
        return true;
      }
      return false;
    });

    // Check if there are no booked cars
    if (filteredCars.length === 0) {
      return (
        <div className="bg-blue-200 p-4 rounded-lg">
          <h2 className="text-2xl text-blue-800 font-semibold mb-4">
            You did not book any cars yet
          </h2>
          <Link href={"/"}>
            <button className="btn-accent bg-red-500 text-lg md:mt-3 mt-20 w-20 text-white rounded-xl">
              Back
            </button>
          </Link>
        </div>
      );
    }

    return (
      <div className="bg-blue-200 p-4 rounded-lg">
        <h2 className="text-2xl text-blue-800 font-semibold mb-4">
          Your Booked Cars
        </h2>
        <Link href={"/"}>
          <button className="btn-accent bg-red-500 text-lg md:mt-3 mt-20 w-20 text-white rounded-xl">
            Back
          </button>
        </Link>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase tracking-wider">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map((car, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{car.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{car.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-green-700">
                      {car.price}00 &#2547;/day
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {car.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={120}
                      height={120}
                      className="rounded-2xl"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    // Handle the case where localStorage is not available (e.g., in Node.js)
    return (
      <div className="bg-red-200 p-4 rounded-lg h-screen flex items-center justify-center">
        <MyLoaderComponent />
      </div>
    );
  }
};

export default BookedCarsTable;
