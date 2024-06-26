"use server"

import {
  getUserByEmailSchema,
  getUserByEmailVerificationTokenSchema,
  getUserByIdSchema,
  getUserByResetPasswordTokenSchema,
  type GetUserByEmailInput,
  type GetUserByEmailVerificationTokenInput,
  type GetUserByIdInput,
  type GetUserByResetPasswordTokenInput,
} from "@/validations/user"
import { type User } from "@prisma/client"

import { prisma } from "@/config/db"

export async function getUserById(
  rawInput: GetUserByIdInput
): Promise<User | null> {
  try {
    const validatedInput = getUserByIdSchema.safeParse(rawInput)
    if (!validatedInput.success) return null

    return await prisma.user.findUnique({
      where: {
        id: validatedInput.data.id,
      },
    })
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by Id")
  }
}

export async function getUserByEmail(
  rawInput: GetUserByEmailInput
): Promise<User | null> {
  try {
    const validatedInput = getUserByEmailSchema.safeParse(rawInput)
    if (!validatedInput.success) return null

    return await prisma.user.findUnique({
      where: {
        email: validatedInput.data.email,
      },
    })
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by email")
  }
}

export async function getUserByResetPasswordToken(
  rawInput: GetUserByResetPasswordTokenInput
): Promise<User | null> {
  try {
    const validatedInput = getUserByResetPasswordTokenSchema.safeParse(rawInput)
    if (!validatedInput.success) return null

    // return await prisma.user.findUnique({
    //   where: {
    //     resetPasswordToken: validatedInput.data.token,
    //   },
    // })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by reset password token")
  }
}

export async function getUserByEmailVerificationToken(
  rawInput: GetUserByEmailVerificationTokenInput
): Promise<User | null> {
  try {
    const validatedInput =
      getUserByEmailVerificationTokenSchema.safeParse(rawInput)
    if (!validatedInput.success) return null

    // return await prisma.user.findUnique({
    //   where: {
    //     emailVerificationToken: validatedInput.data.token,
    //   },
    // })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return null
  } catch (error) {
    console.error(error)
    throw new Error("Error getting user by email verification token")
  }
}
