var mySong = document.getElementById("mySong")
var button = document.getElementById ("song")

button.onclick = function(){
    if (mySong.paused){
        mySong.play();
    }else
    mySong.pause();
}