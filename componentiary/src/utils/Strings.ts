export const className = (
  input: string,
  conditions?: Record<string, Boolean>
): string => {
  if (conditions) {
    const properties = Object.keys(conditions).map((propertie, index) => {
      if (conditions[propertie]) {
        return propertie;
      }

      return "";
    });

    return [input, ...properties].join(" ");
  }

  return input;
};
