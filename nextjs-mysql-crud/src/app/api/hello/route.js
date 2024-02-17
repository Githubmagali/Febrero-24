import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";


export async function GET(){
    const resul = await pool.query('SELECT NOW()')
     return NextResponse.json({message: resul[0]['NOW()']})
}