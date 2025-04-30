import type { CharacterId, CharacterName } from '@/types';
import { characters } from '@/data/characters';

export const characterNameToIdMap = Object.fromEntries(
  Object.entries(characters).map(([id, char]) => [char.name, id]),
) as Record<CharacterName, CharacterId>;
