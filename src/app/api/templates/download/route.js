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
 * POST /api/templates/download
 * Get template data for PDF generation
 */
export async function POST(req) {
    try {
        const userId = await getUserId();
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await req.json();
        const { templateId } = body;

        if (!templateId) {
            return NextResponse.json(
                { success: false, message: 'Template ID is required' },
                { status: 400 }
            );
        }

        await dbConnect();

        const template = await Invitation.findOne({
            _id: templateId,
            user: userId
        });

        if (!template) {
            return NextResponse.json(
                { success: false, message: 'Template not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Template retrieved successfully',
                data: template
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Download Template Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to retrieve template',
                error: error.message
            },
            { status: 500 }
        );
    }
}

/**
 * GET /api/templates/download?id=xxx
 * Alternative GET method for downloading template
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
        const templateId = searchParams.get('id');

        if (!templateId) {
            return NextResponse.json(
                { success: false, message: 'Template ID is required' },
                { status: 400 }
            );
        }

        await dbConnect();

        const template = await Invitation.findOne({
            _id: templateId,
            user: userId
        });

        if (!template) {
            return NextResponse.json(
                { success: false, message: 'Template not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Template retrieved successfully',
                data: template
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Download Template Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to retrieve template',
                error: error.message
            },
            { status: 500 }
        );
    }
}
