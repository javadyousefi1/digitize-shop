import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseCartDispatch, UseCart } from "../provider/cartProvider";

const Product = ({ location }) => {
  const [color, setColor] = useState({ red: false, blue: false, green: false });
  const [inCart, setInCart] = useState(false);
  const dispatch = UseCartDispatch();
  
  useEffect(() => {
    // dispatch({type: "LS"})
    checkInCart();
    
  }, []);
  
  
  const { cart } = UseCart();
  
  const addToCartHandler = () => {
    if (color.red || color.green || color.blue) {
      toast.success("به سبد خرید افزوده شد !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("لطفا رنگ مورد نظر خود را انتخاب کنید", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const keys = Object.keys(color);

    let selectedColor = keys.filter((key) => {
      return color[key];
    });

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...location.state, selectedColor: selectedColor[0] },
    });
    checkInCart();
    setInCart(true);
  };

  const checkInCart = () => {
    const checkCart =cart.findIndex((item) => item.id === location.state.id) || [];
    if (checkCart < 0) {
      setInCart(false);
    } else {
      setInCart(true);
    }
  };



  return (
    <>
      <div className="grid grid-cols-12 grid-rows-[500px_minmax(500px_1fr)] md:gap-x-7 md:gap-y-4 max-w-screen-2xl md:px-4 container xl:px-5 ">
        <div className="sticky hidden col-span-3 row-span-2 md:px-2 md:block xl:col-span-2 top-10">
          <div className="p-4 bg-white rounded-lg">
            <div className="p-2 my-2 font-bold text-orange-600">دسته بندی</div>
            <ul className="pt-0 mb-1 text-slate-800">
              <li className="flex mt-2 mb-4">
                <svg
                  className="w-7 h-7"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.5"
                    cy="9.5"
                    r="9.5"
                    fill="#AFAFAF"
                    fillOpacity="0.29"
                  />
                  <path
                    d="M5.66646 18.6668H10.3331C11.8865 18.6668 12.6665 17.8868 12.6665 16.3335V11.6668C12.6665 10.1135 11.8865 9.3335 10.3331 9.3335H5.66646C4.11313 9.3335 3.33313 10.1135 3.33313 11.6668V16.3335C3.33313 17.8868 4.11313 18.6668 5.66646 18.6668Z"
                    stroke="#222F5D"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6665 7.3335H5.33313"
                    stroke="#222F5D"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6665 20.6665H5.33313"
                    stroke="#222F5D"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.66687 12.3335V14.3335H9.66687"
                    stroke="#222F5D"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="mr-2">ساعت هوشمند</span>
              </li>

              <li className="flex mt-2 mb-4">
                <svg
                  className="w-7 h-7"
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 12.75V20.25C13 23.25 12.25 24 9.25 24H4.75C1.75 24 1 23.25 1 20.25V12.75C1 9.75 1.75 9 4.75 9H9.25C12.25 9 13 9.75 13 12.75Z"
                    stroke="#222F5D"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 11.625H5.5"
                    stroke="#222F5D"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.99984 21.825C7.64187 21.825 8.16234 21.3045 8.16234 20.6625C8.16234 20.0205 7.64187 19.5 6.99984 19.5C6.35781 19.5 5.83734 20.0205 5.83734 20.6625C5.83734 21.3045 6.35781 21.825 6.99984 21.825Z"
                    stroke="#222F5D"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="10.5"
                    cy="9.5"
                    r="9.5"
                    fill="#AFAFAF"
                    fillOpacity="0.29"
                  />
                </svg>

                <span className="mr-2">تلفن همراه</span>
              </li>

              <li className="flex mt-2">
                <svg
                  className="w-7 h-7"
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.5"
                    cy="9.5"
                    r="9.5"
                    fill="#AFAFAF"
                    fillOpacity="0.29"
                  />
                  <path
                    d="M4.29331 8.3335H11.7C14.0733 8.3335 14.6666 8.92683 14.6666 11.2935V15.5135C14.6666 17.8868 14.0733 18.4735 11.7066 18.4735H4.29331C1.92665 18.4802 1.33331 17.8868 1.33331 15.5202V11.2935C1.33331 8.92683 1.92665 8.3335 4.29331 8.3335Z"
                    stroke="#222F5D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 18.48V21.6666"
                    stroke="#222F5D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.33331 15.6665H14.6666"
                    stroke="#222F5D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 21.6665H11"
                    stroke="#222F5D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="mr-2">لپ تاپ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-h-[55px] items-center hidden col-span-9 px-4 text-gray-400 bg-white rounded-lg xl:col-span-10 md:px-2 md:flex gap-x-7 ">
          <div className="flex px-3 py-4">
            <span className="text-orange-600 text-md">خانه</span>
            <span className="m-2 text-slate-800">
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="CurrentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.944605 4.20001L0.950718 4.19373L0.956607 4.18725C1.32573 3.78078 2.02428 3.21446 2.78795 2.68511C3.55136 2.15595 4.3254 1.70144 4.83012 1.49807L4.83016 1.49817L4.83934 1.49425C4.9071 1.46536 5.04003 1.41502 5.18119 1.3714C5.32581 1.32672 5.43223 1.304 5.48132 1.2999C5.61125 1.30172 5.73419 1.33117 5.85588 1.39173C6.003 1.4793 6.12099 1.61405 6.18635 1.76875C6.20654 1.82465 6.24286 1.96706 6.2795 2.13162C6.29674 2.20908 6.31191 2.28146 6.32269 2.33467C6.32679 2.3549 6.33016 2.37191 6.33272 2.38505L6.33888 2.41907C6.43995 2.97739 6.5 3.92131 6.5 4.9942C6.5 5.9933 6.44261 6.893 6.36023 7.47421C6.35734 7.48646 6.3548 7.4984 6.35289 7.50753C6.34799 7.53103 6.34185 7.56245 6.33547 7.59507L6.33512 7.59688L6.33508 7.59707C6.3215 7.66652 6.30404 7.75588 6.28346 7.85134C6.26272 7.94755 6.23997 8.04456 6.2166 8.12825C6.20496 8.16994 6.19405 8.20513 6.18419 8.23328C6.17932 8.24718 6.17515 8.25811 6.17176 8.26634L6.16778 8.27562C6.16701 8.27731 6.16655 8.27826 6.16641 8.27855C6.1664 8.27855 6.1664 8.27856 6.1664 8.27857C6.02897 8.54694 5.76907 8.69981 5.50794 8.69981H5.48063C5.45851 8.69813 5.40766 8.69019 5.32578 8.66857C5.24294 8.64671 5.15072 8.61694 5.06198 8.58535C5.02814 8.5733 4.9956 8.56128 4.9652 8.54971L4.73986 8.4536C4.25814 8.24812 3.50692 7.8079 2.7622 7.29375C2.01557 6.77828 1.32584 6.2231 0.948006 5.80297L0.940361 5.79447L0.932428 5.78642L0.932424 5.78641L0.932391 5.78638L0.932366 5.78635L0.932336 5.78632L0.932191 5.78617L0.930758 5.78472L0.924312 5.77811L0.89904 5.75191C0.87732 5.72922 0.847428 5.69759 0.81482 5.66193C0.743684 5.58413 0.680493 5.50967 0.650976 5.46665L0.645463 5.45861L0.639642 5.4508C0.550658 5.33135 0.5 5.17339 0.5 5.0047C0.5 4.81956 0.55263 4.65736 0.644446 4.52729C0.665497 4.50433 0.691697 4.47506 0.717762 4.44593C0.731054 4.43107 0.744311 4.41626 0.756832 4.40234C0.815459 4.33717 0.882201 4.26406 0.944605 4.20001Z"
                  stroke="#222F5D"
                ></path>
              </svg>
            </span>
            <span className="text-orange-600 text-md">دسته بندی</span>
            <span className="m-2 text-slate-800">
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="CurrentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.944605 4.20001L0.950718 4.19373L0.956607 4.18725C1.32573 3.78078 2.02428 3.21446 2.78795 2.68511C3.55136 2.15595 4.3254 1.70144 4.83012 1.49807L4.83016 1.49817L4.83934 1.49425C4.9071 1.46536 5.04003 1.41502 5.18119 1.3714C5.32581 1.32672 5.43223 1.304 5.48132 1.2999C5.61125 1.30172 5.73419 1.33117 5.85588 1.39173C6.003 1.4793 6.12099 1.61405 6.18635 1.76875C6.20654 1.82465 6.24286 1.96706 6.2795 2.13162C6.29674 2.20908 6.31191 2.28146 6.32269 2.33467C6.32679 2.3549 6.33016 2.37191 6.33272 2.38505L6.33888 2.41907C6.43995 2.97739 6.5 3.92131 6.5 4.9942C6.5 5.9933 6.44261 6.893 6.36023 7.47421C6.35734 7.48646 6.3548 7.4984 6.35289 7.50753C6.34799 7.53103 6.34185 7.56245 6.33547 7.59507L6.33512 7.59688L6.33508 7.59707C6.3215 7.66652 6.30404 7.75588 6.28346 7.85134C6.26272 7.94755 6.23997 8.04456 6.2166 8.12825C6.20496 8.16994 6.19405 8.20513 6.18419 8.23328C6.17932 8.24718 6.17515 8.25811 6.17176 8.26634L6.16778 8.27562C6.16701 8.27731 6.16655 8.27826 6.16641 8.27855C6.1664 8.27855 6.1664 8.27856 6.1664 8.27857C6.02897 8.54694 5.76907 8.69981 5.50794 8.69981H5.48063C5.45851 8.69813 5.40766 8.69019 5.32578 8.66857C5.24294 8.64671 5.15072 8.61694 5.06198 8.58535C5.02814 8.5733 4.9956 8.56128 4.9652 8.54971L4.73986 8.4536C4.25814 8.24812 3.50692 7.8079 2.7622 7.29375C2.01557 6.77828 1.32584 6.2231 0.948006 5.80297L0.940361 5.79447L0.932428 5.78642L0.932424 5.78641L0.932391 5.78638L0.932366 5.78635L0.932336 5.78632L0.932191 5.78617L0.930758 5.78472L0.924312 5.77811L0.89904 5.75191C0.87732 5.72922 0.847428 5.69759 0.81482 5.66193C0.743684 5.58413 0.680493 5.50967 0.650976 5.46665L0.645463 5.45861L0.639642 5.4508C0.550658 5.33135 0.5 5.17339 0.5 5.0047C0.5 4.81956 0.55263 4.65736 0.644446 4.52729C0.665497 4.50433 0.691697 4.47506 0.717762 4.44593C0.731054 4.43107 0.744311 4.41626 0.756832 4.40234C0.815459 4.33717 0.882201 4.26406 0.944605 4.20001Z"
                  stroke="#222F5D"
                ></path>
              </svg>
            </span>
            <span className="text-gray-400">{location.state.title}</span>
          </div>
        </div>

        <div className="col-span-12 mx-3 md:col-span-9 xl:col-span-10 md:mx-0 ">
          <div className="hidden notFoundProduct">
            <div className="flex justify-center w-full mt-4">
              <h1 className="text-2xl font-bold text-center text-orange-400 ">
                محصولی مربوط به جست و جوی شما پیدا نشد
              </h1>
            </div>
            <div className="flex justify-center w-full mt-4 ">
              <button className="p-2 text-sm text-white bg-orange-400 rounded-md shadow-md cursor-pointer restShowProduct">
                نمایش مجدد محصولات
              </button>
            </div>
          </div>

          {/* comment */}
          <div className="">
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-between w-full lg:flex-row">
                <div className="md:flex">
                  <div className="flex items-center justify-center mb-5">
                    <div className="relative z-10 md:-z-10 w-[16rem] h-[16rem] bg-gray-200 rounded-md md:w-[17rem] md:h-[17rem] mt-4 md:mt-0">
                      <img
                        src={location.state.imageUrl}
                        alt=""
                        width=""
                        className=""
                        id="src"
                      />
                    </div>
                  </div>

                  <div className="">
                    <h1 className="mb-0 text-lg font-semibold text-center title text-slate-800 md:text-right md:mr-8">
                      {location.state.title}
                    </h1>
                    <div className="flex items-center justify-center mb-6 md:text-right md:mr-8 md:block">
                      <span id="title" className="text-sm text-gray-400">
                        {location.state.model}
                      </span>
                    </div>

                    <hr className="hidden mb-6 mr-8 md:block" />

                    <div className="mb-4">
                      <div
                        x-data="{selectedColor : 0} "
                        className="flex justify-between px-10 md:px-0 md:mr-8"
                      >
                        <div>
                          <span className="text-lg font-medium text-gray-500 md:ml-4">
                            انتخاب رنگ :
                          </span>
                        </div>
                        <div className="flex">
                          <div
                            onClick={() =>
                              setColor({ red: true, blue: false, green: false })
                            }
                            className="flex items-center justify-center w-8 h-8 -mr-1 bg-red-500 border-2 border-white rounded-full shadow-lg cursor-pointer colorBtn"
                          >
                            {color.red && (
                              <svg
                                x-show="selectedColor===3 "
                                xmlns="http://www.w3.org/2000/svg "
                                className="w-6 h-6 stroke-white"
                                fill="none "
                                viewBox="0 0 24 24 "
                                stroke="currentColor "
                                strokeWidth="2 "
                              >
                                <path
                                  strokeLinecap="round "
                                  strokeLinejoin="round "
                                  d="M5 13l4 4L19 7 "
                                ></path>
                              </svg>
                            )}
                          </div>

                          <div
                            onClick={() =>
                              setColor({ red: false, blue: true, green: false })
                            }
                            className="flex items-center justify-center w-8 h-8 -mr-1 bg-blue-500 border-2 border-white rounded-full shadow-lg cursor-pointer colorBtn"
                          >
                            {color.blue && (
                              <svg
                                x-show="selectedColor===3 "
                                xmlns="http://www.w3.org/2000/svg "
                                className="w-6 h-6 stroke-white"
                                fill="none "
                                viewBox="0 0 24 24 "
                                stroke="currentColor "
                                strokeWidth="2 "
                              >
                                <path
                                  strokeLinecap="round "
                                  strokeLinejoin="round "
                                  d="M5 13l4 4L19 7 "
                                ></path>
                              </svg>
                            )}
                          </div>

                          <div
                            onClick={() =>
                              setColor({ red: false, blue: false, green: true })
                            }
                            className="flex items-center justify-center w-8 h-8 -mr-1 bg-green-500 border-2 border-white rounded-full shadow-lg cursor-pointer colorBtn"
                          >
                            {color.green && (
                              <svg
                                x-show="selectedColor===3 "
                                xmlns="http://www.w3.org/2000/svg "
                                className="w-6 h-6 stroke-white"
                                fill="none "
                                viewBox="0 0 24 24 "
                                stroke="currentColor "
                                strokeWidth="2 "
                              >
                                <path
                                  strokeLinecap="round "
                                  strokeLinejoin="round "
                                  d="M5 13l4 4L19 7 "
                                ></path>
                              </svg>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="block mb-3 md:hidden">
                      <div className="flex items-center justify-between px-4 mb-2">
                        <div className="flex">
                          <span>
                            <svg
                              width="20 "
                              height="19 "
                              viewBox="0 0 20 19 "
                              fill="#fff "
                              xmlns="http://www.w3.org/2000/svg "
                            >
                              <circle
                                cx="12 "
                                cy="8 "
                                r="8 "
                                fill="#E2E2E2 "
                              ></circle>
                              <path
                                d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333
                                     5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449 "
                                stroke="#222F5D "
                                strokeWidth="0.875 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M7.00012 11.9993C8.06762 11.9993
                                     8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z "
                                stroke="#222F5D "
                                strokeWidth="0.875 "
                                strokeLinecap="round "
                                strokeLinejoin="round
                                     "
                              ></path>
                              <path
                                d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z "
                                stroke="#222F5D
                                     "
                                strokeWidth="0.875 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255
                                     8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z "
                                stroke="#222F5D "
                                strokeWidth="0.875 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M7.00033 14.916C6.02616 14.916 5.54199
                                     15.4002 5.54199 16.3743V17.8327H8.45866V16.3743C8.45866 15.4002 7.97449 14.916 7.00033 14.916Z "
                                stroke="#222F5D "
                                strokeWidth="0.875 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                            </svg>
                          </span>
                          <span className="mr-1 text-sm text-slate-800">
                            فروشنده : دیجی تایز
                          </span>
                        </div>
                        <div className="flex">
                          <span>
                            <svg
                              width="21 "
                              height="19 "
                              viewBox="0 0 21 19 "
                              fill="#fff "
                              xmlns="http://www.w3.org/2000/svg "
                            >
                              <circle
                                cx="13 "
                                cy="8 "
                                r="8 "
                                fill="#E2E2E2 "
                              ></circle>
                              <path
                                d="M7.43053 3.57973L3.89594 4.91139C3.08136 5.21598 2.41553 6.17931
                                     2.41553 7.04348V12.3064C2.41553 13.1422 2.96803 14.2401 3.64094 14.7431L6.68678 17.0168C7.68553 17.7676 9.32886 17.7676 10.3276 17.0168L13.3734 14.7431C14.0464 14.2401 14.5989 13.1422 14.5989 12.3064V7.04348C14.5989 6.17223
                                     13.933 5.20889 13.1184 4.90431L9.58386 3.57973C8.98178 3.36014 8.01844 3.36014 7.43053 3.57973Z "
                                stroke="#222F5D "
                                strokeWidth="1.0625 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                            </svg>
                          </span>
                          <span className="mr-1 text-sm text-slate-800">
                            گارانتی 18 ماه زرین
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <div className="flex">
                          <span>
                            <svg
                              width="20 "
                              height="21 "
                              viewBox="0 0 20 21 "
                              fill="#fff "
                              xmlns="http://www.w3.org/2000/svg "
                            >
                              <circle
                                cx="12 "
                                cy="8 "
                                r="8 "
                                fill="#E2E2E2 "
                              ></circle>
                              <path
                                d="M10.0002 6.33301V12.9997C10.0002 13.733 9.40016 14.333
                                     8.66683 14.333H1.3335V10.0797C1.82016 10.6597 2.56685 11.0197 3.39351 10.9997C4.06685 10.9863 4.6735 10.7263 5.12683 10.293C5.3335 10.1197 5.50684 9.89967 5.64018 9.65967C5.88018 9.253 6.0135 8.77299 6.00016 8.27299C5.98016
                                     7.49299 5.63351 6.80634 5.09351 6.33301H10.0002Z "
                                stroke="#222F5D "
                                strokeWidth="1.125 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M14.6668 14.333V16.333C14.6668 17.4397 13.7735 18.333 12.6668 18.333H12.0002C12.0002
                                     17.5997 11.4002 16.9997 10.6668 16.9997C9.9335 16.9997 9.3335 17.5997 9.3335 18.333H6.66683C6.66683 17.5997 6.06683 16.9997 5.3335 16.9997C4.60016 16.9997 4.00016 17.5997 4.00016 18.333H3.3335C2.22683 18.333 1.3335 17.4397
                                     1.3335 16.333V14.333H8.66683C9.40016 14.333 10.0002 13.733 10.0002 12.9997V8.33301H11.2268C11.7068 8.33301 12.1468 8.59301 12.3868 9.00635L13.5268 10.9997H12.6668C12.3002 10.9997 12.0002 11.2997 12.0002 11.6663V13.6663C12.0002
                                     14.033 12.3002 14.333 12.6668 14.333H14.6668Z "
                                stroke="#222F5D "
                                strokeWidth="1.125 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M5.33333 19.6667C6.06971 19.6667 6.66667 19.0697 6.66667 18.3333C6.66667
                                     17.597 6.06971 17 5.33333 17C4.59695 17 4 17.597 4 18.3333C4 19.0697 4.59695 19.6667 5.33333 19.6667Z "
                                stroke="#222F5D "
                                strokeWidth="1.125 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M10.6668 19.6667C11.4032
                                     19.6667 12.0002 19.0697 12.0002 18.3333C12.0002 17.597 11.4032 17 10.6668 17C9.93045 17 9.3335 17.597 9.3335 18.3333C9.3335 19.0697 9.93045 19.6667 10.6668 19.6667Z "
                                stroke="#222F5D "
                                strokeWidth="1.125
                                     "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M14.6667 13V14.3333H12.6667C12.3 14.3333 12 14.0333 12 13.6667V11.6667C12 11.3 12.3 11 12.6667 11H13.5267L14.6667 13Z "
                                stroke="#222F5D "
                                strokeWidth="1.125
                                     "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M6.00033 8.33268C6.00033 9.13268 5.647 9.84602 5.09367 10.3327C4.62034 10.746 4.00699 10.9993 3.33366 10.9993C1.86033 10.9993 0.666992 9.80602 0.666992 8.33268C0.666992
                                     7.49268 1.05366 6.73935 1.66699 6.25269C2.12699 5.88602 2.70699 5.66602 3.33366 5.66602C4.80699 5.66602 6.00033 6.85935 6.00033 8.33268Z "
                                stroke="#222F5D "
                                strokeWidth="1.125 "
                                strokeMiterlimit="10 "
                                strokeLinecap="round
                                     "
                                strokeLinejoin="round "
                              ></path>
                              <path
                                d="M3.50033 7.49902V8.49902L2.66699 8.99902 "
                                stroke="#222F5D "
                                strokeWidth="1.125 "
                                strokeMiterlimit="10 "
                                strokeLinecap="round "
                                strokeLinejoin="round "
                              ></path>
                            </svg>
                          </span>
                          <span className="mr-1 text-sm text-slate-800">
                            ارسال توسط : انبار تهران
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="inline-block w-full mt-1 mb-3 text-lg font-bold text-center text-orange-500 md:hidden">
                      {location.state.price}
                    </p>

                    <div>
                      <div className="px-5 py-3 text-sm bg-white rounded-md md:mr-8 md:block text-slate-800 md:p-0 md:bg-[#f3f4f6] mb-4 md:mb-0">
                        <p className="mb-4 font-semibold md:my-4">
                          ویژگی های کالا :
                        </p>

                        <div className="flex items-center mb-2 text-slate-800">
                          <div className="w-2 h-2 ml-3 bg-orange-500 rounded-full"></div>
                          <span className="font-light">حافطه داخلی :</span>
                          <span className="font-bold"> دو گیگ</span>
                        </div>

                        <div className="flex items-center mb-2 text-slate-800">
                          <div className="w-2 h-2 ml-3 bg-orange-500 rounded-full"></div>
                          <span className="font-light">
                            بازه انداره صفحه نمایش :
                          </span>
                          <span className="font-bold">6 اینچ</span>
                        </div>

                        <div className="flex items-center mb-2 text-slate-800">
                          <div className="w-2 h-2 ml-3 bg-orange-500 rounded-full"></div>
                          <span className="font-light">شبکه های ارتباطی :</span>
                          <span className="font-bold">3G , 4G</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden w-full max-w-screen-lg lg:w-1/4 md:block">
                <div>
                  <div className="px-4 py-3 bg-gray-200 rounded-md box">
                    <div className="flex flex-col">
                      <div className="flex mb-2">
                        <span>
                          <svg
                            width="20 "
                            height="19 "
                            viewBox="0 0 20 19 "
                            fill="#fff "
                            xmlns="http://www.w3.org/2000/svg "
                          >
                            <circle
                              cx="12 "
                              cy="8 "
                              r="8 "
                              fill="#E2E2E2 "
                            ></circle>
                            <path
                              d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333
                                     5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449 "
                              stroke="#222F5D "
                              strokeWidth="0.875 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M7.00012 11.9993C8.06762 11.9993
                                     8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z "
                              stroke="#222F5D "
                              strokeWidth="0.875 "
                              strokeLinecap="round "
                              strokeLinejoin="round
                                     "
                            ></path>
                            <path
                              d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z "
                              stroke="#222F5D
                                     "
                              strokeWidth="0.875 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255
                                     8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z "
                              stroke="#222F5D "
                              strokeWidth="0.875 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M7.00033 14.916C6.02616 14.916 5.54199
                                     15.4002 5.54199 16.3743V17.8327H8.45866V16.3743C8.45866 15.4002 7.97449 14.916 7.00033 14.916Z "
                              stroke="#222F5D "
                              strokeWidth="0.875 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                          </svg>
                        </span>
                        <span className="mr-1 text-sm text-slate-800">
                          فروشنده :
                          <span className="text-gray-600"> دیجی تایز</span>
                        </span>
                      </div>
                      <div className="flex mb-2">
                        <span>
                          <svg
                            width="21 "
                            height="19 "
                            viewBox="0 0 21 19 "
                            fill="#fff "
                            xmlns="http://www.w3.org/2000/svg "
                          >
                            <circle
                              cx="13 "
                              cy="8 "
                              r="8 "
                              fill="#E2E2E2 "
                            ></circle>
                            <path
                              d="M7.43053 3.57973L3.89594 4.91139C3.08136 5.21598 2.41553 6.17931
                                                             2.41553 7.04348V12.3064C2.41553 13.1422 2.96803 14.2401 3.64094 14.7431L6.68678 17.0168C7.68553 17.7676 9.32886 17.7676 10.3276 17.0168L13.3734 14.7431C14.0464 14.2401 14.5989 13.1422 14.5989 12.3064V7.04348C14.5989 6.17223
                                                             13.933 5.20889 13.1184 4.90431L9.58386 3.57973C8.98178 3.36014 8.01844 3.36014 7.43053 3.57973Z "
                              stroke="#222F5D "
                              strokeWidth="1.0625 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                          </svg>
                        </span>
                        <span className="mr-1 text-sm text-slate-800">
                          گارانتی :
                          <span className="text-gray-600">
                            {" "}
                            18 ماه زرین خدمت
                          </span>
                        </span>
                      </div>
                      <div className="flex mb-2">
                        <span>
                          <svg
                            width="20 "
                            height="21 "
                            viewBox="0 0 20 21 "
                            fill="#fff "
                            xmlns="http://www.w3.org/2000/svg "
                          >
                            <circle
                              cx="12 "
                              cy="8 "
                              r="8 "
                              fill="#E2E2E2 "
                            ></circle>
                            <path
                              d="M10.0002 6.33301V12.9997C10.0002 13.733 9.40016 14.333
                                                             8.66683 14.333H1.3335V10.0797C1.82016 10.6597 2.56685 11.0197 3.39351 10.9997C4.06685 10.9863 4.6735 10.7263 5.12683 10.293C5.3335 10.1197 5.50684 9.89967 5.64018 9.65967C5.88018 9.253 6.0135 8.77299 6.00016 8.27299C5.98016
                                                             7.49299 5.63351 6.80634 5.09351 6.33301H10.0002Z "
                              stroke="#222F5D "
                              strokeWidth="1.125 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M14.6668 14.333V16.333C14.6668 17.4397 13.7735 18.333 12.6668 18.333H12.0002C12.0002
                                                             17.5997 11.4002 16.9997 10.6668 16.9997C9.9335 16.9997 9.3335 17.5997 9.3335 18.333H6.66683C6.66683 17.5997 6.06683 16.9997 5.3335 16.9997C4.60016 16.9997 4.00016 17.5997 4.00016 18.333H3.3335C2.22683 18.333 1.3335 17.4397
                                                             1.3335 16.333V14.333H8.66683C9.40016 14.333 10.0002 13.733 10.0002 12.9997V8.33301H11.2268C11.7068 8.33301 12.1468 8.59301 12.3868 9.00635L13.5268 10.9997H12.6668C12.3002 10.9997 12.0002 11.2997 12.0002 11.6663V13.6663C12.0002
                                                             14.033 12.3002 14.333 12.6668 14.333H14.6668Z "
                              stroke="#222F5D "
                              strokeWidth="1.125 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M5.33333 19.6667C6.06971 19.6667 6.66667 19.0697 6.66667 18.3333C6.66667
                                                             17.597 6.06971 17 5.33333 17C4.59695 17 4 17.597 4 18.3333C4 19.0697 4.59695 19.6667 5.33333 19.6667Z "
                              stroke="#222F5D "
                              strokeWidth="1.125 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M10.6668 19.6667C11.4032
                                                             19.6667 12.0002 19.0697 12.0002 18.3333C12.0002 17.597 11.4032 17 10.6668 17C9.93045 17 9.3335 17.597 9.3335 18.3333C9.3335 19.0697 9.93045 19.6667 10.6668 19.6667Z "
                              stroke="#222F5D "
                              strokeWidth="1.125
                                                             "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M14.6667 13V14.3333H12.6667C12.3 14.3333 12 14.0333 12 13.6667V11.6667C12 11.3 12.3 11 12.6667 11H13.5267L14.6667 13Z "
                              stroke="#222F5D "
                              strokeWidth="1.125
                                                             "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M6.00033 8.33268C6.00033 9.13268 5.647 9.84602 5.09367 10.3327C4.62034 10.746 4.00699 10.9993 3.33366 10.9993C1.86033 10.9993 0.666992 9.80602 0.666992 8.33268C0.666992
                                                             7.49268 1.05366 6.73935 1.66699 6.25269C2.12699 5.88602 2.70699 5.66602 3.33366 5.66602C4.80699 5.66602 6.00033 6.85935 6.00033 8.33268Z "
                              stroke="#222F5D "
                              strokeWidth="1.125 "
                              strokeMiterlimit="10 "
                              strokeLinecap="round
                                                             "
                              strokeLinejoin="round "
                            ></path>
                            <path
                              d="M3.50033 7.49902V8.49902L2.66699 8.99902 "
                              stroke="#222F5D "
                              strokeWidth="1.125 "
                              strokeMiterlimit="10 "
                              strokeLinecap="round "
                              strokeLinejoin="round "
                            ></path>
                          </svg>
                        </span>
                        <span className="mr-1 text-sm text-slate-800">
                          ارسال توسط :
                          <span className="text-gray-600">انبار تهران</span>
                        </span>
                      </div>
                    </div>

                    <p
                      id="cost"
                      className="inline-block mt-10 text-lg font-bold text-center text-orange-500"
                    >
                      {location.state.price}
                    </p>

                    <button
                      disabled={inCart}
                      onClick={() => addToCartHandler()}
                      className="w-full py-2 mt-3 text-white bg-orange-500 rounded-md shadow-md addBtn"
                    >
                      {inCart ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              disabled={inCart}
              onClick={() => addToCartHandler()}
              className="w-full py-2 mt-3 text-white bg-orange-500 rounded-md shadow-md mb-[100px] md:hidden"
            >
              {inCart ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
