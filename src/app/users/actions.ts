"use server";

import { db } from "./../db";
import { User, users } from "../db/schema";
import { eq } from "drizzle-orm";

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

export async function updateUser(id: string, user: User) {
    try {
        const updatedUser = await db.update(users).set(user).where(eq(users.id, id));

        return updatedUser;
    } catch (error) {
     console.error(error);
    return { error: "Failed to update user" };       
    }
}