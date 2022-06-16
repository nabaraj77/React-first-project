import React from "react";
import "./DisplayItems.css";

const DisplayItems = (props) => {
  const items = props.items;
  //console.log(items);
  return (
    <>
      <div className="item-wrapper">
        {items.map((currItem, value) => {
          //console.log(currItem);
          return (
            <div className="items" key={value}>
              <div className="id-no">{currItem.id}</div>
              <div className="category"> {currItem.category}</div>
              <h1 className="item-name">{currItem.itemName}</h1>
              <h5 className="read">READ</h5>
              <div className="item-description">{currItem.itemDescription}</div>
              <div>
                <img
                  className="item-image"
                  src={currItem.itemImage}
                  alt={currItem.itemName}
                />
              </div>
              <button className="order-btn">Order</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default DisplayItems;
