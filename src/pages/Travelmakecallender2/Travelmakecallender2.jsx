import React from "react";
import { Frame } from "../../components/Frame";
import "./style.css";
import { PageHeader } from "src/components/PageHeader";
import { NextButton } from "src/components/NextButton";
import Arrows from "src/assets/Arrows.svg"
import SelectDate from "src/assets/SelectDate.svg"
import { useNavigate } from "react-router-dom"; // 수정된 부분

export const Travelmakecallender2 = () => {
  const navigate = useNavigate();
  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false
  };
  const handleClick = () => {
    navigate("/travel-callender3"); // 특정 경로로 이동
  };

  return (
    <div className="travelmakecallender-wrapper">
      <PageHeader className="page-header-instance" props={headerOption} />

      <div className="text-wrapper-6">여행날짜는 언제인가요?</div>
      <div className="dot-3">
        <div className="pagination-active-3" />
        <div className="pagination-deactive-5" />
        <div className="pagination-deactive-6" />
      </div>
      <div className="month-selector-3">
        <div className="text-wrapper-7">October 2024</div>
      </div>
      <img className="arrows-3" alt="Arrows" src={Arrows} />
      <div className="overlap-group-2">
        <div className="callender-3">
          <div className="frame-16">
            <div className="frame-17">
              <div className="text-wrapper-8">SU</div>
            </div>
            <div className="frame-17">
              <div className="text-wrapper-8">Mo</div>
            </div>
            <div className="frame-17">
              <div className="text-wrapper-8">Tu</div>
            </div>
            <div className="frame-17">
              <div className="text-wrapper-8">We</div>
            </div>
            <div className="frame-17">
              <div className="text-wrapper-8">Th</div>
            </div>
            <div className="frame-17">
              <div className="text-wrapper-8">Fr</div>
            </div>
            <div className="frame-18">
              <div className="text-wrapper-8">Sa</div>
            </div>
          </div>
          <div className="frame-19">
            <Frame className="frame-119-instance" text="" />
            <Frame className="frame-119-instance" text="" />
            <Frame className="frame-119-instance" text="" />
            <Frame className="frame-119-instance" text="1" />
            <Frame className="frame-119-instance" text="2" />
            <Frame className="frame-119-instance" text="3" />
            <Frame className="frame-119-instance" text="4" />
          </div>
          <div className="frame-19">
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">5</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">6</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">7</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">8</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">9</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">10</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">11</div>
              </div>
            </div>
          </div>
          <div className="frame-19">
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">12</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">13</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">14</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">15</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">16</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">17</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4" onClick={handleClick}>18</div>
              </div>
            </div>
          </div>
          <div className="frame-19">
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">19</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">20</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">21</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">22</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">23</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">24</div>
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-17">
                <div className="SU-4">25</div>
              </div>
            </div>
          </div>
          <div className="frame-21">
            <div className="frame-22">
              <div className="frame-17">
                <div className="SU-4">26</div>
              </div>
            </div>
            <div className="frame-22">
              <div className="frame-17">
                <div className="SU-4">27</div>
              </div>
            </div>
            <div className="frame-22">
              <div className="frame-17">
                <div className="SU-4">28</div>
              </div>
            </div>
            <div className="frame-22">
              <div className="frame-17">
                <div className="SU-4">29</div>
              </div>
            </div>
            <div className="frame-22">
              <div className="frame-17">
                <div className="SU-4">30</div>
              </div>
            </div>
            <div className="frame-22">
              <div className="frame-17">
                <div className="SU-4">{""}</div>
              </div>
            </div>
            <div className="frame-23">
              <div className="frame-17">
                <div className="SU-4">{""}</div>
              </div>
            </div>
          </div>
        </div>
        <img className="select-date" alt="Select date" src={SelectDate} />
      </div>

      <NextButton className="next-button-instance" />
    </div>
  );
};
