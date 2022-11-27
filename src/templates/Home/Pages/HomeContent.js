import React, { Fragment } from "react";
import "./../Style/homeStyle.css";
import Lazyload from "react-lazyload";
import CarouselHome from "../Components/Home/CarouselHome";
import TabCoursesHome from "../Components/Home/tabCoursesHome";
import { history } from "../../../App";
import img from "./../../../../src/assets/images/img7.jpg"
import face1 from "./../../../../src/assets/images/face1.jpg"
import face2 from "./../../../../src/assets/images/face2.jpg"

import { Link, NavLink } from "react-router-dom";
export default function HomeContent(props) {
  return (
    <Fragment>
      <CarouselHome />
      <div className="container mx-auto sm:py-8 mb-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-4xl  py-3">
            KHÓA HỌC TẠI <span className="text-green-500">VLearning</span>
          </h2>
          <p className="text-md text-gray-500 font-normal px-2 mb-5 sm:px-80">
            Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm được ngay. Hơn 1000 bài tập và dự án thực tế</p>

        </div>
        <div className="grid grid-cols-2">
          <div>
            <img className="" src={img} alt="" style={{ width: '100%' }} />

          </div>
          <div className="" style={{ paddingTop: '50px' }}>

            <div className="grid grid-cols-2 gap-4">
              <div >
                <div className="mb-4">
                  <h4 className="text-lg">HỆ THỐNG HỌC TẬP</h4>
                  <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên</p>
                  <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</p>
                </div>
                <div>
                  <h4 className="text-lg">LỘ TRÌNH PHÙ HỢP</h4>
                  <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</p>
                  <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Huấn luyện để phát triển năng lực và niềm đam mê lập trình</p>

                </div>
              </div>

              <div>
                <div>
                  <h4 className="text-lg">GIẢNG VIÊN</h4>
                  <p><i class="fa-solid fa-circle-check text-green-500 mr-3"></i>
                    Tương tác cùng mentor và giảng viên qua phần thảo luận
                  </p>
                  <p> <i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Review code và đưa ra các nhận xét góp ý, tương tác thảo luận giữa các học viên</p>

                </div>
                <div>
                  <h4 className="text-lg">CHỨNG NHẬN</h4>
                  <p><i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Chấm bài và có thể vấn đáp trực tuyến để review</p>
                  <p><i class="fa-solid fa-circle-check text-green-500 mr-3"></i>Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo</p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/courses");
                }}
                className="bg-green-500 hover:bg-green-500 text-white font-semibold text-base p-5 mt-8 rounded-lg transition-colors"
              >
                Xem các khoá học
              </button>
            </div>
          </div>
        </div>
        <div className="heading text-center " style={{ margin: '50px' }}>
          <h2 className="text-4xl sm:text-4xl  py-3">
            LỘ TRÌNH VÀ DANH SÁCH CÁC <span className="text-green-500">KHOÁ HỌC</span>
          </h2>
          <p className="text-md text-gray-500 font-normal px-2 mb-5 sm:px-80">
            CyberSoft vạch ra lộ trình học lập trình một cách chi tiết,
            bài bản, chuyên nghiệp, chuẩn nghề ĐH Arizona -USA,
            100% thực hành theo dự án thực tế tránh lan man,
            luyện tập tư duy, logic nền tảng chuyên sâu dễ dàng phát triển lên senior, leader.
            Đi đúng lộ trình CyberSoft bạn sẽ tiết kiệm được thời gian, chi phí và có việc làm tốt nhất và bền vững để thăng tiến.
          </p>
          <div className="py-8">
            <Lazyload>
              <TabCoursesHome />
            </Lazyload>
          </div>
        </div>


        <div style={{ backgroundColor: 'rgb(204 204 204 / 12%)', padding: '50px' }}>
          <section class="text-gray-600 body-font">
            <div class="container px-5  mx-auto">
              <h3 class="text-4xl sm:text-4xl mb-12 text-center">ĐÁNH GIÁ TỪ HỌC VIÊN</h3>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-100 p-8 rounded">
                    <i class="fa-solid fa-quote-right text-4xl"></i>
                    <p class="leading-relaxed mb-6">Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                      .</p>
                    <a class="inline-flex items-center">

                      <img className=" rounded-full flex-shrink-0 object-cover object-center" src={face1} alt="" style={{ width: '60px', height: '60px' }} />

                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">Holden Caulfield</span>
                        <span class="text-gray-500 text-sm">UI DEVELOPER</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-100 p-8 rounded">
                    <i class="fa-solid fa-quote-right text-4xl"></i>
                    <p class="leading-relaxed mb-6">Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
                    </p>
                    <a class="inline-flex items-center">
                      <img className=" rounded-full flex-shrink-0 object-cover object-center" src={face2} alt="" style={{ width: '60px', height: '60px' }} />

                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">Alper Kamu</span>
                        <span class="text-gray-500 text-sm">DESIGNER</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>

  );
}
