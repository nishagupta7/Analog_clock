var hr = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');



function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();



    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    // console.log(hRotation, mRotation, sRotation);
    
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    // hr.style.transform = "rotate (10deg)";
    // min.style.transform = `rotate (50deg)`;
    // sec.style.transform = `rotate (69deg)`;
}

setInterval(displayTime, 1000);