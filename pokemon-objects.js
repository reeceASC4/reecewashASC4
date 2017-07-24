
var pokemon = [
    charizard = {

        "atk": "84",
        "Defense": "78",
        "hp": "78",
        "legend": "false",
        "name": "charizard",
        "type": "fire",




    }

    ,

    pikachu = {
        "atk": "35",
        "Defense": "40",
        "hp": "35",
        "legend": "false",
        "name": "pikachu",
        "type": "electric",


    },

    mewtwo = {
        "atk": "106",
        "Defense": "90",
        "hp": "106",
        "legend": "true",
        "name": "mewtwo",
        "type": "psychic",


    },

    gengar = {
        "atk": "60",
        "Defense": "65",
        "hp": "60",
        "legend": "false",
        "name": "Gengar",
        "type": "Ghost",


    },

    blastoise = {
        "atk": "83",
        "Defense": "100",
        "hp": "79",
        "legend": "false",
        "name": "blastoise",
        "type": "water",


    }
    ,

    sceptile = {
        "atk": "85",
        "Defense": "65",
        "hp": "70",
        "legend": "false",
        "name": "sceptile",
        "type": "grass",


    }]


function printRoster() {
    for (i = 0; i < pokemon.length; i++)
        console.log(pokemon[i])
}

printRoster();

function pokemonAttacked() {
    for (i = 0; i < pokemon.length; i++) {
        pokemon[i].hp = pokemon[i].hp - 10
        console.log(pokemon[i])

    }



}


pokemonAttacked();

function rand(num) {
    //Returns a random integer between 0 and sum 
    var x = num * Math.random()
    var result = Math.floor(x)
    return result
}



function pokemonSubtracted() {
   
    var result = rand(pokemon.length)
    pokemon[result].hp = pokemon[result].hp - 10
    console.log(pokemon[result])

}
pokemonSubtracted()