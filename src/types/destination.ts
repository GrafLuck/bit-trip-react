export type TDestination = {
  id: string;
  description: string;
  name: string;
  pictures: TPicture[];
}

export type TDestinations = TDestination[];

type TPicture = {
  src: string;
  description: string;
}
