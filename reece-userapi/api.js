var appId="39adc067"

var appKey="b1f890f7d1c00d853782530a07feecf2"

var randomURL = "https://randomuser.me/api/";
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
$.ajax({


    url:  randomURL,
    success: function(data){
    console.log(data);
       var user = data.results[0]
        var name = user.name.first
        var portrait = user.picture.large
        var location = user.location.city
        var state = user.location.state
        var cell = user.cell
        var name = toTitleCase(name)
        var location = toTitleCase(location)
        var state = toTitleCase(state)



        $("body").append("<img src=" + portrait + ">");
        $("body").append("<h2>Hi My name is " + name + "</h2>");
        $("body").append("<p> I live in  " + location + " In " + state + "</p>")
         $("body").append("<p> My cell phone number is " + cell + "</p>")
       
        // $("body").append("<h2>This " + name2 + " has " + cals2 + " calories!!</h2>");
        console.log(user)
    }
})



