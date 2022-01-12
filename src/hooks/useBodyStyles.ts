import { useEffect, CSSProperties } from 'react';

export function useBodyStyles(styles: CSSProperties): void {
  useEffect(() => {
    Object.entries(styles).forEach(([key, value]: [any, any]) => {
      document.body.style[key] = value;
    });
  }, []);
}
