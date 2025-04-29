"use server";

import user from "@/app/data/user";
import { redirect } from "next/navigation";
import { createSession } from "../lib/session";

export async function LoginAction(formData: FormData) {
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("LoginAction", username, password);
    console.log("user.name", user.name);
    if (username !== user.name) {
        return { error: "Invalid username" };
    } else if (password !== user.password) {
        return { error: "Invalid password" };
    } else {
        console.log("cookie server : ", await createSession(user.id));
        redirect("/profil");
    }
}
