import { redirect } from 'next/navigation';

export async function GET() {
  // Redirect to the default locale (English) signin page
  redirect('/en/auth/signin');
}