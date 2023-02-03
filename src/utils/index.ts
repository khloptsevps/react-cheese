/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: Fix ANY
type ProductItem = {
  id: string;
  name: string;
};

const firebaseDocsToObjects = (
  firebaseSnapshot: any,
  sortBy: string,
  order: string,
) => {
  const products: ProductItem[] = firebaseSnapshot.docs.map((document: any) => {
    const item = { id: document.id, ...document.data() };
    return item;
  });
  if (sortBy === 'name') {
    const productsSortedByName = products.sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    return order === 'asc'
      ? productsSortedByName
      : productsSortedByName.reverse();
  }
  return products;
};

export default firebaseDocsToObjects;
