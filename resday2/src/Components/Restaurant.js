import React from "react";
import { useState } from "react";
import Menus from "./Menus";
import DisplayItems from "./DisplayItems";
import "./Restaurant.css";
import Navbar from "./Navbar";

function Restaurant() {
  const [items, setItems] = useState(Menus);
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
    //console.log(category);
    const arr = items.filter((currElement) => {
      return currElement.category === category;
    });
    //console.log(arr);
    setItems(arr);
  };

  return (
    <>
      <Navbar click={click} menus={menus} />
      <DisplayItems items={items} />
    </>
  );
}

export default Restaurant;
