function colorAnimation() {
    var rect = document.querySelector("#center");

    rect.addEventListener("mousemove", function (dets) {
        var rectangleLocation = rect.getBoundingClientRect();
        var insiderectval = dets.clientX - rectangleLocation.left;

        if (insiderectval < rectangleLocation.width / 2) {
            var redcolor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insiderectval);

            gsap.to(rect, {
                backgroundColor: `rgb(${redcolor},0,0)`,
                ease: Power4,
            })
        }
        else {
            var bluecolor = gsap.utils.mapRange(rectangleLocation.width / 2, rectangleLocation.width, 0, 255, insiderectval);

            gsap.to(rect, {
                backgroundColor: `rgb(0,0,${bluecolor})`,
                ease: Power4,
            })
        }
    })
    rect.addEventListener("mouseleave", function () {
        gsap.to(rect, {
            backgroundColor: "white",
            ease: Power4,
        })
    })


}
colorAnimation();





var page2 = document.querySelector("#page2");
page2.addEventListener("mousemove", function (dets) {
    var rect = document.querySelector("#rectangle")

    console.log( 100+ rect.getBoundingClientRect().width/2);

    var xval = gsap.utils.mapRange(0, window.innerWidth, 100+ rect.getBoundingClientRect().width/2, window.innerWidth - (200+ rect.getBoundingClientRect().width) , dets.clientX)

    gsap.to("#rectangle", {
        left: xval + "px",
        ease: Power3
    });
});