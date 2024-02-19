setInterval(()=>{
    let timefrompc=new Date();
    Time_in_Html.innerHTML=timefrompc.toLocaleTimeString()
},1000);
let time=null;

function setAlarm(){
    let h=hoursHtml.value;
    let m=minutesHtml.value;
    setAlarmtime.innerHTML=h+":"+m+":00"
    setInterval(checkInterval,1000);
   
}
function checkInterval(){
    let alarmtime=setAlarmtime.innerHTML;
    alarmtime=alarmtime.split(":");
    let alarmhours=alarmtime[0];
    let alarmminutes=alarmtime[1];
    let systemTime=new Date();
    let systemhours=systemTime.getHours();
    let systemminutes=systemTime.getMinutes();
    if(systemhours > 12){
        systemhours=systemhours-12;
    }
    if(alarmhours==systemhours && alarmminutes==systemminutes){
    alarmImage.src="Alarm.gif"
        alramSound.play();
        alramSound.loop="true";
        clearInterval(null);
        
    
    }

}

function stop(){
    
    alarmImage.src="alarm.jpg"
    setAlarmtime.innerHTML=null;
    alramSound.loop=false;
    alramSound.stop();
    
}




