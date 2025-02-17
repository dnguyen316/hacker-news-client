import ArticleList from "../components/article/article-list";

export const metadata = {
  title: "New",
  description: "Discover the latest submissions in the Hacker News community.",
};

export default function Home() {
  return (
    <>
      <div className="py-4">
        <h1 className="font-semibold text-xl text-neutral-900 mb-2">
          {metadata.title}
        </h1>
        <p className="text-xs text-neutral-500 mb-3">{metadata.description}</p>
      </div>
      <ArticleList type="top" />
    </>
  );
}
