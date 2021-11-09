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
    const hubHeight = parseFloat(document.getElementById('height-selection').value);
    alert(hubHeight);
    const radius = parseFloat(document.getElementById('radius-selection').value);
    alert(radius);
    const airDensity = parseFloat(document.getElementById('air-density-selection').value);
    alert(airDensity);
    const powerCoefficient = parseFloat(document.getElementById('power-coefficient-selection').value);
    alert(powerCoefficient);
    var velocity = 0;
    if(hubHeight == "100") {
      velocity = str.substring(indexOne[2] + 4, indexTwo[2]);
    }
    else if(hubHeight == "150") {
      velocity = str.substring(indexOne[1] + 4, indexTwo[1]);
    }
    else {
      velocity = str.substring(indexOne[0] + 4, indexTwo[0]);
    }
    alert(velocity);
    const power = Math.PI / 2 * radius * radius * velocity * velocity * velocity * airDensity * powerCoefficient;
    alert(power);
  });
});
