import Category from "@/types/data/categories"

import { faker } from "@faker-js/faker"
import bcrypt from "bcrypt"
import range from "lodash/range"

import type UserType from "../../../src/types/data/userTypes"
import { UserTypeData } from "../../../src/types/data/userTypes"

class UserTypeSeeder {
  public data: UserType[] = []

  constructor() {
    this.createData()
  }

  protected createData(): UserType[] {
    //count is length of UserType enum
    // this.data = range(Object.keys(UserTypeData).length).map((index) => {
    //   return {
    //     name: UserTypeData[index].name,
    //     description: UserTypeData[index].description,
    //   }
    // })

    this.data = UserTypeData.map((userType) => {
      return {
        name: userType.name,
        description: userType.description,
      }
    })

    console.log("==========================================================")
    console.log(this.data)
    console.log("UserType data seeded successfully! 🌱🚀")

    return this.data
  }
}

export default UserTypeSeeder
