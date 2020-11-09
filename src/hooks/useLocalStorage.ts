import { useState, useEffect, useCallback, useRef } from 'react';


function getItem (item: string, defaultValue?: unknown) {
  const list = localStorage.getItem(item);

  if (list) return JSON.parse(list);
  if (!list && !defaultValue) return undefined;

  localStorage.setItem(item, JSON.stringify(defaultValue));
  return defaultValue;
}

export function useLocalStorage<T> (item: string, defaultValue?: T): [T | undefined, (data: T) => void, () => void] {
  const [data, setData] = useState<T | undefined>(getItem(item, defaultValue));

  const sync = useCallback(() => {
    setData(getItem(item));
  }, [item]);

  useEffect(() => {
    sync();
  }, [sync]);

  function setItems (data: T) {
    localStorage.setItem(item, JSON.stringify(data));
    setData(data);
  }

  return [data, setItems, sync];
}

