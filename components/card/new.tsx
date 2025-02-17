import { Story } from "@/lib/constants/types";
import Link from "next/link";
import ArticleLineIcon from "../icons/article-line";
import ArrowDoubleLineIcon from "../icons/arrow-double-line";
import PenIcon from "../icons/pen";
import ChatIcon from "../icons/chatIcon";
import TimeAgo from "../timeago/timeago";

interface NewCardPropsInterface {
  data: Story;
}

const NewCard = (props: NewCardPropsInterface) => {
  const { title, url, score, author, time, commentsCount, slug, type } =
    props.data;

  const shortenUrl = url?.split("https://").join("").split("/")[0];
  const articleDetailUrl = `/${type}/${slug}`;
  return (
    <li className="flex py-6 items-center w-full">
      {/* icon */}
      <div className="flex items-center mr-[16px] justify-center h-[40px] rounded-full w-[40px] bg-stone-50">
        <ArticleLineIcon />
      </div>
      {/* content */}
      <div>
        <Link
          href={articleDetailUrl}
          className="hover:underline group hover:opacity-80 transition"
        >
          <h2 className="text-sm font-medium group-hover:opacity-80">
            {title}
          </h2>
        </Link>

        {url && (
          <Link
            className="text-xs font-normal text-neutral-600"
            href={url!}
            target="_blank"
          >
            ({shortenUrl})
          </Link>
        )}
        <div className="flex md:items-center md:flex-row flex-col">
          <div className="mb-4 mt-2 flex items-center text-neutral-600 text-xs">
            <div className="flex items-center gap-1 mr-3">
              <span>
                <ArrowDoubleLineIcon />
              </span>{" "}
              {score} points
            </div>
            <div className="flex items-center gap-1 mr-3">
              <span>
                <PenIcon />
              </span>{" "}
              by <span className="text-orange-600">{author}</span>
            </div>
            <div className="flex items-center gap-1 md:mr-3">
              <TimeAgo time={time} />
            </div>
          </div>
          <div className="flex gap-1 items-start text-xs md:mt-2 md:mb-4 text-neutral-600">
            <span>
              <ChatIcon />
            </span>
            {commentsCount} comments
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewCard;
