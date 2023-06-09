import NaverMap from "../components/home/NaverMap";
import DrugstoreList from "../components/home/DrugstoreList";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container className="justify-evenly">
      <NaverMap />
      <DrugstoreList />
    </Container>
  );
}
