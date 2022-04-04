import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <hr />
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="/logo.png" width="40px" />
              <span className="ml-3 text-xl">ClothesWear</span>
            </a>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-wider mb-3 text-lg">
              Products
            </h2>
            <nav className="list-none mb-10 font-normal">
              <li>
                <Link href={"/tshirts"}>
                  <a className="text-gray-600 hover:text-red-600">Tshirts</a>
                </Link>
              </li>
              <li>
                <Link href={"/hoodies"}>
                  <a className="text-gray-600 hover:text-red-600">Hoodies</a>
                </Link>
              </li>
              <li>
                <Link href={"/stickers"}>
                  <a className="text-gray-600 hover:text-red-600">Stickers</a>
                </Link>
              </li>
              <li>
                <Link href={"/mugs"}>
                  <a className="text-gray-600 hover:text-red-600">Mugs</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-wider mb-3 text-lg">
              About us
            </h2>
            <nav className="list-none mb-10 font-normal">
              <li>
                <Link href={"/"}>
                  <a className="text-gray-600 hover:text-red-600">
                    About clothesWear
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="text-gray-600 hover:text-red-600">Contact us</a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="text-gray-600 hover:text-red-600">Features</a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="text-gray-600 hover:text-red-600">Careers</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-wider mb-3 text-lg">
              Resources
            </h2>
            <nav className="list-none mb-10 font-normal">
              <li>
                <Link href={"/"}>
                  <a className="text-gray-600 hover:text-red-600">
                    Help center
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="text-gray-600 hover:text-red-600">
                    Book a demo
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="text-gray-600 hover:text-red-600">
                    Server status
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="text-gray-600 hover:text-red-600">Blog</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-wider mb-3 text-lg">
              Get in touch
            </h2>
            <nav className="list-none mb-10 font-normal">
              <li>
                <a className="text-gray-600">
                  Questions or feedback? <br /> We'd love to hear from you
                </a>
              </li>
              <li className="mt-4">
                <div className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
                  <a className="text-gray-500 hover:text-orange-600 cursor-pointer">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 hover:text-orange-600 cursor-pointer">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 hover:text-orange-600 cursor-pointer">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                </div>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 ClothesWear —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              All rights reserved
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
