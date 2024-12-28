import ArticleList from "../_components/article/article-list";

export const metadata = {
  title: "Ask",
  description:
    "Explore community-driven Q&A where users seek insights and advice.",
};

export default function AskPage() {
  return (
    <>
      <div className="py-4">
        <h1 className="font-semibold text-xl text-neutral-900 mb-2">
          {metadata.title}
        </h1>
        <p className="text-xs text-neutral-500 mb-3">{metadata.description}</p>
      </div>
      <ArticleList type="ask" />
    </>
  );
}
