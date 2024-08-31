import React from "react";
import { Frame } from "../../components/Frame";
import "./style.css";
import { PageHeader } from "src/components/PageHeader";
import { NextButton } from "src/components/NextButton";
import Arrows from "src/assets/Arrows.svg"

export const Travelmakecallender1 = () => {

  let headerOption = {
    pageTitle: "",
    backIcon: true,
    writeIcon: false
  };

  return (
    <div className="travelmakecallender-screen">
      <PageHeader className="page-header-instance" props={headerOption} />

      <div className="dot-2">
        <div className="pagination-active-2" />
        <div className="pagination-deactive-3" />
        <div className="pagination-deactive-4" />
      </div>
      <div className="text-wrapper-3">여행날짜는 언제인가요?</div>
      <div className="month-selector-2">
        <div className="text-wrapper-4">October 2024</div>
      </div>
      <img className="arrows-2" alt="Arrows" src={Arrows} />
      <div className="callender-2">
        <div className="frame-8">
          <div className="frame-9">
            <div className="text-wrapper-5">SU</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-5">Mo</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-5">Tu</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-5">We</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-5">Th</div>
          </div>
          <div className="frame-9">
            <div className="text-wrapper-5">Fr</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-5">Sa</div>
          </div>
        </div>
        <div className="frame-11">
          <Frame className="frame-instance" text="" />
          <Frame className="frame-instance" text="" />
          <Frame className="frame-instance" text="" />
          <Frame className="frame-instance" text="1" />
          <Frame className="frame-instance" text="2" />
          <Frame className="frame-instance" text="3" />
          <Frame className="frame-instance" text="4" />
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">5</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">6</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">7</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">8</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">9</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">10</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">11</div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">12</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">13</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">14</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">15</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">16</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">17</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">18</div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">19</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">20</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">21</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">22</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">23</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">24</div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-9">
              <div className="SU-3">25</div>
            </div>
          </div>
        </div>
        <div className="frame-13">
          <div className="frame-14">
            <div className="frame-9">
              <div className="SU-3">26</div>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-9">
              <div className="SU-3">27</div>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-9">
              <div className="SU-3">28</div>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-9">
              <div className="SU-3">29</div>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-9">
              <div className="SU-3">30</div>
            </div>
          </div>
          <div className="frame-14">
            <div className="frame-9">
              <div className="SU-3">{""}</div>
            </div>
          </div>
          <div className="frame-15">
            <div className="frame-9">
              <div className="SU-3">{""}</div>
            </div>
          </div>
        </div>
      </div>

      <NextButton className="next-button-instance" />
    </div>
  );
};
