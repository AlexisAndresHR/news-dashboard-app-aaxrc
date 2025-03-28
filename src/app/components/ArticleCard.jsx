import Image from "next/image"
import Link from "next/link"

export default function ArticleCard({ article, artId }) {
    return (
        <>
        <div className="flex flex-col w-xl overflow-hidden rounded-lg shadow-lg inset-shadow-xs bg-emerald-50">
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
            <div className="flex justify-center mt-4 mb-4">
                <Link 
                    href={`/article?id=${artId}`}
                    className="px-4 py-2 bg-emerald-800 text-white text-base font-medium rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                > Read more... </Link>
            </div>
        </div>
        </>
    )
}