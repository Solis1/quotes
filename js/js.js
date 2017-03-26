var colors = ["rgb(104,255,13)", "rgb(0,54,217)", "rgb(182,55,219)", "rgb(13,255,19)", "rgb(255,77,13)", "rgb(71, 143,124)", "rgb(105,100,92)"];
var frases = [
    "Frankly, my dear, I don't give a damn.",
    "I'm gonna make him an offer he can't refuse.",
    "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    "Toto, I've a feeling we're not in Kansas anymore.",
    "Here's looking at you, kid.",
    "Go ahead, make my day.",
    "All right, Mr. DeMille, I'm ready for my close-up.",
    "May the Force be with you.",
    "Fasten your seatbelts. It's going to be a bumpy night.",
    "You talkin' to me?",
    "What we've got here is failure to communicate.",
    "I love the smell of napalm in the morning.",
    "Love means never having to say you're sorry.",
    "The stuff that dreams are made of.",
    "E.T. phone home.",
    "They call me Mister Tibbs!",
    "Rosebud.",
    "Made it, Ma! Top of the world!",
    "I'm as mad as hell, and I'm not going to take this anymore!",
    "Louis, I think this is the beginning of a beautiful friendship.",
    "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    "Bond. James Bond.",
    "There's no place like home.",
    "I am big! It's the pictures that got small.",
    "Show me the money!",
    "Why don't you come up sometime and see me?",
    "I'm walking here! I'm walking here!",
    "Play it, Sam. Play 'As Time Goes By.'",
    "You can't handle the truth!",
    "I want to be alone.",
    "After all, tomorrow is another day!",
    "Round up the usual suspects.",
    "I'll have what she's having.",
    "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
    "You're gonna need a bigger boat.",
    "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    "I'll be back.",
    "Today, I consider myself the luckiest man on the face of the Earth.",
    "If you build it, he will come.",
    "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    "We rob banks.",
    "Plastics.",
    "We'll always have Paris.",
    "I see dead people.",
    "Stella! Hey, Stella!",
    "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    "Shane. Shane. Come back!",
    "Well, nobody's perfect.",
    "It's alive! It's alive!",
    "Houston, we have a problem.",
    "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    "You had me at 'hello.'",
    "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    "There's no crying in baseball!",
    "La-dee-da, la-dee-da.",
    "A boy's best friend is his mother.",
    "Greed, for lack of a better word, is good.",
    "Keep your friends close, but your enemies closer.",
    "As God is my witness, I'll never be hungry again.",
    "Well, here's another nice mess you've gotten me into!",
    "Say 'hello' to my little friend!",
    "What a dump.",
    "Mrs. Robinson, you're trying to seduce me. Aren't you?",
    "Gentlemen, you can't fight in here! This is the War Room!",
    "Elementary, my dear Watson.",
    "Get your stinking paws off me, you damned dirty ape.",
    "Of all the gin joints in all the towns in all the world, she walks into mine.",
    "Here's Johnny!",
    "They're here!",
    "Is it safe?",
    "Wait a minute, wait a minute. You ain't heard nothin' yet!",
    "No wire hangers, ever!",
    "Mother of mercy, is this the end of Rico?",
    "Forget it, Jake, it's Chinatown.",
    "I have always depended on the kindness of strangers.",
    "Hasta la vista, baby.",
    "Soylent Green is people!",
    "Open the pod bay doors, HAL.",
    "Yo, Adrian!",
    "Hello, gorgeous.",
    "Toga! Toga!",
    "Listen to them. Children of the night. What music they make.",
    "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
    "My precious.",
    "Attica! Attica!",
    "Sawyer, you're going out a youngster, but you've got to come back a star!",
    "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
    "Tell 'em to go out there with all they got and win just one for the Gipper.",
    "A martini. Shaken, not stirred.",
    "Who's on first?",
    "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!",
    "Life is a banquet, and most poor suckers are starving to death!",
    "I feel the need—the need for speed!",
    "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    "Snap out of it!",
    "My mother thanks you. My father thanks you. My sister thanks you. And I thank you.",
    "Nobody puts Baby in a corner.",
    "I'll get you, my pretty, and your little dog too!",
    "I'm the King of the World"
    ];

