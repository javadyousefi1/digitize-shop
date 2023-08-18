import logo from "../image/website logo.png";
import { Link, withRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { UseCart, UseCartDispatch } from "../provider/cartProvider";
const Header = ({ location ,history }) => {
  const { cart, searchItem } = UseCart();
  const dispatch = UseCartDispatch();
  const changeHandler = (e) => {
    
    if (location.pathname !== "/") {
      console.log('push')
      history.push("/");
      return;
    }

    dispatch({ type: "SEARCH", payload: e.target.value });
  };

  const pageTitle = (pathName) => {
    switch (pathName) {
      case "/":
        return "خانه";

      case "/cart":
        return "سبد خرید";

      case "/category":
        return "دسته بندی";

      case "/product":
        return "محصول";

      case "/login":
        return "ورود / ثبت نام";
      default:
        return "محصول";
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      {/* header lg */}
      <nav className="sticky top-0 z-10 hidden p-3 py-3 mb-4 bg-white shadow-md md:block">
        <div className="container items-center justify-between hidden mx-auto md:px-4 md:flex max-w-screen-2xl xl:px-5">
          <ul className="flex justify-between font-bold text-md text-slate-800 gap-x-5">
            <li>
              <img src={logo} alt="" width="100" />
            </li>
            <li>
              <Link
                to={{
                  pathname: "/",
                }}
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/category",
                }}
              >
                دسته بندی
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/contactUs",
                }}
              >
                تماس با ما
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-between max-w-lg searchBox lg:w-[480px] ">
            <Link
              to={{
                pathname: "/login",
              }}
            >
              <div>
                <div className="flex items-center ml-2 ">
                  <div className="mt-1 text-gray-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg "
                      className="w-6 h-6 "
                      fill="none "
                      viewBox="0 0 24 24 "
                      stroke="currentColor "
                      strokeWidth="2 "
                    >
                      <path
                        strokeLinecap="round "
                        strokeLinejoin="round "
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1 "
                      />
                    </svg>
                  </div>
                  <div className="mr-1 text-gray-600 ">ورود</div>
                </div>
              </div>
            </Link>

            <Link to={{ pathname: "/cart" }}>
              <div>
                <div className="relative flex items-center justify-center w-8 h-8 bg-white rounded-md shadow-md">
                  <div className="absolute right-0 flex items-center justify-center w-4 h-4 text-white bg-orange-500 rounded-full -top-1">
                    <span className="text-xs text-white cart-count">
                      {cart.length && cart.length}
                    </span>
                  </div>
                  <span className="text-gray-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg "
                      className="w-6 "
                      fill="none "
                      viewBox="0 0 24 24 "
                      stroke="currentColor "
                      strokeWidth="2 "
                    >
                      <path
                        strokeLinecap="round "
                        strokeLinejoin="round "
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z "
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            <div className="flex items-center w-[74%] h-10 bg-gray-100 rounded-lg search text-gray-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg "
                className="w-6 h-6 mx-3 "
                fill="none "
                viewBox="0 0 24 24 "
                stroke="currentColor "
                strokeWidth="2 "
              >
                <path
                  strokeLinecap="round "
                  strokeLinejoin="round "
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z "
                />
              </svg>
              <input
                onChange={(e) => changeHandler(e)}
                type="text "
                value={searchItem}
                className="w-full bg-transparent outline-none text-slate-800 searchInput"
                placeholder="نام محصول... "
              />
            </div>
          </div>
        </div>
      </nav>

      {/* navigation */}
      <div>
        <div className="fixed bottom-0 left-0 right-0 z-10 w-full py-3 bg-white shadow-md rounded-tl-md rounded-tr-md md:hidden">
          <nav x-data="{bottomNavigator : 1} ">
            <ul className="flex justify-between px-4 ">
              <Link to={{ pathname: "/" }}>
                <li className="flex p-2 gap-x-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    className="h-7 w-7 "
                    fill="none "
                    viewBox="0 0 24 24 "
                    stroke="currentColor "
                    strokeWidth="2 "
                  >
                    <path
                      strokeLinecap="round "
                      strokeLinejoin="round "
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1
                      0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6 "
                    ></path>
                  </svg>

                  <span
                    className={location.pathname === "/" ? "block" : "hidden"}
                  >
                    خانه
                  </span>
                </li>
              </Link>

              <Link
                to={{
                  pathname: "/category",
                }}
              >
                <li className="flex p-2 gap-x-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    className="h-7 w-7 "
                    fill="none "
                    viewBox="0 0 24 24 "
                    stroke="currentColor "
                    strokeWidth="2 "
                  >
                    <path
                      strokeLinecap="round "
                      strokeLinejoin="round "
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2
                    2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z "
                    ></path>
                  </svg>
                  <span
                    className={
                      location.pathname === "/category" ? "block" : "hidden"
                    }
                  >
                    دسته بندی
                  </span>
                </li>
              </Link>

              <Link to={{ pathname: "/cart" }}>
                <li className="flex p-2 gap-x-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    className="h-7 w-7 "
                    fill="none "
                    viewBox="0 0 24 24 "
                    stroke="currentColor "
                    strokeWidth="2 "
                  >
                    <path
                      strokeLinecap="round "
                      strokeLinejoin="round "
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5
                    9z "
                    ></path>
                  </svg>
                  <span
                    className={
                      location.pathname === "/cart" ? "block" : "hidden"
                    }
                  >
                    سبد خرید
                  </span>
                </li>
              </Link>
              <Link
                to={{
                  pathname: "/login",
                }}
              >
                <li className="flex p-2 gap-x-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg "
                    className="h-7 w-7 "
                    fill="none "
                    viewBox="0 0 24 24 "
                    stroke="currentColor "
                    strokeWidth="2 "
                  >
                    <path
                      strokeLinecap="round "
                      strokeLinejoin="round "
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3
                    3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1 "
                    ></path>
                  </svg>
                  <span
                    className={
                      location.pathname === "/login" ? "block" : "hidden"
                    }
                  >
                    ورود
                  </span>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      {/* app bar */}
      <div className="flex items-center justify-between px-3 mt-6 md:hidden">
        <div className="logo">
          <img src={logo} alt="website logo" className="w-14" />
        </div>
        <div className="font-medium text-center title text-slate-800">
          {pageTitle(location.pathname)}
        </div>
        <Link
          to={{
            pathname: "/cart",
          }}
        >
          <div>
            <div className="relative flex items-center justify-center w-8 h-8 bg-white rounded-md shadow-md">
              <div className="absolute right-0 flex items-center justify-center w-4 h-4 text-white bg-orange-500 rounded-full -top-1">
                <span className="text-xs text-white cart-count">
                  {cart.length && cart.length}
                </span>
              </div>
              <span className="text-black md:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default withRouter(Header);
