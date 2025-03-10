import React from "react";
import HeroSection from "./HeroSection";
import DonorsList from "./DonorsList";

const people = [
  {
    name: "Leslie Alexander",
    age: "25",
    city: "London",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bloodgroup: "O+",
  },

  {
    name: "Leslie Alexander",
    age: "25",
    city: "London",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bloodgroup: "O+",
  },

  {
    name: "Leslie Alexander",
    age: "25",
    city: "London",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bloodgroup: "O+",
  },

  {
    name: "Leslie Alexander",
    age: "25",
    city: "London",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bloodgroup: "O+",
  },

  {
    name: "Leslie Alexander",
    age: "25",
    city: "London",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bloodgroup: "O+",
  },
];

const Donors = () => (
  <>
    <HeroSection />
    <DonorsList people={people} />
  </>
);

export default Donors;
