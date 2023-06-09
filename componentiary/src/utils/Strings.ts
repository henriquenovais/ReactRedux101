interface IStringUtils {
  joinBetweenSpaces: (...input: string[]) => string;
}

class StringUtils implements IStringUtils {
  joinBetweenSpaces = (...input: string[]): string => {
    return input.join(" ");
  };
}

export const stringUtils = () => new StringUtils();
