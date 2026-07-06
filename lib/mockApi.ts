import { AnveshAPIResponse } from '@/types/anvesh';

// Mock datasets aligned with the new mockup design
export const MOCK_DATASETS: Record<string, AnveshAPIResponse> = {
  yosemite: {
    destination: 'Yosemite Valley',
    country: 'California, USA',
    temp: '27°',
    weather_description: 'Light rain · Feels like 24°',
    bg_image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1430&auto=format&fit=crop',
    chat_companion: {
      messages: [
        {
          id: '1',
          sender: 'bot',
          text: "Hey! I'm Anvesh, your AI travel companion. Where do you want to go today?",
        },
        {
          id: '2',
          sender: 'user',
          text: 'Suggest a 4 day trip in the mountains',
        },
        {
          id: '3',
          sender: 'bot',
          text: "Here's a 4 day trip you'll love.",
          recommendation_card: {
            title: 'Yosemite Adventure',
            duration: '4 Days',
            location: 'California, USA',
            image_url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=350&auto=format&fit=crop',
          },
        },
      ],
    },
    suggestions: [
      'Plan a 4 day trip in Himachal 🏔️',
      'Best time to see Northern Lights? 🌌',
      'Offbeat places in Kerala 🌴',
      'Packing list for Leh trip 💼',
    ],
    inspiration_cards: [
      {
        name: 'Ladakh',
        description: 'Where the mountains touch the sky',
        image_url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Switzerland',
        description: 'Alpine beauty like no other',
        image_url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Iceland',
        description: 'Land of fire and ice',
        image_url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Banff',
        description: "Nature's masterpiece",
        image_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Bali',
        description: 'Where serenity meets adventure',
        image_url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=250&auto=format&fit=crop',
      },
    ],
  },
  himachal: {
    destination: 'Himachal Valley',
    country: 'Himachal Pradesh, India',
    temp: '23°',
    weather_description: 'Light rain · Feels like 21°',
    bg_image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1430&auto=format&fit=crop',
    chat_companion: {
      messages: [
        {
          id: '1',
          sender: 'bot',
          text: "Hey! I'm Anvesh, your AI travel companion. Where do you want to go today?",
        },
        {
          id: '2',
          sender: 'user',
          text: 'Suggest a 4 day trip in the mountains',
        },
        {
          id: '3',
          sender: 'bot',
          text: "Here's a 4 day trip you'll love.",
          recommendation_card: {
            title: 'Himachal Escape',
            duration: '4 Days',
            location: 'Himachal Pradesh, India',
            image_url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=350&auto=format&fit=crop',
          },
        },
        {
          id: '4',
          sender: 'user',
          text: "What's the best time to visit?",
        },
        {
          id: '5',
          sender: 'bot',
          text: "The best time to visit Himachal is March to June for pleasant weather and Sep to Nov for clear views.",
        },
      ],
    },
    suggestions: [
      'Plan a 4 day trip in Yosemite 🏔️',
      'Best time to see Northern Lights? 🌌',
      'Offbeat places in Kerala 🌴',
      'Packing list for Leh trip 💼',
    ],
    inspiration_cards: [
      {
        name: 'Shimla',
        description: 'Queen of the Hills',
        image_url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Manali',
        description: 'Adventure hub of Solang',
        image_url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Dharamshala',
        description: 'Serene land of Dalai Lama',
        image_url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Dalhousie',
        description: 'Little Switzerland of India',
        image_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Spiti Valley',
        description: 'The cold desert heritage',
        image_url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=250&auto=format&fit=crop',
      },
    ],
  },
  kerala: {
    destination: 'Munnar Hills',
    country: 'Kerala, India',
    temp: '26°',
    weather_description: 'Mist & Showers',
    bg_image: 'https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?q=80&w=1430&auto=format&fit=crop',
    chat_companion: {
      messages: [
        {
          id: '1',
          sender: 'bot',
          text: "Hey! I'm Anvesh, your AI travel companion. Where do you want to go today?",
        },
        {
          id: '2',
          sender: 'user',
          text: 'Tell me about offbeat Kerala spots',
        },
        {
          id: '3',
          sender: 'bot',
          text: "Here is a gorgeous retreat card for Kerala backwaters and mist forests.",
          recommendation_card: {
            title: 'Kerala Spice & Backwaters',
            duration: '5 Days',
            location: 'Kerala, India',
            image_url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=350&auto=format&fit=crop',
          },
        },
      ],
    },
    suggestions: [
      'Plan a 4 day trip in Himachal 🏔️',
      'Best time to see Northern Lights? 🌌',
      'Plan a 4 day trip in Yosemite 🏔️',
      'Packing list for Leh trip 💼',
    ],
    inspiration_cards: [
      {
        name: 'Munnar',
        description: 'Endless rolling tea gardens',
        image_url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Alleppey',
        description: 'Houseboat cruises in backwaters',
        image_url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Vagamon',
        description: 'Unexplored pine hills & ravines',
        image_url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Wayanad',
        description: 'Mystical caves and waterfalls',
        image_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Varkala',
        description: 'Stunning red cliffs overlooking sea',
        image_url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=250&auto=format&fit=crop',
      },
    ],
  },
  leh: {
    destination: 'Leh City',
    country: 'Ladakh, India',
    temp: '14°',
    weather_description: 'Windy & Cold',
    bg_image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1430&auto=format&fit=crop',
    chat_companion: {
      messages: [
        {
          id: '1',
          sender: 'bot',
          text: "Hey! I'm Anvesh, your AI travel companion. Where do you want to go today?",
        },
        {
          id: '2',
          sender: 'user',
          text: 'What is the packing list for Leh?',
        },
        {
          id: '3',
          sender: 'bot',
          text: "For Leh, pack multiple thermal layers, windproof jackets, polarized sunglasses, and necessary altitude meds.",
        },
      ],
    },
    suggestions: [
      'Plan a 4 day trip in Himachal 🏔️',
      'Best time to see Northern Lights? 🌌',
      'Offbeat places in Kerala 🌴',
      'Plan a 4 day trip in Yosemite 🏔️',
    ],
    inspiration_cards: [
      {
        name: 'Pangong Lake',
        description: 'Breathtaking blue salt-water lake',
        image_url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Nubra Valley',
        description: 'Double-humped camel safaris',
        image_url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Khardung La',
        description: 'One of the highest motorable passes',
        image_url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Magnetic Hill',
        description: 'Where gravity seems to fail',
        image_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=250&auto=format&fit=crop',
      },
      {
        name: 'Thiksey Monastry',
        description: 'Twelve-story temple complex',
        image_url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=250&auto=format&fit=crop',
      },
    ],
  },
};

/**
 * Simulates a dynamic travel content request with local latency.
 */
export async function fetchAnveshData(
  destination: string,
  vibe: string,
  time: string
): Promise<AnveshAPIResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const key = destination.toLowerCase().trim();
  if (key.includes('himachal')) return MOCK_DATASETS.himachal;
  if (key.includes('kerala')) return MOCK_DATASETS.kerala;
  if (key.includes('leh') || key.includes('ladakh')) return MOCK_DATASETS.leh;

  // Default to Yosemite Valley
  return MOCK_DATASETS.yosemite;
}
