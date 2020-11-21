import { useDocTitle } from '../useDocTitle';
import { renderHook } from '@testing-library/react-hooks';

describe('useDocTitle', () => {
  it('Should change document title', () => {
    renderHook(() => useDocTitle('mock title'));

    expect(document.title).toBe('mock title');
  });
});
