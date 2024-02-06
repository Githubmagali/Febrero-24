import { NextResponse } from "next/server"
import db from '@/libs/db'
import bcrypt from 'bcrypt'


export async function POST(request){

   try{
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

const usernameFound = await db.user.findUnique({
   where: {
      username: data.username
   }
})
 if (usernameFound){
   return NextResponse.json({
      message: "username already exist"
   }, {
      status: 400
   })
}

   console.log(data)


 const hashedPassword = await bcrypt.hash(data.password, 10)


   const newUser = await db.user.create({ 
      data: {
         username: data.username,
         email: data.email,
         password: hashedPassword
      }})

      //evita que nos traig el password quedando en otra constante
const{password: _, ...user} = newUser
   
  // Devuelve una respuesta JSON con el nuevo usuario creado
  // (Esto se enviará como respuesta al cliente que realizó la solicitud)
   return NextResponse.json(user)

   }catch(error){
      return NextResponse.json({
         message: error.message
      },{
         status: 500,
      })
   }
 
   
}