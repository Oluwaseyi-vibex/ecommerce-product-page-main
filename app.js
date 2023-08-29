//SLIDE IN ANIMATION
$(document).ready(function () {
  $(".slide-in").addClass("slide-in-active");
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

$(document).ready(function () {
  $("#cart-button").click(function () {
    $(".cart-cnt").toggle();
  });
});

//CART ONCLICK
$(document).ready(function () {
  $("#cart-icon").click(function () {
    $(".cart-cnt").toggle();
  });
});

//filler
$(document).ready(function () {
  const filledCart = $(".filled-cart");
  const emptycart = $(".emptycart");
});
