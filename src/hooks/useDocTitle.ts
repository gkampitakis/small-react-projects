import { useEffect } from 'react';


export function useDocTitle (title: string): void {
  useEffect(() => {
    document.title = title;
  });
}
