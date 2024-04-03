//@ts-ignore
const { useState, useEffect } = preactHooks;
import jsonp from 'jsonp';

const useMusicData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [numPages, setNumPages] = useState(1);
  const [pagedResults, setPagedResults] = useState([]);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
    } else {
      const url = `https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=album,song&limit=200`;
      jsonp(url, (err, response) => {
        if (err) {
          console.error(err);
          setSearchResults([]);
        } else {
          setSearchResults(response.results);
        }
      });
    }

    setNumPages(1);
  }, [searchTerm]);

  useEffect(() => {
    setPagedResults(searchResults.slice(0, 10));
  }, [searchResults]);

  useEffect(() => {
    setPagedResults(searchResults.slice(0, numPages * 10));
  }, [numPages]);

  const loadNextPage = () => {
    setNumPages((prevState: number) => prevState + 1);
  };

  const hasNextPage = () => {
    return searchResults.length > pagedResults.length;
  };

  const getResultsCount = () => {
    return searchResults.length;
  };

  return [
    pagedResults,
    searchTerm,
    setSearchTerm,
    loadNextPage,
    hasNextPage,
    getResultsCount,
  ];
};

export default useMusicData;
