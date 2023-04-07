export type ResultsProperties = {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: DobOrRegistered;
  registered: DobOrRegistered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
};
export type Name = {
  title: string;
  first: string;
  last: string;
};
export type Location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
};
export type Street = {
  number: number;
  name: string;
};
export type Coordinates = {
  latitude: string;
  longitude: string;
};
export type Timezone = {
  offset: string;
  description: string;
};
export type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};
export type DobOrRegistered = {
  date: string;
  age: number;
};
export type Id = {
  name: string;
  value?: string | null;
};
export type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};
export type Info = {
  seed: string;
  results: number;
  page: number;
  version: string;
};