var peliculas = [
    "On the Waterfront",
    "The Wizard of Oz",
    "Casablanca",
    "Sudden Impact",
    "Sunset Boulevard",
    "Star Wars",
    "All About Eve",
    "Taxi Driver",
    "Cool Hand Luke",
    "Apocalypse Now",
    "Love Story",
    "The Maltese Falcon",
    "E.T. the Extra-Terrestrial",
    "In the Heat of the Night",
    "Citizen Kane",
    "White Heat",
    "Network",
    "Casablanca",
    "The Silence of the Lambs",
    "Dr. No",
    "The Wizard of Oz",
    "Sunset Boulevard",
    "Jerry Maguire",
    "She Done Him Wrong",
    "Midnight Cowboy",
    "Casablanca",
    "A Few Good Men",
    "Grand Hotel",
    "Gone with the Wind",
    "Casablanca",
    "When Harry Met Sally...",
    "To Have and Have Not",
    "Jaws",
    "The Treasure of the Sierra Madre",
    "The Terminator",
    "The Pride of the Yankees",
    "Field of Dreams",
    "Forrest Gump",
    "Bonnie and Clyde",
    "The Graduate",
    "Casablanca",
    "The Sixth Sense",
    "A Streetcar Named Desire",
    "Now, Voyager",
    "Shane",
    "Some Like It Hot",
    "Frankenstein",
    "Apollo 13",
    "Dirty Harry",
    "Jerry Maguire",
    "Animal Crackers",
    "A League of Their Own",
    "Annie Hall",
    "Psycho",
    "Wall Street",
    "The Godfather Part II",
    "Gone with the Wind",
    "Sons of the Desert",
    "Scarface",
    "Beyond the Forest",
    "The Graduate",
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "The Adventures of Sherlock Holmes",
    "Planet of the Apes",
    "Casablanca",
    "The Shining",
    "Poltergeist",
    "Marathon Man",
    "The Jazz Singer",
    "Mommie Dearest",
    "Little Caesar",
    "Chinatown",
    "A Streetcar Named Desire",
    "Terminator 2: Judgment Day",
    "Soylent Green",
    "2001: A Space Odyssey",
    "Rocky",
    "Funny Girl",
    "National Lampoon's Animal House",
    "Dracula",
    "King Kong",
    "The Lord of the Rings: The Two Towers",
    "Dog Day Afternoon",
    "42nd Street",
    "On Golden Pond",
    "Knute Rockne, All American",
    "Goldfinger",
    "The Naughty Nineties",
    "Caddyshack",
    "Auntie Mame",
    "Top Gun",
    "Dead Poets Society",
    "Moonstruck",
    "Yankee Doodle Dandy",
    "Dirty Dancing",
    "The Wizard of Oz",
    "Titanic"
    ];


$(document).ready(function () {
            var pelicula = Math.floor(Math.random() * peliculas.length);

            $("#text").text(frases[pelicula]);

            $("#movie").text(peliculas[pelicula - 2]);


            $("#btn").click(function () {

                var color = Math.floor(Math.random() * colors.length);

                pelicula = Math.floor(Math.random() * peliculas.length);

                console.log(colors[color]);

                $("#page").animate({
                    backgroundColor: colors[color]
                }, 1000);

                $("#btn").animate({
                    backgroundColor: colors[color]
                }, 1000);

                $("#container").animate({
                    color: colors[color]
                }, 1000);

                $("#face").animate({
                    color: colors[color]
                }, 1000);

                $("#frases").animate({
                    opacity: 0
                }, 1000, function () {
                    $("#text").text(frases[pelicula]);
                    $("#movie").text(peliculas[pelicula - 2]);
                });

                $("#frases").animate({
                    opacity: 1
                }, 1000);

            });

            $("#share").click(function () {

                    $("#share").attr("href", "http://www.facebook.com/sharer.php?u=http://www.lostiemposcambian.com/blog/facebook/compartir-urls-en-facebook/&t=Compartir urls en Face");

                    });

            });
