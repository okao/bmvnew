import { faker } from "@faker-js/faker"
import { Locale } from "@prisma/client"
import bcrypt from "bcrypt"
import range from "lodash/range"

import type Category from "../../../src/types/data/categories"
import { CategoryData } from "../../../src/types/data/categories"

class CategorySeeder {
  public data: Category[] = []
  // constructor(count: number) {
  //   // super(count);
  //   this.createData();
  // }

  // protected createData(): void {
  //   this._data = range(this.count).map(() => {
  //     const language: Locale = faker.helpers.enumValue(Locale);
  //     const data: Category = {
  //       locale: language,
  //       name: faker.lorem.words(),
  //       slug: faker.lorem.slug(),
  //     };

  //     console.log(
  //       '=========================================================='
  //     );
  //     console.log(data);
  //     console.log('Category data seeded successfully! 🌱🚀');

  //     return data;
  //   });
  // }

  constructor() {
    this.createData()
  }

  protected createData(): Category[] {
    this.data = CategoryData.map((category) => {
      return {
        locale: category.locale,
        name: category.name,
        slug: category.slug,
      }
    })

    console.log("==========================================================")
    console.log(this.data)
    console.log("Category data seeded successfully! 🌱🚀")

    return this.data
  }
}

export default CategorySeeder
