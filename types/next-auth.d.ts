import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      githubId: string | null
      profilePicture: string | null
    } & DefaultSession["user"]
  }

  interface User {
    githubId: string | null
    profilePicture: string | null
  }
}