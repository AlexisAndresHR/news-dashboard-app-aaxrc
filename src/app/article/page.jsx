"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchNews } from "../data"
import Image from "next/image"

export default function ArticleModal() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const artId = searchParams.get('id')

    const [article, setArticle] = useState({})

    useEffect(() => {
        fetchNews()
            .then(response => {
                const news = JSON.parse(JSON.stringify(response.articles))
                setArticle(
                    news.filter((item, idx) => idx === Number(artId))[0]
                )
            }).catch(err => console.log(err.message))
    }, [])

    return (
        <>
            <div className="fixed inset-0 bg-emerald-50/50 flex justify-center items-center">
                {/* Modal content */}
                <div className="p-8 w-96 shadow-lg rounded-md bg-white">
                    <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{article.title || 'New title'}</h3>
                    <Image
                        src={article.urlToImage || '/next.svg'}
                        width={300}
                        height={250}
                        alt={article.title}
                        className="object-cover m-4 self-center"
                    />
                    <div className="mt-2 px-7 py-3">
                        <p className="text-lg text-gray-500">{article.content || article.description}</p>
                    </div>
                    <div className="flex justify-center mt-4">

                        {/* Returns to home page and closes the modal */}
                        <button
                            onClick={() => router.back()}
                            className="px-4 py-2 bg-emerald-800 text-white text-base font-medium rounded-md shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                        >
                            Close
                        </button>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}