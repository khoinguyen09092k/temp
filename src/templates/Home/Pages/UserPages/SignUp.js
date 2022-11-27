
import React, { Fragment } from "react";
import { Modal } from 'antd';
import { useFormik } from "formik";
import * as Yup from "yup";
import "./../Style/StylePages.css";
import { history } from "../../../../App";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../../../redux/actions/userManagermentAction";


export default function Signup() {

  const countDown = () => {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: 'Đăng ký tài khoản thành công',
      content: `Thông báo tự động tắt sau ${secondsToGo}s.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `Thông báo tự động tắt sau ${secondsToGo}s.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
    },
    validationSchema: Yup.object({

      taiKhoan: Yup.string()
        .min(4, "Tài khoản ít nhất 4 kí tự !")
        .max(15, "Tài khoản không quá 15 kí tự !")
        .required("Không được để trống!"),
      matKhau: Yup.string()
      .min(5,"Mật khẩu từ 5-10 kí tự")
      .max(10,"Mật Khẩu từ 5-10 kí tự")
      .required("Không được để trống!"),
      hoTen: Yup.string()
      .min(1,"Họ tên từ 1-10 kí tự")
      .max(10,"Họ tên từ 1-10 kí tự")
      .required("Không được để trống!"),
      soDT: Yup.string()
      .min(10,"Số điện thoại từ 10-14 số")
      .max(14,"Số điện thoại từ 10-14 số")
      .required("Không được để trống!"),
      email: Yup.string().email("Email nhập sai định dạng !").required("Không được để trống!"),
    }),
    onSubmit: (values) => {
      dispatch(signUpAction(values, countDown));
    },
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Đăng Ký Tài Khoản</h1>
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="taiKhoan"
                placeholder="Nhập tài khoản"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
              />

              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <p className='text-red-500'>{formik.errors.taiKhoan}</p>
              )}

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="matKhau"
                placeholder="Mật Khẩu"
                value={formik.values.matKhau}
                onChange={formik.handleChange}

              />
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className='text-red-500'>{formik.errors.matKhau}</p>
              )}

              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="hoTen"
                placeholder="Nhập họ tên"
                value={formik.values.hoTen}
                onChange={formik.handleChange}

              />
              {formik.errors.hoTen && formik.touched.hoTen && (
                <p className='text-red-500'>{formik.errors.hoTen}</p>
              )}
              <input
                type="number"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="soDT"
                placeholder="Nhập số điện thoại"
                value={formik.values.soDT}
                onChange={formik.handleChange}

              />
              {formik.errors.soDT && formik.touched.soDT && (
                <p className='text-red-500'>{formik.errors.soDT}</p>
              )}
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p className='text-red-500'>{formik.errors.email}</p>
              )}

              <div className="mt-10">
                <button
                  countDown={countDown}
                  className="text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline
                          shadow-lg"
                  style={{ backgroundColor: "#33CC99" }}
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className=" pb-10">
        <div className="text-sm font-display font-semibold text-gray-700 text-center">
            <div>
              Bạn đã có tài khoản ?{" "}
              <button
                onClick={() => {
                  history.push("/signin");
                }}
                className="cursor-pointer"
                style={{ color: "#33CC99" }}
              >
                Đăng nhập ngay !
              </button>
            </div>
          </div>
      </div>

    </Fragment>
  );
}