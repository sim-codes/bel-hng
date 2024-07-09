import fs from 'fs';
import path from 'path';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: Request) {
    const filePath = path.resolve('./public/MercyKalu-CV.pdf'); // Adjust the path to your actual file
    const stat = fs.statSync(filePath);

    res.headers.set('Content-Length', stat.size.toString());
    res.headers.set('Content-Type', 'application/pdf');
    res.headers.set('Content-Disposition', 'attachment; filename=MercyKalu-CV.pdf'); // Change filename as needed

    const fileStream = fs.createReadStream(filePath);
    // fileStream.pipe(res);
    return NextResponse.json({ message: 'Hello there!' }, { status: 200 })
}
