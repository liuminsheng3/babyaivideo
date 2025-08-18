import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function PrivacyPage() {
  const t = useTranslations('footer');
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">{t('privacy')}</h1>
          <p className="text-gray-600 mb-8">Last updated: January 18, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Baby AI Video Generator ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services at www.babyaivideo.com (the "Service").
              </p>
              <p className="text-gray-700">
                We comply with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable data protection laws. By using our Service, you consent to the data practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Name and email address when you create an account</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Communication preferences</li>
                <li>Support inquiry details</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Video Content</h3>
              <p className="text-gray-700 mb-4">
                When you upload videos for processing:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Videos are temporarily stored for processing only</li>
                <li>We do not analyze or extract personal information from video content</li>
                <li>Videos are automatically deleted after 7 days</li>
                <li>We never use your videos for AI training or share them with third parties</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
                <li>Operating system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide and maintain our Service</li>
                <li>Process your video transformations</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send service-related communications</li>
                <li>Respond to customer support requests</li>
                <li>Improve our Service and develop new features</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 mb-4">We process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Contract:</strong> To provide the services you've requested</li>
                <li><strong>Consent:</strong> When you've given explicit consent for specific purposes</li>
                <li><strong>Legitimate Interests:</strong> To improve our services and ensure security</li>
                <li><strong>Legal Obligations:</strong> To comply with applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Providers:</strong> Stripe for payments, Supabase for authentication, cloud providers for infrastructure</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
                <li><strong>With Consent:</strong> When you direct us to share information</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Account information: Retained while your account is active</li>
                <li>Videos: Automatically deleted after 7 days</li>
                <li>Payment records: Retained as required by tax laws (typically 7 years)</li>
                <li>Communication logs: Retained for 2 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">Under GDPR and CCPA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate information</li>
                <li><strong>Erasure:</strong> Request deletion of your data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Object:</strong> Object to certain processing activities</li>
                <li><strong>Restrict:</strong> Request limited processing</li>
                <li><strong>Withdraw Consent:</strong> Where processing is based on consent</li>
                <li><strong>Non-Discrimination:</strong> Not be discriminated against for exercising rights</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, contact us at privacy@babyaivideo.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement appropriate security measures including:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>256-bit SSL encryption for data transmission</li>
                <li>Encrypted storage of sensitive information</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure data centers with physical security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700">
                Our Service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Cookies</h2>
              <p className="text-gray-700">
                We use essential cookies for authentication and functionality. For detailed information, see our <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or prominent notice on our Service. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-2">For privacy-related questions or concerns:</p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Email:</strong> privacy@babyaivideo.com</li>
                <li><strong>Data Protection Officer:</strong> dpo@babyaivideo.com</li>
                <li><strong>Address:</strong> Baby AI Video Generator, Privacy Department</li>
              </ul>
              <p className="text-gray-700 mt-4">
                EU residents may also contact their local data protection authority.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}