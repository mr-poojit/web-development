let isValidPassphrase = (text) => {
  let words = text.split(" ");

  if (words.length < 4) {
    return false;
  }

  // Check if every word has at least 2 characters
  for (let word of words) {
    if (word.length < 2) {
      return false;
    }
  }

  return true;
};

module.exports = isValidPassphrase;
