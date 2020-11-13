import { useEffect } from 'react';

export function useBodyStyles (styles: Record<string, string | number>): void {
  useEffect(() => {
    Object.entries(styles).forEach(([key, value]: [any, any]) => {
      document.body.style[key] = value;
    });
  }, []);
}