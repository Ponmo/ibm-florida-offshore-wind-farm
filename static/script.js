$(document).ready(function(){
  $("#marine-conservation-map").hide();
  $("#bathymetry-map").hide();
  $('[data-toggle="tooltip"]').tooltip();
  $("#basic-button").click(function() {
    $("#basic-map").show();
    $("#bathymetry-map").hide();
    $("#marine-conservation-map").hide();
    $("#basic-button").replaceWith("<li class='active pointer' id='basic-button'><a>Basic Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Basic Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
    $("#bathymetry-button").replaceWith("<li class='pointer' id='bathymetry-button'><a>Bathymetry Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Depth Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
    $("#marine-conservation-button").replaceWith("<li class='pointer' id='marine-conservation-button'><a>Marine Conservation Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Marine Conservation Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
  });
  $("#bathymetry-button").click(function() {
    $("#basic-map").hide();
    $("#bathymetry-map").show();
    $("#marine-conservation-map").hide();
    $("#basic-button").replaceWith("<li class='pointer' id='basic-button'><a>Basic Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Basic Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
    $("#bathymetry-button").replaceWith("<li class='active pointer' id='bathymetry-button'><a>Bathymetry Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Depth Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
    $("#marine-conservation-button").replaceWith("<li class='pointer' id='marine-conservation-button'><a>Marine Conservation Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Marine Conservation Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
  });
  $("#marine-conservation-button").click(function() {
    $("#basic-map").hide();
    $("#bathymetry-map").hide();
    $("#marine-conservation-map").show();
    $("#basic-button").replaceWith("<li class='pointer' id='basic-button'><a>Basic Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Basic Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
    $("#bathymetry-button").replaceWith("<li class='pointer' id='bathymetry-button'><a>Bathymetry Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Depth Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
    $("#marine-conservation-button").replaceWith("<li class='active pointer' id='marine-conservation-button'><a>Marine Conservation Map<button class='info-buttons' data-toggle='tooltip' data-placement='right' title='Marine Conservation Information!'><span class='glyphicon glyphicon-info-sign'></span></button></a></li>")
  });
});
