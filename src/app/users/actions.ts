"use server";

import { db } from "./../db";
import { users } from "../db/schema";

export async function getUsers() {
  try {
    const allUsers = await db.select().from(users);

    return allUsers;
  } catch (error) {
    console.error(error);
    return { error: "Failed to get users" };
  }
}
