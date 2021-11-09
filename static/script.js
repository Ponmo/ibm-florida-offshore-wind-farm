$(document).ready(function(){
  $("#marine-conservation-map").hide();
  $("#bathymetry-map").hide();
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $("#basic-grid").hide();
  $("#basic-button").click(function() {
    $("#basic-map").show();
    $("#bathymetry-map").hide();
    $("#marine-conservation-map").hide();
    $("#basic-button").addClass("active");
    $("#bathymetry-button").removeClass("active");
    $("#marine-conservation-button").removeClass("active");
    $("#wind-grid").show();
    $("#basic-grid").hide();
  });
  $("#bathymetry-button").click(function() {
    $("#basic-map").hide();
    $("#bathymetry-map").show();
    $("#marine-conservation-map").hide();
    $("#basic-button").removeClass("active");
    $("#bathymetry-button").addClass("active");
    $("#marine-conservation-button").removeClass("active");
    $("#wind-grid").hide();
    $("#basic-grid").show();
  });
  $("#marine-conservation-button").click(function() {
    $("#basic-map").hide();
    $("#bathymetry-map").hide();
    $("#marine-conservation-map").show();
    $("#basic-button").removeClass("active");
    $("#bathymetry-button").removeClass("active");
    $("#marine-conservation-button").addClass("active");
    $("#wind-grid").hide();
    $("#basic-grid").show();
  });
  $(".square-button").click(function() {
    const str = this.attributes[7].value;
    const indexOne = [...str.matchAll(new RegExp('</b>', 'gi'))].map(a => a.index);
    const indexTwo = [...str.matchAll(new RegExp('<br>', 'gi'))].map(a => a.index);
    alert(str);
    alert(indexOne);
    alert(indexTwo);
    //$.each(this.attributes, function() {
      // this.attributes is not a plain object, but an array
      // of attribute nodes, which contain both the name and value
      //if(this.specified) {
      //  alert(this.value);
      //}
    //});
  });
});
