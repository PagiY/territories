import { useState } from 'react';
import styled from '@emotion/styled';

type ChildrenTerritory = {
  id: string,
  name: string,
  parent: string,
  children: ChildrenTerritory[],
};

type BranchProps = {
  territory: ChildrenTerritory,
  level: number 
}

const CustomUl = styled.ul`
  list-style-type: none;
`;

const CustomClickableLi = styled.li`
  list-style-type: '🔽';
  color: black;
  cursor: arrow;
  :hover: {
    color: blue;
    cursor: pointer;
  }
`;

const Branch = ({ territory, level }: BranchProps) => {
  
  const [selected, setSelected] = useState(false);
  const newLevel = level + 1;

  return (
    <CustomUl>
      {
        territory.children && territory.children.length !== 0
        ?
        <>
          <CustomClickableLi onClick={() => setSelected(true)}>{territory.name}</CustomClickableLi>
          {
            selected && territory.children.map((child: ChildrenTerritory) =>
              <Branch key={child.id} territory={child} level={newLevel} />
            )
          }
        </> 
        : <li>{territory.name}</li>
      }
    </CustomUl>
  )
};

export default Branch;