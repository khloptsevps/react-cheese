const firebaseDocsToObjects = (firebaseSnapshot, sortBy, order) => {
  const products = firebaseSnapshot.docs.map((document) => {
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
