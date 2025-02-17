import { Metadata } from "next";
import CommentSection from "@/components/comment/comment-section";
import HTMLContent from "@/components/html-content/html-content";
import ArrowDoubleLineIcon from "@/components/icons/arrow-double-line";
import ChatIcon from "@/components/icons/chatIcon";
import PenIcon from "@/components/icons/pen";
import TimeAgo from "@/components/timeago/timeago";
import { StoryDetail } from "@/lib/constants/types";
import { getArticleById } from "@/actions/article";

interface ArticleDetailPageProps {
  params: {
    type: string;
    slug: string;
  };
}

// Generate Metadata for SEO
export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { type, slug } = await params;

  return {
    title: `Hacker News | ${slug.replace(/-/g, " ")} ${type} Articles`,
    description: `Read about ${slug.replace(
      /-/g,
      " "
    )} in the ${type} category.`,
    openGraph: {
      title: `${slug.replace(/-/g, " ")}`,
      description: `Discover more about ${slug.replace(
        /-/g,
        " "
      )} in the ${type} category.`,
    },
  };
}

const ArticleDetailPage = async ({ params }: ArticleDetailPageProps) => {
  const { slug } = await params;

  const id = slug.split("-").at(-1);

  const res = await getArticleById(Number(id));

  const storyDetail: StoryDetail = res.data.storyDetailById;
  const {
    title,
    author,
    time,
    score,
    commentsCount,
    text: content,
  } = storyDetail;

  if (!content) {
    <div>Not content found</div>;
  }

  return (
    <article className="flex gap-12 flex-col">
      <header>
        <h2 className="text-4xl font-semibold text-neutral-900">{title}</h2>
        <div className="flex md:items-center md:flex-row flex-col">
          <div className="mb-4 mt-2 flex items-center text-neutral-600 text-xs">
            <div className="flex items-center gap-1 mr-3 text-sm">
              <span>
                <ArrowDoubleLineIcon />
              </span>{" "}
              {score} points
            </div>
            <div className="flex items-center gap-1 mr-3 text-sm">
              <span>
                <PenIcon />
              </span>{" "}
              by <span className="text-orange-600">{author}</span>
            </div>
            <div className="flex items-center gap-1 md:mr-3 text-sm">
              <TimeAgo time={time} />
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm md:mt-2 md:mb-4 text-neutral-600">
            <span>
              <ChatIcon />
            </span>
            {commentsCount} comments
          </div>
        </div>
      </header>
      <HTMLContent content={content} />
      <CommentSection articleId={Number(id)} commentCounts={commentsCount} />
    </article>
  );
};

export default ArticleDetailPage;
