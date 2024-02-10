import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                email:{ label: "Email", type:"email"},
                password:{ label: "Password", type: "password"}
            },
            async authorize(credentials, req){
                const user = {id: "1", fullname: '', email: 'mail@mail.com', password: 'password123'}
                if(user){
                    return user
                }else{
                    return null
                }
              
            }
        })
    ],
    callbacks:{
        jwt({account, token,user,profile,session}){
           if (user) token.user = user;
            return token
        },
        session({session, token}) {
            console.log(session, token)
            return session;
        }
    }

})

export {handler as GET, handler as POST}