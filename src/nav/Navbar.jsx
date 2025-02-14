import { useState } from "react";
import logo from "../assets/logo.png";
import viteLogo from "/vite.svg";
import "../App.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Courses", href: "#", current: false },
    { name: "Teachers", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];

  const login = [
    { name: "Login", href: "#", current: true },
    { name: "Sign up", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav">
      <div className="flex items-center w-full h-16 border-b-2 border-b-gray-100 py-9 sm:px-6 lg:px-8 ">
        <div className="relative flex  mx-2 w-full ">
          <div className="absolute inset-y-0  flex  items-center w-1/2 justify-start  lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex  items-center w-full flex-1 ">
            <div className="w-full flex lg:justify-start justify-end ">
              <img
                alt="Your Company"
                src={`${logo}`}
                className="h-14 w-auto ml-40 lg:ml-0"
              />
            </div>
          </div>
          <div className="flex justify-end  lg:flex-1">
            <div className="lg:flex hidden justify-center items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "relative  text-black before:border-2 before:absolute before:left-5 before:top-1 before:w-20 "
                      : "text-black relative hover:before:border-2 before:absolute  before:left-4 nth-[3]:before:left-5 nth-[4]:before:left-6 hover:before:translate-y-1 before:transition before:duration-300 ease-in-out hover:before:w-20 hover:before:top-1 ",
                    "rounded-md nth-[1]:px-5 px-8 py-5 mx-2 text-medium font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="lg:flex hidden  justify-center items-center">
              {login.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? " text-black hover:bg-gray-700 hover:text-white hover:transition hover:duration-500 hover:ease-in-out"
                      : "bg-orange-400 text-white  ",
                    "rounded-md px-4 items-center flex h-15  text-medium font-medium mx-1"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium "
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}

          {login.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current ? "" : "",
                "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
