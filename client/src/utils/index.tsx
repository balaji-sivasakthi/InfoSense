import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}

export function truncate(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) + '...' : str;
}
