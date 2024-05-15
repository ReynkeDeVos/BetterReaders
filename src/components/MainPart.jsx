import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { LiaBookReaderSolid } from "react-icons/lia";
import Contentful from "./Contentful";
import Team from "./Team";
import Landing from "./Landing";
import Footer from "./Footer";

function MainPart() {
  return (
    <div>
      <nav className="bg-gray-600 rounded-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link className="link" to="/Landing">
                  <LiaBookReaderSolid size={40} />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link className="link" to="/Contentful">
                    <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</p>
                  </Link>
                  <Link className="link" to="/Team">
                    <p className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</p>
                  </Link>

                  {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Calendar
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/contentful" element={<Contentful />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={"Page not found 404"} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default MainPart;
