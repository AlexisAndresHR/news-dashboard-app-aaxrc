import { fetchNews } from "./data";
// import Card from "./components/Card";
import Image from "next/image";


export default async function Home() {
  const apiData = await fetchNews()
  const news = JSON.parse(JSON.stringify(apiData.articles))
  const listOfNews = news.map((article, i) => 
      <div key={`article-${i}`} className="flex flex-col w-xl overflow-hidden rounded-lg shadow-lg inset-shadow-xs bg-emerald-50">
        <h2 className="text-xl font-semibold mt-4 mx-4 overflow-hidden overflow-ellipsis whitespace-nowrap">{article.title}</h2>
        <Image
          src={article.urlToImage || '/next.svg'}
          width={350}
          height={250}
          alt={article.title}
          className="object-cover m-4 self-center"
        />
        <p className="ml-4">{article.description || 'This article appears to have missing description content.'}</p>
        <br />
        <p className="ml-4">Source: <i>{article.source.name}</i></p>
        <p className="mb-4 ml-4">Date: <i>{article.publishedAt.substring(0, 10)}</i></p>
      </div>
    )

  return (
    <>
      {/* Page title/header */}
      <h1 className="text-3xl font-bold text-center bg-emerald-800 text-white h-25 pt-7">News Demo App</h1>
      {/* News cards container */}
      <div className="flex justify-center flex-wrap gap-6 m-4 p-6">
        {/* Card component/container */}
        {listOfNews}
      </div>
    </>
  );
}
