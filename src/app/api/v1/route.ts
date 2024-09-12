import { NextResponse } from "next/server"

export function GET() {
    return NextResponse.json({
        message: "HOSTEL API IS WORKING FINE"
    })
}  