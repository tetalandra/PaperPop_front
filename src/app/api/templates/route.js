import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Invitation from '@/models/Invitation';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'paperpop_secret_key_change_me';

async function getUserId() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    if (!token) return null;
    try {
        const decoded = jwt.verify(token.value, JWT_SECRET);
        return decoded.id;
    } catch (error) {
        return null;
    }
}

/**
 * GET /api/templates
 * Get all templates for authenticated user
 */
export async function GET(req) {
    try {
        const userId = await getUserId();
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { searchParams } = new URL(req.url);
        const limit = parseInt(searchParams.get('limit')) || 50;
        const page = parseInt(searchParams.get('page')) || 1;
        const skip = (page - 1) * limit;

        await dbConnect();

        const [templates, total] = await Promise.all([
            Invitation.find({ user: userId })
                .sort({ createdAt: -1 })
                .limit(limit)
                .skip(skip),
            Invitation.countDocuments({ user: userId })
        ]);

        return NextResponse.json(
            {
                success: true,
                count: templates.length,
                total,
                page,
                pages: Math.ceil(total / limit),
                data: templates
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Get Templates Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to retrieve templates',
                error: error.message
            },
            { status: 500 }
        );
    }
}
