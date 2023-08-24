type TreeData = {
  id: string,
  name: string,
  parent: string | null, 
}[];

export const unflatten = (data: TreeData) => {

  const dictionary: {
    [id: string] : { id: string, name: string, parent: string, children: TreeData } 
  } = {};

  // we need to construct a new tree-like array of objects 
  data.forEach((node) => {
    const nodeId = node.id;
    const nodeParentId = node.parent === null ? '0' : node.parent; // null values are considered root

    dictionary[nodeId] = {
      id: nodeId,
      name: node.name,
      parent: nodeParentId,
      ["children"]: [], // initialize a children property
    };

    dictionary[nodeParentId] = dictionary[nodeParentId] || {  ["children"]: [] }
    dictionary[nodeParentId]["children"].push(dictionary[nodeId]);

  });

  return dictionary['0'];
}