$(function () {

  // 슬라이드
  function slide() {
    $("#slide").stop().animate({ right: 3050 }, 800, "swing", function () {
      $("#slide li:first").appendTo("#slide");
      $("#slide").css({ right: 1450 });
    })
  }
  setInterval(slide, 4000);
})