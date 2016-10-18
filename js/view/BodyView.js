(function () {
  window.mvc.BodyView = function (model) {
    var rootEl = document.body;

    return {
      getRootEl: function () {
        return rootEl;
      },
      update: function () {
        rootEl.style.backgroundColor = model.getColor();
      }
    };
  };
}());