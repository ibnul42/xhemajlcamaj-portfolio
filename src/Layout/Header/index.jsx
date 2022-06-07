/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { PlusSmIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#6366f1" : "black",
      borderBottom: isActive ? "3px solid #6366f1" : null,
    };
  };
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 w-full">
              <div className="flex justify-between w-full">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}
                  <p className="text-2xl font-bold">Xhemajl Camaj</p>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <NavLink
                    style={navLinkStyles}
                    to="/"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-[3px] text-lg font-semibold"
                  >
                    About Me
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/portfolio"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-[3px] text-lg font-semibold"
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/contact"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-[3px] text-lg font-semibold"
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    style={navLinkStyles}
                    to="/resume"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-[3px] text-lg font-semibold"
                  >
                    Resume
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink
                as="a"
                to="/"
                className="focus:bg-indigo-50 focus:border-indigo-500 focus:text-indigo-700 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                About Me
              </NavLink>
              <NavLink
                as="a"
                to="/portfolio"
                className="focus:bg-indigo-50 focus:border-indigo-500 focus:text-indigo-700 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Portfolio
              </NavLink>
              <NavLink
                as="a"
                to="/contact"
                className="focus:bg-indigo-50 focus:border-indigo-500 focus:text-indigo-700 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Contact
              </NavLink>
              <NavLink
                as="a"
                to="/resume"
                className="focus:bg-indigo-50 focus:border-indigo-500 focus:text-indigo-700 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Resume
              </NavLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
