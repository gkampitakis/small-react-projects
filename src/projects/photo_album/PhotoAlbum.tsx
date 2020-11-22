import React, { ReactElement, useEffect, useState } from 'react';
import { useFetch, useDocTitle } from '../../hooks'
import Photo, { PhotoProps } from './components/Photo';
import Search from './components/Search';
import Footer from './components/Footer';
import ErrorComponent from '../../components/Error';
import './index.scss';

//TODO: handle the api_key seeding
//TODO: pagination 

// process.env.REACT_APP_UNSPLASH_KEY = 'l0oa03jNvtVdyafIBXFyC1v5k13SivrIsKxn0T_j5cg';

type Data = PhotoProps & { id: string }[];
interface SearchData {
  results: PhotoProps & { id: string }[];
}

const FETCH_API = 'https://api.unsplash.com/photos/';
const SEARCH_API = 'https://api.unsplash.com/search/photos/';
const CLIENT_ID = `?client_id=${'l0oa03jNvtVdyafIBXFyC1v5k13SivrIsKxn0T_j5cg'}`;

export default function PhotoAlbum (): ReactElement {
  useDocTitle('Photo Album');
  const [page, setPage] = useState(0);
  const _url = `${FETCH_API}${CLIENT_ID}&page=${page}`
  const [url, setUrl] = useState(_url);
  const [data, loading, _, error] = useFetch<Data | SearchData>(url);
  const [results, setResults] = useState<Data>();

  useEffect(() => {
    if (data) {
      if ('length' in data) {
        setResults(data as Data);
      } else {
        setResults(data.results as Data);
      }
    }
  }, [data]);

  function search (query: string) {
    setPage(0);
    setResults(undefined);
    const searchUrl = `${SEARCH_API}${CLIENT_ID}&page=${page}&query=${query}`;

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
//NOTE: add pages 

//TODO: add link for visiting image or something like portfolio