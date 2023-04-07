import useSWR from 'swr';
import './App.css';

import { ResultsProperties } from './types';

function App() {
  const apiUrl = 'https://randomuser.me/api/';

  const fetcher = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results[0];
  };

  const { data: user, isLoading, error } = useSWR<ResultsProperties>(apiUrl, fetcher);

  const avatar = user?.picture;
  const largeAvatar = avatar?.large;

  const name = user?.name;
  const fullName = `${name?.title} ${name?.first} ${name?.last}`;

  return (
    <div className="App">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>An error occured</h3>
      ) : (
        <>
          <img src={largeAvatar} alt="medium sized avatar image" style={{ borderRadius: '50%' }} />
          <h3>{fullName}</h3>
        </>
      )}
    </div>
  );
}

export default App;
