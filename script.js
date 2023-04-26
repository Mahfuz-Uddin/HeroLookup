function getSuperHero(heroNumber){
    fetch(`https://superheroapi.com/api.php/2429608517215146/${heroNumber}`)
    .then(response => response.json())
    .then(json=>{
        const image = json.image.url
        const stats = showStats(json)        
    })
}

function randomHero (){
    var randomNumber = Math.floor(Math.random() *731)+1
    return randomNumber
}
const getNewHeroButton = document.getElementById('newHero')

getNewHeroButton.onclick = () => getSuperHero(randomHero())



function getHeroByName(name){
    fetch(`https://superheroapi.com/api.php/2429608517215146/search/${name}`)
    .then(response => response.json())
    .then(json=>{
        console.log(json)
        const hero = json.results[0]
        showStats(hero)
    })

}
const statToEmoji = {
    intelligence : '🧠',    
    strength : '💪', 
    speed: '⏩',
    durability: '🏋',
    power: '📈',
    combat: '⚔' 
}

const showStats = (character) =>{
    const image =`<img src = ${character.image.url} height =300 width=300>/`
    const name = `<h2> ${character.name}</h2>`
    const stats =Object.keys(character.powerstats).map(stat =>{
        return `<p>${statToEmoji[stat]}${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join(" ")
    const heroImageDiv = document.getElementById("heroImage") 
    heroImageDiv.innerHTML = `${name}${image}${stats}`
}




const searchButton =document.getElementById('search')
const heroName = document.getElementById('searchInput')
searchButton.onclick = () =>getHeroByName(heroName.value)