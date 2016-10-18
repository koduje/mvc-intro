(function () {
  window.mvc.BackgroundDelayedChangeController = function (view, model) {
    return {
      onBackgroundColorChange: function () {
        setTimeout(function () {
          view.update();
        }, 2000);
      }
    };
  };
}());