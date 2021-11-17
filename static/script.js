$(document).ready(function(){
  var counties = {
  "Alachua": "<b>Energy Consumption 2020 (MWh):</b> 3,012,199<br>Expected Energy Consumption Change 2025: 736,665<br><b>Population 2020:</b> 269,600<br>Estimated Population 2025: 281,800",
  "Baker"  : "<b>Energy Consumption 2020 (MWh):</b> 327,034<br>Expected Energy Consumption Change 2025: 227,790<br><b>Population 2020:</b> 28,500<br>Estimated Population 2025: 29,900",
  "Bay"  : "<b>Energy Consumption 2020 (MWh):</b> 1,955,993<br>Expected Energy Consumption Change 2025: -4,441<br><b>Population 2020:</b> 175,400<br>Estimated Population 2025: 185,500",
  "Bradford"  : "<b>Energy Consumption 2020 (MWh):</b> 315,738<br>Expected Energy Consumption Change 2025: 171,540<br><b>Population 2020:</b> 28,800<br>Estimated Population 2025: 29,200",
  "Brevard"  : "<b>Energy Consumption 2020 (MWh):</b> 6,739,328<br>Expected Energy Consumption Change 2025: 1,310,874<br><b>Population 2020:</b> 602,700<br>Estimated Population 2025: 637,200",
  "Broward"  : "<b>Energy Consumption 2020 (MWh):</b> 21,863,255<br>Expected Energy Consumption Change 2025: 2,479,291<br><b>Population 2020:</b> 1,942,000<br>Estimated Population 2025: 2,039,000",
  "Calhoun"  : "<b>Energy Consumption 2020 (MWh):</b> 157,919<br>Expected Energy Consumption Change 2025: 63,153<br><b>Population 2020:</b> 14,900<br>Estimated Population 2025: 15,400",
  "Charlotte"  : "<b>Energy Consumption 2020 (MWh):</b> 2,115,032<br>Expected Energy Consumption Change 2025: 541,262<br><b>Population 2020:</b> 184,900<br>Estimated Population 2025: 197,400",
  "Citrus"  : "<b>Energy Consumption 2020 (MWh):</b> 1,675,556<br>Expected Energy Consumption Change 2025: 665,762<br><b>Population 2020:</b> 149,400<br>Estimated Population 2025: 156,700",
  "Clay"  : "<b>Energy Consumption 2020 (MWh):</b> 2,454,740<br>Expected Energy Consumption Change 2025: 1,758,512<br><b>Population 2020:</b> 218,900<br>Estimated Population 2025: 236,700",
  "Collier"  : "<b>Energy Consumption 2020 (MWh):</b> 4,309,354<br>Expected Energy Consumption Change 2025: 927,095<br><b>Population 2020:</b> 384,900<br>Estimated Population 2025: 421,500",
  "Columbia"  : "<b>Energy Consumption 2020 (MWh):</b> 802,595<br>Expected Energy Consumption Change 2025: 249,514<br><b>Population 2020:</b> 70,500<br>Estimated Population 2025: 73,500",
  "DeSoto"  : "<b>Energy Consumption 2020 (MWh):</b> 425,458<br>Expected Energy Consumption Change 2025: 325,007<br><b>Population 2020:</b> 36,300<br>Estimated Population 2025: 37,300",
  "Dixie"  : "<b>Energy Consumption 2020 (MWh):</b> 188,383<br>Expected Energy Consumption Change 2025: 131,629<br><b>Population 2020:</b> 16,700<br>Estimated Population 2025: 16,900",
  "Duval"  : "<b>Energy Consumption 2020 (MWh):</b> 10,723,002<br>Expected Energy Consumption Change 2025: 2,275,017<br><b>Population 2020:</b> 986,100<br>Estimated Population 2025: 1,051,700",
  "Escambia"  : "<b>Energy Consumption 2020 (MWh):</b> 3,563,858<br>Expected Energy Consumption Change 2025: 325,528<br><b>Population 2020:</b> 324,300<br>Estimated Population 2025: 336,300",
  "Flagler"  : "<b>Energy Consumption 2020 (MWh):</b> 1,288,444<br>Expected Energy Consumption Change 2025: 774,923<br><b>Population 2020:</b> 113,300<br>Estimated Population 2025: 126,500",
  "Franklin"  : "<b>Energy Consumption 2020 (MWh):</b> 135,751<br>Expected Energy Consumption Change 2025: 34,849<br><b>Population 2020:</b> 12,200<br>Estimated Population 2025: 12,500",
  "Gadsden"  : "<b>Energy Consumption 2020 (MWh):</b> 511,208<br>Expected Energy Consumption Change 2025: 297,173<br><b>Population 2020:</b> 46,400<br>Estimated Population 2025: 46,900",
  "Gilchrist"  : "<b>Energy Consumption 2020 (MWh):</b> 208,044<br>Expected Energy Consumption Change 2025: 192,483<br><b>Population 2020:</b> 18,000<br>Estimated Population 2025: 18,900",
  "Glades"  : "<b>Energy Consumption 2020 (MWh):</b> 154,628<br>Expected Energy Consumption Change 2025: 152,334<br><b>Population 2020:</b> 13,200<br>Estimated Population 2025: 13,500",
  "Gulf"  : "<b>Energy Consumption 2020 (MWh):</b> 152,702<br>Expected Energy Consumption Change 2025: 43,287<br><b>Population 2020:</b> 14,900<br>Estimated Population 2025: 15,200",
  "Hamilton"  : "<b>Energy Consumption 2020 (MWh):</b> 161,536<br>Expected Energy Consumption Change 2025: 116,972<br><b>Population 2020:</b> 14,600<br>Estimated Population 2025: 14,700",
  "Hardee"  : "<b>Energy Consumption 2020 (MWh):</b> 301,586<br>Expected Energy Consumption Change 2025: 270,760<br><b>Population 2020:</b> 27,400<br>Estimated Population 2025: 27,300",
  "Hendry"  : "<b>Energy Consumption 2020 (MWh):</b> 470,477<br>Expected Energy Consumption Change 2025: 179,209<br><b>Population 2020:</b> 40,500<br>Estimated Population 2025: 42,000",
  "Hernando"  : "<b>Energy Consumption 2020 (MWh):</b> 2,171,124<br>Expected Energy Consumption Change 2025: 932,983<br><b>Population 2020:</b> 191,400<br>Estimated Population 2025: 206,100",
  "Highlands"  : "<b>Energy Consumption 2020 (MWh):</b> 1,189,248<br>Expected Energy Consumption Change 2025: 388,104<br><b>Population 2020:</b> 104,200<br>Estimated Population 2025: 107,700",
  "Hillsborough"  : "<b>Energy Consumption 2020 (MWh):</b> 16,480,118<br>Expected Energy Consumption Change 2025: 2,398,236<br><b>Population 2020:</b> 1,475,400<br>Estimated Population 2025: 1,614,100",
  "Holmes"  : "<b>Energy Consumption 2020 (MWh):</b> 219,631<br>Expected Energy Consumption Change 2025: 132,289<br><b>Population 2020:</b> 20,100<br>Estimated Population 2025: 20,100",
  "Indian River"  : "<b>Energy Consumption 2020 (MWh):</b> 1,790,494<br>Expected Energy Consumption Change 2025: 137,491<br><b>Population 2020:</b> 157,700<br>Estimated Population 2025: 169,800",
  "Jackson"  : "<b>Energy Consumption 2020 (MWh):</b> 519,650<br>Expected Energy Consumption Change 2025: 96,021<br><b>Population 2020:</b> 47,100<br>Estimated Population 2025: 47,600",
  "Jefferson"  : "<b>Energy Consumption 2020 (MWh):</b> 159,498<br>Expected Energy Consumption Change 2025: 39,248<br><b>Population 2020:</b> 14,800<br>Estimated Population 2025: 15,100",
  "Lafayette"  : "<b>Energy Consumption 2020 (MWh):</b> 94,293<br>Expected Energy Consumption Change 2025: 109,059<br><b>Population 2020:</b> 8,700<br>Estimated Population 2025: 9,100",
  "Lake"  : "<b>Energy Consumption 2020 (MWh):</b> 4,110,244<br>Expected Energy Consumption Change 2025: 1,732,698<br><b>Population 2020:</b> 366,600<br>Estimated Population 2025: 410,100",
  "Lee"  : "<b>Energy Consumption 2020 (MWh):</b> 8,627,362<br>Expected Energy Consumption Change 2025: 2,461,958<br><b>Population 2020:</b> 752,800<br>Estimated Population 2025: 837,000",
  "Leon"  : "<b>Energy Consumption 2020 (MWh):</b> 3,286,937<br>Expected Energy Consumption Change 2025: 384,243<br><b>Population 2020:</b> 300,000<br>Estimated Population 2025: 315,200",
  "Levy"  : "<b>Energy Consumption 2020 (MWh):</b> 464,667<br>Expected Energy Consumption Change 2025: 270,053<br><b>Population 2020:</b> 41,600<br>Estimated Population 2025: 42,600",
  "Liberty"  : "<b>Energy Consumption 2020 (MWh):</b> 93,531<br>Expected Energy Consumption Change 2025: 54,754<br><b>Population 2020:</b> 8,800<br>Estimated Population 2025: 9,200",
  "Madison"  : "<b>Energy Consumption 2020 (MWh):</b> 207,047<br>Expected Energy Consumption Change 2025: 63,149<br><b>Population 2020:</b> 19,600<br>Estimated Population 2025: 19,800",
  "Manatee"  : "<b>Energy Consumption 2020 (MWh):</b> 4,514,811<br>Expected Energy Consumption Change 2025: 2,014,347<br><b>Population 2020:</b> 396,100<br>Estimated Population 2025: 434,300",
  "Marion"  : "<b>Energy Consumption 2020 (MWh):</b> 4,093,014<br>Expected Energy Consumption Change 2025: 1,639,237<br><b>Population 2020:</b> 365,800<br>Estimated Population 2025: 392,000",
  "Martin"  : "<b>Energy Consumption 2020 (MWh):</b> 1,802,552<br>Expected Energy Consumption Change 2025: 223,691<br><b>Population 2020:</b> 160,700<br>Estimated Population 2025: 169,000",
  "Miami Dade"  : "<b>Energy Consumption 2020 (MWh):</b> 30,418,795<br>Expected Energy Consumption Change 2025: 4,538,845<br><b>Population 2020:</b> 2,851,700<br>Estimated Population 2025: 3,026,900",
  "Monroe"  : "<b>Energy Consumption 2020 (MWh):</b> 831,055<br>Expected Energy Consumption Change 2025: -1,402<br><b>Population 2020:</b> 76,300<br>Estimated Population 2025: 76,600",
  "Nassau"  : "<b>Energy Consumption 2020 (MWh):</b> 992,243<br>Expected Energy Consumption Change 2025: 313,849<br><b>Population 2020:</b> 87,000<br>Estimated Population 2025: 95,900",
  "Okaloosa"  : "<b>Energy Consumption 2020 (MWh):</b> 2,359,418<br>Expected Energy Consumption Change 2025: 599,518<br><b>Population 2020:</b> 204,000<br>Estimated Population 2025: 214,200",
  "Okeechobee"  : "<b>Energy Consumption 2020 (MWh):</b> 472,112<br>Expected Energy Consumption Change 2025: 234,146<br><b>Population 2020:</b> 42,100<br>Estimated Population 2025: 43,600",
  "Orange"  : "<b>Energy Consumption 2020 (MWh):</b> 15,601,055<br>Expected Energy Consumption Change 2025: 677,023<br><b>Population 2020:</b> 1,419,700<br>Estimated Population 2025: 1,575,300",
  "Osceola"  : "<b>Energy Consumption 2020 (MWh):</b> 4,206,899<br>Expected Energy Consumption Change 2025: 1,928,702<br><b>Population 2020:</b> 385,200<br>Estimated Population 2025: 453,200",
  "Palm Beach"  : "<b>Energy Consumption 2020 (MWh):</b> 16,757,801<br>Expected Energy Consumption Change 2025: 1,269,071<br><b>Population 2020:</b> 1,466,000<br>Estimated Population 2025: 1,548,200",
  "Pasco"  : "<b>Energy Consumption 2020 (MWh):</b> 6,201,977<br>Expected Energy Consumption Change 2025: 3,399,679<br><b>Population 2020:</b> 537,200<br>Estimated Population 2025: 586,100",
  "Pinellas"  : "<b>Energy Consumption 2020 (MWh):</b> 10,916,032<br>Expected Energy Consumption Change 2025: 1,638,704<br><b>Population 2020:</b> 985,500<br>Estimated Population 2025: 1,013,500",
  "Polk"  : "<b>Energy Consumption 2020 (MWh):</b> 8,114,586<br>Expected Energy Consumption Change 2025: 4,352,820<br><b>Population 2020:</b> 704,300<br>Estimated Population 2025: 766,900",
  "Putnam"  : "<b>Energy Consumption 2020 (MWh):</b> 834,335<br>Expected Energy Consumption Change 2025: 354,287<br><b>Population 2020:</b> 73,400<br>Estimated Population 2025: 73,400",
  "St Johns"  : "<b>Energy Consumption 2020 (MWh):</b> 2,963,261<br>Expected Energy Consumption Change 2025: 1,589,232<br><b>Population 2020:</b> 264,000<br>Estimated Population 2025: 309,900",
  "St Lucie"  : "<b>Energy Consumption 2020 (MWh):</b> 3,675,605<br>Expected Energy Consumption Change 2025: 1,338,107<br><b>Population 2020:</b> 315,100<br>Estimated Population 2025: 343,000",
  "Santa Rosa"  : "<b>Energy Consumption 2020 (MWh):</b> 2,063,564<br>Expected Energy Consumption Change 2025: 1,189,766<br><b>Population 2020:</b> 183,000<br>Estimated Population 2025: 199,300",
  "Sarasota"  : "<b>Energy Consumption 2020 (MWh):</b> 4,856,165<br>Expected Energy Consumption Change 2025: 430,148<br><b>Population 2020:</b> 433,500<br>Estimated Population 2025: 464,100",
  "Seminole"  : "<b>Energy Consumption 2020 (MWh):</b> 5,282,553<br>Expected Energy Consumption Change 2025: 917,364<br><b>Population 2020:</b> 478,800<br>Estimated Population 2025: 510,200",
  "Sumter"  : "<b>Energy Consumption 2020 (MWh):</b> 1,482,571<br>Expected Energy Consumption Change 2025: 1,579,123<br><b>Population 2020:</b> 132,700<br>Estimated Population 2025: 152,000",
  "Suwannee"  : "<b>Energy Consumption 2020 (MWh):</b> 497,292<br>Expected Energy Consumption Change 2025: 231,575<br><b>Population 2020:</b> 45,900<br>Estimated Population 2025: 48,300",
  "Taylor"  : "<b>Energy Consumption 2020 (MWh):</b> 241,486<br>Expected Energy Consumption Change 2025: 115,455<br><b>Population 2020:</b> 22,500<br>Estimated Population 2025: 23,100",
  "Union"  : "<b>Energy Consumption 2020 (MWh):</b> 170,593<br>Expected Energy Consumption Change 2025: 208,664<br><b>Population 2020:</b> 15,500<br>Estimated Population 2025: 15,700",
  "Volusia"  : "<b>Energy Consumption 2020 (MWh):</b> 6,194,554<br>Expected Energy Consumption Change 2025: 636,942<br><b>Population 2020:</b> 545,300<br>Estimated Population 2025: 572,300",
  "Wakulla"  : "<b>Energy Consumption 2020 (MWh):</b> 377,741<br>Expected Energy Consumption Change 2025: 237,199<br><b>Population 2020:</b> 33,764<br>Estimated Population 2025: 35,400",
  "Walton"  : "<b>Energy Consumption 2020 (MWh):</b> 829,297<br>Expected Energy Consumption Change 2025: 318,877<br><b>Population 2020:</b> 72,100<br>Estimated Population 2025: 81,500",
  "Washington"  : "<b>Energy Consumption 2020 (MWh):</b> 285,195<br>Expected Energy Consumption Change 2025: 175,859<br><b>Population 2020:</b> 25,200<br>Estimated Population 2025: 25,900",
  };
  $("path").each(function() {
    const name = $(this).attr('id').replace('-', ' ');
    const indexOne = counties[name].indexOf("2025: ");
    const indexTwo = counties[name].indexOf("<br><b>Population");
    const power = Math.abs(parseFloat(counties[name].substring(indexOne + 6, indexTwo).replace(',', '')));
    //let green = (((1 / power - 0.125) * 165) / (0.1667 - 0.125))
    //const green = (1 / power * 165);
    const green = parseInt(((((1 / power) - 0.00000002) * (165 - 0)) / (0.001 - 0.00000002)) + 0)
    const color = "rgb(255," + str(green) + ",0)";
    //alert(green);
    //NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
    $(this).removeAttr("fill");
    $(this).attr("fill", color);//"rgb(255," + str(green) + ", 0)");
  });
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
