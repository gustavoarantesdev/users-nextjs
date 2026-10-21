"use server";

import { db } from "./../db";
import { User, users } from "../db/schema";

export async function getUsers() {
  try {
    const allUsers = await db.select().from(users);

    return allUsers;
  } catch (error) {
    console.error(error);
    return { error: "Failed to get users" };
  }
}

export async function createUser(user: Omit<User, "id">) {
  try {
    const newUser = await db.insert(users).values(user);

    return newUser;
  } catch (error) {
    console.error(error);
    return { error: "Failed to create new user" };
  }
}
