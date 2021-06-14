const commonHeader = {
  'x-api-key': '56db10e7-e5f3-4f98-b24e-c9722fa5bf10',
};

export const getCats = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.thecatapi.com/v1/breeds', 'GET', commonHeader)
      .then(res => resolve(res.json()))
      .catch(err => reject(err));
  });
};

export const addToFavorites = (data: any) => {
  const headers = {
    ...commonHeader,
    'Content-Type': 'application/json',
  };
  return new Promise((resolve, reject) => {
    fetch('https://api.thecatapi.com/v1/favourites', {
      method: 'POST',
      headers: headers,
      redirect: 'follow',
      body: JSON.stringify(data),
    })
      .then(res => resolve(res.json()))
      .catch(err => reject(err));
  });
};

export const getFavourites = (data: any) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.thecatapi.com/v1/favourites/?sub_id=${data.sub_id}&limit=${data.limit}&page=${data.page}}`,
      {
        method: 'GET',
        headers: commonHeader,
        redirect: 'follow',
      },
    )
      .then(res => resolve(res.json()))
      .catch(err => reject(err));
  });
};
