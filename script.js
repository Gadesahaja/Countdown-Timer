 const days=document.getElementById('days');
 const hours=document.getElementById('hours');
 const minutes=document.getElementById('minutes');
 const seconds=document.getElementById('seconds');

 const formatTime=(time)=>{
    return time <10?`0${time}`:time;
}

 const updateCountDown=(deadline)=>{
    const currentTime= new Date();
    const timeDifference=deadline-currentTime;

    // calculate days,hours,minutes,seconds from time difference
    let calseconds = Math.floor(timeDifference/1000)%60;
    let calmins= Math.floor (timeDifference/1000/60)%60;
    let calhours= Math.floor(timeDifference/1000/60/60)%24;
    let caldays= Math.floor(timeDifference/1000/60/60/24)

    // days.textContent= caldays;
    days.textContent=formatTime(caldays);
    hours.textContent=formatTime(calhours);
    minutes.textContent=formatTime(calmins);
    seconds.textContent= formatTime(calseconds);
    // console.log(mins);
    
 }


 
 const countDown=(targetDate)=>{
    setInterval(()=>updateCountDown(targetDate),1000);
 }
 
 
 
 const targetDate= new Date("November 12 2023 07:00");
 countDown(targetDate);