//assigning variables using queryselectors

const hourEl=document.querySelector(".hour");
const minuteEl=document.querySelector(".minute");
const secondEl=document.querySelector(".second");
const dateEl=document.querySelector(".date");
const timeEl=document.querySelector(".time");
const toggle=document.querySelector(".toggle");



// initialise days and months array
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
toggle.addEventListener('click',(e)=>{
    const html=document.querySelector('html');
    if(html.classList.contains('dark'))
    {
        html.classList.remove('dark')
        e.target.innerHTML='DarkMode'
    
    }else {
        html.classList.add('dark')
        e.target.innerHTML='Light Mode'
    }
})





// toggle dark mode and light mode using click handlers




// setTime() function
function setTime() {
    const time=new Date();
    const month= time.getMonth();
    const day=time.getDay();
    const date=time.getDate();
    const hours=time.getHours();

    const hoursForClock=hours>=13? hours%12 :hours;

    const minutes=time.getMinutes();
    const seconds=time.getSeconds();

    const ampm=hours>=12?'PM':'AM'
    
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`


    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

         timeEl.innerHTML = `${hoursForClock}:${minutes<10? `0${minutes}`:minutes}${ampm}`
         dateEl.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`
}
setTime()
setInterval(setTime,1000)
 

// scale property



// run