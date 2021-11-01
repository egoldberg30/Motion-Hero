import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);
const mainTL = gsap.timeline();

// THIS WAS FROM THE PREVIOUS JS ASSIGNMENT FOR THE HERO //
// mainTL.from("#hero h2",{duration:1, alpha:0});
// mainTL.from("header",{duration:1, alpha:0, x:"-1000"});



function AllElements(){
    const tl = gsap.timeline();

    tl.from ("#X-rayBoard",{duration: 2, x:"-=1000", ease: "Power3"});

    tl.to("#Hand1", { morphSVG:"Hand 2", duration: .1})
    .to("#Hand2", { morphSVG:"Hand 2", duration: .1})
    .to("#Hand3", { morphSVG:"Hand 3", duration: .1})
    .to("#Hand4", { morphSVG:"Hand 4", duration: .1})
    .to("#Hand5", { morphSVG:"Hand 5", duration: .1})
    .to("#Hand6", { morphSVG:"Hand 6", duration: .1})
    .to("#Hand7", { morphSVG:"Hand 7", duration: .1})
    .to("#Hand8", { morphSVG:"Hand 8", duration: .1})
    .to("#Hand8", { morphSVG:"Hand 9", duration: .1})

    .from ("#Button",{duration: .15, y:"-=2", ease: "circ.in"})


    .to("#Hand9", { morphSVG:"Hand 10", duration: .1})
    .to("#Hand10", { morphSVG:"Hand 11", duration: .1});

    return tl; 
}

mainTL.add (AllElements());