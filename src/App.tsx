import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { QuickInfo } from './components/sections/QuickInfo';
import { About } from './components/sections/About';
import { Rooms } from './components/sections/Rooms';
import { Dining } from './components/sections/Dining';
import { AvailabilityEngine } from './components/sections/AvailabilityEngine';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Gallery } from './components/sections/Gallery';
import { Reviews } from './components/sections/Reviews';
import { Location } from './components/sections/Location';
import { ContactCTA } from './components/sections/ContactCTA';
import { Footer } from './components/layout/Footer';
import { MobileQuickBar } from './components/layout/MobileQuickBar';

// Modals
import { AboutModal } from './components/modals/AboutModal';
import { RoomDetailModal } from './components/modals/RoomDetailModal';
import { MenuModal } from './components/modals/MenuModal';
import { EnquirySuccessModal } from './components/modals/EnquirySuccessModal';
import { LightboxModal } from './components/modals/LightboxModal';

// Types & Data
import { Room, GalleryItem, EnquiryData } from './types';
import { GALLERY_ITEMS } from './data/hotelData';

export function App() {
  // Modal states
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  
  // Gallery lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGalleryItem, setCurrentGalleryItem] = useState<GalleryItem | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Enquiry state
  const [enquirySuccessData, setEnquirySuccessData] = useState<EnquiryData | null>(null);
  const [isEnquirySuccessModalOpen, setIsEnquirySuccessModalOpen] = useState(false);
  const [prefilledRoomId, setPrefilledRoomId] = useState<string>('executive-comfort');

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenAvailability = () => {
    scrollToSection('availability');
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    setIsRoomModalOpen(true);
  };

  const handleEnquireRoom = (room: Room) => {
    setPrefilledRoomId(room.id);
    scrollToSection('availability');
  };

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setCurrentGalleryItem(item);
    setCurrentGalleryIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigateLightbox = (index: number) => {
    setCurrentGalleryIndex(index);
    setCurrentGalleryItem(GALLERY_ITEMS[index]);
  };

  const handleEnquirySuccess = (data: EnquiryData) => {
    setEnquirySuccessData(data);
    setIsEnquirySuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-luxe-bg text-slate-100 flex flex-col font-sans selection:bg-gold-500 selection:text-slate-950 pb-20 sm:pb-24 lg:pb-0 overflow-x-hidden w-full">
      {/* 1. Navbar */}
      <Navbar onOpenAvailability={handleOpenAvailability} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero
          onCheckAvailability={handleOpenAvailability}
          onExplore={() => scrollToSection('about')}
        />

        {/* 3. Quick Information Bar */}
        <QuickInfo
          onCheckAvailability={handleOpenAvailability}
          onExploreDining={() => scrollToSection('dining')}
          onBrowseRooms={() => scrollToSection('rooms')}
        />

        {/* 4. About */}
        <About
          onDiscoverMore={() => setIsAboutModalOpen(true)}
          onExploreRooms={() => scrollToSection('rooms')}
        />

        {/* 5. Rooms / Stay */}
        <Rooms
          onSelectRoom={handleSelectRoom}
          onEnquireRoom={handleEnquireRoom}
        />

        {/* 6. Dining */}
        <Dining
          onOpenMenu={() => setIsMenuModalOpen(true)}
          onDiningEnquiry={() => scrollToSection('contact')}
        />

        {/* 7. Pricing / Availability */}
        <AvailabilityEngine
          onSuccess={handleEnquirySuccess}
          selectedRoomId={prefilledRoomId}
        />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. Gallery */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* 10. Reviews */}
        <Reviews />

        {/* 11. Location */}
        <Location />

        {/* 12. Contact / CTA */}
        <ContactCTA onCheckAvailability={handleOpenAvailability} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Mobile Sticky Quick Bar */}
      <MobileQuickBar onOpenAvailability={handleOpenAvailability} />

      {/* Modals */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onCheckAvailability={handleOpenAvailability}
      />

      <RoomDetailModal
        room={selectedRoom}
        isOpen={isRoomModalOpen}
        onClose={() => setIsRoomModalOpen(false)}
        onEnquire={handleEnquireRoom}
      />

      <MenuModal
        isOpen={isMenuModalOpen}
        onClose={() => setIsMenuModalOpen(false)}
        onEnquire={() => scrollToSection('contact')}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        currentItem={currentGalleryItem}
        currentIndex={currentGalleryIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={handleNavigateLightbox}
      />

      <EnquirySuccessModal
        data={enquirySuccessData}
        isOpen={isEnquirySuccessModalOpen}
        onClose={() => setIsEnquirySuccessModalOpen(false)}
      />
    </div>
  );
}

export default App;
