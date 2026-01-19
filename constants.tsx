
import { Character, LorePiece } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'kaito',
    name: 'Kaito of the Misty Peak',
    title: 'Wandering Swordsman',
    description: 'A master of the unseen blade, Kaito seeks redemption in a world consumed by shadow. His strikes are as swift as the mountain wind.',
    image: 'https://picsum.photos/seed/kaito/1200/1800',
    stats: { strength: 85, agility: 95, magic: 40 }
  },
  {
    id: 'elara',
    name: 'Princess Elara',
    title: 'Guardian of the Eternal Ember',
    description: 'Wielder of the sacred flame, she stands as the last line of defense against the encroaching frost of the Void.',
    image: 'https://picsum.photos/seed/elara/1200/1800',
    stats: { strength: 60, agility: 70, magic: 95 }
  },
  {
    id: 'vorg',
    name: 'Vorg the Unyielding',
    title: 'Chieftain of the Iron Wastes',
    description: 'A mountain of a man who has survived a hundred battles. His axe carries the weight of his fallen ancestors.',
    image: 'https://picsum.photos/seed/vorg/1200/1800',
    stats: { strength: 98, agility: 45, magic: 20 }
  }
];

export const LORE_ITEMS: LorePiece[] = [
  {
    id: 'origin',
    title: 'The Great Shattering',
    content: 'Long before the current era, the celestial pillars collapsed, merging the physical realm with the ether.',
    image: 'https://picsum.photos/seed/shattering/1920/1080'
  },
  {
    id: 'factions',
    title: 'Three Crowns, One Fate',
    content: 'The kingdoms of Ash, Frost, and Mist compete for the fragments of the core, unaware of the lurking doom.',
    image: 'https://picsum.photos/seed/factions/1920/1080'
  }
];
