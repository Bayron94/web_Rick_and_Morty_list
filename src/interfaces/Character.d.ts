export enum Gender {
  Male = "Male",
  Female = "Female",
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: Gender;
  image: string;
}
