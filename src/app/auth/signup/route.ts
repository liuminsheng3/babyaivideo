import { redirect } from 'next/navigation';

export async function GET() {
  // Redirect to the default locale (English) signup page
  redirect('/en/auth/signup');
}