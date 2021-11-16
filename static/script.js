$(document).ready(function(){
  var counties = {
  "Alachua": "Energy Consumption 2020 (MWh): 3,012,199<br>Population 2020: 269,600<br>Expected Energy Consumption Change 2025: 736,665<br>Estimated Population 2025: 281,800",
  "Baker"  : "Energy Consumption 2020 (MWh): 327,034<br>Population 2020: 28,500<br>Expected Energy Consumption Change 2025: 227,790<br>Estimated Population 2025: 29,900",
  "Bay"  : "Energy Consumption 2020 (MWh): 1,955,993<br>Population 2020: 175,400<br>Expected Energy Consumption Change 2025: -4,441<br>Estimated Population 2025: 185,500",
  "Bradford"  : "Energy Consumption 2020 (MWh): 315,738<br>Population 2020: 28,800<br>Expected Energy Consumption Change 2025: 171,540<br>Estimated Population 2025: 29,200",
  "Brevard"  : "Energy Consumption 2020 (MWh): 6,739,328<br>Population 2020: 602,700<br>Expected Energy Consumption Change 2025: 1,310,874<br>Estimated Population 2025: 637,200",
  "Broward"  : "Energy Consumption 2020 (MWh): 21,863,255<br>Population 2020: 1,942,000<br>Expected Energy Consumption Change 2025: 2,479,291<br>Estimated Population 2025: 2,039,000",
  "Calhoun"  : "Energy Consumption 2020 (MWh): 157,919<br>Population 2020: 14,900<br>Expected Energy Consumption Change 2025: 63,153<br>Estimated Population 2025: 15,400",
  "Charlotte"  : "Energy Consumption 2020 (MWh): 2,115,032<br>Population 2020: 184,900<br>Expected Energy Consumption Change 2025: 541,262<br>Estimated Population 2025: 197,400",
  "Citrus"  : "Energy Consumption 2020 (MWh): 1,675,556<br>Population 2020: 149,400<br>Expected Energy Consumption Change 2025: 665,762<br>Estimated Population 2025: 156,700",
  "Clay"  : "Energy Consumption 2020 (MWh): 2,454,740<brPopulation 2020: 218,900<br>Expected Energy Consumption Change 2025: 1,758,512<br>Estimated Population 2025: 236,700",
  "Collier"  : "Energy Consumption 2020 (MWh): 4,309,354<br>Population 2020: 384,900<br>Expected Energy Consumption Change 2025: 927,095<br>Estimated Population 2025: 421,500",
  "Columbia"  : "Energy Consumption 2020 (MWh): 802,595<br>Population 2020: 70,500<br>Expected Energy Consumption Change 2025: 249,514<br>Estimated Population 2025: 73,500",
  "DeSoto"  : "Energy Consumption 2020 (MWh): 425,458<br>Population 2020: 36,300<br>Expected Energy Consumption Change 2025: 325,007<br>Estimated Population 2025: 37,300",
  "Dixie"  : "Energy Consumption 2020 (MWh): 188,383<br>Population 2020: 16,700<br>Expected Energy Consumption Change 2025: 131,629<br>Estimated Population 2025: 16,900",
  "Duval"  : "Energy Consumption 2020 (MWh): 10,723,002<br>Population 2020: 986,100<br>Expected Energy Consumption Change 2025: 2,275,017<br>Estimated Population 2025: 1,051,700",
  "Escambia"  : "Energy Consumption 2020 (MWh): 3,563,858<br>Population 2020: 324,300<br>Expected Energy Consumption Change 2025: 325,528<br>Estimated Population 2025: 336,300",
  "Flagler"  : "Energy Consumption 2020 (MWh): 1,288,444<br>Population 2020: 113,300<br>Expected Energy Consumption Change 2025: 774,923<br>Estimated Population 2025: 126,500",
  "Franklin"  : "Energy Consumption 2020 (MWh): 135,751<br>Population 2020: 12,200<br>Expected Energy Consumption Change 2025: 34,849<br>Estimated Population 2025: 12,500",
  "Gadsden"  : "Energy Consumption 2020 (MWh): 511,208<br>Population 2020: 46,400<br>Expected Energy Consumption Change 2025: 297,173<br>Estimated Population 2025: 46,900",
  "Gilchrist"  : "Energy Consumption 2020 (MWh): 208,044<br>Population 2020: 18,000<br>Expected Energy Consumption Change 2025: 192,483<br>Estimated Population 2025: 18,900",
  "Glades"  : "Energy Consumption 2020 (MWh): 154,628<br>Population 2020: 13,200<br>Expected Energy Consumption Change 2025: 152,334<br>Estimated Population 2025: 13,500",
  "Gulf"  : "Energy Consumption 2020 (MWh): 152,702<br>Population 2020: 14,900<br>Expected Energy Consumption Change 2025: 43,287<br>Estimated Population 2025: 15,200",
  "Hamilton"  : "Energy Consumption 2020 (MWh): 161,536<br>Population 2020: 14,600<br>Expected Energy Consumption Change 2025: 116,972<br>Estimated Population 2025: 14,700",
  "Hardee"  : "Energy Consumption 2020 (MWh): 301,586<br>Population 2020: 27,400<br>Expected Energy Consumption Change 2025: 270,760<br>Estimated Population 2025: 27,300",
  "Hendry"  : "Energy Consumption 2020 (MWh): 470,477<br>Population 2020: 40,500<br>Expected Energy Consumption Change 2025: 179,209<br>Estimated Population 2025: 42,000",
  "Hernando"  : "Energy Consumption 2020 (MWh): 2,171,124<br>Population 2020: 191,400<br>Expected Energy Consumption Change 2025: 932,983<br>Estimated Population 2025: 206,100",
  "Highlands"  : "Energy Consumption 2020 (MWh): 1,189,248<br>Population 2020: 104,200<br>Expected Energy Consumption Change 2025: 388,104<br>Estimated Population 2025: 107,700",
  "Hillsborough"  : "Energy Consumption 2020 (MWh): 16,480,118<br>Population 2020: 1,475,400<br>Expected Energy Consumption Change 2025: 2,398,236<br>Estimated Population 2025: 1,614,100",
  "Holmes"  : "Energy Consumption 2020 (MWh): 219,631<br>Population 2020: 20,100<br>Expected Energy Consumption Change 2025: 132,289<br>Estimated Population 2025: 20,100",
  "Indian River"  : "Energy Consumption 2020 (MWh): 1,790,494<br>Population 2020: 157,700<br>Expected Energy Consumption Change 2025: 137,491<br>Estimated Population 2025: 169,800",
  "Jackson"  : "Energy Consumption 2020 (MWh): 519,650<br>Population 2020: 47,100<br>Expected Energy Consumption Change 2025: 96,021<br>Estimated Population 2025: 47,600",
  "Jefferson"  : "Energy Consumption 2020 (MWh): 159,498<br>Population 2020: 14,800<br>Expected Energy Consumption Change 2025: 39,248<br>Estimated Population 2025: 15,100",
  "Lafayette"  : "Energy Consumption 2020 (MWh): 94,293<br>Population 2020: 8,700<br>Expected Energy Consumption Change 2025: 109,059<br>Estimated Population 2025: 9,100",
  "Lake"  : "Energy Consumption 2020 (MWh): 4,110,244<br>Population 2020: 366,600<br>Expected Energy Consumption Change 2025: 1,732,698<br>Estimated Population 2025: 410,100",
  "Lee"  : "Energy Consumption 2020 (MWh): 8,627,362<br>Population 2020: 752,800<br>Expected Energy Consumption Change 2025: 2,461,958<br>Estimated Population 2025: 837,000",
  "Leon"  : "Energy Consumption 2020 (MWh): 3,286,937<br>Population 2020: 300,000<br>Expected Energy Consumption Change 2025: 384,243<br>Estimated Population 2025: 315,200",
  "Levy"  : "Energy Consumption 2020 (MWh): 464,667<br>Population 2020: 41,600<br>Expected Energy Consumption Change 2025: 270,053<br>Estimated Population 2025: 42,600",
  "Liberty"  : "Energy Consumption 2020 (MWh): 93,531<br>Population 2020: 8,800<br>Expected Energy Consumption Change 2025: 54,754<br>Estimated Population 2025: 9,200",
  "Madison"  : "Energy Consumption 2020 (MWh): 207,047<br>Population 2020: 19,600<br>Expected Energy Consumption Change 2025: 63,149<br>Estimated Population 2025: 19,800",
  "Manatee"  : "Energy Consumption 2020 (MWh): 4,514,811<br>Population 2020: 396,100<br>Expected Energy Consumption Change 2025: 2,014,347<br>Estimated Population 2025: 434,300",
  "Marion"  : "Energy Consumption 2020 (MWh): 4,093,014<br>Population 2020: 365,800<br>Expected Energy Consumption Change 2025: 1,639,237<br>Estimated Population 2025: 392,000",
  "Martin"  : "Energy Consumption 2020 (MWh): 1,802,552<br>Population 2020: 160,700<br>Expected Energy Consumption Change 2025: 223,691<br>Estimated Population 2025: 169,000",
  "Miami Dade"  : "Energy Consumption 2020 (MWh): 30,418,795<br>Population 2020: 2,851,700<br>Expected Energy Consumption Change 2025: 4,538,845<br>Estimated Population 2025: 3,026,900",
  "Monroe"  : "Energy Consumption 2020 (MWh): 831,055<br>Population 2020: 76,300<br>Expected Energy Consumption Change 2025: -1,402<br>Estimated Population 2025: 76,600",
  "Nassau"  : "Energy Consumption 2020 (MWh): 992,243<br>Population 2020: 87,000<br>Expected Energy Consumption Change 2025: 313,849<br>Estimated Population 2025: 95,900",
  "Okaloosa"  : "Energy Consumption 2020 (MWh): 2,359,418<br>Population 2020: 204,000<br>Expected Energy Consumption Change 2025: 599,518<br>Estimated Population 2025: 214,200",
  "Okeechobee"  : "Energy Consumption 2020 (MWh): 472,112<br>Population 2020: 42,100<br>Expected Energy Consumption Change 2025: 234,146<br>Estimated Population 2025: 43,600",
  "Orange"  : "Energy Consumption 2020 (MWh): 15,601,055<br>Population 2020: 1,419,700<br>Expected Energy Consumption Change 2025: 677,023<br>Estimated Population 2025: 1,575,300",
  "Osceola"  : "Energy Consumption 2020 (MWh): 4,206,899<br>Population 2020: 385,200<br>Expected Energy Consumption Change 2025: 1,928,702<br>Estimated Population 2025: 453,200",
  "Palm Beach"  : "Energy Consumption 2020 (MWh): 16,757,801<br>Population 2020: 1,466,000<br>Expected Energy Consumption Change 2025: 1,269,071<br>Estimated Population 2025: 1,548,200",
  "Pasco"  : "Energy Consumption 2020 (MWh): 6,201,977<br>Population 2020: 537,200<br>Expected Energy Consumption Change 2025: 3,399,679<br>Estimated Population 2025: 586,100",
  "Pinellas"  : "Energy Consumption 2020 (MWh): 10,916,032<br>Population 2020: 985,500<br>Expected Energy Consumption Change 2025: 1,638,704<br>Estimated Population 2025: 1,013,500",
  "Polk"  : "Energy Consumption 2020 (MWh): 8,114,586<br>Population 2020: 704,300<br>Expected Energy Consumption Change 2025: 4,352,820<br>Estimated Population 2025: 766,900",
  "Putnam"  : "Energy Consumption 2020 (MWh): 834,335<br>Population 2020: 73,400<br>Expected Energy Consumption Change 2025: 354,287<br>Estimated Population 2025: 73,400",
  "St Johns"  : "Energy Consumption 2020 (MWh): 2,963,261<br>Population 2020: 264,000<br>Expected Energy Consumption Change 2025: 1,589,232<br>Estimated Population 2025: 309,900",
  "St Lucie"  : "Energy Consumption 2020 (MWh): 3,675,605<br>Population 2020: 315,100<br>Expected Energy Consumption Change 2025: 1,338,107<br>Estimated Population 2025: 343,000",
  "Santa Rosa"  : "Energy Consumption 2020 (MWh): 2,063,564<br>Population 2020: 183,000<br>Expected Energy Consumption Change 2025: 1,189,766<br>Estimated Population 2025: 199,300",
  "Sarasota"  : "Energy Consumption 2020 (MWh): 4,856,165<br>Population 2020: 433,500<br>Expected Energy Consumption Change 2025: 430,148<br>Estimated Population 2025: 464,100",
  "Seminole"  : "Energy Consumption 2020 (MWh): 5,282,553<br>Population 2020: 478,800<br>Expected Energy Consumption Change 2025: 917,364<br>Estimated Population 2025: 510,200",
  "Sumter"  : "Energy Consumption 2020 (MWh): 1,482,571<br>Population 2020: 132,700<br>Expected Energy Consumption Change 2025: 1,579,123<br>Estimated Population 2025: 152,000",
  "Suwannee"  : "Energy Consumption 2020 (MWh): 497,292<br>Population 2020: 45,900<br>Expected Energy Consumption Change 2025: 231,575<br>Estimated Population 2025: 48,300",
  "Taylor"  : "Energy Consumption 2020 (MWh): 241,486<br>Population 2020: 22,500<br>Expected Energy Consumption Change 2025: 115,455<br>Estimated Population 2025: 23,100",
  "Union"  : "Energy Consumption 2020 (MWh): 170,593<br>Population 2020: 15,500<br>Expected Energy Consumption Change 2025: 208,664<br>Estimated Population 2025: 15,700",
  "Volusia"  : "Energy Consumption 2020 (MWh): 6,194,554<br>Population 2020: 545,300<br>Expected Energy Consumption Change 2025: 636,942<br>Estimated Population 2025: 572,300",
  "Wakulla"  : "Energy Consumption 2020 (MWh): 377,741<br>Population 2020: 33,764<br>Expected Energy Consumption Change 2025: 237,199<br>Estimated Population 2025: 35,400",
  "Walton"  : "Energy Consumption 2020 (MWh): 829,297<br>Population 2020: 72,100<br>Expected Energy Consumption Change 2025: 318,877<br>Estimated Population 2025: 81,500",
  "Washington"  : "Energy Consumption 2020 (MWh): 285,195<br>Population 2020: 25,200<br>Expected Energy Consumption Change 2025: 175,859<br>Estimated Population 2025: 25,900",
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
