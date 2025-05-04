import { z } from 'zod';

export const createEmailSchema = z.object({
    email: z.string().email('Email is not a valid email'),
});
