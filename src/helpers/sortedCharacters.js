export const sortedCharactersByName = characters =>
  [...characters].sort((a, b) => a.name.localeCompare(b.name));
