export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  recommendation_card?: {
    title: string;
    duration: string;
    location: string;
    image_url: string;
  };
}

export interface InspirationCard {
  name: string;
  description: string;
  image_url: string;
}

export interface AnveshAPIResponse {
  destination: string;
  country: string;
  temp: string;
  weather_description: string;
  bg_image: string;
  chat_companion: {
    messages: ChatMessage[];
  };
  suggestions: string[];
  inspiration_cards: InspirationCard[];
}

export type TravelerVibe = 'Foodie' | 'History Buff' | 'Adventure' | 'Art';

export interface AnveshFormState {
  destination: string;
  vibe: TravelerVibe | '';
  time: string;
}
