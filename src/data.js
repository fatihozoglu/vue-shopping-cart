import airGreen from "./assets/air-zoom-green.jpeg";
import airBlue from "./assets/air-zoom-blue.jpeg";
import airBlack from "./assets/air-zoom-black.jpeg";
import revolRed from "./assets/revol-red.jpeg";
import revolBlack from "./assets/revol-black.jpeg";
import alphaflyBlue from "./assets/alphafly-blue.jpeg";
import alphaflyGreen from "./assets/alphafly-green.jpeg";
import visionGrey from "./assets/vision-grey.jpeg";
import visionPurple from "./assets/vision-purple.jpeg"
import infinityPink from "./assets/infinity-pink.jpeg";
import infinityBlue from "./assets/infinity-blue.jpeg";
import infinityBlack from "./assets/infinity-black.jpeg"
import airforceBrown from "./assets/air-force-brown.jpeg";
import airforceBlue from "./assets/air-force-blue.jpeg";

export default [
  {
    id: 1,
    photos: [
      { color: "Lightseagreen", photo: alphaflyBlue },
      { color: "Green", photo: alphaflyGreen },
    ],
    category: "Women Sports Shoe",
    title: "Nike Epic React Flyknit Sky Pink",
    summary: "Best for running and having fun in the nature",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    price: 100,
    rating: 4,
  },
  {
    id: 2,
    photos: [
      { color: "Green", photo: airGreen },
      { color: "Darkblue", photo: airBlue },
      { color: "Black", photo: airBlack },
    ],
    category: "Men Sports Shoe",
    title: "Nike Air Zoom Rival Fly 3",
    summary: "Take your first steps into speed with the Nike Air Zoom Rival Fly 3.",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    price: 100,
    rating: 2,
  },
  {
    id: 3,
    photos: [
      { color: "Red", photo: revolRed },
      { color: "Black", photo: revolBlack },
    ],
    category: "Men Sports Shoe",
    title: "Nike Revolution 6 Next Nature",
    summary: "Here's to new beginnings between you and the tarmac.",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    price: 100,
    rating: 3,
  },
  {
    id: 4,
    photos: [
      { color: "Purple", photo: visionPurple },
      { color: "Grey", photo: visionGrey },
    ],
    category: "Custom Women's Lifestyle Shoe",
    title: "Nike React Vision By You",
    summary: "Inspired by the mythical creatures of Mexican folk art.",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    price: 100,
    rating: 1,
  },
  {
    id: 5,
    photos: [
      { color: "Pink", photo: infinityPink },
      { color: "Blue", photo: infinityBlue },
      { color: "Black", photo: infinityBlack },
    ],
    category: "Women's Road Running Shoes",
    title: "Nike React Infinity By You",
    summary: "The Nike React Infinity Run Flyknit 2 By You continues to help keep you running.",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    price: 100,
    rating: 5,
  },
  {
    id: 6,
    photos: [
      { color: "Brown", photo: airforceBrown },
      { color: "Blue", photo: airforceBlue },
    ],
    category: "Custom Men's Shoe",
    title: "Nike Air Force 1 Low",
    summary: "In 1971, the legend of the Swoosh was born...",
    sizes: [36, 37, 38, 39, 40, 41, 42],
    price: 100,
    rating: 4,
  },
];
