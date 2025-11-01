import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import OurStory from '@/components/OurStory';
import WeddingDetails from '@/components/WeddingDetails';
import GuestHighlights from '@/components/GuestHighlights';
import RSVPForm from '@/components/RSVPForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-5xl flex-1">
            <Header />
            <main className="mt-[-84px]">
              <HeroSection />
              <CountdownTimer />
              <OurStory />
              <WeddingDetails />
              <GuestHighlights />
              <RSVPForm />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
