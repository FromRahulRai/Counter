(function () {
    const buttons = document.querySelectorAll(".counterBtn")
    let count = 0


    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('prevBtn')) {
                count--
            }
            else if (button.classList.contains('nextBtn')) {
                count++
            }
            else if(button.classList.contains('resetBtn')){
                count = 0
            }

            const counter = document.querySelector('#counter')
            counter.textContent = count

            if (count < 0) {
                counter.style.color = 'white'
            }

            else if (count > 0) {
                counter.style.color = 'black'
            }

            else {
                counter.style.color = 'green'
            }

        })
    })



})()