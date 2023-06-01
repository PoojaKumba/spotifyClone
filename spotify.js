console.log("Welcome to spotify");
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongName=document.getElementById('mastersongName')
let songItems=Array.from(document.getElementsByClassName('songItem1'));

let songs=[
{songName:"baarish ban jana", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\1.mp3",coverPath:"cover.jpg"},
{songName:"aaj dil shayaraana", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\2.mp3",coverPath:"cover.jpg"},
{songName:"Aai dil hai mushkil", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\3.mp3",coverPath:"cover.jpg"},
{songName:"Bhula dena mughe", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\4.mp3",coverPath:"cover.jpg"},
{songName:"Blue eyes", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\5.mp3",coverPath:"cover.jpg"},
{songName:"Kesariya teri", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\6.mp3",coverPath:"cover.jpg"},
{songName:"Cute smile", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\7.mp3",coverPath:"cover.jpg"},
{songName:"Dil me ho tum", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\8.mp3",coverPath:"cover.jpg"},
{songName:"manma emotion", filepath:"C:\Users\Pooja Kumbhar\Desktop\Spotify\9.mp3",coverPath:"cover.jpg"},

]

songItems.forEach((element,i)=>
{
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
//audioElement Play();

//Handle play pause click
masterPlay.addEventListener('click',()=>
{
	if(audioElement.paused||audioElement.currentTime<=0)
	{
		audioElement.play();
		masterPlay.classList.remove('fa-circle-play');
		masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
	}
	else
    {
		audioElement.pause();
		masterPlay.classList.remove('fa-circle-pause');
		masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
	}
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>
{	
	//update seekbar
	progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
	myProgressBar.value=progress;	
})

myProgressBar.addEventListener('change',()=>{
	audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
}) 

const makeAllPlays=()=>{
	Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
		element.classList.remove('fa-pause-circle');
		element.classList.add('fa-play-circle');

	})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`${songIndex+1}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
      gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
		masterPlay.classList.add('fa-circle-pause');

	})
})

document.getElementById('next').addEventListener('click',()=>{
	if(songIndex>=8)
	{
		songIndex=0
	}
	else
	{
		songIndex+=1;
	}
	 audioElement.src=`${songIndex+1}.mp3`;
	 mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
		masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
	if(songIndex<=0)
	{
		songIndex=0
	}
	else
	{
		songIndex-=1;
	}
	 audioElement.src=`${songIndex+1}.mp3`;
	 mastersongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
		masterPlay.classList.add('fa-circle-pause');
})