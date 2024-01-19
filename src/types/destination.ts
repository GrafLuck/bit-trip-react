export type TDestination = {
  id: string;
  description: string;
  name: string;
  pictures: TPicture[];
}

type TPicture = {
  src: string;
  description: string;
}
