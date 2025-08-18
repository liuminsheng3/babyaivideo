import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 18, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                This Cookie Policy explains how Baby AI Video Generator ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website at www.babyaivideo.com (the "Service"). This policy explains what these technologies are, why we use them, and your rights to control their use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
              <p className="text-gray-700">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide information to website owners, and improve user experience.
              </p>
              <p className="text-gray-700 mt-4">
                Cookies set by the website owner (in this case, Baby AI Video Generator) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies."
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are strictly necessary for the Service to function and cannot be switched off. They are usually only set in response to actions you take, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Authentication and login status</li>
                <li>Security tokens</li>
                <li>Session management</li>
                <li>Language preferences</li>
                <li>Privacy preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Remembering your preferences and settings</li>
                <li>Customizing content based on your location</li>
                <li>Providing enhanced features</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies help us understand how visitors interact with our Service:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pages visited and time spent</li>
                <li>Navigation paths</li>
                <li>Error messages encountered</li>
                <li>Performance metrics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left border-b">Cookie Name</th>
                      <th className="px-4 py-2 text-left border-b">Purpose</th>
                      <th className="px-4 py-2 text-left border-b">Duration</th>
                      <th className="px-4 py-2 text-left border-b">Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr>
                      <td className="px-4 py-2 border-b">auth_token</td>
                      <td className="px-4 py-2 border-b">User authentication</td>
                      <td className="px-4 py-2 border-b">Session</td>
                      <td className="px-4 py-2 border-b">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">NEXT_LOCALE</td>
                      <td className="px-4 py-2 border-b">Language preference</td>
                      <td className="px-4 py-2 border-b">1 year</td>
                      <td className="px-4 py-2 border-b">Functional</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">user_preferences</td>
                      <td className="px-4 py-2 border-b">User settings</td>
                      <td className="px-4 py-2 border-b">30 days</td>
                      <td className="px-4 py-2 border-b">Functional</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">_ga</td>
                      <td className="px-4 py-2 border-b">Google Analytics</td>
                      <td className="px-4 py-2 border-b">2 years</td>
                      <td className="px-4 py-2 border-b">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that set cookies on your device:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Stripe:</strong> Payment processing and fraud prevention</li>
                <li><strong>Google Analytics:</strong> Website usage analysis (optional)</li>
                <li><strong>Supabase:</strong> Authentication services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These third parties have their own privacy policies addressing how they use such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. How to Control Cookies</h2>
              
              <h3 className="text-xl font-semibold mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies individually or entirely</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Cookie Management Links</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Impact of Disabling Cookies</h2>
              <p className="text-gray-700">
                Please note that if you disable or refuse cookies, some parts of the Service may become inaccessible or not function properly. You may not be able to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Log in to your account</li>
                <li>Access certain features</li>
                <li>Save your preferences</li>
                <li>Complete transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Do Not Track Signals</h2>
              <p className="text-gray-700">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for handling DNT signals, and our Service does not respond to DNT signals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700">
                Our Service is not intended for children under 13 years of age, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Updates to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Email:</strong> privacy@babyaivideo.com</li>
                <li><strong>Website:</strong> www.babyaivideo.com</li>
                <li><strong>Address:</strong> Baby AI Video Generator, Privacy Department</li>
              </ul>
            </section>

            <section className="border-t pt-6">
              <p className="text-gray-700">
                For more information about how we handle your personal information, please see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}