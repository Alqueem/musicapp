console.log("Welcome to Quintet Musics");

//Initialize the Variables
let songIndex = 1;
let audioElement = new Audio('songs/10.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName :"Maan Meri Jaan", filePath : "songs/10.mp3", coverPath : "covers/b2.jpeg"},
    {songName :"Lat LagGai", filePath : "C:\Users\alque\Dropbox\PC\Desktop\Home Page\songs\11.mp3", coverPath : "covers/bck.jpeg"},
    {songName :"Daru Badnam kardi ", filePath : "songs/12.mp3", coverPath : "covers/b2.jpeg"},
    {songName :"Vasste", filePath : "songs/13.mp3", coverPath : "covers/1.webp"},
    {songName :"Same Beef", filePath : "songs/14.mp3", coverPath : "covers/1.webp"},
]
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
 
// handle ply/pause 
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    } 
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})
 //listen to event
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex +1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();   
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime= 0;
    audioElement.play();   
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex =-1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime= 0;
    audioElement.play();   
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})