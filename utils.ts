import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBusinessHours(open: string, close: string, days: string): string {
  return `${days}, ${open} to ${close}`;
}
