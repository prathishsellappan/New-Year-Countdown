function showTime() 
{
    const date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let session = hrs >= 12 ? 'PM' : 'AM';

    hrs = hrs % 12 || 12; 
    hrs = hrs < 10 ? '0' + hrs : hrs;
    mins = mins < 10 ? '0' + mins : mins;
    secs = secs < 10 ? '0' + secs : secs;

    let time = hrs + ":" + mins + ":" + secs + " " + session;
    document.querySelector("#time").innerText = time;
}

function showDate() 
{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; 
    let year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    let today = day + "/" + month + "/" + year;
    document.querySelector("#date").innerText = today;
}

function showCountdown() 
{
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);

    const timeDifference = nextYear - now;

    const days = parseInt(timeDifference / (1000 * 60 * 60 * 24));
    const hours = parseInt((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = parseInt((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = parseInt((timeDifference % (1000 * 60)) / 1000);

    const count = days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds left until New Year!";
    document.querySelector("#countdown").innerText = count;
}

function update() 
{
    showTime();
    showDate();
    showCountdown();
}

update();
setInterval(update, 1000);
