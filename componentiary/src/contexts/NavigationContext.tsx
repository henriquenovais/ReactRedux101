import { FC, createContext, useEffect, useState } from "react";

interface INavigationContext {
  currentPath: string;
  navigateTo: (path: string) => void;
}

const NavigationContext = createContext<INavigationContext>({
  currentPath: "",
  navigateTo: () => {},
});

interface INavigationContextProvider {
  children: JSX.Element;
}

const NavigationContextProvider: FC<INavigationContextProvider> = ({
  children,
}) => {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handlePathChange: (this: Window) => void = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePathChange);

    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContextProvider };

export default NavigationContext;
