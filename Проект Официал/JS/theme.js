let switchMode = document.querySelector("#switchMode")
let theme = document.querySelector("#theme")
let iii = document.querySelector("#iii")
switchMode.onclick = function () {
    if(theme.getAttribute("href") == "/CSS/style-while.css"){
        theme.href = "/CSS/style-dark.css"
        iii.innerHTML = "Light"
        localStorage.setItem('theme.href', "/CSS/style-dark.css")

    } else {
        theme.href = "/CSS/style-while.css"
        iii.innerHTML = "Dark"
        localStorage.setItem('theme.href', "/CSSstyle-while.css")
    }
}