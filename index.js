var a = document.querySelector(".fo");
var b = document.querySelector("body");
var arr = [
  "rgb(204, 207, 3)",
  "rgb(204, 10, 10)",
  "rgb(6, 66, 207)",
  "gray",
  "rgb(16, 15, 15)",
];
document.addEventListener("mousemove", function (event) {
  a.style.opacity = 1;
  a.style.left = event.clientX + "px";
  a.style.top = event.clientY + "px";
});
document.addEventListener("scroll", function (event) {
  a.style.position = "fixed";
});
document.querySelector("body").addEventListener("mousemove", function (dets) {
  if (dets.target.className === "img") {
    a.style.transform = "scale(4)";
    document.querySelector("#" + dets.target.id).style.transform =
      "scale(1.05)";
    document.querySelector("body").style.backgroundColor = `${
      arr[dets.target.id[3] - 1]
    }`;
  }
});
document.querySelector("body").addEventListener("mouseout", function (dets) {
  if (dets.target.className !== "img") {
    a.style.transform = "scale(1)";
    b.style.backgroundColor = "white";
    console.log(dets.target);
    dets.target.childNodes[1].childNodes[1].style.transform = "scale(1)";
  }
});
const timeline = gsap.timeline();
timeline
  .to(".an", {
    height: 0,
    duration: 2,
    delay: 1,
    ease: Expo.easeInOut,
  })
  .to(".tleft", {
    opacity: 1,
    callback: function () {
      $(".tleft h1").textillate({ in: { effect: "fadeInUp" } });
    },
  });
gsap.to(".tright", {
  opacity: 1,

  duration: 2,
  delay: 2,
});
gsap.to("#icons", {
  opacity: 1,

  duration: 2,
  delay: 2,
});
gsap.to("#nav h4", {
  opacity: 1,

  duration: 2,
  delay: 2,
});
document.querySelector("#icons").addEventListener("mousemove", function () {
  document.querySelector("#icons i").style.border = "none";
  gsap.to("#icons i", {
    rotate: "180deg",
    ease: Expo.easeInOut,
  });
});
document.querySelector("#icons").addEventListener("mouseout", function () {
  document.querySelector("#icons i").style.border = "2px solid black";
  gsap.to("#icons i", {
    rotate: "-180deg",
    ease: Expo.easeInOut,
  });
});
