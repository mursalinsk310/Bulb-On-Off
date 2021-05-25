let onButton=document.getElementById('on');
let offButton=document.getElementById('off');
let image=document.getElementById('bulb');
onButton.addEventListener('click',()=>{
    image.style.color="gold";
document.getElementById('text').innerHTML="Can You Turn Off The Bulb ??";
})
offButton.addEventListener('click',()=>{

    image.style.color="bisque";
    document.getElementById('text').innerHTML="Can You Turn On The Bulb ??";
})
