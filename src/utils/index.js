const firebaseDocsToArray = (firebaseSnapshot) => {
  const products = firebaseSnapshot.docs.map((document) => {
    const item = { id: document.id, ...document.data() };
    return item;
  });
  return products;
};

export default firebaseDocsToArray;
