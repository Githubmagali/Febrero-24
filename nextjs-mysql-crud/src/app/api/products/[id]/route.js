import { NextResponse } from "next/server";
import { pool } from "@/libs/mysql";

//request: informacion nueva- {params} busca el dato que queremos actualizar


export async function GET(request, { params }) {
    try {
        const res = await pool.query('SELECT * FROM product WHERE id = ?', [params.id])
        if (res.legth === 0) {
            return NextResponse.json({
                message: "Producto no encontrado",
            }, {
                status: 404,
            })
        }
        return NextResponse.json(res[0])

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        }
        )
    }


}


export async function DELETE(request, { params }) {
    try {
        const resul = await pool.query('DELETE FROM product WHERE id = ?', [params.id])

        if (resul.afffectedRows === 0) {
            return NextResponse.json({
                message: "Producto no encontrado"
            }, {
                status: 404
            })
        }

        return new Response(null, {
            status: 204
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        })
    }
}


export async function PUT(request, { params }) {
    try {
        const data = await request.json()
        const resul = await pool.query('UPDATE product SET ? WHERE id = ?', [data, params.id])

        if (resul.afffectedRows === 0) {
            return NextResponse.json(
                {
                    message: "Producto no encontrado"
                },
                {
                    status: 404
                }
            )
        }

        const updateProduct = await pool.query("SELECT * FROM product WHERE id =", [params.id])

        return NextResponse.json(updateProduct[0])

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        })
    }
}