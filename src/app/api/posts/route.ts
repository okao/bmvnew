import { revalidatePath } from "next/cache"
import { NextRequest, type NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

let db: PrismaClient

//check if we are running in production mode
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient()
} else {
  //check if there is already a connection to the database
  if (!global.db) {
    global.db = new PrismaClient()
  }
  //use the existing connection
  db = global.db
}

async function GetHandler(req: any, res: NextResponse) {
  revalidatePath("/api/posts")

  //delay the response by 5 second
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const url = new URL(req.url)
  const take = url.searchParams.get("take")
  const lastCursor = url.searchParams.get("lastCursor")
  const search = url.searchParams.get("search")
  const direction = url.searchParams.get("direction")
  let offset = url.searchParams.get("from")
    ? parseInt(url.searchParams.get("from") as string)
    : 0
  const limit = url.searchParams.get("limit")
    ? parseInt(url.searchParams.get("limit") as string)
    : 10

  const where = search
    ? {
        OR: [
          {
            title: {
              contains: search,
            },
          },
          {
            content: {
              contains: search,
            },
          },
          {
            id: search,
          },
        ],
      }
    : {}

  if (direction === "loadMore") {
    // const resultData = await db.post.findMany({
    //   take: limit,
    //   skip: offset,
    // })

    const resultData = await db.post.findMany({
      take: limit,
      skip: offset,
      where,
    })

    //add index to the result
    const resultDataFull = resultData.map((post, index) => {
      return {
        ...post,
        index: offset + index + 1,
      }
    })

    const resultDataLength = resultData.length

    const data = {
      data: resultDataFull,
      metaData: {
        totalCount: resultDataLength,
        from: offset,
        to: offset + limit,
        pageNumber: 1,
        currentPage: 1,
        limit,
        hasNextPage: false,
        hasPreviousPage: false,
      },
    }

    return new Response(JSON.stringify(data), { status: 200 })
  }

  const totalCount = await db.post.count({
    where,
  })

  if (direction === "next") {
    offset += limit
  } else if (direction === "previous") {
    offset = Math.max(0, offset - limit)
  } else if (direction === "lastPage") {
    offset = Math.max(0, totalCount - limit)
  } else if (direction === "firstPage") {
    offset = 0
  }

  if (offset > totalCount) {
    offset = Math.max(0, totalCount - limit)
  }

  const result = await db.post.findMany({
    take: limit,
    skip: offset,
    where,
    orderBy: {
      createdAt: "desc",
    },
  })

  const hasNextPage = offset + limit < totalCount
  const hasPreviousPage = offset > 0
  const pageNumbers = Math.ceil(totalCount / limit)
  const currentPage = Math.ceil(offset / limit) + 1

  const resultData = result.map((post, index) => {
    return {
      ...post,
      index: offset + index + 1,
    }
  })

  const data = {
    data: resultData,
    metaData: {
      totalCount,
      from: offset,
      to: offset + limit,
      pageNumber: pageNumbers,
      currentPage,
      limit,
      hasNextPage,
      hasPreviousPage,
    },
  }

  return new Response(JSON.stringify(data), { status: 200 })
}

export { GetHandler as GET }
