export const request = (url) => {
  return fetch(url).then((responce) => {
    if (responce.ok) {
      return responce.json();
    }
    throw new Error("ERROR");
  });
};
