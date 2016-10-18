(function () {
  window.mvc.BackgroundChangeController = function (view, model) {
    return {
      onBackgroundColorChange: function (color) {
        model.setColor(color);
        view.update();
      }
    };
  };
}());