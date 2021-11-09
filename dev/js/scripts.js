import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import {CustomEase} from "gsap/CustomEase";




// gsap.registerPlugin(GSDevTools);
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
    


    .to("#ArmR", {morphSVG:"#ArmR_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RForearm2", {morphSVG:"#RForearm2_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RForearm1", {morphSVG:"#RForearm1_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerD4", {morphSVG:"#RFingerD4_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerD3", {morphSVG:"#RFingerD3_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerD2", {morphSVG:"#RFingerD2_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerD1", {morphSVG:"#RFingerD1_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerC5", {morphSVG:"#RFingerC5_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerC4", {morphSVG:"#RFingerC4_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerC3", {morphSVG:"#RFingerC3_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerC2", {morphSVG:"#RFingerC2_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerC1", {morphSVG:"#RFingerC1_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerB5", {morphSVG:"#RFingerB5_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerB4", {morphSVG:"#RFingerB4_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerB3", {morphSVG:"#RFingerB3_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerB2", {morphSVG:"#RFingerB2_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerB1", {morphSVG:"#RFingerB1_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerA5", {morphSVG:"#RFingerA5_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerA4", {morphSVG:"#RFingerA4_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerA3", {morphSVG:"#RFingerA3_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerA2", {morphSVG:"#RFingerA2_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RFingerA1", {morphSVG:"#RFingerA1_1", duration: .1}, "SkeletonInMotion_1")
    .to("#RWrist", {morphSVG:"#RWrist_1", duration: .1}, "SkeletonInMotion_1")

    .to("#ArmR", {morphSVG:"#ArmR_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RForearm2", {morphSVG:"#RForearm2_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RForearm1", {morphSVG:"#RForearm1_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerD4", {morphSVG:"#RFingerD4_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerD3", {morphSVG:"#RFingerD3_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerD2", {morphSVG:"#RFingerD2_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerD1", {morphSVG:"#RFingerD1_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerC5", {morphSVG:"#RFingerC5_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerC4", {morphSVG:"#RFingerC4_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerC3", {morphSVG:"#RFingerC3_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerC2", {morphSVG:"#RFingerC2_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerC1", {morphSVG:"#RFingerC1_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerB5", {morphSVG:"#RFingerB5_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerB4", {morphSVG:"#RFingerB4_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerB3", {morphSVG:"#RFingerB3_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerB2", {morphSVG:"#RFingerB2_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerB1", {morphSVG:"#RFingerB1_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerA5", {morphSVG:"#RFingerA5_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerA4", {morphSVG:"#RFingerA4_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerA3", {morphSVG:"#RFingerA3_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerA2", {morphSVG:"#RFingerA2_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RFingerA1", {morphSVG:"#RFingerA1_2", duration: .1}, "SkeletonInMotion_2")
    .to("#RWrist", {morphSVG:"#RWrist_2", duration: .1}, "SkeletonInMotion_2")
    
    .to("#ArmR", {morphSVG:"#ArmR_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RForearm2", {morphSVG:"#RForearm2_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RForearm1", {morphSVG:"#RForearm1_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerD4", {morphSVG:"#RFingerD4_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerD3", {morphSVG:"#RFingerD3_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerD2", {morphSVG:"#RFingerD2_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerD1", {morphSVG:"#RFingerD1_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerC5", {morphSVG:"#RFingerC5_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerC4", {morphSVG:"#RFingerC4_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerC3", {morphSVG:"#RFingerC3_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerC2", {morphSVG:"#RFingerC2_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerC1", {morphSVG:"#RFingerC1_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerB5", {morphSVG:"#RFingerB5_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerB4", {morphSVG:"#RFingerB4_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerB3", {morphSVG:"#RFingerB3_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerB2", {morphSVG:"#RFingerB2_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerB1", {morphSVG:"#RFingerB1_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerA5", {morphSVG:"#RFingerA5_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerA4", {morphSVG:"#RFingerA4_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerA3", {morphSVG:"#RFingerA3_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerA2", {morphSVG:"#RFingerA2_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RFingerA1", {morphSVG:"#RFingerA1_3", duration: .1}, "SkeletonInMotion_3")
    .to("#RWrist", {morphSVG:"#RWrist_3", duration: .1}, "SkeletonInMotion_3")

    .to("#ArmR", {morphSVG:"#ArmR_4", duration: .1}, "SkeletonInMotion_3")
    .to("#RForearm2", {morphSVG:"#RForearm2_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RForearm1", {morphSVG:"#RForearm1_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerD4", {morphSVG:"#RFingerD4_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerD3", {morphSVG:"#RFingerD3_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerD2", {morphSVG:"#RFingerD2_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerD1", {morphSVG:"#RFingerD1_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerC5", {morphSVG:"#RFingerC5_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerC4", {morphSVG:"#RFingerC4_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerC3", {morphSVG:"#RFingerC3_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerC2", {morphSVG:"#RFingerC2_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerC1", {morphSVG:"#RFingerC1_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerB5", {morphSVG:"#RFingerB5_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerB4", {morphSVG:"#RFingerB4_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerB3", {morphSVG:"#RFingerB3_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerB2", {morphSVG:"#RFingerB2_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerB1", {morphSVG:"#RFingerB1_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerA5", {morphSVG:"#RFingerA5_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerA4", {morphSVG:"#RFingerA4_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerA3", {morphSVG:"#RFingerA3_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerA2", {morphSVG:"#RFingerA2_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RFingerA1", {morphSVG:"#RFingerA1_4", duration: .1}, "SkeletonInMotion_4")
    .to("#RWrist", {morphSVG:"#RWrist_4", duration: .1}, "SkeletonInMotion_4")
    
    .to("#ArmR", {morphSVG:"#ArmR_5", duration: .1}, "SkeletonInMotion_3")
    .to("#RForearm2", {morphSVG:"#RForearm2_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RForearm1", {morphSVG:"#RForearm1_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerD4", {morphSVG:"#RFingerD4_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerD3", {morphSVG:"#RFingerD3_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerD2", {morphSVG:"#RFingerD2_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerD1", {morphSVG:"#RFingerD1_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerC5", {morphSVG:"#RFingerC5_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerC4", {morphSVG:"#RFingerC4_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerC3", {morphSVG:"#RFingerC3_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerC2", {morphSVG:"#RFingerC2_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerC1", {morphSVG:"#RFingerC1_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerB5", {morphSVG:"#RFingerB5_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerB4", {morphSVG:"#RFingerB4_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerB3", {morphSVG:"#RFingerB3_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerB2", {morphSVG:"#RFingerB2_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerB1", {morphSVG:"#RFingerB1_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerA5", {morphSVG:"#RFingerA5_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerA4", {morphSVG:"#RFingerA4_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerA3", {morphSVG:"#RFingerA3_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerA2", {morphSVG:"#RFingerA2_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RFingerA1", {morphSVG:"#RFingerA1_5", duration: .1}, "SkeletonInMotion_5")
    .to("#RWrist", {morphSVG:"#RWrist_5", duration: .1}, "SkeletonInMotion_5")
    
    .to("#ArmR", {morphSVG:"#ArmR_6", duration: .1}, "SkeletonInMotion_3")
    .to("#RForearm2", {morphSVG:"#RForearm2_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RForearm1", {morphSVG:"#RForearm1_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerD4", {morphSVG:"#RFingerD4_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerD3", {morphSVG:"#RFingerD3_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerD2", {morphSVG:"#RFingerD2_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerD1", {morphSVG:"#RFingerD1_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerC5", {morphSVG:"#RFingerC5_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerC4", {morphSVG:"#RFingerC4_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerC3", {morphSVG:"#RFingerC3_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerC2", {morphSVG:"#RFingerC2_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerC1", {morphSVG:"#RFingerC1_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerB5", {morphSVG:"#RFingerB5_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerB4", {morphSVG:"#RFingerB4_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerB3", {morphSVG:"#RFingerB3_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerB2", {morphSVG:"#RFingerB2_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerB1", {morphSVG:"#RFingerB1_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerA5", {morphSVG:"#RFingerA5_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerA4", {morphSVG:"#RFingerA4_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerA3", {morphSVG:"#RFingerA3_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerA2", {morphSVG:"#RFingerA2_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RFingerA1", {morphSVG:"#RFingerA1_6", duration: .1}, "SkeletonInMotion_6")
    .to("#RWrist", {morphSVG:"#RWrist_6", duration: .1}, "SkeletonInMotion_6");

    return tl;
}


// GSDevTools.create();

mainTL.add (AllElements());