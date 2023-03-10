export const sortedCharactersByName = characters => {
  if (characters?.length > 0) {
    return [...characters].sort((a, b) => a.name.localeCompare(b.name));
  }
  return;
};
