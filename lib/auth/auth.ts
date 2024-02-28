import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import mongodb from "../db/mongodb";
import Email from "next-auth/providers/nodemailer";

export const { auth, handlers } = NextAuth({
  providers: [
    Google,
    Email({
      server: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
  ],
  adapter: MongoDBAdapter(mongodb),
});
