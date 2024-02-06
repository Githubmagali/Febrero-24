import { NextResponse } from "next/server"
import db from '@/libs/db'


export async function POST(request){
 
   const data = await request.json();

 const userFound = await db.user.findUnique({
   where: {
      email: data.email
   }
 })
if(userFound){
   return NextResponse.json({
      message: "Use already"
   },{
      status:400
   })
}


   console.log(data)
    // Crea un nuevo usuario en la base de datos utilizando la instancia de la base de datos 'db'
  // El método create está asumiendo que la estructura de 'data' coincide con el modelo de la base de datos
   //user es la base de datos que creamos en prisma
   const newUser = await db.user.create({ data})

   
  // Devuelve una respuesta JSON con el nuevo usuario creado
  // (Esto se enviará como respuesta al cliente que realizó la solicitud)
   return NextResponse.json(newUser)
}