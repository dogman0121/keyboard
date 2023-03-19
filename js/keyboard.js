document.addEventListener('keydown', function(event) {
    //console.log(event.key, event.code)
    let key = event.code;

    let button = document.getElementById(key);

    let opacity = 1;
    button.style.background = `rgba(0, 0, 0, ${opacity})`;

    let animation = setInterval(function() {
        if (opacity > 0){
            opacity -= 0.1;
            button.style.background = `rgba(0, 0, 0, ${opacity})`;
        }
        else {
            return;
        }
    }, 30);
})