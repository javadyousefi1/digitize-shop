import { UseCartDispatch } from "../provider/cartProvider";
const CartStyle = ({ item }) => {
  const dispatch = UseCartDispatch();

  return (
    <>
      <div className="flex p-3 mb-2 bg-white rounded-md gap-x-3">
        <div className="flex items-center w-20">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="flex flex-col justify-between w-full gap-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <p>{item.title}</p>
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-white bg-${item.selectedColor}-500`}
              ></div>
            </div>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
              className="text-orange-400 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-orange-500">{item.price}</p>
            <div className="flex items-center justify-between gap-x-2">
              <span
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.9"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
              <span className="flex items-center justify-center w-5 h-5 border-2 border-orange-500 border-solid text-slate-800">
                {item.quntity}
              </span>
              <span
                onClick={() =>
                  dispatch({ type: "DECREMENT_ITEM", payload: item })
                }
                className="cursor-pointer"
              >
                {item.quntity === 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 stroke-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.9"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartStyle;
