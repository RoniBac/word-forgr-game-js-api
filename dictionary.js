const LOCAL_DICTIONARY = [
  "CASA",
  "SOL",
  "LUNA",
  "GATO",
  "PERRO",
  "JUEGO",
  "PALABRA",
  "ARMA"
];

export async function isValidWord(word) {
  word = word.toLowerCase();

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/es/${word}`
    );

    if (!response.ok) {
      // palabra no encontrada en API
      return LOCAL_DICTIONARY.includes(word.toUpperCase());
    }

    const data = await response.json();
    return Array.isArray(data);

  } catch (error) {
    console.warn("API no disponible, usando diccionario local");
    return LOCAL_DICTIONARY.includes(word.toUpperCase());
  }
}