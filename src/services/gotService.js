export default class GotService {
  constructor() {
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status - ${res.status}`);
    }

    return await res.json();
  };
  getAllCharacters = async () => {
    const res = await this.getResource("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter);
  };
  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${40 + id}`);
    return this._transformCharacter(character);
  };
  getAllHouses = async () => {
    const res = await this.getResource(`/houses`);
    return res.map(this._transformHouse);
  };
  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    console.log(house);
    return this._transformHouse(house);
  };

  getAllBooks = () => {
    return this.getResource(`/books`);
  };
  getBook = (id) => {
    return this.getResource(`/books/${id}`);
  };
  _transformCharacter = (char) => {
    return {
      name: char.name || "no data",
      gender: char.gender || "no data",
      born: char.born || "no data",
      died: char.died || "no data",
      culture: char.culture || "no data",
    };
  };
  _transformHouse = (house) => {
    return {
      name: house.name,
      region: house.region,
      coatOfArms: house.coatOfArms,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons,
    };
  };
  _transformBook = (book) => {
    return {
      name: book.name,
      numberOfPage: book.numberOfPage,
      publisher: book.publisher,
      released: book.released,
    };
  };
}
