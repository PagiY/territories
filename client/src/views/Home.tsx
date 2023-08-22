import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Loader from '../components/Loader';
import Branch from '../components/Branch';

import { getTerritories } from '../api/getTerritories';

type ChildrenTerritory = {
  id: string,
  name: string,
  parent: string,
  children: ChildrenTerritory[],
};

const CustomDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
  padding: 15px;
  width: 50vh;
  background-color: white;
  border-radius: 5%;
`;

const CustomContainer = styled.div`
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
`;

export const Home = () => {
  const [territories, setTerritories] = useState<ChildrenTerritory[] | null>(null);

  // get territories data from api
  // GET: /territories/all
  useEffect(() => {
    getTerritories()
      .then((data) => setTerritories(data.children));
  }, [setTerritories]);

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
    <CustomContainer>
      <CustomDiv>
        <h1>Territories</h1>
        <h4>Here are the list of territories:</h4>
        {
          territories === null
            ? <Loader />
            : generateTree()
        }
      </CustomDiv>
    </CustomContainer>
  )
};
