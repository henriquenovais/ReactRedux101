export const classNamer = (
  conditions: Record<string, Boolean>,
  ...input: string[]
): string => {
  if (conditions) {
    const properties = Object.keys(conditions).map((propertie, index) => {
      if (conditions[propertie]) {
        return propertie;
      }

      return "";
    });

    return [...input, ...properties].join(" ");
  }

  return input.join(" ");
};
