export interface Room {
  id: string;
  name: string;
  tierTag: string;
  tagline: string;
  description: string;
  longDescription: string;
  occupancy: string;
  bedType: string;
  sizeSqFt: string;
  amenities: string[];
  imageUrl: string;
  additionalImages?: string[];
  pricingNote: string;
}

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  dietary: 'veg' | 'jain' | 'chef-special';
  samplePrice?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'rooms' | 'dining' | 'ambience' | 'exterior';
  imageUrl: string;
  caption: string;
}

export interface Landmark {
  name: string;
  distance: string;
  driveTime: string;
  description: string;
  iconName: string;
}

export interface EnquiryData {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomsCount: number;
  roomTier: string;
  fullName: string;
  phone: string;
  email: string;
  specialRequests?: string;
  referenceId?: string;
}
