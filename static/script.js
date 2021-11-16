$(document).ready(function(){
  var counties = {
  "Alachua": "Energy Consumption 2020 (MWh): 3,012,199<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Baker"  : "Energy Consumption 2020 (MWh): 327,034<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Bay"  : "Energy Consumption 2020 (MWh): 1,955,993<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Bradford"  : "Energy Consumption 2020 (MWh): 315,738<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Brevard"  : "Energy Consumption 2020 (MWh): 6,739,328<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Broward"  : "Energy Consumption 2020 (MWh): 21,863,255<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Calhoun"  : "Energy Consumption 2020 (MWh): 157,919<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Charlotte"  : "Energy Consumption 2020 (MWh): 2,115,032<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Citrus"  : "Energy Consumption 2020 (MWh): 1,675,556<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Clay"  : "Energy Consumption 2020 (MWh): 2,454,740<brPopulation 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Collier"  : "Energy Consumption 2020 (MWh): 4,309,354<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Columbia"  : "Energy Consumption 2020 (MWh): 802,595<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "DeSoto"  : "Energy Consumption 2020 (MWh): 425,458<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Dixie"  : "Energy Consumption 2020 (MWh): 188,383<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Duval"  : "Energy Consumption 2020 (MWh): 10,723,002<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Escambia"  : "Energy Consumption 2020 (MWh): 3,563,858<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Flagler"  : "Energy Consumption 2020 (MWh): 1,288,444<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Franklin"  : "Energy Consumption 2020 (MWh): 135,751<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Gadsden"  : "Energy Consumption 2020 (MWh): 511,208<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Gilchrist"  : "Energy Consumption 2020 (MWh): 208,044<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Glades"  : "Energy Consumption 2020 (MWh): 154,628<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Gulf"  : "Energy Consumption 2020 (MWh): 152,702<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Hamilton"  : "Energy Consumption 2020 (MWh): 161,536<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Hardee"  : "Energy Consumption 2020 (MWh): 301,586<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Hendry"  : "Energy Consumption 2020 (MWh): 470,477<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Hernando"  : "Energy Consumption 2020 (MWh): 2,171,124<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Highlands"  : "Energy Consumption 2020 (MWh): 1,189,248<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Hillsborough"  : "Energy Consumption 2020 (MWh): 16,480,118<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Holmes"  : "Energy Consumption 2020 (MWh): 219,631<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Indian River"  : "Energy Consumption 2020 (MWh): 1,790,494<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Jackson"  : "Energy Consumption 2020 (MWh): 519,650<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Jefferson"  : "Energy Consumption 2020 (MWh): 159,498<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Lafayette"  : "Energy Consumption 2020 (MWh): 94,293<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Lake"  : "Energy Consumption 2020 (MWh): 4,110,244<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Lee"  : "Energy Consumption 2020 (MWh): 8,627,362<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Leon"  : "Energy Consumption 2020 (MWh): 3,286,937<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Levy"  : "Energy Consumption 2020 (MWh): 464,667<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Liberty"  : "Energy Consumption 2020 (MWh): 93,531<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Madison"  : "Energy Consumption 2020 (MWh): 207,047<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Manatee"  : "Energy Consumption 2020 (MWh): 4,514,811<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Marion"  : "Energy Consumption 2020 (MWh): 4,093,014<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Martin"  : "Energy Consumption 2020 (MWh): 1,802,552<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Miami Dade"  : "Energy Consumption 2020 (MWh): 30,418,795<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Monroe"  : "Energy Consumption 2020 (MWh): 831,055<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Nassau"  : "Energy Consumption 2020 (MWh): 992,243<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Okaloosa"  : "Energy Consumption 2020 (MWh): 2,359,418<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Okeechobee"  : "Energy Consumption 2020 (MWh): 472,112<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Orange"  : "Energy Consumption 2020 (MWh): 15,601,055<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Osceola"  : "Energy Consumption 2020 (MWh): 4,206,899<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Palm Beach"  : "Energy Consumption 2020 (MWh): 16,757,801<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Pasco"  : "Energy Consumption 2020 (MWh): 6,201,977<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Pinellas"  : "Energy Consumption 2020 (MWh): 10,916,032<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Polk"  : "Energy Consumption 2020 (MWh): 8,114,586<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Putnam"  : "Energy Consumption 2020 (MWh): 834,335<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "St Johns"  : "Energy Consumption 2020 (MWh): 2,963,261<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "St Lucie"  : "Energy Consumption 2020 (MWh): 3,675,605<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Santa Rosa"  : "Energy Consumption 2020 (MWh): 2,063,564<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Sarasota"  : "Energy Consumption 2020 (MWh): 4,856,165<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Seminole"  : "Energy Consumption 2020 (MWh): 5,282,553<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Sumter"  : "Energy Consumption 2020 (MWh): 1,482,571<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Suwannee"  : "Energy Consumption 2020 (MWh): 497,292<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Taylor"  : "Energy Consumption 2020 (MWh): 241,486<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Union"  : "Energy Consumption 2020 (MWh): 170,593<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Volusia"  : "Energy Consumption 2020 (MWh): 6,194,554<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Wakulla"  : "Energy Consumption 2020 (MWh): 377,741<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Walton"  : "Energy Consumption 2020 (MWh): 829,297<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
  "Washington"  : "Energy Consumption 2020 (MWh): 285,195<br>Population 2020: <br>Expected Energy Consumption Change 2025: <br>Estimated Population 2025: ",
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
    $("#county-info").hide();
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
    $("#county-info").hide();
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
    $("#county-info").hide();
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
    $("#county-info").show();
    $("#county-map-wrap").show();
    $("#basic-grid").hide();
  });
  $("path").click(function() {
    const name = $(this).attr('id').replace('-', ' ');
    $("#county-info").html("<b>" + name + " County</b><br>" + counties[name]);
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
