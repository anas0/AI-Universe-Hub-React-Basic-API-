import React, { useEffect, useState } from 'react';
import Button from './component/Button/Button';
import Card from './component/Card/Card';
import Header from './component/Header/Header';

const App = () => {
  const [data, setData] = useState([]); 
  const [showAll, setShowAll] = useState(false);

  useEffect( ()=>{
      const loadData = async() => {
          const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
          const data = await res.json();
          setData(data.data.tools);
      }

      loadData()
  }, []);
  
  return (
    <>
      <Header />
      <Button>Sort By Date</Button>
      <Card data={data} showAll={showAll} />
      {!showAll && (
        <a onClick={ () => setShowAll(true) }>
          <Button>See More</Button>
        </a>
      )}
      
    </>
  );
};

export default App;