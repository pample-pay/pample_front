import Container from "@/components/Container";
import { Props } from "./types";

export default function ListsPage({ params }: Props) {
  return <Container>{params.id}</Container>;
}
