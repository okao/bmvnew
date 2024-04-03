"use client"

import { type Post } from "@/types/data/posts"

import { useEffect, useState } from "react"
import Image from "next/image"
import moment from "moment"

import Loading from "@/components/layout/loading"

export type MetaData = {
  totalCount: number
  from: number
  to: number
  pageNumber: number
  currentPage: number
  limit: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export type Meta = {
  metaData: MetaData
}

// Extend the PaginationProps interface to include metaData
interface PaginationProps {
  nextPage: (metas: MetaData) => void
  previousPage: (metas: MetaData) => void
  lastPage: (metas: MetaData) => void
  firstPage: (metas: MetaData) => void
  loadMore: (metas: MetaData) => void
  metaData: MetaData
}

const fetchPosts = async (
  limit: number = 12,
  from: number = 0,
  search: string = "",
  direction: string = ""
) => {
  const response = await fetch(
    `/api/posts?limit=${limit}&from=${from}&search=${search}&direction=${direction}`
  )
  const data = await response.json()
  return data
}

export default function Posts() {
  const [result, setResult] = useState({
    data: [],
    metaData: {},
    search: "",
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")

  const handleSearch = async () => {
    const data = await fetchPosts(12, 0, search)
    setResult(data)
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await fetchPosts()
      setResult(data)
    } catch (error) {
      // setError(error);
    } finally {
      setLoading(false)
    }
  }

  const fetchNextPosts = async (metaData: MetaData) => {
    setLoading(true)
    const { from, limit } = metaData
    const data = await fetchPosts(limit, from, "", "next")
    setResult(data)
    setLoading(false)
  }

  const fetchPreviousPosts = async (metaData: MetaData) => {
    setLoading(true)
    const { from, limit } = metaData
    const data = await fetchPosts(limit, from, "", "previous")
    setResult(data)
    setLoading(false)
  }

  const fetchLastPosts = async (metaData: MetaData) => {
    setLoading(true)
    const { totalCount, limit } = metaData
    const data = await fetchPosts(limit, totalCount, "", "lastPage")
    setResult(data)
    setLoading(false)
  }

  const fetchFirstPosts = async (metaData: MetaData) => {
    setLoading(true)
    const { limit } = metaData
    const data = await fetchPosts(limit, 0, "", "firstPage")
    setResult(data)
    setLoading(false)
  }

  const fetchMorePosts = async (metaData: MetaData) => {
    setLoading(true)
    const { from, limit } = metaData

    //add 12 to the current limit
    let newLimit = limit + 12

    //maximun allowed limit is 500
    if (newLimit >= 50) {
      //disable the load more button
      newLimit = 50

      //find a way to disable the load more button id loadMoreButton
      const loadMoreButton = document.getElementById("loadMoreButton")

      if (loadMoreButton) {
        loadMoreButton.setAttribute("disabled", "true")

        //change the button text
        loadMoreButton.innerHTML = "No more posts"

        //change the button style
        loadMoreButton.style.display = "none"
      }
    }

    //find a way to disable the search input area
    const searchInputArea = document.getElementById("searchInputArea")

    if (searchInputArea) {
      searchInputArea.style.display = "none"
    }

    const data = await fetchPosts(newLimit, from, "", "loadMore")
    setResult(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h3>Error: </h3>
  }

  return (
    <div className="text-center">
      <div className="p-2 md:p-4" id="searchInputArea">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-lg p-2 text-gray-800 md:p-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
        />
      </div>
      {result.data ? (
        <Pagination
          metaData={result?.metaData as MetaData}
          nextPage={() => fetchNextPosts(result?.metaData as MetaData)}
          previousPage={() => fetchPreviousPosts(result?.metaData as MetaData)}
          lastPage={() => fetchLastPosts(result?.metaData as MetaData)}
          firstPage={() => fetchFirstPosts(result?.metaData as MetaData)}
          loadMore={() => fetchMorePosts(result?.metaData as MetaData)}
        />
      ) : null}
      <ul className="grid grid-cols-1 gap-4 p-3 md:mt-12 lg:grid-cols-2 xl:grid-cols-4">
        {result.data.map((post: Post) => (
          <li
            key={post.id}
            className="w-full rounded-xl bg-gray-100 p-4 text-gray-800 shadow-xl"
          >
            <div className="content flex py-2">
              <Image
                src={
                  "https://source.unsplash.com/random/200x200/?sig=" + post.id
                }
                alt={post.title}
                width={200}
                height={200}
                className="float-left mx-auto max-h-[150px] w-full max-w-[150px] rounded-lg p-2"
                priority={false}
                // loader={() => imageLoader(post.index as number)}
                onLoad={() => {
                  setLoading(true)
                }}
                onLoadingComplete={() => {
                  setLoading(false)
                }}
              />
              <div className="item-body h-96 text-wrap px-4 text-justify">
                <h3 className="text-sm font-semibold">
                  {post?.index?.toString() + ". "}
                  {post.title}
                </h3>

                <p className="line-clamp-6 overflow-hidden text-ellipsis pt-10 indent-12 text-xs leading-5">
                  {post.content}
                </p>
              </div>
            </div>
            <hr />
            <br />
            <p className="float-right text-xs">
              {moment(post.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Pagination: React.FC<PaginationProps> = ({
  nextPage,
  previousPage,
  lastPage,
  firstPage,
  loadMore,
  metaData,
}: PaginationProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex w-full justify-between p-4">
        {metaData?.hasPreviousPage ? (
          <div className="flex gap-x-2">
            <button
              className="rounded-lg bg-gray-300 p-2"
              onClick={() => {
                firstPage(metaData)
              }}
            >
              First Page
            </button>
            <button
              className="rounded-lg bg-gray-300 p-2"
              onClick={() => {
                previousPage(metaData)
              }}
            >
              Previous
            </button>
          </div>
        ) : null}

        {/* Optionally, display pagination information */}
        <p>
          Page {metaData?.currentPage} of {metaData?.totalCount}
        </p>

        {metaData?.hasNextPage ? (
          <div className="flex gap-x-2">
            <button
              className="rounded-lg bg-primary p-2"
              onClick={() => {
                nextPage(metaData)
              }}
            >
              Next
            </button>
            <button
              className="rounded-lg bg-primary p-2"
              onClick={() => {
                lastPage(metaData)
              }}
            >
              Last Page
            </button>
          </div>
        ) : null}
      </div>
      <div className="flex w-full justify-center gap-4 text-gray-200">
        <button
          className="mx-4 w-full rounded-lg bg-primary p-3"
          onClick={() => {
            loadMore(metaData)
          }}
          id="loadMoreButton"
        >
          Load More
        </button>
        {metaData?.limit > 12 ? (
          <button
            className="mx-4 w-full rounded-lg bg-primary p-3"
            onClick={() => {
              window.location.reload()
            }}
            id="resetButton"
          >
            Reset Load More
          </button>
        ) : null}
      </div>
    </div>
  )
}
