"use client";
import NaverMap from "../components/home/NaverMap";
import DrugstoreList from "../components/home/DrugstoreList";
import Container from "@/components/Container";
import useGetUserLocation from "@/hooks/home/useGetUserLocation";

export default function Home() {
  const { isLoading } = useGetUserLocation();
  return (
    <Container className="justify-evenly">
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <NaverMap />
          <DrugstoreList />
        </>
      )}
      <script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8bqnf5try9"
        async
      ></script>
    </Container>
  );
}
