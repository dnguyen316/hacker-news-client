import ArticleList from "../../components/article/article-list";

export const metadata = {
  title: "Jobs",
  description:
    "Connect with top tech job opportunities and company hiring posts.",
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
      <ArticleList type="job" />
    </>
  );
}
