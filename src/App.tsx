import { useEffect, useState } from 'react';
import './App.css';

import { ResponseInterface, ResultsEntity, Name } from './types';

type User = ResponseInterface;
type Results = ResultsEntity;
type UserName = Name;

function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // const results = user.results<ResultsEntity>
  // console.log(user?.results?.name);

  return (
    <div className="App">
      <p>It happens here!</p>
    </div>
  );
}

export default App;
