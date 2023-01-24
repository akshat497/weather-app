var input=document.getElementById("search").value
var numeric=document.getElementById("numeric")
var type=document.getElementById("type")
var type1=document.getElementById("type1")
var image=document.getElementById("img")
var inputValue=document.querySelector('.inputValue')
const weather = document.querySelector("#weather1")
//var img=document.getElementById("img1")
//var image=document.querySelector('.image')
var API_KEY="6b3b6f134fe84c2969aabc43441007be"


    
function update(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6b3b6f134fe84c2969aabc43441007be&units=metric')
    .then(function(data){
        data.json().then(function(actualData){
            console.log(actualData)
                    create(actualData.main,actualData.weather,actualData.wind)
            
        }).catch(function(err){
            console.log(err)
        })

    }).catch(function(err){
        console.log(err)
    })
}
function create(main,weather,wind){
    
    numeric.innerHTML=main.temp+' *C'
    type.innerHTML=weather[0].description
    type1.innerHTML=wind.speed+'km/h'
    
    weather1.innerHTML = `
    <div>
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="">
    </div>
    `

}
    
