import React from "react"
import { FaDumbbell, FaSketch, FaFireAlt } from "react-icons/fa"
export default [
  {
    id: 1,
    link: "/",
    icon: <FaDumbbell className="service-icon" />,
    title: "One Month Of Coaching",
    price: "200",
    text: `We'll work closely together through video calls and text messaging and through personalized and science-based structured programming, implement healthy habits to build your dream physique.`,
  },
  {
    id: 2,
    link: "/",
    icon: <FaFireAlt className="service-icon" />,
    title: "3-Month Discount Package",
    price: "500",
    text: `Three full months of online coaching under me as my personal client!`,
  },
  {
    id: 3,
    link: "/",
    icon: <FaSketch className="service-icon" />,
    title: "6-Month Discount Package",
    price: "800",
    text: `Six full months of online coaching under me as my personal client!`,
  },
]
