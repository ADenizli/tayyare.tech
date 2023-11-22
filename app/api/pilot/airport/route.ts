import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse<any>) {
     // TODO: after heartbeat development, connect all modules
     return NextResponse.json({ status: 'module router is active and checked' }, { status: 200 });
}
