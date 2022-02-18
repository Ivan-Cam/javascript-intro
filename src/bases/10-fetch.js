const apiKey = "f0zGmmjCLLMOEnrPb008o6D3s4V3M2K0";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then( resp => resp.json())
    .then( ({data}) => {
        const {url} = data.images.original

        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
