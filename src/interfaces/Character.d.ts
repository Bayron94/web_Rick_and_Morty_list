export enum SpeciesFilter {
  ALL = "All",
  HUMAN = "Human",
  ALIEN = "Alien",
}

export enum StatusFilter {
  ALL = "All",
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

export enum GenderFilter {
  ALL = "All",
  MALE = "Male",
  FEMALE = "Female",
}

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: GenderFilter;
  image: string;
  isFavorite: boolean;
  comments: string[];
}

export interface ICharactersData {
  characters: {
    results: Character[];
  };
}

export interface IFilterCriteria {
  isFavorite: boolean;
  species: SpeciesFilter;
  status: StatusFilter;
  gender: GenderFilter;
}
