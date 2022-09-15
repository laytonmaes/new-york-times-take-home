const getArticles = () => {
    return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XNnToqSA6rVzpg5KjSaAOgzhVmYo1HUf")
    .then((response) => {
        if(!response.ok) {
            throw new Error(response.status + " " + response.statusText)
        }else {
            return response.json();
        }
    })
}

export default getArticles