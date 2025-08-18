import HeroSection from '@/components/landing/HeroSection';
import VideoShowcase from '@/components/landing/VideoShowcase';
import ProductIntro from '@/components/landing/ProductIntro';
import ProductShowcase from '@/components/landing/ProductShowcase';
import HowItWorks from '@/components/landing/HowItWorks';
import UseCases from '@/components/landing/UseCases';
import Gallery from '@/components/landing/Gallery';
import Features from '@/components/landing/Features';
import TechDetails from '@/components/landing/TechDetails';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <HeroSection />
        <VideoShowcase />
        <ProductIntro />
        <ProductShowcase />
        <HowItWorks />
        <UseCases />
        <Gallery />
        <Features />
        <TechDetails />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Baby AI Video Generator",
            "description": "Transform your videos into adorable baby-style moments using advanced AI technology",
            "brand": {
              "@type": "Brand",
              "name": "Baby AI Video"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "9.99",
              "highPrice": "99.99"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to process a video?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Processing time depends on video length and resolution. A 10-second 720p video typically takes 2-3 minutes."
                }
              },
              {
                "@type": "Question",
                "name": "What video formats are supported?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We support MP4 and MOV files with H.264 or HEVC codecs, up to 300MB in size."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use a credit system: 1 credit per 4 seconds at 512p. Higher resolutions use more credits. New users get 10 free credits."
                }
              },
              {
                "@type": "Question",
                "name": "Is my content private?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, your videos are private by default. We never use your content for training and delete files after 7 days."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}