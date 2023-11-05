import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoSzoveg } from "../assets";
import styles from "../style";
const Navbar = () => {
  const links = [
    {
      name: "Tápérték",
      link: "/nutrition",
    },
    {
      name: "Kép Tápérték",
      link: "/imagenutrition",
    },
    {
      name: "Recept",
      link: "/recipe",
    },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${styles.flexCenter} ${styles.paddingX} `}>
      <nav className="flex items-center justify-between w-full navbar">
        <Link to="/">
          <img src={logoSzoveg} alt="logó" className="w-[124px] mt-2" />
        </Link>
        <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
          {links.map((link, index) => (
            <li
              key={index}
              className={`${index === link.length - 1 ? "mr-0" : "mr-8"}`}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end mr-8 flex-1 sm:hidden z-[2]">
          {toggle ? (
            <HamburgerMenuIcon
              height={32}
              width={32}
              onClick={() => setToggle((prev) => !prev)}
            />
          ) : (
            <Cross1Icon
              height={32}
              width={32}
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
        </div>

        <ul
          className={`${
            toggle ? "hidden" : "flex"
          } sm:hidden flex-col items-center mx-auto list-none absolute top-32 left-0 right-0 w-screen bg-white z-[1] `}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className={`${index === link.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => setToggle((prev) => !prev)}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
