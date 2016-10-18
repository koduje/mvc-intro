(function () {
  window.mvc.ColorModel = function () {
    var color = "#FFFFFF";
    
    return {
      getColor: function () {
        return color;
      },
      setColor: function (value) {
        color = value;
        this.lightenColor(color);
      },
      lightenColor: function () {
        
      }
    };
  };
}());