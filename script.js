function clock(){

    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);





function settime(){

    var x=document.getElementById("morning").value;
    var y = document.getElementById("afternoon").value;
    var z = document.getElementById("evening").value;
    var w = document.getElementById("night").value;

    var hour = new Date().getHours();

    if(x==hour){

        document.getElementById('imgbox').style.backgroundImage="url(pic_7.svg)"
        document.getElementById('text1').innerText='GRAB SOME HEALTHY BREAKFAT';
        document.getElementById("txt2").innerText="Good Morning' Wake Up !!";
    }

    if(y==hour){
        document.getElementById("imgbox").style.backgroundImage="url(lunch.svg)"
        document.getElementById("text1").innerText="Let's Have Some Lunch !!";
        document.getElementById("txt2").innerText="Good Afternoon !!";
    }

    if(z==hour){
        document.getElementById("imgbox").style.backgroundImage="url(lunch_image.png)"
        document.getElementById("text1").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING";
        document.getElementById("txt2").innerText="Good Evening !!";
    }  
    
    if(w==hour){
        document.getElementById("imgbox").style.backgroundImage="url(night.svg)"
        document.getElementById("text1").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("txt2").innerText="Good Night !!";
    }  
    
   
}