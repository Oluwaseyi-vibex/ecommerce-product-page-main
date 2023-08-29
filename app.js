//SLIDE IN ANIMATION
$(document).ready(function () {
  $(".slide-in").addClass("slide-in-active");
});

//CART ONCLICK
$(document).ready(function () {
  $("#cart-icon").click(function () {
    $(".cart-cnt").toggle();
  });
});

//COUNTER
$(document).ready(function () {
  let counterValue = 0;

  function updateCounter() {
    return parseInt($("#num").text(counterValue), 10);
    // $("#num").text(counterValue);
  }

  $("#minus").click(function () {
    counterValue -= 1;
    updateCounter();
  });

  $("#plus").click(function () {
    counterValue += 1;
    updateCounter();
  });
});

//filler
$(document).ready(function () {
  const filledCart = $(".filled-cart");
  const emptycart = $(".emptycart");
});
