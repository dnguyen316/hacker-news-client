import { formatDistanceToNow } from "date-fns";
import TimeLineIcon from "../icons/timeLine";

const TimeAgo = ({ time }: { time: Date }) => {
  const date = new Date(Number(time));

  return (
    <>
      <span>
        <TimeLineIcon />
      </span>
      {formatDistanceToNow(date, { addSuffix: true })}
    </>
  );
};

export default TimeAgo;
