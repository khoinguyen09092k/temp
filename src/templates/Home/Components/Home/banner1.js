import React from "react";
import "./styles/carouselHome.css";
import ImgBanner from "./../../../../assets/images/bannner5.jpg";

export default function Banner1() {

  return (
    <div>
      <div className="" style={{display: 'flex',	justifyContent:'space-between'}}>
        <div className="" style={{marginLeft:'90px'}}>
          <p className="" style={{fontSize:'50px',marginBottom:'0px',fontWeight:'600'}} >
            Chào mừng 
          </p>
          <p  style={{fontSize:'50px',margin:'0px',fontWeight:'600'}}>
            đến với môi trường
          </p>
          <p style={{fontSize:'50px',fontWeight:'bold',color:'#33CC99',marginTop:'0px'}}>
            Vlearning
          </p>
        <button style={{backgroundColor:'#f2cd7d',color:'white',padding:'12px',borderRadius:'7px'}}>BẮT ĐẦU NÀO</button>
        </div>
        <img
          src={ImgBanner}
          alt="banner"
          width="60%"
        />
      </div>
    </div>
  );
    }

