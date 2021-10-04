import { gsap } from "gsap";
const mainTL = gsap.timeline();

mainTL.from("#heroimage",{duration:2, alpha:0});

mainTL.from("header",{duration:2, alpha:0, x:"-1000"});