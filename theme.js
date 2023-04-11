let switchMode = document.querySelector("#switchMode")
let theme = document.querySelector("#theme")
let iii = document.querySelector("#iii")
switchMode.onclick = function () {
    if(theme.getAttribute("href") == "style-while.css"){
        theme.href = "style-dark.css"
        iii.innerHTML = "Light"
        localStorage.setItem('theme.href', "style-dark.css")

    } else {
        theme.href = "style-while.css"
        iii.innerHTML = "Dark"
        localStorage.setItem('theme.href', "style-while.css")
    }
}