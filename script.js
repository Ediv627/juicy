var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "80% 60%",
    scrub: true,
  },
});

tl.to(
  "#cans",
  {
    top: "145%",
    left: "77%",
    width: "30%",
    rotate: "-30deg",
  },
  "cans"
);

tl.to(
  "#leaf",
  {
    top: "153%",
    rotate: "0deg",
    left: "75%",
    width: "12%",
  },
  "cans"
);

tl.to(
  "#blackberry1",
  {
    top: "114%",
    rotate: "100deg",
    left: "5%",
    width: "5%",
  },
  "cans"
);

tl.to(
  "#blackberry2",
  {
    top: "125%",
    rotate: "100deg",
    left: "83%",
    width: "16%",
  },
  "cans"
);

tl.to(
  "#blackberry3",
  {
    top: "163%",
    rotate: "60deg",
    left: "70%",
    width: "5%",
  },
  "cans"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
  },
});

tl2.to(
  "#cans",
  {
    top: "235%",
    left: "50%",
    width: "30%",
    rotate: "0deg",
  },
  "cans"
);
