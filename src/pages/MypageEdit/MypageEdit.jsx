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
import { NextButton } from "src/components/NextButton";
import { BigOutlineSelect } from "src/components/BigOutlineSelect";
import { instance } from "src/apis/axios";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "src/components/PageHeader";

export const MypageEdit = () => {
  const navigate = useNavigate();
  let [user, setUser] = useState({});

  let headerOption = {
    pageTitle : "Edit Profile",
    backIcon : true,
  }

  const profile = [
    ProfileDog,
    ProfileRabbit,
    ProfileBear,
    ProfileFox,
    ProfileCat,
    ProfileKoala,
    ProfileLion,
  ];

  const [selectProfile, setSelectProfile] = useState(-1);
  const [name, setName] = useState("");
  const [nickname, setNickame] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [mbti, setMbti] = useState("");
  const [gender, setGender] = useState("");

  const mbtiList = [
    "ENFJ",
    "ENFP",
    "ESFJ",
    "ESFP",
    "ENTJ",
    "ENTP",
    "ESTJ",
    "ESTP",
    "INFJ",
    "INFP",
    "ISFJ",
    "ISFP",
    "INTJ",
    "INTP",
    "ISTJ",
    "ISTP",
  ];

  const patchSignUp = async () => {
    // 나이 변환 (ex: 20대 -> 20)
    let ageValue = parseInt(age.replace("대", ""));

    // 성별 변환 (남자 -> true, 여자 -> false)
    let genderValue = gender === "남자";

    // MBTI 변환 (리스트에서 인덱스를 integer로 변환)
    let mbtiValue = mbtiList.indexOf(mbti);

    // 프로필 이미지 변환 (선택된 프로필 인덱스)
    let imageValue = selectProfile;

    const requestData = {
      name: name,
      nickname: nickname,
      age: ageValue,
      address: address,
      gender: genderValue,
      mbti: mbtiValue,
      image: imageValue,
    };

    try {
      const response = await instance.patch("/api/sign-up", requestData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json", // Content-Type을 명시적으로 설정
        },
      });

      if (response.status === 201) {
        console.log("회원정보 수정 성공:", response.data);
        navigate("/mypage");
      } else {
        console.error("회원정보 수정 실패:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    instance
      .get("/api/mypage/edit-profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        
        // 서버에서 받은 데이터로 상태를 직접 설정
        setUser(data); // user 상태 설정
        setSelectProfile(data.image); // 프로필 설정
        setName(data.name); // 이름 설정
        setNickame(data.nickname); // 닉네임 설정
        setAddress(data.address); // 주소 설정
        setAge(`${data.age}대`); // 나이 설정
        setMbti(mbtiList[data.mbti]); // MBTI 설정
        setGender(data.gender ? "남자" : "여자"); // 성별 설정
  
        // 콘솔 로그를 통해 상태 값 확인 (디버깅용)
        console.log(data);
      })
      .catch((error) => {
        console.error("Error exchanging code:", error);
      });
  }, []);

  return (
    <div className="my-page-edit">
      <PageHeader className="page-header-instance" props={headerOption}/>
      <div className="label-3">프로필 선택</div>
      <div className="profile-select">
        <div className="profile-select-frame">
          <div className="div">
            {profile.map((eachProfile, i) => (
              <img
                className={i === selectProfile ? "img-select" : "img"}
                alt="Profile"
                src={eachProfile}
                onClick={() => setSelectProfile(i)}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <BigOutline
        className="big-outline-instance-name"
        label={"이름"}
        initialValue={user.name}
        setInputValue={setName}
      />
      <BigOutline
        className="big-outline-instance-nickname"
        label={"닉네임"}
        initialValue={user.nickname}
        setInputValue={setNickame}
      />
      <BigOutline
        className="big-outline-instance-address"
        label={"상세주소"}
        initialValue={user.address}
        setInputValue={setAddress}
      />
      <BigOutlineSelect
        className="big-outline-select-instance-age"
        label={"나이"}
        optionList={[
          "10대",
          "20대",
          "30대",
          "40대",
          "50대",
          "60대",
          "70대",
          "80대",
        ]}
        selectedValue={age}
        setSelectedValue={setAge}
      />
      <BigOutlineSelect
        className="big-outline-select-instance-mbti"
        label={"mbti"}
        optionList={mbtiList}
        selectedValue={mbti}
        setSelectedValue={setMbti}
      />
      <BigOutlineSelect
        className="big-outline-select-instance-gender"
        label={"성별"}
        optionList={["남자", "여자"]}
        selectedValue={gender}
        setSelectedValue={setGender}
      />
      <div onClick={patchSignUp}>
        <NextButton className="next-button-instance" />
      </div>
    </div>
  );
};
