$(function () {
  // brand focus 파트 json 사용
  $.ajax({
    url: "json/brand_focus.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (let i in data) {
          let src = data[i].src;
          let brand_name = data[i].brand_name;
          let product_name = data[i].product_name;
          let price = data[i].price;
          $("#brand_focus .imgbox_small").eq(i).append("<a href='#'><img src = '" + src + "' alt = 'brand_focus'></a>");
          $("#brand_focus .imgbox_small").eq(i).append("<h3 class='brand_name'><a href='#'>" + brand_name + "</a></h3>");
          $("#brand_focus .imgbox_small").eq(i).append("<p class='product_name'><a href='#'>" + product_name + "</a></p>");
          $("#brand_focus .imgbox_small").eq(i).append("<p class='price sale37'>" + price + "</p>");
        }
      }
    }
  });

  //new_arrival 파트 json
  $.ajax({
    url: "json/new_arrival.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          let src = data[i].src;
          let brand_name = data[i].brand_name;
          let product_name = data[i].product_name;
          let price = data[i].price;

          $("#new_arrival .imgbox").eq(i).append("<a href='#'><img src = '" + src + "' alt='new_arrival_img1'></a>");
          $("#new_arrival .imgbox").eq(i).append("<h3 class='brand_name'><a href='#'>" + brand_name + "</a></h3>");
          $("#new_arrival .imgbox").eq(i).append("<p class='product_name '><a href='#'>" + product_name + "</a></p>");
          $("#new_arrival .imgbox").eq(i).append("<p class='price'>" + price + "</p>");
        }
      }
    }
  });

  // best_pick 파트 json
  $.ajax({
    url: "json/best_pick.json",
    dataType: "json",
    success: function(data){
      if(data.length > 0){
        for(var i in data){
          let src = data[i].src;
          let brand_name = data[i].brand_name;
          let product_name = data[i].product_name;
          let price = data[i].price;
          let sale_key= brand_name.toLowerCase()

          if(i < 8){
            $("#best_pick .imgbox_large").eq(i).append("<a href='#'><img src = '" + src + "' alt='new_arrival_img1'></a>");
            $("#best_pick .imgbox_large").eq(i).append("<h3 class='brand_name'><a href='#'>" + brand_name + "</a></h3>");
            $("#best_pick .imgbox_large").eq(i).append("<p class='product_name '><a href='#'>" + product_name + "</a></p>");
            if(sale_key.indexOf("tildie") > -1){
              $("#best_pick .imgbox_large").eq(i).append("<p class='price sale20'>" + price + "</p>");
            }else{
              $("#best_pick .imgbox_large").eq(i).append("<p class='price'>" + price + "</p>");
            }
          }else if(i >= 8){
            $("#best_pick .imgbox_small").eq(i-8).append("<a href='#'><img src = '" + src + "' alt='new_arrival_img1'></a>");
            $("#best_pick .imgbox_small").eq(i-8).append("<h3 class='brand_name'><a href='#'>" + brand_name + "</a></h3>");
            $("#best_pick .imgbox_small").eq(i-8).append("<p class='product_name '><a href='#'>" + product_name + "</a></p>");
            if(sale_key.indexOf("daks") > -1){
              $("#best_pick .imgbox_small").eq(i-8).append("<p class='price sale20'>" + price + "</p>");
            }else if(sale_key.indexOf("jillstuart") > -1 || sale_key.indexOf("co") > -1){
              $("#best_pick .imgbox_small").eq(i-8).append("<p class='price sale32'>" + price + "</p>");
            }
            else{
              $("#best_pick .imgbox_small").eq(i-8).append("<p class='price'>" + price + "</p>");
            }
          }
        }
      }
    }
  });
});