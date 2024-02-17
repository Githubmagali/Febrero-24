import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";


export async function GET(){
    try{
    const resultsLocalhost = await pool.query('SELECT * FROM product')
    return NextResponse.json(resultsLocalhost)
}catch (error){
    return NextResponse.json({
        message: error.message
    },{
        status: 500
    })
}
}

export async function POST(request){
    try{
        const {name, description, price}= await request.json()
    
        const resul = await pool.query('INSERT INTO product SET ?', {
             name,
             description,
             price,
         });
        
         return NextResponse.json({
            name,
            description,
            price,
            id: resul.insertId
         })

    }catch(error){
        console.log(error)
        return NextResponse.json({
            message: error.message
        },
        {
            status:500,
        })
    }
            
}