(function () {
  var model = new mvc.ColorModel();
  model.setColor("pink");
  var view = new mvc.BodyView(model);
  var controller = new mvc.BackgroundChangeController(view, model);
  //var delayedController = new mvc.BackgroundDelayedChangeController(view, model);

  var pickerView = new mvc.ColorPickerView(model, controller);
  document.body.appendChild(pickerView.getRootEl());
}());