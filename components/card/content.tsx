import { Story } from "@/lib/constants/types";
import NewCard from "./new";

interface CardContentProps {
  contents: Story[];
  ref: (node: HTMLDivElement) => void;
}

const CardContent = (props: CardContentProps) => {
  const { contents, ref } = props;

  return (
    <ul className="py-4">
      {contents &&
        contents.map((story: Story, index) => {
          const isLastStory = index === contents.length - 1;
          return (
            <div key={story.id} ref={isLastStory ? ref : undefined}>
              <NewCard data={story} />
            </div>
          );
        })}
    </ul>
  );
};

export default CardContent;
