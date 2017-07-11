var myPokemonRoster = ['Raquaza','Kyogre','Amoonguss','Gengar','Zapdos'];
// var firstToFight = 'Raquaza'
// var secondToFight = 'Kyogre'

// myPokemonRoster[0] = firstToFight
// myPokemonRoster[1] = secondToFight 

// myPokemonRoster 


// myPokemonRoster.pop()
// myPokemonRoster.push('Charzard', 'Blastoise' )

// var RosterSize = myPokemonRoster.length

// myPokemonRoster
// console.log(RosterSize)
myPokemonRoster.pop()

if(myPokemonRoster.length >= 5) {
for (var i = 0; i < myPokemonRoster.length; i++){
   
    console.log(myPokemonRoster[i]);
}
} else {
    console.log("You can't play! Not enough pokemon")
}
