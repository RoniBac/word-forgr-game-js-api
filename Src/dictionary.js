export async function isValidWord(word) {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`
    );
    return res.ok;
  } catch (err) {
    console.warn("Dictionary API not available");
    return false;
  }
}