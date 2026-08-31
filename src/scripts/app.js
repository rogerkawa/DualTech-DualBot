
/* Main */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".titleHero", {
    duration: 1.5,
    clipPath: "inset(0 100% 0 0)",
    ease: "power4.out"
});


const tl = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

tl.from(".leftMain span", {
    y: 30,
    opacity: 0,
    duration: 0.8
})

.from(".leftMain h1", {
    y: 60,
    opacity: 0,
    duration: 1
}, "-=0.4")

.from(".leftMain p", {
    y: 40,
    opacity: 0,
    duration: 0.8
}, "-=0.5")

.to(".leftMain a", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.8
})

.from(".carAnimate", {
    x: -300,
    opacity: 0,
    rotate: -5,
    duration: 1
}, "-=1.2")

.from(".droneAnimate", {
    x: 300,
    y: -150,
    opacity: 0,
    rotate: 15,
    duration: 1.2
}, "-=1.4");
gsap.to(".droneAnimate", {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
})

document.addEventListener("mousemove", (e) => {

    gsap.to(".droneAnimate", {
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
        duration: 1
    });

    gsap.to(".carAnimate", {
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        duration: 1
    });

});

/* cards */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".cardsInfo > div", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".cardsInfo",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

const cards = document.querySelectorAll(".appBottom > div");


gsap.from(".appBottom > div", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".appBottom",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

/* Tech */
gsap.registerPlugin(ScrollTrigger);

const techTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".tech",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

techTimeline

    // Pequeno título
    .from(".techLeft > span", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
    })

    // Título principal
    .from(".techLeft h1", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.3")

    // Parágrafo
    .from(".techLeft > p", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.45")

    // Infos uma por uma
    .from(".infosTech > span", {
        x: -25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out"
    }, "-=0.3")

    gsap.from(".techRight > img", {
    x: 80,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".tech",
        start: "top 70%"
    }
});

gsap.registerPlugin(ScrollTrigger);

const card = gsap.utils.toArray(".why-card");

const timel = gsap.timeline({
    scrollTrigger: {
        trigger: ".why",
        start: "top top",
        end: "+=1800",
        scrub: 1,
        pin: true,
        anticipatePin: 1
    }
});

card.forEach((card, index) => {

    if (index === cards.length - 1) return;

    timel.to(card, {
        y: -220,
        opacity: 0,
        scale: 0.92,
        duration: 1,
        ease: "power2.inOut"
    });

}); 