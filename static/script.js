$(document).ready(function(){
  var counties = {
  brevard: "info"
  };
  var velocityMin = 0;
  var velocityMed = 0;
  var velocityMax = 0;
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $("#basic-button").click(function() {
    $("#basic-map").show();
    $("#bathymetry-map").hide();
    $("#marine-conservation-map").hide();
    $("#basic-button").addClass("active");
    $("#bathymetry-button").removeClass("active");
    $("#county-button").removeClass("active");
    $("#marine-conservation-button").removeClass("active");
    $("#wind-grid").show();
    $("#county-map-wrap").hide();
    $("#basic-grid").hide();
  });
  $("#bathymetry-button").click(function() {
    $("#basic-map").hide();
    $("#bathymetry-map").show();
    $("#marine-conservation-map").hide();
    $("#basic-button").removeClass("active");
    $("#bathymetry-button").addClass("active");
    $("#marine-conservation-button").removeClass("active");
    $("#county-button").removeClass("active");
    $("#wind-grid").hide();
    $("#county-map-wrap").hide();
    $("#basic-grid").show();
  });
  $("#marine-conservation-button").click(function() {
    $("#basic-map").hide();
    $("#bathymetry-map").hide();
    $("#marine-conservation-map").show();
    $("#basic-button").removeClass("active");
    $("#bathymetry-button").removeClass("active");
    $("#county-button").removeClass("active");
    $("#marine-conservation-button").addClass("active");
    $("#wind-grid").hide();
    $("#county-map-wrap").hide();
    $("#basic-grid").show();
  });
  $("#county-button").click(function() {
    $("#basic-map").hide();
    $("#bathymetry-map").hide();
    $("#marine-conservation-map").hide();
    $("#basic-button").removeClass("active");
    $("#bathymetry-button").removeClass("active");
    $("#marine-conservation-button").removeClass("active");
    $("#county-button").addClass("active");
    $("#wind-grid").hide();
    $("#county-map-wrap").show();
    $("#basic-grid").hide();
  });
  $("path").click(function() {
    //$(this).attr('id')
    $("#county-info").html("<b>" + $(this).attr('id') + " County<b>");
  });
  $(".square-button").click(function() {
    const str = this.attributes[7].value;
    const indexOne = [...str.matchAll(new RegExp('</b>', 'gi'))].map(a => a.index);
    const indexTwo = [...str.matchAll(new RegExp('<br>', 'gi'))].map(a => a.index);
    velocityMin = str.substring(indexOne[2] + 4, indexTwo[2]);
    velocityMed = str.substring(indexOne[1] + 4, indexTwo[1]);
    velocityMax = str.substring(indexOne[0] + 4, indexTwo[0]);
    evaluateData();
    $("#power-output").show();
    $("#per-turbine-info").show();
    $("#annual-yield").show();
    $("#annual-info").show();
    $("#conversion-image").show();
    $("#number-turbines").show();
    $("#capacity-factor").show();
    $("#number-hours").show();
    $("#number-turbines-label").show();
    $("#power-select-info").hide();
  });
  $('#radius-selection').on('input', function() {
    evaluateData();
  });
  $('#air-density-selection').on('input', function() {
    evaluateData();
  });
  $('#power-coefficient-selection').on('input', function() {
    evaluateData();
  });
  $("#height-selection").change(function() {
    evaluateData();
  });
  $("#number-hours-selection").on('input', function() {
    evaluateData();
  });
  $("#capacity-factor-selection").on('input', function() {
    evaluateData();
  });
  $("#number-turbines-selection").on('input', function() {
    evaluateData();
  });
  function evaluateData() {
    var hubHeight = parseFloat(document.getElementById('height-selection').value);
    if(isNaN(hubHeight)) {
      hubHeight = "100";
    }
    var velocity = 0;
    if(hubHeight == "100") {
      velocity = velocityMin;
    }
    else if(hubHeight == "150") {
      velocity = velocityMed;
    }
    else {
      velocity = velocityMax;
    }
    var radius = parseFloat(document.getElementById('radius-selection').value);
    if(isNaN(radius)) {
      radius = 75.0;
    }
    var airDensity = parseFloat(document.getElementById('air-density-selection').value);
    if(isNaN(airDensity)) {
      airDensity = 1.225;
    }
    var powerCoefficient = parseFloat(document.getElementById('power-coefficient-selection').value);
    if(isNaN(powerCoefficient)) {
      powerCoefficient = 0.25;
    }
    var capacityFactor = parseFloat(document.getElementById('capacity-factor-selection').value);
    if(isNaN(capacityFactor)) {
      capacityFactor = 0.35;
    }
    var time = parseFloat(document.getElementById('number-hours-selection').value);
    if(isNaN(time)) {
      time = 4800;
    }
    var number = parseFloat(document.getElementById('number-turbines-selection').value);
    if(isNaN(number)) {
      number = 1;
    }
    const power = Math.round(100 * (Math.PI / 2 * radius * radius * velocity * velocity * velocity * airDensity * powerCoefficient * 0.001)) / 100;
    $("#power-output").text(power.toString() + " kW");
    const powerTime = Math.round(100 * (power * capacityFactor * time * number)) / 100;
    $("#annual-yield").text(powerTime.toString() + " kWh");
  }
});
