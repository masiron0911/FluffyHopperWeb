export interface Character {
  id: string;
  name: string;
  color: string;
  description: string;
  longDescription: string;
  personality: string;
  birthday: string;
  favorites: string;
  friends: string[];
  bgColor: string;
  textColor: string;
  borderColor: string;
  buttonColor: string;
  imgSrc: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}
