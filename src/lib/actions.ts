'use server';

export async function subscribeToNewsletter(formData: FormData) {
    const email = formData.get('email');

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/send`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            },
        );

        if (!response.ok) {
            return {
                success: false,
                message: 'Something went wrong while subscribing',
            };
        }

        return { success: true, message: 'Subscribed!' };
    } catch (error) {
        console.error(`Subscription error: ${error}`);
        return { success: false, message: 'An unexpected error occurred' };
    }
}
