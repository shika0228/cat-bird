gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
    '.video-1',{
        opacity:0,
        x:300,
        
    },{duration:1.3,
        opacity:1,
        x:0,
        scrollTrigger:{
            trigger:'.video-1',
            start:'top center',
        },
    }
)
gsap.fromTo(
    '.video-2',{
        opacity:0,
        x:-300,
        
    },{duration:1.3,
        opacity:1,
        x:0,
        scrollTrigger:{
            trigger:'.video-2',
            start:'top center',
        },
    }
)
gsap.fromTo(
    '.video-3',{
        opacity:0,
        x:300,
        
    },{duration:1.3,
        opacity:1,
        x:0,
        scrollTrigger:{
            trigger:'.video-3',
            start:'top center',
        },
    }
)
gsap.fromTo(
    '.video-4',{
        opacity:0,
        x:-300,
        
    },{duration:1.3,
        opacity:1,
        x:0,
        scrollTrigger:{
            trigger:'.video-4',
            start:'top center',
        },
    }
)
gsap.fromTo(
    '.video-5',{
        opacity:0,
        x:300,
        
    },{duration:1.3,
        opacity:1,
        x:0,
        scrollTrigger:{
            trigger:'.video-5',
            start:'top center',
        },
    }
)
gsap.fromTo(
    '.video-6',{
        opacity:0,
        x:-300,
        
    },{duration:1.3,
        opacity:1,
        x:0,
        scrollTrigger:{
            trigger:'.video-6',
            start:'top center',
        },
    }
)
gsap.fromTo(
    '.video-7',{
        opacity:0,
        x:300,
        
    },{duration:1.3,
        opacity:1,
        x:0,
        scrollTrigger:{
            trigger:'.video-7',
            start:'top center',
        },
    }
)
gsap.fromTo(
    '.video-8',{
        opacity:0,
        x:-300,
        
    },{duration:1.3,
        opacity:1,
        x:0,
        scrollTrigger:{
            trigger:'.video-8',
            start:'top center',
        },
    }
)
const light = document.querySelector('.light');
let lightOn = false;

light.addEventListener('click', function () {
  lightOn = !lightOn;
  if (lightOn) {
    this.style.backgroundImage = "url('./img/light-after.svg')";
    document.body.style.backgroundColor = '#131313';
    document.querySelectorAll('.btntransform').forEach(btn => btn.style.color = '#ffffff');
  } else {
    this.style.backgroundImage = "url('./img/light-before.svg')";
    document.body.style.backgroundColor = '#f7f4ef';
    document.querySelectorAll('.btntransform').forEach(btn => btn.style.color = '#3f3f3f');
  }
});
