const header = {
    'x-api-key': '56db10e7-e5f3-4f98-b24e-c9722fa5bf10',
};

export const getCats = () => {
    return  new Promise((resolve, reject) => {
        fetch('https://api.thecatapi.com/v1/breeds', 'GET', header)
        .then(res => resolve(res.json()))
        .catch(err => reject(err))
    })
}