import { Props } from "./types";

export default function ListsPage({ params }: Props) {
  return (
    <div>
      {params.id} {params.name}
    </div>
  );
}
