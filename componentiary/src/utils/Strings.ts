export const className = (
  input: string,
  conditions: Record<string, Boolean>
): string => {
  const properties: string[] = Object.keys(conditions).map(
    (propertie, index) => {
      if (conditions[propertie]) {
        return propertie;
      }

      return "";
    }
  );

  properties.unshift(input);

  return properties.join(" ");
};
