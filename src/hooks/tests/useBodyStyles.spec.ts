import { useBodyStyles } from '../useBodyStyles';
import { renderHook } from '@testing-library/react-hooks';

describe('useBodyStyles', () => {
  it('Should apply styling to body element', async () => {
    const styles = {
      color: 'red',
      background: 'red'
    };
    renderHook(() => useBodyStyles(styles));

    expect(document.body.style.color).toBe('red');
    expect(document.body.style.background).toBe('red');
  });
});