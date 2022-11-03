var list = document.getElementById("slider-list").getElementsByTagName("li")
var text = document.getElementById("slider-text")
var author = document.getElementById("slider-author")

var texts = ["A new email service being developed by a group from MIT and CERN promises to bring secure, encrypted email to the masses and keep sensitive information away from prying eyes.", "Lorem", "Ipsum"]
var authors = ["Boston Herald", "Lorem", "Ipsum"]

var button1 = list[0]
var button2 = list[1]
var button3 = list[2]

button1.style.backgroundColor = "black"

button1.addEventListener("click", e1=>{
    text.innerHTML = texts[0]
    author.innerHTML = "— " + authors[0]
    button1.style.backgroundColor = "black"
    button2.style.backgroundColor = "#B7B7B7"
    button3.style.backgroundColor = "#B7B7B7"
    console.log("Clicked button 1")
})

button2.addEventListener("click", e2=>{
    text.innerHTML = texts[1]
    author.innerHTML = "— " + authors[1]
    button1.style.backgroundColor = "#B7B7B7"
    button2.style.backgroundColor = "black"
    button3.style.backgroundColor = "#B7B7B7"
    console.log("Clicked button 2")
})

button3.addEventListener("click", e3=>{
    text.innerHTML = texts[2]
    author.innerHTML = "— " + authors[2]
    button1.style.backgroundColor = "#B7B7B7"
    button2.style.backgroundColor = "#B7B7B7"
    button3.style.backgroundColor = "black"
    console.log("Clicked button 3")
})



console.log(button1)
console.log(button2)
console.log(button3)

