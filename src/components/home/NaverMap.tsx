import useNaverMap from "@/hooks/useNaverMap";

export default function NaverMap() {
  const mapElement = useNaverMap();
  return (
    <>
      <div
        ref={mapElement}
        className="w-[40rem] h-[40rem] rounded-2xl border"
      ></div>
      <script
        type="text/javascript"
        src="http://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8bqnf5try9"
        async
      ></script>
    </>
  );
}
