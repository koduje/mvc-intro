(function () {
  window.mvc.ColorPickerView = function (model, controller) {
    var rootEl = document.createElement("form"),
      colorPickerEl,
      manualColorEl;

    rootEl.innerHTML = '<h2>Choose background color:</h2>' +
      '<label for="picker">Pick:</label>' +
      '<input name="colorPicker" type="color">';

    var manualColorView = new mvc.ManualColorView();
    rootEl.appendChild(manualColorView.getRootEl());
    
    colorPickerEl = rootEl.querySelector("[name=colorPicker]");
    rootEl.addEventListener("change", function () {
      controller.onBackgroundColorChange(colorPickerEl.value);
    }, false);

    manualColorEl = rootEl.querySelector("[name=manualColor]");
    rootEl.addEventListener("change", function () {
      controller.onBackgroundColorChange(manualColorEl.value);
    }, false);

    return {
      getRootEl: function () {
        return rootEl;
      }
    };
  };
}());