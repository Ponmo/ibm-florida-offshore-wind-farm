$(document).ready(function(){
  var counties = {
  "Alachua": "<b>Energy Consumption 2020 (MWh):</b> 3,012,199<br><b>Energy Consumption Change 2025 (MWh):</b> 219,791<br><b>Population 2020:</b> 269,600<br><b>Estimated Population 2025:</b> 281,800",
  "Baker"  : "<b>Energy Consumption 2020 (MWh):</b> 327,034<br><b>Energy Consumption Change 2025 (MWh):</b> 48,644<br><b>Population 2020:</b> 28,500<br><b>Estimated Population 2025:</b> 29,900",
  "Bay"  : "<b>Energy Consumption 2020 (MWh):</b> 1,955,993<br><b>Energy Consumption Change 2025 (MWh):</b> 175,100<br><b>Population 2020:</b> 175,400<br><b>Estimated Population 2025:</b> 185,500",
  "Bradford"  : "<b>Energy Consumption 2020 (MWh):</b> 315,738<br><b>Energy Consumption Change 2025 (MWh):</b> 59,940<br><b>Population 2020:</b> 28,800<br><b>Estimated Population 2025:</b> 29,200",
  "Brevard"  : "<b>Energy Consumption 2020 (MWh):</b> 6,739,328<br><b>Energy Consumption Change 2025 (MWh):</b> 927,711<br><b>Population 2020:</b> 602,700<br><b>Estimated Population 2025:</b> 637,200",
  "Broward"  : "<b>Energy Consumption 2020 (MWh):</b> 21,863,255<br><b>Energy Consumption Change 2025 (MWh):</b> 855,555<br><b>Population 2020:</b> 1,942,000<br><b>Estimated Population 2025:</b> 2,039,000",
  "Calhoun"  : "<b>Energy Consumption 2020 (MWh):</b> 157,919<br><b>Energy Consumption Change 2025 (MWh):</b> 7,445<br><b>Population 2020:</b> 14,900<br><b>Estimated Population 2025:</b> 15,400",
  "Charlotte"  : "<b>Energy Consumption 2020 (MWh):</b> 2,115,032<br><b>Energy Consumption Change 2025 (MWh):</b> 127,255<br><b>Population 2020:</b> 184,900<br><b>Estimated Population 2025:</b> 197,400",
  "Citrus"  : "<b>Energy Consumption 2020 (MWh):</b> 1,675,556<br><b>Energy Consumption Change 2025 (MWh):</b> 100,624<br><b>Population 2020:</b> 149,400<br><b>Estimated Population 2025:</b> 156,700",
  "Clay"  : "<b>Energy Consumption 2020 (MWh):</b> 2,454,740<br><b>Energy Consumption Change 2025 (MWh):</b> 319,795<br><b>Population 2020:</b> 218,900<br><b>Estimated Population 2025:</b> 236,700",
  "Collier"  : "<b>Energy Consumption 2020 (MWh):</b> 4,309,354<br><b>Energy Consumption Change 2025 (MWh):</b> 758,590<br><b>Population 2020:</b> 384,900<br><b>Estimated Population 2025:</b> 421,500",
  "Columbia"  : "<b>Energy Consumption 2020 (MWh):</b> 802,595<br><b>Energy Consumption Change 2025 (MWh):</b> 39,192<br><b>Population 2020:</b> 70,500<br><b>Estimated Population 2025:</b> 73,500",
  "DeSoto"  : "<b>Energy Consumption 2020 (MWh):</b> 425,458<br><b>Energy Consumption Change 2025 (MWh):</b> 21,675<br><b>Population 2020:</b> 36,300<br><b>Estimated Population 2025:</b> 37,300",
  "Dixie"  : "<b>Energy Consumption 2020 (MWh):</b> 188,383<br><b>Energy Consumption Change 2025 (MWh):</b> 32,149<br><b>Population 2020:</b> 16,700<br><b>Estimated Population 2025:</b> 16,900",
  "Duval"  : "<b>Energy Consumption 2020 (MWh):</b> 10,723,002<br><b>Energy Consumption Change 2025 (MWh):</b> 1,072,126<br><b>Population 2020:</b> 986,100<br><b>Estimated Population 2025:</b> 1,051,700",
  "Escambia"  : "<b>Energy Consumption 2020 (MWh):</b> 3,563,858<br><b>Energy Consumption Change 2025 (MWh):</b> 200,927<br><b>Population 2020:</b> 324,300<br><b>Estimated Population 2025:</b> 336,300",
  "Flagler"  : "<b>Energy Consumption 2020 (MWh):</b> 1,288,444<br><b>Energy Consumption Change 2025 (MWh):</b> 313,379<br><b>Population 2020:</b> 113,300<br><b>Estimated Population 2025:</b> 126,500",
  "Franklin"  : "<b>Energy Consumption 2020 (MWh):</b> 135,751<br><b>Energy Consumption Change 2025 (MWh):</b> 43,683<br><b>Population 2020:</b> 12,200<br><b>Estimated Population 2025:</b> 12,500",
  "Gadsden"  : "<b>Energy Consumption 2020 (MWh):</b> 511,208<br><b>Energy Consumption Change 2025 (MWh):</b> 2,830<br><b>Population 2020:</b> 46,400<br><b>Estimated Population 2025:</b> 46,900",
  "Gilchrist"  : "<b>Energy Consumption 2020 (MWh):</b> 208,044<br><b>Energy Consumption Change 2025 (MWh):</b> 16,622<br><b>Population 2020:</b> 18,000<br><b>Estimated Population 2025:</b> 18,900",
  "Glades"  : "<b>Energy Consumption 2020 (MWh):</b> 154,628<br><b>Energy Consumption Change 2025 (MWh):</b> 28,327<br><b>Population 2020:</b> 13,200<br><b>Estimated Population 2025:</b> 13,500",
  "Gulf"  : "<b>Energy Consumption 2020 (MWh):</b> 152,702<br><b>Energy Consumption Change 2025 (MWh):</b> 62,099<br><b>Population 2020:</b> 14,900<br><b>Estimated Population 2025:</b> 15,200",
  "Hamilton"  : "<b>Energy Consumption 2020 (MWh):</b> 161,536<br><b>Energy Consumption Change 2025 (MWh):</b> 9,766<br><b>Population 2020:</b> 14,600<br><b>Estimated Population 2025:</b> 14,700",
  "Hardee"  : "<b>Energy Consumption 2020 (MWh):</b> 301,586<br><b>Energy Consumption Change 2025 (MWh):</b> 62,290<br><b>Population 2020:</b> 27,400<br><b>Estimated Population 2025:</b> 27,300",
  "Hendry"  : "<b>Energy Consumption 2020 (MWh):</b> 470,477<br><b>Energy Consumption Change 2025 (MWh):</b> 6,674<br><b>Population 2020:</b> 40,500<br><b>Estimated Population 2025:</b> 42,000",
  "Hernando"  : "<b>Energy Consumption 2020 (MWh):</b> 2,171,124<br><b>Energy Consumption Change 2025 (MWh):</b> 227,401<br><b>Population 2020:</b> 191,400<br><b>Estimated Population 2025:</b> 206,100",
  "Highlands"  : "<b>Energy Consumption 2020 (MWh):</b> 1,189,248<br><b>Energy Consumption Change 2025 (MWh):</b> 243,155<br><b>Population 2020:</b> 104,200<br><b>Estimated Population 2025:</b> 107,700",
  "Hillsborough"  : "<b>Energy Consumption 2020 (MWh):</b> 16,480,118<br><b>Energy Consumption Change 2025 (MWh):</b> 677,156<br><b>Population 2020:</b> 1,475,400<br><b>Estimated Population 2025:</b> 1,614,100",
  "Holmes"  : "<b>Energy Consumption 2020 (MWh):</b> 219,631<br><b>Energy Consumption Change 2025 (MWh):</b> 14,041<br><b>Population 2020:</b> 20,100<br><b>Estimated Population 2025:</b> 20,100",
  "Indian River"  : "<b>Energy Consumption 2020 (MWh):</b> 1,790,494<br><b>Energy Consumption Change 2025 (MWh):</b> 144,922<br><b>Population 2020:</b> 157,700<br><b>Estimated Population 2025:</b> 169,800",
  "Jackson"  : "<b>Energy Consumption 2020 (MWh):</b> 519,650<br><b>Energy Consumption Change 2025 (MWh):</b> -6,160<br><b>Population 2020:</b> 47,100<br><b>Estimated Population 2025:</b> 47,600",
  "Jefferson"  : "<b>Energy Consumption 2020 (MWh):</b> 159,498<br><b>Energy Consumption Change 2025 (MWh):</b> 15,802<br><b>Population 2020:</b> 14,800<br><b>Estimated Population 2025:</b> 15,100",
  "Lafayette"  : "<b>Energy Consumption 2020 (MWh):</b> 94,293<br><b>Energy Consumption Change 2025 (MWh):</b> 16,203<br><b>Population 2020:</b> 8,700<br><b>Estimated Population 2025:</b> 9,100",
  "Lake"  : "<b>Energy Consumption 2020 (MWh):</b> 4,110,244<br><b>Energy Consumption Change 2025 (MWh):</b> 477,730<br><b>Population 2020:</b> 366,600<br><b>Estimated Population 2025:</b> 410,100",
  "Lee"  : "<b>Energy Consumption 2020 (MWh):</b> 8,627,362<br><b>Energy Consumption Change 2025 (MWh):</b> 896,166<br><b>Population 2020:</b> 752,800<br><b>Estimated Population 2025:</b> 837,000",
  "Leon"  : "<b>Energy Consumption 2020 (MWh):</b> 3,286,937<br><b>Energy Consumption Change 2025 (MWh):</b> 249,719<br><b>Population 2020:</b> 300,000<br><b>Estimated Population 2025:</b> 315,200",
  "Levy"  : "<b>Energy Consumption 2020 (MWh):</b> 464,667<br><b>Energy Consumption Change 2025 (MWh):</b> 22,636<br><b>Population 2020:</b> 41,600<br><b>Estimated Population 2025:</b> 42,600",
  "Liberty"  : "<b>Energy Consumption 2020 (MWh):</b> 93,531<br><b>Energy Consumption Change 2025 (MWh):</b> 16,965<br><b>Population 2020:</b> 8,800<br><b>Estimated Population 2025:</b> 9,200",
  "Madison"  : "<b>Energy Consumption 2020 (MWh):</b> 207,047<br><b>Energy Consumption Change 2025 (MWh):</b> 22,022<br><b>Population 2020:</b> 19,600<br><b>Estimated Population 2025:</b> 19,800",
  "Manatee"  : "<b>Energy Consumption 2020 (MWh):</b> 4,514,811<br><b>Energy Consumption Change 2025 (MWh):</b> 641,950<br><b>Population 2020:</b> 396,100<br><b>Estimated Population 2025:</b> 434,300",
  "Marion"  : "<b>Energy Consumption 2020 (MWh):</b> 4,093,014<br><b>Energy Consumption Change 2025 (MWh):</b> 529,095<br><b>Population 2020:</b> 365,800<br><b>Estimated Population 2025:</b> 392,000",
  "Martin"  : "<b>Energy Consumption 2020 (MWh):</b> 1,802,552<br><b>Energy Consumption Change 2025 (MWh):</b> 134,070<br><b>Population 2020:</b> 160,700<br><b>Estimated Population 2025:</b> 169,000",
  "Miami Dade"  : "<b>Energy Consumption 2020 (MWh):</b> 30,418,795<br><b>Energy Consumption Change 2025 (MWh):</b> 1<br><b>Population 2020:</b> 2,851,700<br><b>Estimated Population 2025:</b> 3,026,900",
  "Monroe"  : "<b>Energy Consumption 2020 (MWh):</b> 831,055<br><b>Energy Consumption Change 2025 (MWh):</b> 220,839<br><b>Population 2020:</b> 76,300<br><b>Estimated Population 2025:</b> 76,600",
  "Nassau"  : "<b>Energy Consumption 2020 (MWh):</b> 992,243<br><b>Energy Consumption Change 2025 (MWh):</b> 118,204<br><b>Population 2020:</b> 87,000<br><b>Estimated Population 2025:</b> 95,900",
  "Okaloosa"  : "<b>Energy Consumption 2020 (MWh):</b> 2,359,418<br><b>Energy Consumption Change 2025 (MWh):</b> 144,727<br><b>Population 2020:</b> 204,000<br><b>Estimated Population 2025:</b> 214,200",
  "Okeechobee"  : "<b>Energy Consumption 2020 (MWh):</b> 472,112<br><b>Energy Consumption Change 2025 (MWh):</b> 31,027<br><b>Population 2020:</b> 42,100<br><b>Estimated Population 2025:</b> 43,600",
  "Orange"  : "<b>Energy Consumption 2020 (MWh):</b> 15,601,055<br><b>Energy Consumption Change 2025 (MWh):</b> 1,472,914<br><b>Population 2020:</b> 1,419,700<br><b>Estimated Population 2025:</b> 1,575,300",
  "Osceola"  : "<b>Energy Consumption 2020 (MWh):</b> 4,206,899<br><b>Energy Consumption Change 2025 (MWh):</b> 456,302<br><b>Population 2020:</b> 385,200<br><b>Estimated Population 2025:</b> 453,200",
  "Palm Beach"  : "<b>Energy Consumption 2020 (MWh):</b> 16,757,801<br><b>Energy Consumption Change 2025 (MWh):</b> 937,787<br><b>Population 2020:</b> 1,466,000<br><b>Estimated Population 2025:</b> 1,548,200",
  "Pasco"  : "<b>Energy Consumption 2020 (MWh):</b> 6,201,977<br><b>Energy Consumption Change 2025 (MWh):</b> 428,397<br><b>Population 2020:</b> 537,200<br><b>Estimated Population 2025:</b> 586,100",
  "Pinellas"  : "<b>Energy Consumption 2020 (MWh):</b> 10,916,032<br><b>Energy Consumption Change 2025 (MWh):</b> 391,291<br><b>Population 2020:</b> 985,500<br><b>Estimated Population 2025:</b> 1,013,500",
  "Polk"  : "<b>Energy Consumption 2020 (MWh):</b> 8,114,586<br><b>Energy Consumption Change 2025 (MWh):</b> 1,319,058<br><b>Population 2020:</b> 704,300<br><b>Estimated Population 2025:</b> 766,900",
  "Putnam"  : "<b>Energy Consumption 2020 (MWh):</b> 834,335<br><b>Energy Consumption Change 2025 (MWh):</b> 13,648<br><b>Population 2020:</b> 73,400<br><b>Estimated Population 2025:</b> 73,400",
  "St Johns"  : "<b>Energy Consumption 2020 (MWh):</b> 2,963,261<br><b>Energy Consumption Change 2025 (MWh):</b> 362,762<br><b>Population 2020:</b> 264,000<br><b>Estimated Population 2025:</b> 309,900",
  "St Lucie"  : "<b>Energy Consumption 2020 (MWh):</b> 3,675,605<br><b>Energy Consumption Change 2025 (MWh):</b> 142,096<br><b>Population 2020:</b> 315,100<br><b>Estimated Population 2025:</b> 343,000",
  "Santa Rosa"  : "<b>Energy Consumption 2020 (MWh):</b> 2,063,564<br><b>Energy Consumption Change 2025 (MWh):</b> 118,339<br><b>Population 2020:</b> 183,000<br><b>Estimated Population 2025:</b> 199,300",
  "Sarasota"  : "<b>Energy Consumption 2020 (MWh):</b> 4,856,165<br><b>Energy Consumption Change 2025 (MWh):</b> 626,550<br><b>Population 2020:</b> 433,500<br><b>Estimated Population 2025:</b> 464,100",
  "Seminole"  : "<b>Energy Consumption 2020 (MWh):</b> 5,282,553<br><b>Energy Consumption Change 2025 (MWh):</b> 604,648<br><b>Population 2020:</b> 478,800<br><b>Estimated Population 2025:</b> 510,200",
  "Sumter"  : "<b>Energy Consumption 2020 (MWh):</b> 1,482,571<br><b>Energy Consumption Change 2025 (MWh):</b> 248,912<br><b>Population 2020:</b> 132,700<br><b>Estimated Population 2025:</b> 152,000",
  "Suwannee"  : "<b>Energy Consumption 2020 (MWh):</b> 497,292<br><b>Energy Consumption Change 2025 (MWh):</b> 47,276<br><b>Population 2020:</b> 45,900<br><b>Estimated Population 2025:</b> 48,300",
  "Taylor"  : "<b>Energy Consumption 2020 (MWh):</b> 241,486<br><b>Energy Consumption Change 2025 (MWh):</b> 27,252<br><b>Population 2020:</b> 22,500<br><b>Estimated Population 2025:</b> 23,100",
  "Union"  : "<b>Energy Consumption 2020 (MWh):</b> 170,593<br><b>Energy Consumption Change 2025 (MWh):</b> -905<br><b>Population 2020:</b> 15,500<br><b>Estimated Population 2025:</b> 15,700",
  "Volusia"  : "<b>Energy Consumption 2020 (MWh):</b> 6,194,554<br><b>Energy Consumption Change 2025 (MWh):</b> 435,820<br><b>Population 2020:</b> 545,300<br><b>Estimated Population 2025:</b> 572,300",
  "Wakulla"  : "<b>Energy Consumption 2020 (MWh):</b> 377,741<br><b>Energy Consumption Change 2025 (MWh):</b> 46,491<br><b>Population 2020:</b> 33,764<br><b>Estimated Population 2025:</b> 35,400",
  "Walton"  : "<b>Energy Consumption 2020 (MWh):</b> 829,297<br><b>Energy Consumption Change 2025 (MWh):</b> 290,478<br><b>Population 2020:</b> 72,100<br><b>Estimated Population 2025:</b> 81,500",
  "Washington"  : "<b>Energy Consumption 2020 (MWh):</b> 285,195<br><b>Energy Consumption Change 2025 (MWh):</b> 53,085<br><b>Population 2020:</b> 25,200<br><b>Estimated Population 2025:</b> 25,900",
  };
  $("path").each(function() {
    const name = $(this).attr('id').replaceAll('-', ' ');
    const data = counties[name]
    const indexOne = data.indexOf("2025 (MWh):</b> ");
    const indexTwo = data.indexOf("<br><b>Population");
    const power = Math.abs(parseFloat(data.substring(indexOne + 16, indexTwo).replaceAll(",", "")));
    let color = (((power - 0) * (255 - 0)) / (1500000 - 0)) + 0
    $(this).removeAttr("fill");
    if(color < 127) {
      color *= 2;
      $(this).attr("fill", "rgb(255, 160," + String(color) + ")");
    }
    else {
      color = 255 - color * 2;
      $(this).attr("fill", "rgb(" + String(color) + ", 160, 255)");
    }
  });
  var velocityMin = 0;
  var velocityMed = 0;
  var velocityMax = 0;
  var focusedSquare = "";
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
  $("td").click(function() {
    if ($(this).children().length == 0) {
      focusedSquare = "";
    }
  });
  $("#heading-bar").click(function() {
    focusedSquare = "";
  });
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
    $('#wind-grid .square-button.' + focusedSquare).focus();
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
    $('#basic-grid .square-button.' + focusedSquare).focus();
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
    $('#basic-grid .square-button.' + focusedSquare).focus();
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
    $("#basic-grid").show();
    $('#basic-grid .square-button.' + focusedSquare).focus();
  });
  $("#remove-county").click(function() {
    $("#info-box").fadeOut(200);
  });
  $("path").click(function() {
    const name = $(this).attr('id').replaceAll('-', ' ');
    $("#info-box").fadeIn(200);
    $("#county-info").html("<b style='font-size: 15px; color: #4a0000;'>" + name + " County</b><br>" + counties[name]);
  });
  $(".square-button").click(function() {
    focusedSquare = $(this).attr('class').split(' ')[1];
    $("#displayed-square").text("— " + $(this).attr('class').split(' ')[1]);
    const str = $(this).attr('data-content');
    const indexOne = [...str.matchAll(new RegExp('</b>', 'gi'))].map(a => a.index);
    const indexTwo = [...str.matchAll(new RegExp('<br>', 'gi'))].map(a => a.index);
    velocityMin = str.substring(indexOne[2] + 4, indexTwo[2]);
    velocityMed = str.substring(indexOne[1] + 4, indexTwo[1]);
    velocityMax = str.substring(indexOne[0] + 4, indexTwo[0]);
    evaluateData();
    $("#power-output").fadeIn(200);
    $("#per-turbine-info").fadeIn(200);
    $("#annual-yield").fadeIn(200);
    $("#annual-info").fadeIn(200);
    $("#conversion-image").fadeIn(200);
    $("#number-turbines").fadeIn(200);
    $("#capacity-factor").fadeIn(200);
    $("#number-hours").fadeIn(200);
    $("#number-turbines-label").fadeIn(200);
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
      powerCoefficient = 0.45;
    }
    var capacityFactor = parseFloat(document.getElementById('capacity-factor-selection').value);
    if(isNaN(capacityFactor)) {
      capacityFactor = 0.35;
    }
    var time = parseFloat(document.getElementById('number-hours-selection').value);
    if(isNaN(time)) {
      time = 6400;
    }
    var number = parseFloat(document.getElementById('number-turbines-selection').value);
    if(isNaN(number)) {
      number = 1;
    }
    const power = Math.round(100 * (Math.PI / 2 * radius * radius * velocity * velocity * velocity * airDensity * powerCoefficient * 0.001)) / 100;
    $("#power-output").text(power.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " kW");
    const powerTime = Math.round(100 * (power * capacityFactor * time * number * 0.001)) / 100;
    $("#annual-yield").text(powerTime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " MWh");
  }
});
