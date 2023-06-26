import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }: {session: any}) {
      //Store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        //Check if a user already exists
        const isUserExists = await User.findOne({
          email: profile?.email,
        });
        //if not, create a new user
        if (!isUserExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLowerCase(),
            //@ts-ignore
            image: profile.picture,
          });

          console.log("Google Profile: ", profile)
          console.log("Google Account: ", account)
          console.log("Google User: ", user)
          console.log("Google Credentials: ", credentials)
        }
        return true;
      } catch (error: any) {
        console.error("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };