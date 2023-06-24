const btn = document.getElementById("btn");
const output = document.querySelector(".lower");

let quote = [ "You’re born, you work, you die.", "Your mother’s biggest regret is you.","The first step towards failure is trying.","Teams – Together, we can do the work of one.", "Accept that you’re just a product, not a gift.", "There’s only one you, and that’s a good thing.", "Meetings – None of us is as dumb as all of us.", "Nobody can stop me but only because I haven’t started yet.", "Those who doubt your ability probably have a valid reason.", "If at first you don’t succeed. Give up and try something else.", "Better discourage a man’s climbing than help him to break his neck.", "School for 12 years, college for 4 years and work until I die. Great!", "Some are born great, some achieve greatness, and some wind up like you.", "Get to Work – You aren’t being paid to believe in the power of your dreams.", "Flattery – if you want to get to the top, prepare to kiss a lot of the bottom.", "If at first you don’t succeed, then skydiving definitely isn’t for you." , "Your life can’t fall apart if you never had it together.", "If life doesn’t break you today, don’t worry. It will try again tomorrow.", " did you know, that you have a 30% bigger chance of dying on your birthday?", "It's dark and it's knocking on your door, what's that? - Your Future", " when someone insults you, just remember that they can't bring down your already non-existant self-esteem", " i'm good at hide and seek because happiness never found me", "roses are red, birds can fly, i have schizophrenia, and so do i"

]

btn.addEventListener("click",()=>{
    console.log("clicked");
    let random = Math.floor(Math.random()*quote.length)
    output.textContent = quote[random]
})