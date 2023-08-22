import { useState, useEffect } from 'react';

import { Branch } from '../components/Branch';

import { getTerritories } from '../api/getTerritories';

type ChildrenTerritory = {
  id: string,
  name: string,
  parent: string,
  children: ChildrenTerritory[],
};

export const Home = () => {
  const [territories, setTerritories] = useState<ChildrenTerritory[] | null>(null);

  // get territories data from api
  useEffect(() => {
    getTerritories()
      .then((data) => setTerritories(data.children));
  }, [setTerritories]);
  
  console.log(territories);

  const generateTree = () => {
    return (
      <>
        {
          territories?.map((territory) => <Branch key={territory.id} territory={territory} level={0} />)
        }
      </>
    );
  };

  return (
    <>
      <h1>Territories</h1>
      {
        territories === null
          ? <p>Loading...</p>
          : generateTree()
      }
    </>
  )
};
