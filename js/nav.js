$(function () {
  // 네비게이션 All menu
  $("#all_menu").mouseover(function () {
    $(this).find(".sub").stop().show();
    $(".sub li").mouseover(function () {
      $(".sub li").css("background-color", "#fff");
      $(this).css("background-color", "#dfdfdf");
    });
  }).mouseout(function () {
    $(this).find(".sub").stop().hide();
    $(".sub li").css("background-color", "#fff");
  })

  // 네비게이션 브랜드 
  $(".sub_large").css("display", "none");
  $(".menu_icon").mouseover(function () {
    $(this).find(".sub_large").stop().show();
    $(".sub_large li").mouseover(function () {
      $(".sub_large li").css("background-color", "#fff");
      $(this).css("background-color", "#dfdfdf");
    });
  }).mouseout(function () {
    $(this).find(".sub_large").stop().hide();
    $(".sub_large li").css("background-color", "#fff");
  })

  // 네비게이션 브랜드 - 아울렛
  $(".menu_icon").mouseover(function () {
    $(this).find(".sub").stop().show();
    $(".sub li").mouseover(function () {
      $(".sub li").css("background-color", "#fff");
      $(this).css("background-color", "#dfdfdf");
    });
  }).mouseout(function () {
    $(this).find(".sub").stop().hide();
    $(".sub li").css("background-color", "#fff");
  })
});