import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
  useEffect,
  useRef
} from 'react';
import { useFetch } from '../../hooks';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const DEBOUNCE_TIMER = 2000;
const AppContext = createContext<{
  searchCocktail: (cocktail: string) => void;
  refetch: () => void;
  loading: boolean;
  bounceLoading: boolean;
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

const AppProvider = ({
  children
}: {
  children: ReactElement | ReactElement[];
}): ReactElement => {
  const [url, setUrl] = useState(`${URL}a`);
  const [bounceLoading, setBounceLoading] = useState(false);
  const [data, loading, , error] = useFetch<any>(url);
  const [cocktailList, setCocktailList] = useState<CocktailI[]>([]);
  const searchDebounce = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  function searchCocktail(cocktail: string) {
    setBounceLoading(true);
    if (searchDebounce.current) clearTimeout(searchDebounce.current);

    searchDebounce.current = setTimeout(() => {
      console.info('Sending request for ' + cocktail);
      setBounceLoading(false);
      setUrl(`${URL}${cocktail}`);
    }, DEBOUNCE_TIMER);
  }

  function filterResults(data: any[]): CocktailI[] {
    if (!data) return [];

    return data.map(
      ({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => ({
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass
      })
    );
  }

  function refetch() {
    setUrl(`${URL}a`);
  }

  useEffect(() => {
    setCocktailList(filterResults(data?.drinks));
  }, [data]);

  return (
    <AppContext.Provider
      value={{
        searchCocktail,
        refetch,
        loading,
        error,
        cocktailList,
        bounceLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppProvider };
