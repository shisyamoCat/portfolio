"use strict";
$(document).click(function () {
    $("body").removeClass("body-anime");
    $(".curtain").removeClass("curtain");
    $(".cover").removeClass("cover-delay");
    $(".square").removeClass("square-anime");
});

$(window).ready(function () {
    $(".event").click(function () {
        $(".event-menu-bg").slideToggle();
    });

    /*=============================================
     other-titles
    =============================================*/
    $(".other-wrap").mouseenter(function () {
        $(this).css({
            "left": -1
        });
        $(".other-list").addClass("active");
        // $(".modal-bg").css({
        //     "left": "400px",
        //     "opacity": "1",
        //     "z-index": 100
        // });
    });
    $(".other-wrap").mouseleave(function () {
        $(this).css({
            "left": "-324px"
        });
        $(".other-list").removeClass("active");
        $(".modal-bg").css({
            "opacity": "0",
            "z-index": 0
        });
    });
    $(".other-list li").mouseenter(function () {
        let num = $(this).attr("id");
        let image = changeImage(num);
        $(".modal-items").css({
            "background": "url(" + image + ")"
        });
    });

    /*=============================================
     sound-tracks
    =============================================*/
    $(".sound-wrap").mouseenter(function () {
        $(this).css({
            "right": -1
        });
        $(".sound-list").addClass("active");
        // $(".modal-bg").css({
        //     "left": "200px",
        //     "opacity": "1",
        //     "z-index": 100
        // });
    });
    $(".sound-wrap").mouseleave(function () {
        $(this).css({
             "right": "-324px"
        });
        $(".sound-list").removeClass("active");
        $(".other-list").removeClass("active");
        $(".modal-bg").css({
            "opacity": "0",
            "z-index": 0
        });
    });

    /*=============================================
     square-animation
    =============================================*/
    $(".square").mouseenter(function () {
        $(this).css({
            "z-index": 100
        });
    });
    $(".square").mouseleave(function () {
        $(this).css({
            "z-index": 0
        });
    });
});
const otherImages = [
    "elements/others/ff4ay_r.jpg",
    "elements/others/ff4ay1.jpg",
    "elements/others/ccff3_r.jpg",
    "elements/others/ff10-2_r.jpg",
    "elements/others/ff12-2_r.png",
    "elements/others/ff13-2.jpg",
    "elements/others/ff13-2-2.jpg",
    "elements/others/fft.jpg",
    "elements/others/ffta.jpg",
    "elements/others/ffta2.webp"
];

const soundImages = [
    "elements/others/ff4ay.jpg",
    "elements/others/ff4ay1.jpg",
    "elements/others/ccff.jpg",
    "elements/others/ff10-2.webp",
    "elements/others/ff12-2.png",
    "elements/others/ff13-2.jpg",
    "elements/others/ff13-2-2.jpg",
    "elements/others/fft.jpg",
    "elements/others/ffta.jpg",
    "elements/others/ffta2.webp"
];

function changeImage(num) {
    if (num == 1) {
        return otherImages[0];
    } else
    if (num == 2) {
        return otherImages[1];
    } else
    if (num == 3) {
        return otherImages[2];
    } else
    if (num == 4) {
        return otherImages[3];
    } else
    if (num == 5) {
        return otherImages[4];
    } else
    if (num == 6) {
        return otherImages[5];
    } else
    if (num == 7) {
        return otherImages[6];
    } else
    if (num == 8) {
        return otherImages[7];
    } else
    if (num == 9) {
        return otherImages[8];
    } else
    if (num == 10) {
        return otherImages[9];
    }
}