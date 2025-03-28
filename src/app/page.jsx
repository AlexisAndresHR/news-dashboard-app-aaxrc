import { fetchNews } from "./data";
import ArticleCard from "./components/ArticleCard";

export default async function Home() {
  const apiData = await fetchNews()
  const news = JSON.parse(JSON.stringify(apiData.articles))

  return (
    <>
      {/* News cards container */}
      <div className="flex justify-center flex-wrap gap-6 m-4 p-6">
        {/* Card component/container */}
        {news.map((article, idx) => 
          <ArticleCard key={`article-${idx}`} article={article} artId={idx} />
        )}
      </div>
    </>
  );
}
