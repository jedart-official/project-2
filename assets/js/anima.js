const previewAnimation = new AnimationMachine({
    triggerEl: ".artificial",
    editEl: ".artificial__content",
    startTransform: "-1000px",
    endTransform: "0px",
    useDOMHandler: true,
}).start();

const previewImgAnimation = new AnimationMachine({
    triggerEl: ".artificial",
    editEl: ".artificial__img",
    endOpacity: "1",
    startOpacity: "0",
    useDOMHandler: true,
}).start();

const LerningAnimation = new AnimationMachine({
    triggerEl: ".learning",
    editEl: ".learning__content",
    startTransform: "1000px",
    endTransform: "0px",
    startOpacity: "0",
}).start();

const LearningImgAnimation = new AnimationMachine({
    triggerEl: ".learning",
    editEl: ".learning__left",
    endOpacity: "1",
    startOpacity: "0",
    transition: "all 1s ease",
}).start();

const slider = new AnimationMachine({
    triggerEl: ".features",
    editEl: ".swiper",
    endOpacity: "1",
    startOpacity: "0",
}).start();

const AboutwAnimation = new AnimationMachine({
    triggerEl: ".about",
    editEl: ".about__content",
    startTransform: "-1000px",
    endTransform: "0px",
    startOpacity: "0",
}).start();
