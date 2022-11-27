import React, { useEffect } from "react";
import Lazyload from "react-lazyload";
import { history } from "../../../../App";
import "./styles/tabCoursesHome.css";
import { useSelector, useDispatch } from "react-redux";
import { Tabs } from "antd";
import {
  getCateCoursesAction,
  getCoursesAction,
} from "../../../../redux/actions/coursesActions";

export default function TabCoursesHome(props) {
  const { arrCateCourse } = useSelector(
    (state) => state.CategoryCoursesReducer
  );

  const { arrCourses } = useSelector((state) => state.CoursesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCateCoursesAction);
    dispatch(getCoursesAction);
  }, []);

  const { TabPane } = Tabs;

  const renderCourses = () => {
    return arrCateCourse?.map((cateCourses, index) => {
      let courseByCate = arrCourses.filter(
        (course) =>
          course.danhMucKhoaHoc?.maDanhMucKhoahoc === cateCourses.maDanhMuc
      );
      console.log({ courseByCate });
      return (
        <TabPane tab={cateCourses.tenDanhMuc} key={index}>
          <section className="text-gray-600 body-font mx-5 ">
            <div className="container mb-8 sm:mb-0  sm:py-16 px-3 mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 -m-3">
                {courseByCate.slice(0, 8).map((course, index) => {
                  return (
                    <div
                      key={index}
                      className="courses_tab_home relative  lg:mb-10 mx-2 sm:mx-5 px-3 sm:px-6  sm:py-12 bg-white rounded-3xl shadow-xl"
                    >
                      <div className="absolute top-0 left-0"></div>
                      <div className="">
                        <Lazyload height={200}>
                          <img
                            alt={course?.tenKhoaHoc}
                            className="w-full mb-2 object-cover object-center rounded-lg inline-block"
                            style={{
                              maxHeight: "150px",
                              minHeight: "150px",
                              border: "1px solid #eee",
                            }}
                            src={course?.hinhAnh}
                          />
                        </Lazyload>
                        <p className="rounded-md lg:rounded-lg text-center text-white  py-2 px-3 w-fit text-xs" style={{backgroundColor:'rgb(51 204 153 / 80%)'}}>
                        {course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                      </p>
                        <h4 className="courses_tab_home_heading  text-xl sm:text-xl" style={{fontWeight:'600',fontSize:'20px',textAlign:'left'}}>
                          {course?.tenKhoaHoc}
                        </h4>
                        <p className="course_tab_home_description mb-0  text-gray-600 leading-relaxed" style={{fontSize:'16px',textAlign:'left'}}>
                          {course?.moTa?.length > 100 ? (
                            <span>{course?.moTa?.slice(0, 90)}...</span>
                          ) : (
                            <span>{course.moTa}</span>
                          )}
                        </p>
                        <div
                          onClick={() => {
                            history.push(`/courses/detail/${course.maKhoaHoc}`);
                          }}
                          className="mx-auto cursor-pointer w-fit  ring-1 ring-yellow-400 text-yellow-400 bg-white hover:text-white hover:bg-yellow-400 
                          lg:font-semibold text-sm sm:text-base px-5 py-2 rounded-lg transition-colors"
                        >
                          Xem chi tiết 
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              onClick={() => {
                history.push(`/courses/${cateCourses.maDanhMuc}`);
              }}
              className="mb-8 sm:mb-20 bg-green-400 hover:bg-green-400 text-white font-semibold text-base  sm:p-5 rounded-lg transition-colors"
            >
              Xem thêm
            </button>
          </section>
        </TabPane>
      );
    });
  };

  return (
    <div className="sm:mx-0">
      <Tabs
        centered
        size={"large"}
        type="card"
        tabBarGutter={30}
        animated={false}
      >
        {renderCourses()}
      </Tabs>
    </div>
  );
}
