let zrp = document.querySelector("#a")
        let dp = document.querySelector("#b")
        let zp = document.querySelector("#c")
        let it = document.querySelector("#it")
        let sum = document.querySelector("#sum")
        let vol


        sum.addEventListener("click", function () {
            let a = zrp.value
            let b = dp.value
            let c = zp.value
            vol = Math.floor((a * (0.033 * b + 0.05 * c)))
            document.querySelector("#it").textContent = vol + "₴"
        })