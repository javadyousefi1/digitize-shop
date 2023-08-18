const Login = () => {
  return (
    <>
      <div className="h-screen my-10">
        <div className="flex items-center justify-center ">
          <div className="bg-white rounded-md lg:w-[35%] border border-gray-300 md:p-5 md:px-7 w-[90%] p-4">
            <h1 className="pt-0 text-[32px] font-bold text-center text-red-400">
              دیجی تایز
            </h1>
            <p className="mt-3 mb-5 font-bold">ورود یا ثبت نام</p>
            <p className="text-gray-500">
              شماره موبایل یا ایمیل خود را وارد کنید
            </p>
            <form action="" className="formSubmit">
              <input
                id="signin"
                type="number"
                className="w-full p-1 mt-3 border-2 border-gray-300 rounded-md outline-none phoneNumber focus:border-2 focus:border-red-400 caret-red-400"
              />
              <p className="mt-1 text-xs font-bold text-left text-red-500 opacity-0 phoneError">
                شماره موبایل خود را به درستی وارد کنید
              </p>

              <p className="text-gray-500 ">رمز عبور خود را وارد کنید</p>

              <input
                id="signin"
                type="text"
                className="w-full p-1 mt-3 border-2 border-gray-300 rounded-md outline-none firstPassword focus:border-2 focus:border-red-400 caret-red-400"
              />

              <button
                type="submit"
                className="w-full px-2 py-2 my-5 text-white bg-red-400 rounded-md submitFromBtnSignUp"
              >
                ارسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
