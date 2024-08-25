import React, { useEffect, useState } from "react";
import { BigOutline } from "../../components/BigOutline";
import ProfileDog from "src/assets/ProfileDog.svg";
import ProfileRabbit from "src/assets/ProfileRabbit.svg";
import ProfileBear from "src/assets/ProfileBear.svg";
import ProfileFox from "src/assets/ProfileFox.svg";
import ProfileCat from "src/assets/ProfileCat.svg";
import ProfileKoala from "src/assets/ProfileKoala.svg";
import ProfileLion from "src/assets/ProfileLion.svg";

import "./style.css";

export const SignUp = () => {

  let [name, setName] = useState("");
  let [nickname, setNickame] = useState("");
  let [address, setAddress] = useState("");

  useEffect(()=>{
    console.log({name});
  }, [name])
  
  return (
    <div className="sign-up">
      <img className="DTC" alt="Dtc" src="https://c.animaapp.com/1GZ86Wh0/img/dtc.svg" />
      <div className="label-2">프로필 선택</div>
      <div className="profile-select">
        <div className="profile-select-frame">
          <div className="div">
            <img className="img" alt="Profile dog" src={ProfileDog} />
            <img className="img" alt="Profile rabbit" src={ProfileRabbit} />
            <img className="img" alt="Profile bear" src={ProfileBear} />
            <img className="img" alt="Profile fox" src={ProfileFox} />
            <img className="img" alt="Profile cat" src={ProfileCat} />
            <img className="img" alt="Profile koala" src={ProfileKoala} />
            <img className="img" alt="Profile lion" src={ProfileLion} />
          </div>
        </div>
      </div>
      <BigOutline className="big-outline-instance-name" label={"이름"} setInputValue={setName}/>
      <BigOutline className="big-outline-instance-nickname" label={"닉네임"} setInputValue={setNickame}/>
      <BigOutline className="big-outline-instance-address" label={"상세주소"} setInputValue={setAddress}/>
      <img className="next-button" alt="Next button" src="https://c.animaapp.com/1GZ86Wh0/img/nextbutton.svg" />
    </div>
  );
};
