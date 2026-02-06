import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Invitation from '@/models/Invitation';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'paperpop_secret_key_change_me';

// Helper to get authenticated user ID
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
 * POST /api/templates/generate
 * Generate and save a new template
 */
export async function POST(req) {
    try {
        const userId = await getUserId();
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized. Please login.' },
                { status: 401 }
            );
        }

        const body = await req.json();
        const {
            title,
            subtitle,
            date,
            time,
            location,
            phone,
            message,
            templateType,
            variant,
            imageUrl
        } = body;

        // Validation
        if (!title || !templateType || !variant) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Missing required fields: title, templateType, variant'
                },
                { status: 400 }
            );
        }

        await dbConnect();

        // Create invitation/template
        const invitation = await Invitation.create({
            user: userId,
            title,
            subtitle,
            date,
            time,
            location,
            phone,
            message,
            templateType,
            variant,
            imageUrl
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Template generated successfully',
                data: invitation
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Generate Template Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to generate template',
                error: error.message
            },
            { status: 500 }
        );
    }
}
