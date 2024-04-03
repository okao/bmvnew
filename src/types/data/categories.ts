import { faker } from "@faker-js/faker"
import { Locale } from "@prisma/client"

type Category = {
  id?: string
  locale: Locale
  name: string
  slug: string
}

const CategoryData: Category[] = [
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 1",
    slug: "category-1",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 2",
    slug: "category-2",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 3",
    slug: "category-3",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 4",
    slug: "category-4",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 5",
    slug: "category-5",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 6",
    slug: "category-6",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 7",
    slug: "category-7",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 8",
    slug: "category-8",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 9",
    slug: "category-9",
  },
  {
    locale: faker.helpers.enumValue(Locale),
    name: "Category 10",
    slug: "category-10",
  },
]

export default Category
export { CategoryData }
