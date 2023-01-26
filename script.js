const body= document.documentElement;
// console.log(body);


// let sun= document.querySelector('.sun');
// console.log(sun);
// let moon= document.querySelector('.moon');
// console.log(moon);



const sun= document.querySelector('.sun');
// console.log(sun);

const moon= document.querySelector('.moon');
// console.log(moon);
// console.log(sun);
// sun.className= " hidden";
// console.log(sun);
sun.classList.add('hidden');
// console.log(sun);
const mode= document.querySelector('.mode');
// console.log(mode);

mode.addEventListener('click', function(e){
     //sun hidden==Lightmode
    //  console.log("button clicked");
    if(sun.classList.contains('hidden')){
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
        body.classList.add('dark');
        // console.log(mode);
        // console.log(body);
    }else{
        sun.classList.add('hidden');
        body.classList.remove('dark');
        moon.classList.remove('hidden');
        // console.log(mode);
        // console.log(body);
    }
});

