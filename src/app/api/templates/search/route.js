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
 * GET /api/templates/search
 * Search templates by query, type, variant
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
        const query = searchParams.get('q') || '';
        const templateType = searchParams.get('type');
        const variant = searchParams.get('variant');
        const limit = parseInt(searchParams.get('limit')) || 20;
        const page = parseInt(searchParams.get('page')) || 1;

        await dbConnect();

        // Build search filter
        const filter = { user: userId };

        if (templateType) {
            filter.templateType = templateType;
        }

        if (variant) {
            filter.variant = parseInt(variant);
        }

        if (query) {
            filter.$or = [
                { title: { $regex: query, $options: 'i' } },
                { subtitle: { $regex: query, $options: 'i' } },
                { message: { $regex: query, $options: 'i' } },
                { location: { $regex: query, $options: 'i' } }
            ];
        }

        const skip = (page - 1) * limit;

        const [templates, total] = await Promise.all([
            Invitation.find(filter)
                .sort({ createdAt: -1 })
                .limit(limit)
                .skip(skip),
            Invitation.countDocuments(filter)
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
        console.error('Search Templates Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to search templates',
                error: error.message
            },
            { status: 500 }
        );
    }
}
