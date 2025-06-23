import { NextRequest, NextResponse } from "next/server";
let numberOfVisits = 0;
export function middleware(req: NextRequest, res: NextResponse, next: any) {
  numberOfVisits++;
  next();
}
