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
 * GET /api/templates/[id]
 * Get single template by ID
 */
export async function GET(req, { params }) {
    try {
        const userId = await getUserId();
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { id } = params;
        await dbConnect();

        const template = await Invitation.findOne({
            _id: id,
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
                data: template
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Get Template Error:', error);
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
 * PUT /api/templates/[id]
 * Update template by ID
 */
export async function PUT(req, { params }) {
    try {
        const userId = await getUserId();
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { id } = params;
        const body = await req.json();

        await dbConnect();

        const template = await Invitation.findOneAndUpdate(
            { _id: id, user: userId },
            body,
            { new: true, runValidators: true }
        );

        if (!template) {
            return NextResponse.json(
                { success: false, message: 'Template not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Template updated successfully',
                data: template
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Update Template Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to update template',
                error: error.message
            },
            { status: 500 }
        );
    }
}

/**
 * DELETE /api/templates/[id]
 * Delete template by ID
 */
export async function DELETE(req, { params }) {
    try {
        const userId = await getUserId();
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { id } = params;
        await dbConnect();

        const template = await Invitation.findOneAndDelete({
            _id: id,
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
                message: 'Template deleted successfully'
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Delete Template Error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to delete template',
                error: error.message
            },
            { status: 500 }
        );
    }
}
