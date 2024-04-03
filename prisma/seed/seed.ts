import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

import { PostDataToAdd, type Post } from "../../src/types/data/posts"
import { TagData, type Tag } from "../../src/types/data/tags"
import { UserData, type User } from "../../src/types/data/user"
import CategorySeeder from "./seeds/Category.seeder"
import UserTypeSeeder from "./seeds/UserType.seeder"

const prisma = new PrismaClient()

const main = async () => {
  // try {
  //   // await prisma.$connect()
  //   console.log("🌱 Clearing Database... 🌱")
  //   // await prisma.category.deleteMany();
  //   await prisma.$executeRaw`TRUNCATE TABLE "tags" RESTART IDENTITY CASCADE;`
  //   await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE;`
  //   await prisma.$executeRaw`TRUNCATE TABLE "user_types" RESTART IDENTITY CASCADE;`
  //   await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;`
  //   await prisma.$executeRaw`TRUNCATE TABLE "posts" RESTART IDENTITY CASCADE;`
  //   // const initialSeeder = new InitialSeeder(10);
  //   const categoriesSeeder = new CategorySeeder()
  //   const userTypesSeeder = new UserTypeSeeder()
  //   for (const data of categoriesSeeder.data) {
  //     await prisma.category.create({
  //       data,
  //     })
  //   }
  //   console.log("🌱 Seeding Category Data Completed! 🌱")
  //   for (const data of userTypesSeeder.data) {
  //     await prisma.userType.create({
  //       data,
  //     })
  //   }
  //   console.log("🌱 Seeding UserType Data Completed! 🌱")
  //   for (const data of TagData) {
  //     console.log(data)
  //     await prisma.tag.create({
  //       data,
  //     })
  //   }
  //   console.log("🌱 Seeding Tag Data Completed! 🌱")
  //   for (const data of UserData) {
  //     const hashedPassword = await bcrypt.hash(data.password, 10)
  //     const user = await prisma.user.create({
  //       data: {
  //         email: data.email,
  //         password: hashedPassword,
  //         name: data.name,
  //         userTypeId: data.userTypeId,
  //         createdAt: data.createdAt,
  //       },
  //     })
  //     console.log(user)
  //   }
  //   console.log("🌱 Seeding User Data Completed! 🌱")
  //   const posts = await PostDataToAdd()
  //   for (const data of posts) {
  //     const post = await prisma.post.create({
  //       data: {
  //         title: data.title,
  //         slug: data.slug,
  //         content: data.content,
  //         createdAt: data.createdAt,
  //         updatedAt: data.updatedAt,
  //         published: data.published,
  //         authorId: data.authorId,
  //         publisherId: data.publisherId,
  //       },
  //     })
  //     console.log(post)
  //   }
  //   console.log("🌱 Seeding Post Data Completed! 🌱")
  // } catch (e) {
  //   console.error(`Error seeding initial data: ${e}🚨`)
  //   throw e
  // }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(`Error seeding initial data: ${e}🚨`)
    await prisma.$disconnect()
    process.exit(1)
  })
