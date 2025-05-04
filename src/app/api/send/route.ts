import { SubscriptionEmail } from '@/emails/subscription';
import { resend } from '@/lib/resend';
import { createEmailSchema } from '@/lib/schema';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        const validatedEmail = createEmailSchema.safeParse({ email });

        if (!validatedEmail.success) {
            return NextResponse.json(
                {
                    status: 'error',
                    code: 400,
                    message: 'Invalid input',
                    errors: validatedEmail.error.format(),
                },
                { status: 400 },
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: validatedEmail.data.email,
            subject: 'Thanks for subscribing to aazis7.bio!',
            react: SubscriptionEmail({ email: validatedEmail.data.email }),
        });

        if (error) {
            return NextResponse.json(
                {
                    status: 'error',
                    message: 'Failed to send email',
                    error,
                },
                { status: 400 },
            );
        }

        return NextResponse.json(
            {
                status: 'success',
                message: 'Thanks for subscribing!',
                data,
            },
            { status: 200 },
        );
    } catch (err) {
        console.error('Subscription error:', err);
        return NextResponse.json(
            {
                status: 'error',
                message: 'Internal server error',
            },
            { status: 500 },
        );
    }
}
