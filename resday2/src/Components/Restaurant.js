import React from "react";
import { useState } from "react";
import Menus from "./Menus";
import DisplayItems from "./DisplayItems";
import "./Restaurant.css";
import Navbar from "./Navbar";

function Restaurant() {
  const [items] = useState(Menus);
  const [category, setCategory] = useState("All");
  //FOR UNIQUE ELEMENT
  const uniqueTitle = [
    ...new Set(
      items.map((item) => {
        return item.category;
      })
    ),
  ];
  //console.log(uniqueTitle);
  const [menus] = useState(uniqueTitle);
  const click = (category) => {
    setCategory(category);
  };
  //console.log(category);
  return (
    <>
      <Navbar click={click} menus={menus} />

      <DisplayItems
        items={items.filter((item) => {
          if (category === "All") {
            return category;
          }
          return item.category === category;
        })}
      />
    </>
  );
}

export default Restaurant;
