import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { PageHeader } from "src/components/PageHeader";
import "./style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "src/apis/axios";

export const KakaoMap = () => {
  const [title, setTitle] = useState("");
  const [thema, setThema] = useState("");
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const { detailId } = useParams();

  const fetchData = async () => {
    try {
      const response = await instance.get(`/api/record/${detailId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // 응답이 올 때까지 기다린 후 데이터 설정
      const data = response.data.data;
      setTitle(data.title);
      setThema(data.thema);
      setAddress(data.address);
      setLat(data.lat);
      setLon(data.lon);

      setLoading(false); // 데이터 로드가 완료되면 로딩 상태를 false로 변경
    } catch (error) {
      console.error("여행 상세정보를 불러오는 중 에러 발생:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let headerOption = {
    pageTitle: "상세 위치정보",
    backIcon: true,
    writeIcon: false,
  };

  if (loading) {
    return <div></div>; // 로딩 중일 때 보여줄 화면
  }

  return (
    <div className="kakaomap">
      <PageHeader className="page-header-instance" props={headerOption} />
      <Map
        center={{ lat: lat, lng: lon }}
        style={{
          width: "375px",
          height: "721px",
          top: "91px",
        }} // 지도 크기
        level={4} // 지도 확대 레벨
      >
        <MapMarker
          position={{ lat: lat, lng: lon }}
          image={{
            src: "https://w7.pngwing.com/pngs/96/889/png-transparent-marker-map-interesting-places-the-location-on-the-map-the-location-of-the-thumbnail.png", // 마커 이미지 URL
            size: {
              width: 24,
              height: 35,
            }, // 마커 이미지 크기
            options: {
              offset: {
                x: 12,
                y: 35,
              }, // 마커의 좌표에 이미지의 어느 지점을 맞출지 설정
            },
          }}
        >
        </MapMarker>
      </Map>

      <div className="place-info-rectangle">
        <div className="overlap-group">
          <div className="text-wrapper-2">{title}</div>
          <div className="text-wrapper">{thema}</div>
          <img
            className="map-pin"
            alt="Map pin"
            src="https://c.animaapp.com/UNzHWVqf/img/map-pin@2x.png"
          />
          <p className="div">{address}</p>
        </div>
      </div>
    </div>
  );
};
