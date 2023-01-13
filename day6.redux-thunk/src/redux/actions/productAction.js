//미들웨어 함수는 함수를 리턴
function getProducts(searchQuery){
    return async(dispatch, getstate) => {
        let url = ` https://my-json-server.typicode.com/hoger96/React/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json()
        console.log(data);
    };
}

export const productAction={getProducts};