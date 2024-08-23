import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

interface SocialIconsProps {
  Element: React.ElementType;
  Size?: string;
  ClassParams?: string;
  InsideValue?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  Element,
  ClassParams,
  InsideValue,
  Size,
}) => {
  const [hoverState, setHoverState] = useState(false);
  const handleMouseEnter: React.MouseEventHandler<HTMLElement> = () => {
    setHoverState(true);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = () => {
    setHoverState(false);
  };

  return (
    <Element
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={ClassParams}
      size={Size}
      style={{
        color: hoverState ? "#cba6f7" : "#cdd6f4",
        transition: "color .25s ease",
      }}
    >
      <h1 className="font-Montserrat">{InsideValue}</h1>
    </Element>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#181825] border-b border-b-[#eba0ac] h-24">
      <div className="mx-auto max-w-2xl">
        <header className="flex flex-row place-content-between items-center px-5 py-12 h-20">
          <Link to={"/"}>
            <SocialIcons
              Element="h1"
              ClassParams="w-full text-3xl font-bold font-mono"
              InsideValue="Kaelem Deng"
            />
          </Link>
          <div className="mx-[4.5rem]"></div>
          <ul className="hidden md:flex">
            <li className="p-4">
              <a
                href="https://github.com/kaedeng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcons Element={FaGithub} Size="30" />
              </a>
            </li>
            <li className="p-4">
              <a
                href="https://www.linkedin.com/in/kaelem-deng-735a96265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcons Element={FaLinkedin} Size="30" />
              </a>
            </li>
            <li className="p-4">
              <a
                href="mailto:dengkaelem@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcons Element={IoMdMail} Size="30" />
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-between space-y-16 pr-5 md:hidden relative">
            <FaBars className="text-[#cdd6f4]" size={30} onClick={handleNav} />
            <div
              className={
                !nav
                  ? "absolute border border-t-0 border-[#eba0ac] bg-[#1e1e2e] rounded-b-xl"
                  : "fixed left-[-100%]"
              }
            >
              <ul className="top-0">
                <li className="p-4">
                  <a
                    href="https://github.com/kaedeng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcons Element={FaGithub} Size="30" />
                  </a>
                </li>
                <li className="p-4">
                  <a
                    href="https://www.linkedin.com/in/kaelem-deng-735a96265/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcons Element={FaLinkedin} Size="30" />
                  </a>
                </li>
                <li className="p-4">
                  <a
                    href="mailto:dengkaelem@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcons Element={IoMdMail} Size="30" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
