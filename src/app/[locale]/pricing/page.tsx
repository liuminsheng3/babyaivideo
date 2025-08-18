import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Pricing from '@/components/landing/Pricing';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}