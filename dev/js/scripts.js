import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import {CustomEase} from "gsap/CustomEase";

gsap.registerPlugin(MorphSVGPlugin);
const mainTL = gsap.timeline();

// THIS WAS FROM THE PREVIOUS JS ASSIGNMENT FOR THE HERO //
// mainTL.from("#hero h2",{duration:1, alpha:0});
// mainTL.from("header",{duration:1, alpha:0, x:"-1000"});



function AllElements(){
    const tl = gsap.timeline();

    tl.from ("#Frame8_MainFrame",{duration: 2, x:"-=1000"});


    // gsap.set(["#Hand1", "#Hand2", "#Hand3", "#Hand4", "#Hand5", "#Hand6", "#Hand7", "#Hand8", "#Hand9", "#Hand10", "#Hand11"], {morphSVG: "#Hand11", ease: "steps (11)"});

    tl.to("#Hand1", {morphSVG:"#Hand2", duration: .05})
    .to("#Hand1", {morphSVG:"#Hand2", duration: .05})
    .to("#Hand1", {morphSVG:"#Hand3", duration: .05})
    .to("#Hand1", {morphSVG:"#Hand4", duration: .05})
    .to("#Hand1", {morphSVG:"#Hand5", duration: .05})
    .to("#Hand1", {morphSVG:"#Hand6", duration: .05})
    .to("#Hand1", {morphSVG:"#Hand7", duration: .05})
    .to("#Hand1", {morphSVG:"#Hand8", duration: .05})
    .to("#Hand1", {morphSVG:"#Hand9", duration: .05})

    .to ("#Button",{duration: .4, y:"2", ease: CustomEase.create("custom", "M0,0 C0.354,0.5 0.352,0.5 0.352,0.5 0.352,0.5 0.804,0.032 1,0 ")}, "-=.05")

    .to("#Hand1", {morphSVG:"#Hand10", duration: .1}, "-=.2")
    .to("#Hand1", {morphSVG:"#Hand11", duration: .1})
    .to("#Hand1", {y:"+=20px", x:"+=25", duration: .1})

    .to("#BlackScreen", {alpha:0, duration: .6})
    

    .to("RFingerD4", {morphSVG:"RFingerD4_1", duration: .1})
    .to("RFingerD3", {morphSVG:"RFingerD3_1", duration: .1})
    .to("RFingerD2", {morphSVG:"RFingerD2_1", duration: .1})
    .to("RFingerD1", {morphSVG:"RFingerD1_1", duration: .1})
    .to("RFingerC5", {morphSVG:"RFingerC5_1", duration: .1})
    .to("RFingerC4", {morphSVG:"RFingerC4_1", duration: .1})
    .to("RFingerC3", {morphSVG:"RFingerC3_1", duration: .1})
    .to("RFingerC2", {morphSVG:"RFingerC2_1", duration: .1})
    .to("RFingerC1", {morphSVG:"RFingerC1_1", duration: .1})
    .to("RFingerB5", {morphSVG:"RFingerB5_1", duration: .1})
    .to("RFingerB4", {morphSVG:"RFingerB4_1", duration: .1})
    .to("RFingerB3", {morphSVG:"RFingerB3_1", duration: .1})
    .to("RFingerB2", {morphSVG:"RFingerB2_1", duration: .1})
    .to("RFingerB1", {morphSVG:"RFingerB1_1", duration: .1})
    .to("RFingerA5", {morphSVG:"RFingerA5_1", duration: .1})
    .to("RFingerA4", {morphSVG:"RFingerA4_1", duration: .1})
    .to("RFingerA3", {morphSVG:"RFingerA3_1", duration: .1})
    .to("RFingerA2", {morphSVG:"RFingerA2_1", duration: .1})
    .to("RFingerA1", {morphSVG:"RFingerA1_1", duration: .1})
    .to("RWrist", {morphSVG:"RWrist_1", duration: .1});

    return tl;
}

mainTL.add (AllElements());