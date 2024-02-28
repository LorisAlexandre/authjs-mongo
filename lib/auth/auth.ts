import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import mongodb from "../db/mongodb";

export const { auth, handlers } = NextAuth({
  providers: [Google],
  adapter: MongoDBAdapter(mongodb),
});
