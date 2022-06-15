import React from "react";

const Navbar = ({ click, menus }) => {
  console.log(menus);
  return (
    <>
      <div className="navbar">
        <div className="title">
          <ul>
            {menus.map((menu, value) => {
              return (
                <>
                  <li key={value} onClick={() => click(menu)}>
                    {menu}
                  </li>
                </>
              );
            })}
            <li>All</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
