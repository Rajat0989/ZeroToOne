import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest){
    let verify = req.cookies.get("token");
    let url = req.url

    if(!verify && url.includes('/pages/profile')){
        return NextResponse.redirect('http:localhost:3000/pages/login')
    }

    if(verify && url == 'http:localhost:3000/pages/login'){
        return NextResponse.redirect('http:localhost:3000/pages/profile')
    }
}