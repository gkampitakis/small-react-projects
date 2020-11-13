import { useLocalStorage } from '../useLocalStorage';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useLocalStorage', () => {

  beforeEach(() => {
    localStorage.clear()
  });

  it('Should return default value', () => {
    const { result } = renderHook(() => useLocalStorage('mockKey', ['data']));

    expect(result.current[0]).toEqual(['data']);
    expect(result.current[1]).toBeInstanceOf(Function);
    expect(result.current[1]).toBeInstanceOf(Function);
    expect(localStorage.getItem('mockKey')).toEqual(JSON.stringify(['data']));
  });

  it('Should set new values to localStorage', async () => {
    const { result } = renderHook(() => useLocalStorage('mockKey'));

    expect(result.current[0]).toBeUndefined();

    act(() => {
      result.current[1](['mockData']);
    });

    expect(result.current[0]).toEqual(['mockData']);
    expect(localStorage.getItem('mockKey')).toEqual(JSON.stringify(['mockData']));
  });

  it('Should sync data with localStorage data', () => {
    const { result } = renderHook(() => useLocalStorage('mockKey'));

    localStorage.setItem('mockKey', JSON.stringify(['data']));

    expect(result.current[0]).toBeUndefined();

    act(() => {
      result.current[2]();
    });

    expect(result.current[0]).toEqual(['data']);
  });

  it('Should setData with a function', () => {
    const { result } = renderHook(() => useLocalStorage<string[]>('mockKey', []));

    expect(result.current[0]).toEqual([]);

    act(() => {
      result.current[1]((data) => data.concat(['mockData']));
    });

    expect(result.current[0]).toEqual(['mockData']);
    expect(localStorage.getItem('mockKey')).toEqual(JSON.stringify(['mockData']));
  });

  it('Should print a warn if key was not set', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation();

    const { result } = renderHook(() => useLocalStorage<string[]>('mockKey', []));

    act(() => {
      result.current[1](() => { throw new Error('mock Error') });
    });

    expect(warnSpy).toHaveBeenCalledWith("Error setting localStorage key \"mockKey\": mock Error");
  });
});