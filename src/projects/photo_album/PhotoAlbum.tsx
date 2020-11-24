import React, { ReactElement, useEffect, useState } from 'react';
import { useFetch, useDocTitle, useBodyStyles } from '../../hooks'
import Photo, { PhotoProps } from './components/Photo';
import Search from './components/Search';
import Footer from './components/Footer';
import ErrorComponent from '../../components/Error';
import './index.scss';


type Data = PhotoProps & { id: string }[];
interface SearchData {
  results: PhotoProps & { id: string }[];
}

const CLIENT_ID = '?client_id=l0oa03jNvtVdyafIBXFyC1v5k13SivrIsKxn0T_j5cg',
  RESULTS = 21,
  SEARCH_API = `https://api.unsplash.com/search/photos/${CLIENT_ID}&per_page=${RESULTS}`,
  FETCH_API = `https://api.unsplash.com/photos/${CLIENT_ID}&per_page=${RESULTS}`;

export default function PhotoAlbum (): ReactElement {
  useBodyStyles({
    background: 'white',
    color: 'black'
  });
  useDocTitle('Photo Album');
  const [url, setUrl] = useState(FETCH_API);
  const [data, loading, _, error] = useFetch<Data | SearchData>(url);
  const [results, setResults] = useState<Data>();

  useEffect(() => {
    const _data: any = data;
    if (_data) {
      if (_data.length) {
        setResults(data as Data);
      } else {
        setResults(_data.results as Data);
      }
    }
  }, [data]);

  function search (query: string) {
    setResults(undefined);
    const searchUrl = `${SEARCH_API}&query=${query}`;

    setUrl(searchUrl);
  }

  return (
    <main className="photo_album">
      <Search search={search} />
      {loading && <h2 className="loading">Loading ...</h2>}
      {error && <ErrorComponent error={new Error(error)} />}
      {
        results &&
        <section className="photos">
          {results.map((d: any) => {
            const { alt_description, likes, urls, user, id, blur_hash } = d;
            return (
              <Photo
                blur_hash={blur_hash}
                alt_description={alt_description}
                likes={likes}
                urls={urls}
                user={user}
                key={id}
              />
            );
          })}
        </section>
      }
      <Footer />
    </main>
  );
}
