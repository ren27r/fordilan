const btn = document.getElementById('btn');
const heading = document.getElementById('heading');
const hoshinoimg = document.getElementById('hoshino');
let click = 0;


btn.addEventListener('click', () => {
    click++;
    switch(click){
        case 1 : btn.style.marginTop = '100px'; 
        break;
        case 2 : btn.style.marginTop = '300px';
        break;
        case 3 : btn.classList.add('fade-out');

        setTimeout(() => {
            btn.style.display = 'none';
        }, 500);
    
        document.getElementById("background-audio").muted = true;
    
        setTimeout(() => {
            hoshinoimg.style.transition = "opacity .3s ease";
            hoshinoimg.style.opacity = "1";
            hoshinoimg.style.display = "flex";
    
            setTimeout(() => {
                document.getElementById("hoshinoaudio").play();
            }, 300);
    
    
            setTimeout(() => {
                const hbdElement = document.getElementById("hbd");
                hbdElement.style.display = "flex";
            }, 4500); 
        }, 2000);
    }
  });
  

document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");

    let countdownDuration = 10; // Countdown duration in seconds

    const startCountdown = () => {
        let timeRemaining = countdownDuration;
        timerElement.textContent = timeRemaining;

        const countdownInterval = setInterval(() => {
            timeRemaining -= 1;
            timerElement.textContent = timeRemaining;

            if (timeRemaining <= -1) {
                clearInterval(countdownInterval);
                timerElement.style.visibility = "hidden";
                btn.style.backgroundColor = "white";
                btn.disabled = false;
            }
        }, 1250);
    };

    startCountdown();
});