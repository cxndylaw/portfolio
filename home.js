let opacity = 0;
const header = document.getElementById("head");
header.style.opacity = opacity;

setTimeout(function(){
    document.getElementById("sub").style.display = "block"; 
    const time = setInterval(appear, 200);
    document.body.style.backgroundSize = "100vw 1000vh"
    
    function appear() {
        if(opacity < 1)
        {
            opacity += 0.03;
            header.style.opacity = opacity;
        }
        else
        {
            clearInterval(time);
        }
    }
}, 2200);
