const nav = document.querySelector('nav');
const logo = document.querySelector('.logo h1');
const pic = document.querySelector('.pic');
const img = document.querySelector('.pic img');

const animate = new TimelineMax();
animate.fromTo(nav,4,{x:'800px'},{x: '0'},"-=1.5")
.fromTo(logo,2,{opacity : "0",x:"-800px"},{opacity : "1",x: "0"},"-=1.8")
.fromTo(pic,2,{height : "0%"},{height : "80%"},"-=1.8")
.fromTo(img,2,{opacity : "0",height:"0"},{opacity:"1",height : "80%"},"-=1.2")