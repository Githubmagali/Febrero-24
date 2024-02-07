import NextAuth from 'next-auth';
// Importa el proveedor de credenciales de NextAuth, que permite autenticar a los usuarios mediante un formulario de nombre de usuario y contraseña.
import CredentialsProvider from 'next-auth/providers/credentials';
import db from '@/libs/db'
import bcrypt from 'bcrypt'

// Configuración de opciones para la autenticación.
export const authOptions = {
  // Define la lista de proveedores que se utilizarán para la autenticación.
  providers: [
    // Configuración del proveedor de credenciales.
    CredentialsProvider({
      // Nombre del proveedor, que en este caso es "Credentials".
      name: "Credentials",

      // Configuración de las credenciales requeridas (nombre de usuario y contraseña).
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" }
      },

      // Función de autorización que se ejecuta cuando se intenta autenticar al usuario.
      async authorize(credentials, req) {
        console.log(credentials);

        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email
          }
        })
        if (!userFound) throw new Error('No user found')

        console.log(userFound)

        const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

        if (!matchPassword) throw new Error('Wrong password')

        return {
          id: userFound.id,
          name: userFound.username,
          email: userFound.email,
        }

      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  }
};

// Inicia el servicio NextAuth con las opciones de autenticación configuradas.
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
