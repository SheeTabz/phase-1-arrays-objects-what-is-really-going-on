const phrases = {
    greetings : "Hello!",
    time : () => {
        const currentTime =  new Date();
        return `The ${currentTime.getHours()} : ${currentTime.getMinutes()} `
        
    }
}
console.log(phrases.greetings)
console.log(phrases.time())

function PhraseOfObjects(name){
    this.greetimg = `Hello ${name}!`
    this.time = () => {
        const nowTime = new Date()
        return `The time is ${nowTime.getHours()} hrs`
    }
}
const phrase = new PhraseOfObjects("Shee")
console.log(phrase.time())


const example = {
    name : "Henry",
    sayName : function(){
        return `My name is ${this.name}`
    }
}
console.log(example.sayName())
const artists = ["Janelle Monae", "Sza", "Thunder Cat", "Frank Ocean"];

const numberedArtists = artists.map(function (artist, index) {
  return `${index + 1}. ${artist}`;
});
console.log(numberedArtists);