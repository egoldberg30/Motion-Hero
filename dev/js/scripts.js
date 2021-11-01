import { gsap } from "gsap";
import { MorphSVGPlugin } from "MorphSVGPlugin";
const mainTL = gsap.timeline();

// THIS WAS FROM THE PREVIOUS JS ASSIGNMENT FOR THE HERO //
// mainTL.from("#hero h2",{duration:1, alpha:0});
// mainTL.from("header",{duration:1, alpha:0, x:"-1000"});



function AllElements(){
    const tl = gsap.timeline();

    tl.from ("#X-ray Board",{duration: 2, x:"-=1000", ease: "Power3"});

    .to("#Hand 1", { morphSVG:"Hand 2", duration: .1});
    .to("#Hand 2", { morphSVG:"Hand 2", duration: .1});
    .to("#Hand 3", { morphSVG:"Hand 3", duration: .1});
    .to("#Hand 4", { morphSVG:"Hand 4", duration: .1});
    .to("#Hand 5", { morphSVG:"Hand 5", duration: .1});
    .to("#Hand 6", { morphSVG:"Hand 6", duration: .1});
    .to("#Hand 7", { morphSVG:"Hand 7", duration: .1});
    .to("#Hand 8", { morphSVG:"Hand 8", duration: .1});
    .to("#Hand 8", { morphSVG:"Hand 9", duration: .1});

    tl.from ("#Button",{duration: .15, y:"-=2", ease: "circ});

    tl.to("#Hand 9", duration: .1, { morphSVG:"Hand 10"});
    .to("#Hand 10", duration: .1, { morphSVG:"Hand 11"});

    return tl; 
}

mainTL.add (AllElements());