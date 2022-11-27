import React, { Fragment, useEffect } from "react";
import "./../Components/Home/styles/tabCoursesHome.css";
import LazyLoad from "react-lazyload";
import { history } from "../../../App";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RatingsDetailsCourse from "../Components/Home/Ratings/ratingsDetailsCourse";
import {
  getCoursesAction,
  getDetailsCoursesAction,
  getCateCoursesAction,
} from "../../../redux/actions/coursesActions";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";

export default function DetailsCourse(props) {
  const { courseDetail } = useSelector((state) => state.CoursesReducer);

  const { arrCourses } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let { id } = props.match.params;
    //get detail url
    dispatch(getDetailsCoursesAction(id));
    dispatch(getCateCoursesAction);
    dispatch(getCoursesAction);
  }, [location.key]);

  const renderSimilarCourse = () => {
    let similarCourses = arrCourses.filter(
      (course) =>
        course.danhMucKhoaHoc?.maDanhMucKhoahoc ===
        courseDetail.danhMucKhoaHoc?.maDanhMucKhoahoc
    );

    return similarCourses
      ?.filter((course) => course.tenKhoaHoc !== courseDetail.tenKhoaHoc)
      .slice(0, 8)
      .map((course, index) => {
        return (
          <div
            key={index}
            className="courses_tab_home relative lg:mb-12 mx-5 px-3 lg:px-6 py-6 lg:py-12 bg-white rounded-3xl shadow-xl"
          >
            <div className="absolute top-0 left-0"></div>
            <div className="">
              <LazyLoad height={200}>
                <img
                  alt={course?.tenKhoaHoc}
                  className="w-full mb-2 object-cover object-center rounded-lg inline-block "
                  style={{
                    maxHeight: "150px",
                    minHeight: "150px",
                    border: "1px solid #eee",
                    
                  }}
                  src={course?.hinhAnh}
                />
              </LazyLoad>
              <p className="rounded-md lg:rounded-lg text-center text-white py-2 px-3 w-fit text-xs" style={{backgroundColor:'rgb(51 204 153 / 80%)'}}>
                        {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                      </p>
              <h2 className="courses_tab_home_heading text-xl lg:text-xl "  style={{fontWeight:'600',fontSize:'20px'}}>
                {course?.tenKhoaHoc}
              </h2>
              <p className="course_tab_home_description text-md lg:text-lg text-gray-600 leading-relaxed">
                {course?.moTa?.length > 100 ? (
                  <span>{course?.moTa?.slice(0, 90)}...</span>
                ) : (
                  <span>{course.luotXem}</span>
                )}
              </p>
              <button
                onClick={() => {
                  history.push(`/courses/detail/${course.maKhoaHoc}`);
                }}
                className="mx-auto cursor-pointer w-fit  ring-1 ring-yellow-400 text-yellow-400 bg-white hover:text-white hover:bg-yellow-400 
                lg:font-semibold text-sm sm:text-base px-5 py-2 rounded-lg transition-colors"
              >
               Xem chi tiết
              </button>
            </div>
          </div>
        );
      });
  };

  return (
    <Fragment>
      <div className="container mt-4 lg:mt-40 overflow-hidden">
        <div className="text-center flex flex-col items-center">
          <p className="mb-12">
            <Breadcrumbs />
          </p>
          <h3
            className=" rounded-md py-2 px-3 w-fit text-sm lg:text-lg"
            style={{ color: "#33CC99" }}
          >
            {courseDetail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </h3>
          <div className="grid grid-cols-2 gap-4 shadow-lg rounded-lg " style={{padding:'40px'}}>
            <div>
              <img src={courseDetail?.hinhAnh} style={{ width: '100%' }} />
            </div>
            <div className="" style={{borderLeft:'1px solid #ccc'}}>
              <h2 className="text-4xl lg:text-4xl mt-0" style={{textAlign:'left',fontWeight:'500', marginLeft:'20px'}}>
                {courseDetail.tenKhoaHoc}
              </h2>

              <div className="text-2xl" style={{textAlign:'left',fontWeight:'500', marginLeft:'20px'}}>
              <div className="block"
                >
                  <p>
                  <RatingsDetailsCourse /> Lượt xem: {courseDetail.luotXem}
                  </p>
                </div>
                
                <p>
                  Giá: <span className="" style={{fontSize:'30px', color:'#33CC99'}}>350$</span>
                </p>
                <p>Giảng viên: {courseDetail?.nguoiTao?.hoTen}</p>
              
                <p>Chứng chỉ: Có</p>
                <p>Lượng học viên: {courseDetail.soLuongHocVien}</p>
                <NavLink
              to={`/checkout/${courseDetail.maKhoaHoc}`}
              className="text-white hover:text-white font-semibold text-base"
            >
              <button className=" text-center text-xl  text-white bg-yellow-400 hover:bg-yellow-400 py-3 px-4 lg:p-4 rounded-lg transition-colors">
                Đăng ký
              </button>
            </NavLink>
               
              </div>

         
            

            </div>

          </div>
         
        </div>
        
        <div className=" mx-3 mt-3 lg:mt-24 grid lg:grid-flow-col lg:grid-cols-12 gap-4">
          <div className="img_collegeLevel_home col-span-12 lg:col-span-9">
            <h3 className="font-body text-2xl lg:text-2xl  lg:mb-2 leading-tight" style={{fontWeight:'600'}}>
              CHI TIẾT KHOÁ HỌC
            </h3>
            <p className="text-md lg:text-md lg:pr-12 text-justify text-gray-500">
              {courseDetail.moTa}
            </p>
          </div>
         
        </div>
        <div className="related-course mx-3">
          <h2 className="text-2xl lg:text-2xl mt-14 leading-tight" style={{fontWeight:'600'}}>
            KHOÁ HỌC LIÊN QUAN
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 -m-4">{renderSimilarCourse()}</div>
        </div>
      </div>
    </Fragment>
  );
}
