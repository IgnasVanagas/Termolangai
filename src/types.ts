export interface ProductItem {
  id: string;
  category: 'plastikiniai' | 'aliuminio' | 'durys' | 'vartai';
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  imageUrl: string;
  popular?: boolean;
}

export interface WarehouseLocation {
  id: string;
  city: 'Kaunas' | 'Vilnius' | 'Klaipėda';
  title: string;
  type: 'Centrinis biuras' | 'Prekyba iš sandėlio';
  address: string;
  workingHours: string;
  contacts: {
    name: string;
    role: string;
    phone: string;
    formattedPhone: string;
  }[];
  mapUrl?: string;
  note?: string;
}

export interface ClearanceItem {
  id: string;
  title: string;
  category: string;
  dimensions: string;
  specs: string;
  originalPrice: number;
  discountPrice: number;
  location: string;
  status: 'Sandėlyje' | 'Paskutinis vienetas';
  imageUrl: string;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  productsUsed: string;
  imageUrl: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
