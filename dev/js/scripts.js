import { gsap } from "gsap";
const mainTL = gsap.timeline();

// THIS WAS FROM THE PREVIOUS JS ASSIGNMENT FOR THE HERO //
// mainTL.from("#hero h2",{duration:1, alpha:0});
// mainTL.from("header",{duration:1, alpha:0, x:"-1000"});



function AllElements(){
    const tl = gsap.timeline();

    tl.from("#All Elements", {duration: 2, x: -1000, ease: "Power3"});

    return tl;
}

mainTL.add (AllElements()); 