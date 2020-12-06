import React, { createContext, ReactElement, useContext, useState } from 'react';
import { useFetch } from '../../hooks';


const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext<{
  searchCocktail: (cocktail: string) => void;
  loading: boolean;
  error: string | null;
  cocktailList: CocktailI[];
}>({} as any);

export interface CocktailI {
  id: string;
  name: string;
  info: string;
  glass: string;
  image: string;
}

const AppProvider = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {
  const [url, setUrl] = useState(`${URL}a`);
  // const [data, loading, _, error] = useFetch(url);
  const [cocktailList, setCocktailList] = useState<CocktailI[]>([]);

  function searchCocktail (cocktail: string) {
    console.log(cocktail);
    //TODO: here we need debounce logic
  }

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [])

  return (
    <AppContext.Provider
      value={{
        searchCocktail,
        loading: true,
        error: '',
        cocktailList
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AppContext);

export { AppProvider, AppContext };
