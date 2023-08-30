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
  const filledCart = $(".filled-cart");
  const emptycart = $(".emptycart");
  function updateCounter() {
    return parseInt($("#num").text(counterValue), 10);
    // $("#num").text(counterValue);
  }

  $("#minus").click(function () {
    counterValue -= 1;
    updateCounter();
    // updateCounter();
  });

  $("#plus").click(function () {
    counterValue += 1;
    updateCounter();
  });

  $("#add-to-cart-button").click(function () {
    $(".cart-cnt").toggle();
    if (counterValue === 0) {
      updateCounter();

      filledCart.remove();
      emptycart.css("display", "flex");
    } else {
      filledCart.css("display", "flex");
      emptycart.remove();
    }
    if (counterValue > 0) {
      updateCounter();

      filledCart.css("display", "flex");
      emptycart.remove();
    } else {
      updateCounter();

      filledCart.remove();
      emptycart.css("display", "flex");
    }
  });
});
