import { useEffect, useState } from "react";
import ProductStyle from "../components/productStyle";
import { myProducts } from "../data/data";
import { UseCartDispatch, UseCart } from "../provider/cartProvider";
const HomePage = () => {
  console.log();
  const dispatch = UseCartDispatch();
  const { searchItem } = UseCart();

  useEffect(() => {
    setProduct(myProducts);
    setProductBackup(myProducts);
  }, []);

  useEffect(() => {
    searchHandler(searchItem);
  }, [searchItem]);

  const [filterBrand, setFilterBrand] = useState({ brand: false, cost: false });

  const [sort, setSort] = useState({
    popular: true,
    expensive: false,
    cheap: false,
    mostSell: false,
  });

  const [filterItem, setFilterItem] = useState({
    apple: false,
    samsung: false,
    xiaomi: false,
    asus: false,
  });

  const [sortMobile, setSortMobile] = useState(false);

  const [filterMobile, setFilterMobile] = useState(false);

  const [product, setProduct] = useState([]);

  const [productBackup, setProductBackup] = useState([]);

  const [checkboxList, setCheckboxList] = useState([]);

  const [searchError, setSearchError] = useState(false);

  const [range, setRange] = useState(0);

  const sortHandler = (sortName) => {

    switch (sortName) {
      case "expensive": {
        const sort = productBackup.sort((a, b) => (a.cost > b.cost ? -1 : +1));
        break;
      }

      case "cheap": {
        const sort = productBackup.sort((a, b) => (a.cost > b.cost ? +1 : -1));
        break;
      }

      case "popular": {
        // setProductBackup(myProducts);
        const sort = productBackup.sort((a, b) => (a.id > b.id ? +1 : -1));
        break;
      }

      case "mostSell": {
        // setProductBackup(myProducts);
        const sort = productBackup.sort((a, b) =>
          a.model.length > b.model.length ? +1 : -1
        );
        break;
      }

      default: {
        console.log("Unknown sort");
      }
    }
  };

  const rednerProduct = (productList) => {
    return productList.map((p) => {
      return <ProductStyle p={p} key={p.id} />;
    });
  };

  useEffect(() => {
    checkboxFilterHandler(checkboxList);
  }, [checkboxList]);

  const checkboxHandler = (e) => {
    if (checkboxList.includes(e.target.name)) {
      const deletedItem = checkboxList.filter((item) => item !== e.target.name);
      setCheckboxList(deletedItem);

      checkboxFilterHandler(checkboxList);
    } else {
      setCheckboxList([...checkboxList, e.target.name]);
    }
  };

  const checkboxFilterHandler = (array) => {
    setProductBackup(myProducts);

    const myArrayFiltered = myProducts.filter((el) => {
      return array.some((f) => {
        return f === el.model;
      });
    });

    if (myArrayFiltered.length === 0) {
      return;
    }
    setProductBackup(myArrayFiltered);
  };

  const searchHandler = (searchItem) => {
    setProductBackup(myProducts);

    const searchedItem = myProducts.filter((item) =>
      item.title.includes(searchItem)
    );
    setProductBackup(searchedItem);

    if (searchItem === "") {
      setProductBackup(myProducts);
    }

    if (searchItem !== "" && searchedItem.length === 0) {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
  };

  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  const saveRange = (e) => {
    setRange(e.target.value);
  };

  const rangeHandler = () => {
    const rangeItem = myProducts.filter((item) => item.cost <= parseInt(range));
    setProductBackup(rangeItem);
    console.log(rangeItem);
    if (range !== 0 && rangeItem.length === 0) {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-3 mt-4 mb-4 md:hidden">
        <div
          onClick={() => setSortMobile(true)}
          className="flex items-center justify-center w-1/2 px-4 py-2 bg-white rounded shadow-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 p-1 stroke-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
          <span className="text-sm">مرتب سازی</span>
        </div>

        <div
          onClick={() => setFilterMobile(true)}
          className="flex items-center justify-center w-1/2 px-4 py-2 mr-1 bg-white rounded shadow-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 p-1 stroke-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <span className="text-sm">فیلتر</span>
        </div>
      </div>
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

            <div className="p-2 my-2 font-bold text-orange-600">فیلتر</div>

            <div className="mb-5 header1">
              <div
                onClick={() =>
                  setFilterBrand({ ...filterBrand, brand: !filterBrand.brand })
                }
                className="flex justify-between mb-5 cursor-pointer"
              >
                <div className="flex">
                  <svg
                    className="w-7 h-7"
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="10.5"
                      cy="9.5"
                      r="9.5"
                      fill="#AFAFAF"
                      fillOpacity="0.29"
                    />
                    <path
                      d="M12.8334 21.271H1.16669C0.92752 21.271 0.729187 21.0727 0.729187 20.8335C0.729187 20.5943 0.92752 20.396 1.16669 20.396H12.8334C13.0725 20.396 13.2709 20.5943 13.2709 20.8335C13.2709 21.0727 13.0725 21.271 12.8334 21.271Z"
                      fill="#222F5D"
                    />
                    <path
                      d="M2.15845 20.8331H1.28345L1.31262 13.8156C1.31262 13.3198 1.54011 12.8589 1.93095 12.5556L6.01428 9.37643C6.59178 8.92726 7.40262 8.92726 7.98595 9.37643L12.0693 12.5498C12.4543 12.8531 12.6876 13.3256 12.6876 13.8156V20.8331H11.8126V13.8214C11.8126 13.5998 11.7076 13.3839 11.5326 13.2439L7.44928 10.0706C7.18678 9.86643 6.81928 9.86643 6.55095 10.0706L2.46762 13.2498C2.29262 13.3839 2.18762 13.5998 2.18762 13.8214L2.15845 20.8331Z"
                      fill="#222F5D"
                    />
                    <path
                      d="M9.91665 21.2707H4.08331C3.84415 21.2707 3.64581 21.0723 3.64581 20.8332V15.2915C3.64581 14.5682 4.23498 13.979 4.95831 13.979H9.04165C9.76498 13.979 10.3541 14.5682 10.3541 15.2915V20.8332C10.3541 21.0723 10.1558 21.2707 9.91665 21.2707ZM4.52081 20.3957H9.47915V15.2915C9.47915 15.0523 9.28081 14.854 9.04165 14.854H4.95831C4.71915 14.854 4.52081 15.0523 4.52081 15.2915V20.3957Z"
                      fill="#222F5D"
                    />
                    <path
                      d="M5.83331 18.7915C5.59415 18.7915 5.39581 18.5932 5.39581 18.354V17.479C5.39581 17.2398 5.59415 17.0415 5.83331 17.0415C6.07248 17.0415 6.27081 17.2398 6.27081 17.479V18.354C6.27081 18.5932 6.07248 18.7915 5.83331 18.7915Z"
                      fill="#222F5D"
                    />
                    <path
                      d="M7.875 12.8125H6.125C5.88583 12.8125 5.6875 12.6142 5.6875 12.375C5.6875 12.1358 5.88583 11.9375 6.125 11.9375H7.875C8.11417 11.9375 8.3125 12.1358 8.3125 12.375C8.3125 12.6142 8.11417 12.8125 7.875 12.8125Z"
                      fill="#222F5D"
                    />
                  </svg>

                  <span className="mr-2 text-slate-800">برند محصول</span>
                </div>
                <svg
                  className={
                    filterBrand.brand
                      ? "w-5 h-5 transform rotate-180 transition-all duration-200 ease-linear"
                      : "w-5 h-5 transition-all duration-200 ease-linear"
                  }
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className={filterBrand.brand ? "block" : "hidden"}>
                <div>
                  <div className="flex mb-2">
                    <label htmlFor="" className="mr-2">
                      <input
                        onClick={(e) =>
                          setFilterItem({
                            ...filterItem,
                            apple: !filterItem.apple,
                          })
                        }
                        onChange={(e) => checkboxHandler(e)}
                        checked={filterItem.apple}
                        name="apple"
                        value={true}
                        type="checkbox"
                        className="accent-orange-600"
                      />
                      <span className="mr-2 text-slate-800">اپل</span>
                    </label>
                  </div>

                  <div className="flex mb-2">
                    <label htmlFor="" className="mr-2">
                      <input
                        onClick={(e) =>
                          setFilterItem({
                            ...filterItem,
                            samsung: !filterItem.samsung,
                          })
                        }
                        onChange={(e) => checkboxHandler(e)}
                        checked={filterItem.samsung}
                        name="samsung"
                        value={true}
                        type="checkbox"
                        className="accent-orange-600"
                      />
                      <span className="mr-2 text-slate-800">سامسونگ</span>
                    </label>
                  </div>

                  <div className="flex mb-2">
                    <label htmlFor="" className="mr-2">
                      <input
                        onClick={(e) =>
                          setFilterItem({
                            ...filterItem,
                            xiaomi: !filterItem.xiaomi,
                          })
                        }
                        onChange={(e) => checkboxHandler(e)}
                        checked={filterItem.xiaomi}
                        name="xiaomi"
                        value={true}
                        type="checkbox"
                        className="accent-orange-600"
                      />
                      <span className="mr-2 text-slate-800">شیائومی</span>
                    </label>
                  </div>

                  <div className="flex">
                    <label htmlFor="" className="mr-2">
                      <input
                        onClick={(e) =>
                          setFilterItem({
                            ...filterItem,
                            asus: !filterItem.asus,
                          })
                        }
                        onChange={(e) => checkboxHandler(e)}
                        checked={filterItem.asus}
                        name="asus"
                        value={true}
                        type="checkbox"
                        className="accent-orange-600"
                      />
                      <span className="mr-2 text-slate-800">ایسوس</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div
                onClick={() =>
                  setFilterBrand({ ...filterBrand, cost: !filterBrand.cost })
                }
                className="flex justify-between mb-4 cursor-pointer"
              >
                <div className="flex">
                  <svg
                    className="w-7 h-7"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5234 14.9038C10.2784 15.143 10.1384 15.4872 10.1734 15.8547C10.2259 16.4847 10.8034 16.9455 11.4334 16.9455H12.5418V17.6397C12.5418 18.8472 11.5559 19.833 10.3484 19.833H3.65177C2.44427 19.833 1.45844 18.8472 1.45844 17.6397V13.7138C1.45844 12.5063 2.44427 11.5205 3.65177 11.5205H10.3484C11.5559 11.5205 12.5418 12.5063 12.5418 13.7138V14.5538H11.3634C11.0368 14.5538 10.7393 14.6822 10.5234 14.9038Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.45844 14.2388V11.573C1.45844 10.8788 1.88427 10.2604 2.53177 10.0154L7.16343 8.26544C7.88677 7.99127 8.6626 8.52796 8.6626 9.30379V11.5205"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1593 15.1492V16.3509C13.1593 16.6717 12.9026 16.9342 12.576 16.9459H11.4326C10.8026 16.9459 10.2251 16.485 10.1726 15.855C10.1376 15.4875 10.2776 15.1434 10.5226 14.9042C10.7385 14.6825 11.036 14.5542 11.3626 14.5542H12.576C12.9026 14.5659 13.1593 14.8283 13.1593 15.1492Z"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.08331 14H8.16665"
                      stroke="#222F5D"
                      strokeWidth="0.875"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="11.5"
                      cy="9.5"
                      r="9.5"
                      fill="#AFAFAF"
                      fillOpacity="0.29"
                    />
                  </svg>

                  <span className="mr-2 text-slate-800">قیمت محصول</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    filterBrand.cost
                      ? "w-5 h-5 transform rotate-180 transition-all duration-200 ease-linear"
                      : "w-5 h-5 transition-all duration-200 ease-linear"
                  }
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className={filterBrand.cost ? "block" : "hidden"}>
                <input
                  onChange={(e) => saveRange(e)}
                  value={range}
                  max={6000000}
                  type="range"
                  dir="ltr"
                  className="w-full outline-none cursor-pointer"
                />

                <p>
                  <span>{commafy(range)}</span>
                  <span className="mr-2">تومان</span>
                </p>

                <button
                  onClick={() => rangeHandler()}
                  className="w-full p-1 mt-1 text-white bg-orange-500 rounded-md"
                >
                  تایید
                </button>

                <span className="MuiSlider-root MuiSlider-colorPrimary">
                  <span className="MuiSlider-rail"></span>
                  <span className="MuiSlider-track"></span>
                  <input type="hidden" value="0,3550000" />
                  <span
                    className="MuiSlider-thumb MuiSlider-thumbColorPrimary"
                    tabIndex="0"
                    role="slider"
                    data-index="0"
                    aria-orientation="horizontal"
                    aria-valuemax="8923220"
                    aria-valuemin="0"
                    aria-valuenow="0"
                  ></span>
                  <span
                    className="MuiSlider-thumb MuiSlider-thumbColorPrimary"
                    tabIndex="0"
                    role="slider"
                    data-index="1"
                    aria-orientation="horizontal"
                    aria-valuemax="8923220"
                    aria-valuemin="0"
                    aria-valuenow="3550000"
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-h-[55px] items-center hidden col-span-9 px-4 text-gray-400 bg-white rounded-lg xl:col-span-10 md:px-2 md:flex gap-x-7 ">
          <div className="p-2 pr-2 bg-orange-300 rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg "
              className="w-5 h-5 stroke-orange-500 "
              fill="none "
              viewBox="0 0 24 24 "
              stroke="currentColor "
              strokeWidth="2 "
            >
              <path
                strokeLinecap="round "
                strokeLinejoin="round "
                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4 "
              />
            </svg>
          </div>
          <button
            onClick={() =>
              setSort({
                popular: true,
                expensive: false,
                cheap: false,
                mostSell: false,
              })
            }
            className="relative py-4 "
          >
            <span
              onClick={() => sortHandler("popular")}
              className={sort.popular ? "text-slate-800 font-bold" : ""}
            >
              محبوب ترین
            </span>
            <span
              className={
                sort.popular
                  ? "absolute w-1 h-1 bg-orange-600 rounded-full "
                  : "bg-white"
              }
            ></span>
          </button>
          <button
            onClick={() =>
              setSort({
                popular: false,
                expensive: true,
                cheap: false,
                mostSell: false,
              })
            }
            className="relative py-4 "
          >
            <span
              onClick={() => sortHandler("expensive")}
              className={sort.expensive ? "text-slate-800 font-bold" : ""}
            >
              گران ترین
            </span>
            <span
              className={
                sort.expensive
                  ? "absolute w-1 h-1 bg-orange-600 rounded-full "
                  : "bg-white"
              }
            ></span>
          </button>
          <button
            onClick={() =>
              setSort({
                popular: false,
                expensive: false,
                cheap: true,
                mostSell: false,
              })
            }
            className="relative py-4 "
          >
            <span
              onClick={() => sortHandler("cheap")}
              className={sort.cheap ? "text-slate-800 font-bold" : ""}
            >
              ارزان ترین
            </span>
            <span
              className={
                sort.cheap
                  ? "absolute w-1 h-1 bg-orange-600 rounded-full "
                  : "bg-white"
              }
            ></span>
          </button>
          <button
            onClick={() =>
              setSort({
                popular: false,
                expensive: false,
                cheap: false,
                mostSell: true,
              })
            }
            className="relative py-4 "
          >
            <span
              onClick={() => sortHandler("mostSell")}
              className={sort.mostSell ? "text-slate-800 font-bold" : ""}
            >
              پرفروش ترین
            </span>
            <span
              className={
                sort.mostSell
                  ? "absolute w-1 h-1 bg-orange-600 rounded-full "
                  : "bg-white"
              }
            ></span>
          </button>
        </div>

        <div className="col-span-12 mx-3 md:col-span-9 xl:col-span-10 md:mx-0 ">
          <div className="hidden notFoundProduct">
            <div className="flex justify-center w-full mt-4">
              <h1 className="text-2xl font-bold text-center text-orange-400 ">
                محصولی مربوط به جست و جوی شما پیدا نشد :(
              </h1>
            </div>
            <div className="flex justify-center w-full mt-4 ">
              <button  className="p-2 text-sm text-white bg-orange-400 rounded-md shadow-md cursor-pointer restShowProduct">
                نمایش مجدد محصولات
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:px-0 md:grid-cols-3 lg:grid-cols-4 importProduct mb-[100px]">
            {rednerProduct(productBackup)}
          </div>
          {searchError && (
            <div className="">
              <div className="flex justify-center w-full ">
                <h1 className="text-2xl font-bold text-center text-orange-400">
                  محصولی مربوط به جست و جوی شما پیدا نشد :(
                </h1>
              </div>
              <div className="flex justify-center w-full mt-4">
                <button
                  onClick={() => {
                    setProductBackup(myProducts);
                    dispatch({ type: "SEARCH", payload: "" });
                    setSearchError(false);
                  }}
                  className="p-2 text-sm text-white bg-orange-400 rounded-md shadow-md cursor-pointer restShowProduct"
                >
                  نمایش مجدد محصولات
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      {sortMobile && (
        <div className="fixed top-0 bottom-0 z-20 w-full h-screen bg-black bg-opacity-50 md:hidden">
          <div className="bg-[#fff] h-auto w-full rounded-tr-lg rounded-tl-lg fixed bottom-0 right-0 left-0  px-6 py-4">
            <span className="flex items-center font-bold text-right text-orange-600 gap-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 p-1 stroke-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                ></path>
              </svg>
              <span>مرتب سازی بر اساس :</span>
            </span>

            <button
              onClick={() => {
                setSort({
                  popular: true,
                  expensive: false,
                  cheap: false,
                  mostSell: false,
                });
                sortHandler("popular");
              }}
              className={
                sort.popular
                  ? "flex w-full px-4 py-2 mt-6 border border-orange-500 rounded-lg text-slate-500 bg-slate-100 gap-x-2 "
                  : "flex w-full px-4 py-2 mt-6 border border-white rounded-lg text-slate-500 bg-slate-100 gap-x-2 "
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </span>
              <span>محبوب ترین</span>
            </button>

            <button
              onClick={() => {
                setSort({
                  popular: false,
                  expensive: false,
                  cheap: false,
                  mostSell: true,
                });
                sortHandler("mostSell");
              }}
              className={
                sort.mostSell
                  ? "flex w-full px-4 py-2 mt-3 border border-orange-500 rounded-lg text-slate-500 bg-slate-100 gap-x-2 "
                  : "flex w-full px-4 py-2 mt-3 border border-white rounded-lg text-slate-500 bg-slate-100 gap-x-2 "
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </span>
              <span>پر فروش ترین</span>
            </button>

            <button
              onClick={() => {
                setSort({
                  popular: false,
                  expensive: true,
                  cheap: false,
                  mostSell: false,
                });
                sortHandler("expensive");
              }}
              className={
                sort.expensive
                  ? "flex w-full px-4 py-2 mt-3 border border-orange-500 rounded-lg text-slate-500 bg-slate-100 gap-x-2 "
                  : "flex w-full px-4 py-2 mt-3 border border-white rounded-lg text-slate-500 bg-slate-100 gap-x-2 "
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </span>
              <span>گران ترین</span>
            </button>

            <button
              onClick={() => {
                setSort({
                  popular: false,
                  expensive: false,
                  cheap: true,
                  mostSell: false,
                });
                sortHandler("cheap");
              }}
              className={
                sort.cheap
                  ? "flex w-full px-4 py-2 mt-3 border border-orange-500 rounded-lg text-slate-500 bg-slate-100 gap-x-2 "
                  : "flex w-full px-4 py-2 mt-3 border border-white rounded-lg text-slate-500 bg-slate-100 gap-x-2 "
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </span>
              <span>ارزان ترین</span>
            </button>

            <button
              onClick={() => setSortMobile(!sortMobile)}
              className="w-full p-1 mt-6 text-white bg-orange-500 rounded-md"
            >
              تایید
            </button>
          </div>
        </div>
      )}

      {filterMobile && (
        <div className="fixed top-0 bottom-0 z-20 w-full h-screen bg-black bg-opacity-50 md:hidden">
          <div className="bg-[#fff] h-auto w-full rounded-tr-lg rounded-tl-lg fixed bottom-0 right-0 left-0  px-6 py-4">
            <span className="flex items-center font-bold text-right text-orange-600 gap-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 p-1 stroke-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
              <span>فیلتر بر اساس :</span>
            </span>

            <div className="flex justify-between mb-5 cursor-pointer">
              <div className="flex mt-4">
                <svg
                  className="w-7 h-7"
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10.5"
                    cy="9.5"
                    r="9.5"
                    fill="#AFAFAF"
                    fillOpacity="0.29"
                  ></circle>
                  <path
                    d="M12.8334 21.271H1.16669C0.92752 21.271 0.729187 21.0727 0.729187 20.8335C0.729187 20.5943 0.92752 20.396 1.16669 20.396H12.8334C13.0725 20.396 13.2709 20.5943 13.2709 20.8335C13.2709 21.0727 13.0725 21.271 12.8334 21.271Z"
                    fill="#222F5D"
                  ></path>
                  <path
                    d="M2.15845 20.8331H1.28345L1.31262 13.8156C1.31262 13.3198 1.54011 12.8589 1.93095 12.5556L6.01428 9.37643C6.59178 8.92726 7.40262 8.92726 7.98595 9.37643L12.0693 12.5498C12.4543 12.8531 12.6876 13.3256 12.6876 13.8156V20.8331H11.8126V13.8214C11.8126 13.5998 11.7076 13.3839 11.5326 13.2439L7.44928 10.0706C7.18678 9.86643 6.81928 9.86643 6.55095 10.0706L2.46762 13.2498C2.29262 13.3839 2.18762 13.5998 2.18762 13.8214L2.15845 20.8331Z"
                    fill="#222F5D"
                  ></path>
                  <path
                    d="M9.91665 21.2707H4.08331C3.84415 21.2707 3.64581 21.0723 3.64581 20.8332V15.2915C3.64581 14.5682 4.23498 13.979 4.95831 13.979H9.04165C9.76498 13.979 10.3541 14.5682 10.3541 15.2915V20.8332C10.3541 21.0723 10.1558 21.2707 9.91665 21.2707ZM4.52081 20.3957H9.47915V15.2915C9.47915 15.0523 9.28081 14.854 9.04165 14.854H4.95831C4.71915 14.854 4.52081 15.0523 4.52081 15.2915V20.3957Z"
                    fill="#222F5D"
                  ></path>
                  <path
                    d="M5.83331 18.7915C5.59415 18.7915 5.39581 18.5932 5.39581 18.354V17.479C5.39581 17.2398 5.59415 17.0415 5.83331 17.0415C6.07248 17.0415 6.27081 17.2398 6.27081 17.479V18.354C6.27081 18.5932 6.07248 18.7915 5.83331 18.7915Z"
                    fill="#222F5D"
                  ></path>
                  <path
                    d="M7.875 12.8125H6.125C5.88583 12.8125 5.6875 12.6142 5.6875 12.375C5.6875 12.1358 5.88583 11.9375 6.125 11.9375H7.875C8.11417 11.9375 8.3125 12.1358 8.3125 12.375C8.3125 12.6142 8.11417 12.8125 7.875 12.8125Z"
                    fill="#222F5D"
                  ></path>
                </svg>
                <span className="mr-2 text-slate-800">برند محصول</span>
              </div>
            </div>

            <div>
              <div className="flex mb-2">
                <label htmlFor="" className="mr-2">
                  <input
                    onClick={(e) =>
                      setFilterItem({ ...filterItem, apple: !filterItem.apple })
                    }
                    onChange={(e) => checkboxHandler(e)}
                    checked={filterItem.apple}
                    name="apple"
                    value={true}
                    type="checkbox"
                    className="accent-orange-600"
                  />
                  <span className="mr-2 text-slate-800">اپل</span>
                </label>
              </div>

              <div className="flex mb-2">
                <label htmlFor="" className="mr-2">
                  <input
                    onClick={(e) =>
                      setFilterItem({
                        ...filterItem,
                        samsung: !filterItem.samsung,
                      })
                    }
                    onChange={(e) => checkboxHandler(e)}
                    checked={filterItem.samsung}
                    name="samsung"
                    value={true}
                    type="checkbox"
                    className="accent-orange-600"
                  />
                  <span className="mr-2 text-slate-800">سامسونگ</span>
                </label>
              </div>

              <div className="flex mb-2">
                <label htmlFor="" className="mr-2">
                  <input
                    onClick={(e) =>
                      setFilterItem({
                        ...filterItem,
                        xiaomi: !filterItem.xiaomi,
                      })
                    }
                    onChange={(e) => checkboxHandler(e)}
                    checked={filterItem.xiaomi}
                    name="xiaomi"
                    value={true}
                    type="checkbox"
                    className="accent-orange-600"
                  />
                  <span className="mr-2 text-slate-800">شیائومی</span>
                </label>
              </div>

              <div className="flex">
                <label htmlFor="" className="mr-2">
                  <input
                    onClick={(e) =>
                      setFilterItem({ ...filterItem, asus: !filterItem.asus })
                    }
                    onChange={(e) => checkboxHandler(e)}
                    checked={filterItem.asus}
                    name="asus"
                    value={true}
                    type="checkbox"
                    className="accent-orange-600"
                  />
                  <span className="mr-2 text-slate-800">ایسوس</span>
                </label>
              </div>
            </div>

            <button
              onClick={() => setFilterMobile(!filterMobile)}
              className="w-full p-1 mt-6 text-white bg-orange-500 rounded-md"
            >
              تایید
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
