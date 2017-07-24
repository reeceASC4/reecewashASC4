var roster = 
[['pikachu>TYPE:Electric>HP:35>Attack:55>Defense:40>Legendary:false'],
[' Charizard > TYPE: Fire > HP: 200 > ATK: 120 > DEF: 150 > Legend: false'],
['Umbra > TYPE: Dark > HP: 120 > ATK: 90 > DEF: 100 > Legend: false'],
['Ninetales> TYPE: Fire> HP: 73> ATK: 76 > DEF: 75> Legend:False'],
['Gengar> TYPE: Ghost,Poison>HP:60> ATK 65> DEF: 60> Legend: False '],
['Exeggutor> TYPE: psychic,Grass> HP:95> ATK: 95 > DEF: 85> Legend: False']]

function stats(){ 
    for( var i= 0;i < roster.length ; i++){
        for (var j = 0; j < roster[i].length;j++){
            console.log(roster[i][j]);
        }
    }
    
    }