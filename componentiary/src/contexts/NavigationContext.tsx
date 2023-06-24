import { FC, createContext, useContext } from "react";

interface INavigationContext {}

const NavigationContext = createContext({});

interface INavigationContextProvider {
  children: JSX.Element[];
}

const NavigationContextProvider: FC<INavigationContextProvider> = ({
  children,
}) => {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContextProvider };

export default NavigationContext;
