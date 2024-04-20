import Link from "next/link";
import React from "react";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  {
    title: "Policy",
    href: "/policy",
  },
];

const Navigation = ({ activeItem }: Props) => {
return (
    <div className="block md:flex">
    {navItems.map((item, index) => (
        <Link key={item.title} href={item.href}>
        <h5
            className={`flex flex-col md:px-10 xl:px-12 py-5 md:py-0 text-[18px] font-[500] font-Inter ${
            activeItem === index && "text-[#6dff4b]"
            }`}
        >
            {item.title}
        </h5>
        </Link>
    ))}
    </div>
);
};

export default Navigation;
