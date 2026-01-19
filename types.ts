
export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  stats: {
    strength: number;
    agility: number;
    magic: number;
  };
}

export interface LorePiece {
  id: string;
  title: string;
  content: string;
  image: string;
}

export enum SectionType {
  HERO = 'hero',
  WORLD = 'world',
  CHARACTERS = 'characters',
  GAMEPLAY = 'gameplay',
  EXPLORE = 'explore'
}
