export const randString = (N: number): string => {
  const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(Array(N))
    .map(() => S[Math.floor(Math.random() * S.length)])
    .join("");
};

export const geneTestArray = (N: number): { name: string; id: number }[] => {
  return [...new Array(N).keys()].map((i) => ({
    id: i + 1,
    name: randString(5),
  }));
};
