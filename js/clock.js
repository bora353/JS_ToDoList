const clock = document.querySelector("h2#clock");

function sayHello(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}



setInterval(sayHello, 1000);

//setTimeout(sayHello, 2000);