import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db'
import bcrypt from 'bcrypt'

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email" },
                password: { label: "Password", type: "password", placeholder: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                const userFound = await db.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!userFound) return null

                

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

                if (!matchPassword) return null

                return {
                    id: userFound.id,
                    name: userFound.username,
                    email: userFound.email,
                };

            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
      }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };