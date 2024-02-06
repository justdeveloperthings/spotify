console.log("welcome")
let Index = 0;
let audioelement=new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterplay")
let progressbar = document.getElementById('progressbar')
let gif = document.getElementById('gif')
let songitems=Array.from(document.getElementsByTagName('songitem'))

let songs=[
    {songname:"Desperate", filepath:"songs/1.mp3",coverPath:"back1.jpg" },
    {songname:"The time", filepath:"songs/2.mp3",coverPath:"back2.jpg"},
    {songname:"Too late", filepath:"songs/3.mp3",coverPath:"back3.jpg"},
    {songname:"walkaway", filepath:"songs/4.mp3",coverPath:"back4.jpg"},
]

songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.document.getElementsByClassName('songname')[0].innerText=songs[i].songname;
})
// play,pause button
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0
    }
})

// seekbar
audioelement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    progress=progressbar.value
})

progressbar.addEventListener('change',()=>{
audioelement.currentTime=progressbar.value * audioelement.duration/100;
})
const makeallplays = ()=>{Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.add('fa-play')
    element.classList.remove('fa-pause')
})}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        Index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src=`songs/${Index+1}.mp3`;
        musicname.innerText=songs[Index].musicname;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(Index>=4){
Index=0
    }
    else{
        Index+=1;
        audioelement.src=`songs/${Index+1}.mp3`;
        musicname.innerText=songs[Index].musicname;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
})
document.getElementById('prev').addEventListener('click',()=>{
    if(Index<=0){
Index=0
    }
    else{
        Index-=1;
        audioelement.src=`songs/${Index+1}.mp3`;
        musicname.innerText=songs[Index].musicname;
        audioelement.currentTime=0;
        audioelement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
})