let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pokemonImage")
let textInput = document.querySelector("#inputBar").value

button.addEventListener('click', async () => {
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    console.log(textInput)
        

    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    console.log(response)
}
)


    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here
