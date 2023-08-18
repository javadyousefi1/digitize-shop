import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="container mb-28 max-w-screen-2xl">
        <div className="px-4 mt-6 md:px-8">
          <div className="mb-8">
            <div className="flex">
              <img className="w-40 " src="https://digitize.javadyousefi.com/image/phone-sort.png" alt="product"/>
              <div className="flex items-end overflow-x-auto ">
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/apple-sort.png"
                alt="product"/>
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/xiaomi-sort.png"
                alt="product"/>
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/asus-sort.png"
                alt="product"/>
                <div className="mb-[68px] md:mb-[94px] text-orange-600 mr-3">
                <Link to="/">
                  <p className="w-[100px]">مشاهده همه</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex">
              <img className="w-40 " src="https://digitize.javadyousefi.com/image/laptop-sort.png" alt="product"/>
              <div className="flex items-end overflow-x-auto">
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/asus-sort.png"
                alt="product"/>
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/lanevo-sort.png"
                alt="product"/>
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/apple-sort.png"
                alt="product"/>
                <div className="mb-[68px] md:mb-[94px] text-orange-600 mr-3">
                  <Link to="/">
                  <p className="w-[100px]">مشاهده همه</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex">
              <img className="w-40 " src="https://digitize.javadyousefi.com/image/watch-sort.png" alt="product"/>
              <div className="flex items-end overflow-x-auto">
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/xiaomi-sort.png"
                alt="product"/>
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/lanevo-sort.png"
                alt="product"/>
                <img
                  className="w-40 h-[157px] md:h-[200px]"
                  src="https://digitize.javadyousefi.com/image/apple-sort.png"
                alt="product"/>
                <div className="mb-[68px] md:mb-[94px] text-orange-600 mr-3">
                <Link to="/">
                  <p className="w-[100px]">مشاهده همه</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
