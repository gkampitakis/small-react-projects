import React, { useContext, useReducer, useEffect, createContext, ReactElement, ReducerAction } from 'react';

const URL = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = createContext<DispatchActions & CartState>({} as any);

interface DispatchActions {
  clearCart: () => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
}

interface Cart {
  id: number;
  img: string;
  title: string;
  price: number;
  amount: number;
}

interface CartState {
  cart: Cart[];
  loading: boolean;
  total: number;
  amount: number;
}

type Action =
  | { type: 'DISPLAY_ITEMS', payload: { data: Cart[] } }
  | { type: 'REMOVE', payload: { id: number } }
  | { type: 'INCREASE', payload: { id: number } }
  | { type: 'DECREASE', payload: { id: number } }
  | { type: 'GET_TOTALS' }
  | { type: 'CLEAR_CART' }
  | { type: 'LOADING' };

const AppProvider = ({ children }: { children: ReactElement | ReactElement[] }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    loading: false,
    total: 0,
    amount: 0
  });

  async function fetchData () {
    dispatch({ type: 'LOADING' });

    console.log('fetching data');


    const response = await fetch(URL);
    const data = await response.json();

    dispatch({ type: 'DISPLAY_ITEMS', payload: { data } });
  }

  function decrease (id: number) {
    dispatch({ type: 'DECREASE', payload: { id } });
  }

  function increase (id: number) {
    dispatch({ type: 'INCREASE', payload: { id } });
  }

  function clearCart () {
    dispatch({ type: 'CLEAR_CART' });
  }

  function remove (id: number) {
    dispatch({ type: 'REMOVE', payload: { id } });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  return (
    <AppContext.Provider value={{
      ...state,
      clearCart,
      increase,
      decrease,
      remove
    }}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = (): DispatchActions & CartState => useContext(AppContext);

export { AppContext, AppProvider };

function reducer (state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) return {
            ...item,
            amount: item.amount + 1
          };
          return item;
        })
      }
    case 'DECREASE':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) return {
            ...item,
            amount: item.amount - 1
          };
          return item;
        }).filter(i => !!i.amount)
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    case 'DISPLAY_ITEMS':
      return {
        ...state,
        cart: action.payload.data,
        loading: false
      };
    case 'GET_TOTALS':
      return {
        ...state,
        ...state.cart.reduce((acc, item) => {
          const { amount, price } = item;
          const total = amount * price;

          return { amount: acc.amount + amount, total: acc.total + total }
        }, { amount: 0, total: 0 })
      }
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter(i => i.id !== action.payload.id)
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      }
    default:
      throw Error('Reached to unknown state in reducer');
  }
}