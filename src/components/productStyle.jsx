import { Link } from "react-router-dom";

const ProductStyle = ({p}) => {

  return (
    <div key={p.id} className="p-2 bg-white shadow-md rounded-xl ">
      <div className="p-2 mb-2 bg-gray-100 rounded-xl ">
        <img src={p.imageUrl} alt=" " width=" " />
      </div>

      <div className="flex justify-between mb-3 ">
        <div className="text-sm text-gray-400 ">{p.model}</div>
        <div className="flex ">
          <div
            className={`w-6 h-6 -mr-2 bg-green-500 border-2 border-white rounded-full shadow-lg `}
          ></div>
          <div
            className={`w-6 h-6 -mr-2 bg-blue-500 border-2 border-white rounded-full shadow-lg`}
          ></div>
          <div
            className={`w-6 h-6 -mr-2 bg-red-500 border-2 border-white rounded-full shadow-lg`}
          ></div>
        </div>
      </div>

      <div className="mb-2 text-xs font-medium text-right text-slate-600 md:text-sm ">
        {p.title}
      </div>
      <div className="mb-2 text-sm font-medium text-left text-orange-600 md:text-sm ">
        {p.price}
      </div>

      <hr className="mb-2 " />

    <Link to={{pathname: `/product/${p.model}` , state : p}}>
    <button className="w-full font-semibold text-center text-orange-600 ">
        <div>ثبت و سفارش</div>
      </button>
    </Link>

    </div>
  );
};

export default ProductStyle;
