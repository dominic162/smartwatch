document.addEventListener('click',function(e){
    let idE=e.target.id
    let rE=document.getElementById('watchImage')
    let srcE
    let flag=1
    switch(idE){
        case 'black':
            srcE='images/black.JPG'
            break
        case 'blue':
            srcE='images/blue.JPG'
            break
        case 'orange':
            srcE='images/orange.JPG'
            break
        case 'pink':
            srcE='images/pink.JPG'
            break
        case 'purple':
            srcE='images/purple.JPG'
            break
        default:
            flag=0
    }
    if(flag){
        rE.style.backgroundImage='url('+srcE+')'
    }
})
var tDisplay=document.getElementById('timeS')
var wTime=document.getElementById('time')
var wHBeat=document.getElementById('heartBeat')
var hDisplay=document.getElementById('hBeatS')
var clearing
currentTime()
function currentTime(){
    clearing=setInterval(() => {
        var d=new Date()
        var de=d.toString()
        var currentTime=de.substring(16,24)
        tDisplay.innerHTML=currentTime;
        }, 1000);    
    hDisplay.style.display='none';
    tDisplay.style.display='block';
    tDisplay.style.position='relative';
    tDisplay.style.top='40%';
}
wTime.addEventListener('click',currentTime)
wHBeat.addEventListener('click',function(){
    clearInterval(clearing)
    var hBCount=Math.floor(Math.random()*100)
    if(hBCount<40){
        hBCount+=60
    }
    else{
        if(hBCount<60){
            hBCount+=30;
        }
    }
    hDisplay.innerHTML=hBCount.toString()
    tDisplay.style.display='none';
    hDisplay.style.display='block';
    hDisplay.style.position='relative';
    hDisplay.style.top='40%';
})
