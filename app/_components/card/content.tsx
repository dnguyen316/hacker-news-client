import { Story } from "@/app/_constants/types";
import NewCard from "./new";

interface CardContentProps {
  contents: Story[];
}

const CardContent = (props: CardContentProps) => {
  const { contents } = props;

  return (
    <ul className="py-4">
      {contents &&
        contents.map((story: Story) => <NewCard key={story.id} data={story} />)}
    </ul>
  );
};

export default CardContent;
