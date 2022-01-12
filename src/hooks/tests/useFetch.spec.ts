import { useFetch } from '../useFetch';
import { act, renderHook } from '@testing-library/react-hooks';
import { FetchMock } from 'jest-fetch-mock';

const fetchMock = fetch as FetchMock;

describe('useFetch', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('Should return default values', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('http://mockUrl.com')
    );

    expect(result.current[0]).toBeUndefined();
    expect(result.current[1]).toBe(true);
    expect(result.current[2]).toBeInstanceOf(Function);
    expect(result.current[3]).toBe(null);

    await waitForNextUpdate();
  });

  it('Should fetch data', async () => {
    fetchMock.mockResponse(JSON.stringify({ data: [] }));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('http://mockUrl.com')
    );

    await waitForNextUpdate();

    expect(result.current[0]).toEqual({ data: [] });
    expect(result.current[1]).toBe(false);
    expect(result.current[2]).toBeInstanceOf(Function);
    expect(result.current[3]).toBe(null);
    expect(fetchMock).toHaveBeenNthCalledWith(1, 'http://mockUrl.com');
  });

  it('Should re-retrieve data', async () => {
    fetchMock.mockResponse(JSON.stringify({ data: [] }));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('http://mockUrl.com')
    );

    await waitForNextUpdate();

    act(() => result.current[2]());

    await waitForNextUpdate();

    expect(result.current[0]).toEqual({ data: [] });
    expect(result.current[1]).toBe(false);
    expect(result.current[2]).toBeInstanceOf(Function);
    expect(result.current[3]).toBe(null);
    expect(fetchMock).toHaveBeenNthCalledWith(2, 'http://mockUrl.com');
  });

  it('Should return error', async () => {
    fetchMock.mockRejectOnce(() => Promise.reject('Mock Error'));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('http://mockUrl.com')
    );

    await waitForNextUpdate();

    expect(result.current[0]).toBeUndefined();
    expect(result.current[1]).toBe(false);
    expect(result.current[2]).toBeInstanceOf(Function);
    expect(result.current[3]).toBe('Mock Error');
  });
});
