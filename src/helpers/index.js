const filterUniqueCharacters = (characters) => {
  const uniqueCharacters = characters.reduce((acc, character) => {
    if (!acc.some((char) => char.id === character.id)) {
      acc.push(character);
    }
    return acc;
  }, []);

  return uniqueCharacters;
};

export { filterUniqueCharacters };
