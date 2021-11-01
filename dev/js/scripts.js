import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);
const mainTL = gsap.timeline();

// THIS WAS FROM THE PREVIOUS JS ASSIGNMENT FOR THE HERO //
// mainTL.from("#hero h2",{duration:1, alpha:0});
// mainTL.from("header",{duration:1, alpha:0, x:"-1000"});



function AllElements(){
    const tl = gsap.timeline();

    tl.from ("#XrayBoard",{duration: 2, x:"-=1000", ease: "Power3"});

    tl.to("#Hand1", { morphSVG:"#Hand2", duration: 1})
    // .to("#Hand2", { morphSVG:"#Hand2", duration: 1})
    // .to("#Hand3", { morphSVG:"#Hand3", duration: 1})
    // .to("#Hand4", { morphSVG:"#Hand4", duration: 1})
    // .to("#Hand5", { morphSVG:"#Hand5", duration: 1})
    // .to("#Hand6", { morphSVG:"#Hand6", duration: 1})
    // .to("#Hand7", { morphSVG:"#Hand7", duration: 1})
    // .to("#Hand8", { morphSVG:"#Hand8", duration: 1})
    // .to("#Hand8", { morphSVG:"#Hand9", duration: 1})

    .to ("#Button",{duration: 1.1, y:"1", ease: "back"})

    .to("#Hand9", { morphSVG:"#Hand 10", duration: .1})
    .to("#Hand10", { morphSVG:"#Hand 11", duration: .1});

    return tl; 
}

mainTL.add (AllElements());