import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function TermsPage() {
  const t = useTranslations('footer');
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">{t('terms')}</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 18, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Baby AI Video Generator ("Company," "we," "us," or "our") concerning your access to and use of the www.babyaivideo.com website and services (the "Service").
              </p>
              <p className="text-gray-700 mt-4">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-gray-700">
                Baby AI Video Generator provides an AI-powered video transformation service that applies baby-style effects to uploaded videos. The Service includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Video upload and processing capabilities</li>
                <li>AI-based facial transformation technology</li>
                <li>Video download functionality</li>
                <li>Account management features</li>
                <li>Credit-based payment system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
              <p className="text-gray-700 mb-4">
                To use certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information</li>
                <li>Keep your password secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Content and Rights</h2>
              <h3 className="text-xl font-semibold mb-3">Content Ownership</h3>
              <p className="text-gray-700">
                You retain all rights to the videos you upload ("User Content"). By uploading content, you grant us a limited, non-exclusive license to process and transform your videos solely for providing the Service.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Content Requirements</h3>
              <p className="text-gray-700 mb-4">You represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You own or have necessary rights to all User Content</li>
                <li>Your User Content does not infringe any third-party rights</li>
                <li>You have consent from all individuals appearing in videos</li>
                <li>Your content complies with all applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
              <p className="text-gray-700 mb-4">You may not use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Upload or create NSFW, pornographic, or sexually explicit content</li>
                <li>Process videos containing violence, gore, or harmful content</li>
                <li>Violate any person's privacy or publicity rights</li>
                <li>Upload copyrighted material without authorization</li>
                <li>Create deepfakes for malicious or deceptive purposes</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to bypass security measures or access unauthorized areas</li>
                <li>Use automated systems or bots without permission</li>
                <li>Resell or commercially exploit the Service without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
              <h3 className="text-xl font-semibold mb-3">Credits and Pricing</h3>
              <p className="text-gray-700">
                The Service operates on a credit system. Credits are required to process videos and are non-refundable except as required by law. Prices are subject to change with notice.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Billing</h3>
              <p className="text-gray-700">
                All payments are processed through Stripe. By providing payment information, you authorize us to charge the applicable fees. You are responsible for all charges incurred under your account.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Refunds</h3>
              <p className="text-gray-700">
                Credits are generally non-refundable. We may provide refunds at our discretion for technical issues or service failures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700">
                The Service, including its original content, features, and functionality, is owned by Baby AI Video Generator and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mt-4">
                Our trademarks and trade dress may not be used without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Privacy</h2>
              <p className="text-gray-700">
                Your use of the Service is also governed by our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitations</h2>
              <h3 className="text-xl font-semibold mb-3">Service Availability</h3>
              <p className="text-gray-700">
                The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not guarantee uninterrupted, secure, or error-free operation.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Limitation of Liability</h3>
              <p className="text-gray-700">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-gray-700 mt-4">
                Our total liability shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify and hold harmless Baby AI Video Generator, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your User Content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
              <p className="text-gray-700">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
              <p className="text-gray-700 mt-4">
                Upon termination, your right to use the Service will cease immediately. All provisions of these Terms which should reasonably survive termination shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Disputes</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Baby AI Video Generator operates, without regard to conflict of law provisions.
              </p>
              <p className="text-gray-700 mt-4">
                Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Material changes will be notified via email or prominent notice on the Service. Continued use after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Miscellaneous</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us</li>
                <li><strong>Severability:</strong> If any provision is deemed invalid, the remaining provisions continue in effect</li>
                <li><strong>Waiver:</strong> No waiver of any term shall be deemed a further waiver</li>
                <li><strong>Assignment:</strong> You may not assign these Terms without our consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
              <p className="text-gray-700 mb-4">For questions about these Terms, contact us at:</p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Email:</strong> legal@babyaivideo.com</li>
                <li><strong>Support:</strong> support@babyaivideo.com</li>
                <li><strong>Address:</strong> Baby AI Video Generator, Legal Department</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}