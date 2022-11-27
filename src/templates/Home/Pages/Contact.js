import React from "react";
import "../../../templates/UserTemplate/styleImgs.css"
import ImgYKien from "../../../assets/images/ykien.png"
export default function Contact() {
  return (

    <div className="user-page mb-4">
      <div className="grid grid-flow-col grid-cols-12 justify-center gap-x-8 px-5 pt-5 relative">
        <div className="col-span-6">
          <form>
            <div class="bg-grey-lighter min-h-screen flex flex-col">
              <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                  <h1 class="mb-8 text-3xl text-center">LIÊN HỆ TRUNG TÂM</h1>
                  <input
                    type="text"
                    class="block border border-green-light w-full p-3 rounded mb-4"
                    name="hoTen"
                    placeholder="Nhập họ tên"
                  />
                  <input
                    type="text"
                    class="block border border-green-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    type="number"
                    class="block border border-green-light w-full p-3 rounded mb-4"
                    name="soDT"
                    placeholder="Nhập số điện thoại"
                  />
                  <input
                    type="text"
                    class="block border border-green-light w-full  p-3 rounded mb-4"
                    name="taiKhoan"
                    placeholder="Nhập ý kiến của bạn!"
                  />
                  <div className="mt-10">
                    <button
                      className="text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline
                          shadow-lg"
                      style={{ backgroundColor: "#33CC99" }}
                    >
                      Gửi góp ý
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-6">
          <img className="imgLogin" src={ImgYKien} />
        </div>
      </div>

    </div>
  );
}
