import Link from "next/link";
import { useEffect, useState } from "react";
import MenuItems from "../../libs/MenuItems";
import SwapTheme from "../Theme/SwapTheme";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHideFrom = 50;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {isVisible ? (
        <nav className="fixed navbar bg-base-100 pt-5 z-30 px-5 items-center shadow-xl bg-opacity-95 backdrop-filter backdrop-blur-lg">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">ICT Combiner</a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal p-0">
              <li className="space-x-5">
                {MenuItems.map((item, index) => {
                  return (
                    <Link href={item.url} key={index} exac>
                      <a
                        className="transition ease-in-out delay-100 hover:text-primary"
                        target={item.target}
                      >
                        {item.label}
                      </a>
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>
          <div className="ml-4">
            <SwapTheme colorFill="text-base" />
          </div>
          <div className="lg:hidden block ml-4">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="space-y-3">
                  {MenuItems.map((item, index) => {
                    return (
                      <Link href={item.url} key={index} exac>
                        <a
                          className="transition ease-in-out delay-100 hover:text-success"
                          target={item.target}
                        >
                          {item.label}
                        </a>
                      </Link>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="fixed z-30 items-center pt-5 navbar text-white px-5">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">ICT Combiner</a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal p-0">
              <li className="space-x-5">
                {MenuItems.map((item, index) => {
                  return (
                    <Link href={item.url} key={index} exac>
                      <a
                        className="transition ease-in-out delay-100 hover:text-primary"
                        target={item.target}
                      >
                        {item.label}
                      </a>
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>
          <div className="ml-4">
            <SwapTheme colorFill="text-base" />
          </div>
          <div className="lg:hidden block ml-4">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="space-y-3">
                  {MenuItems.map((item, index) => {
                    return (
                      <Link href={item.url} key={index} exac>
                        <a
                          className="transition ease-in-out delay-100 hover:text-success"
                          target={item.target}
                        >
                          {item.label}
                        </a>
                      </Link>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
