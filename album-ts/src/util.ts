export const wait = async (miliseconds: number): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, miliseconds));
};
