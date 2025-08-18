import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Link from 'next/link';

export default function DMCAPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">DMCA Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 18, 2025</p>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Digital Millennium Copyright Act Notice</h2>
              <p className="text-gray-700">
                Baby AI Video Generator ("we," "us," or "our") respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement committed using our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">DMCA Notice Requirements</h2>
              <p className="text-gray-700 mb-4">
                If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on our Service, please notify our copyright agent as set forth below. For your complaint to be valid under the DMCA, you must provide the following information in writing:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>An electronic or physical signature of a person authorized to act on behalf of the copyright owner</li>
                <li>Identification of the copyrighted work that you claim has been infringed</li>
                <li>Identification of the material that is claimed to be infringing and where it is located on the Service</li>
                <li>Information reasonably sufficient to permit us to contact you, such as your address, telephone number, and email address</li>
                <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law</li>
                <li>A statement, made under penalty of perjury, that the above information is accurate, and that you are the copyright owner or are authorized to act on behalf of the owner</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Designated Copyright Agent</h2>
              <p className="text-gray-700 mb-4">
                Please submit DMCA notices to our designated Copyright Agent:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Baby AI Video Generator</strong></p>
                <p className="text-gray-700">Attn: DMCA Agent</p>
                <p className="text-gray-700">Email: dmca@babyaivideo.com</p>
                <p className="text-gray-700">Subject Line: "DMCA Takedown Notice"</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Counter-Notification Procedures</h2>
              <p className="text-gray-700 mb-4">
                If you believe that your User Content that was removed or disabled is not infringing, or that you have authorization from the copyright owner or the owner's agent to post and use the material, you may send a counter-notice containing the following information to our Copyright Agent:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Your physical or electronic signature</li>
                <li>Identification of the content that has been removed or to which access has been disabled and the location at which the content appeared before it was removed or disabled</li>
                <li>A statement that you have a good faith belief that the content was removed or disabled as a result of mistake or a misidentification of the content</li>
                <li>Your name, address, telephone number, and email address</li>
                <li>A statement that you consent to the jurisdiction of the federal court in your district, and a statement that you will accept service of process from the person who provided notification of the alleged infringement</li>
              </ol>
              <p className="text-gray-700 mt-4">
                If a counter-notice is received by our Copyright Agent, we may send a copy of the counter-notice to the original complaining party informing that person that we may replace the removed content or cease disabling it in 10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Repeat Infringer Policy</h2>
              <p className="text-gray-700">
                In accordance with the DMCA and other applicable law, we have adopted a policy of terminating, in appropriate circumstances, users who are deemed to be repeat infringers. We may also at our sole discretion limit access to the Service and/or terminate the accounts of any users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">False Claims</h2>
              <p className="text-gray-700">
                Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability for damages, including attorneys' fees. Do not make false claims!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Fair Use</h2>
              <p className="text-gray-700">
                Please note that we may, at our discretion, consider whether the use of copyrighted material without permission constitutes fair use under United States copyright law. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational, or personal use tips the balance in favor of fair use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Modifications to Policy</h2>
              <p className="text-gray-700">
                We reserve the right to modify this DMCA Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. Your continued use of the Service after any changes indicates your acceptance of the modified policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
              <p className="text-gray-700">
                Please be advised that we enforce a policy that provides for the termination in appropriate circumstances of users who are repeat infringers. Additionally, please note that we accommodate and do not interfere with standard technical measures used by copyright owners to protect their materials.
              </p>
              <p className="text-gray-700 mt-4">
                For more information about our policies, please review our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}