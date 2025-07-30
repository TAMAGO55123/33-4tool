const videoup = document.querySelector('input');
const video = document.querySelector('video');
videoup.addEventListener('change', () => {
    video.src = URL.createObjectURL(videoup.files[0])
});
var sansanyon = 0
const get_sansanyon = (num)=>{
    let left;
    let right;
    if(num){
        left = 33 * num;
        right = 4 * num;
    }
    else{
        left = 0;
        right = 0;
    }
    return left + "-" + right
}

const sansanyon_p = document.querySelector('p#sansanyon');
document.addEventListener('keydown', async (event) => {
    if(event.key == " " || event.key == "n" || event.key == "m"){
        sansanyon += 1;
        sansanyon_p.innerHTML =  get_sansanyon(sansanyon);
    }
    if(event.key == "r"){
        sansanyon = 0;
        sansanyon_p.innerHTML = get_sansanyon(sansanyon);
        video.currentTime = 0;
    }
    if(event.key =="b"){
        if(sansanyon != 0){
            sansanyon -= 1;
            sansanyon_p.innerHTML = get_sansanyon(sansanyon);
        }
    }
    if(event.key == "p"){
        if(video.paused) video.play();
        else video.pause();
    }
})