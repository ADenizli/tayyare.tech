import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { SInitialTakeoffInformations } from './module/service';

export async function GET(req: NextApiRequest, res: NextApiResponse<any>) {
     // TODO: after heartbeat development, connect all modules
     return NextResponse.json({ status: 'aircraft/b737/takeoff module is implemented and active' }, { status: 200 });
}

export async function POST(request: Request) {
     const body = await request.json();
     const serviceResponse = await SInitialTakeoffInformations(body);
     return NextResponse.json(serviceResponse, { status: 200 });
}
