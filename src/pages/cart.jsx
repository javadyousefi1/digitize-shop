import { Link } from "react-router-dom";
import CartStyle from "../components/cartStyle";
import { UseCart } from "../provider/cartProvider";

const Cart = () => {
  const { cart, total } = UseCart();
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
  return (
    <>
      <div className="flex flex-col justify-between px-4 mt-5 md:flex-row mb-[150px]">
        <div className="flex flex-col md:w-1/2">
          {cart.length > 0 &&
            cart.map((c) => {
              return <CartStyle key={c.id} item={c} />;
            })}
          {cart.length === 0 && (
            <div className="flex justify-center w-full">
              <div className="my-10 ">
                <h1 className="text-2xl font-bold text-center text-red-400 ">
                  سبد خرید شما خالی است
                </h1>

                <div className="flex justify-center mt-4">
                  <Link to="/">
                    <button className="p-2 text-sm text-white bg-red-400 rounded-md shadow-md cursor-pointer">
                      رفتن به فروشگاه
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full p-3 mt-4 bg-white rounded-md md:w-1/3 md:mt-0">
          <div className="flex flex-col">
            <div className="flex justify-between w-full mb-4 text-sm">
              <div className="text-slate-800">مجموع قیمت :</div>
              <div className="font-semibold text-orange-700">
                <span className="cartCost">{commafy(total)}</span> تومان
              </div>
            </div>

            <div className="flex justify-between w-full mb-4 text-sm">
              <div className="text-slate-800">تخفیف :</div>
              <div className="font-semibold text-orange-700">0 تومان</div>
            </div>

            <div className="flex justify-between w-full mb-4 text-sm">
              <div className="text-slate-800">کد تخفیف دارید ؟</div>
              <div className="font-semibold text-orange-700">
                <form action="">
                  <div className="flex items-center justify-end">
                    <input
                      type="text"
                      placeholder="123ABC"
                      name=""
                      id=""
                      className="outline-none relative right-[4px]  border-[1px] border-gray-300 w-[66px] h-[28px] bg-gray-100 rounded-r-sm"
                    />
                    <button
                      type="submit"
                      className="text-white bg-red-400 rounded-l-md   h-[28px] p-1 px-2"
                    >
                      تایید
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex justify-between w-full mb-4 text-sm">
              <div className="text-slate-800">قیمت نهایی :</div>
              <div className="font-semibold text-orange-700">
                <span className="fainalCartCost">{commafy(total)}</span> تومان
              </div>
            </div>

            <button className="w-full p-2 text-white bg-red-400 rounded-md shadow-md">
              ادامه فرآیند خرید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
