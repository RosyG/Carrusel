$(document).ready(function () {
  $(".control").click(cargarImagen);

})
var target = 0;

var cargarImagen = function() {
  // console.log(this.dataset.target);
  var $target = $(this).data("target");
  console.log($target);/*Ex: data-target="1" $target=1*/
  changeImage($target);
  changeColorButton($target);
  /*changeNext($target);*/
}

/*var changeNext = function (target) {
  var $nextImage = $("div.active")
}*/
var changeImage = function (target) {
  console.log($("div.active"));
  var $actualImage = $("div.active");
  // console.log($("div[data-slide='"+$target+"']"));
  var $newImage = $("div[data-slide='" + target +"']");
  $actualImage.removeClass("active");
  $newImage.addClass("active");

}

var changeColorButton = function (target) {
    var $actualButton = $("button.active");
    var $newButton = $("button[data-target='" + target +"']");
    $actualButton.removeClass("active");
    $newButton.addClass("active");
}


/*
var target = 0;
$(document).ready(function(){
  var $botones = $(".control");

  $botones.click(cargarImagen);
})

var cargarImagen = function () {
  var $target = $(this).data("target");
  mostrarImagen($target);
  changeColorButton($target);
}

var mostrarImagen = function (target) {
  var $actualSlide = $("div.active");
  var $newImage = $("div[data-slide=" + target + "]");
  $actualSlide.removeClass("active");
  $newImage.addClass("active");
}

var changeColorButton = function (target) {
  var $actualButton = $("button.active");
  var $newButton = $("button[data-target=" + target+ "]");
  $actualButton.removeClass("active");
  $newButton.addClass("active");
}
*/
