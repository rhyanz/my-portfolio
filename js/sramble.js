// scramble text

var tl = gsap.timeline({defaults: {duration: 2, ease: "none"}});
const masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });


tl.to("#scramble", {duration: 1, scrambleText:{text:"I am ", chars:"lowerCase", revealDelay:0.5, tweenLength:false}})
.to("#newClass", {duration: 3, scrambleText:{text:"Andrian Jacobo ", chars:"lowerCase", revealDelay:0.5, newClass:"orange", tweenLength:false}})
.to("#scramble2", {duration: 4, scrambleText:{text:"and this is my portfolio website...", chars:"lowerCase", revealDelay:0.5, tweenLength:false}})
masterTl.add(tl);
