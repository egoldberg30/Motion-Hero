import { gsap } from "gsap";
const mainTL = gsap.timeline();

// mainTL.from("#hero",{duration:2, alpha:0});

mainTL.from("#hero h2",{duration:1, alpha:0});

mainTL.from("header",{duration:1, alpha:0, x:"-1000"});