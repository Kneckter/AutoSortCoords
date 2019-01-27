/** @OnlyCurrentDoc */
// Author: Kasmar
//
// AutoSortCoords Macro
// Used to automatically sort a list of coordinates based on their distance from the last coordinate.

function AutoSortCoords() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var cnt= spreadsheet.getLastRow();

  //Split the data into two columns
  spreadsheet.getRange('A:A').splitTextToColumns(SpreadsheetApp.TextToColumnsDelimiter.COMMA);
  
  //Set some cell values and auto fill the formula
  spreadsheet.getRange('C1').setValue('0');
  spreadsheet.getRange('D1').setValue('0');
  spreadsheet.getRange('D2').setFormula("=6371*ACOS(COS(RADIANS(90-$A$1))*COS(RADIANS(90-A2))+SIN(RADIANS(90-$A$1))*SIN(RADIANS(90-A2))*COS(RADIANS($B$1-B2)))/1.609");
  spreadsheet.getRange('D2').autoFill(spreadsheet.getRange('D2:D'+cnt), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);

  //Loop a sort by distance until all rows are in order from the last coordinate
  //Also sets the distance to 0 so the sort order isnt lost
  for (var i = 1; i < cnt; i++) {
    
    //Since JS and Apps Scripts is a bitch, copy the values to an array since we cannot sort formulas correctly
    var values=SpreadsheetApp.getActiveSheet().getRange(1,4,cnt,1).getValues();
	
    //Set those values to another column so they do not have formulas
    for (var ii = 0; ii < cnt; ii++) {
      spreadsheet.getRange('C'+(ii+1)).setValue(values[ii][0]);
    }
    
    //Sort the columns by distances
    spreadsheet.getRange('A:C').sort({column: 3, ascending: true});
    
    //Set the new formula and auto fill it
    spreadsheet.getRange('D'+(i + 2)).setFormula("=6371*ACOS(COS(RADIANS(90-$A$"+(i + 1)+"))*COS(RADIANS(90-A"+(i + 2)+"))+SIN(RADIANS(90-$A$"+(i + 1)+"))*SIN(RADIANS(90-A"+(i + 2)+"))*COS(RADIANS($B$"+(i + 1)+"-B"+(i + 2)+")))/1.609");
    spreadsheet.getRange('D'+(i + 2)).autoFill(spreadsheet.getRange('D'+(i + 2)+':D'+cnt), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
    
    //Set 0 so they do not move in the sort
    spreadsheet.getRange('C'+(i + 1)).setValue('0');
    spreadsheet.getRange('D'+(i + 1)).setValue('0');
  }
  
  //Clear the old info and make a new list for copying
  spreadsheet.getRange('C:C').clearContent();
  spreadsheet.getRange('D:D').clearContent();
  spreadsheet.getRange('C1').setFormula('=A1&","&B1');
  spreadsheet.getRange('C1').autoFill(spreadsheet.getRange('C1:C'+cnt), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  spreadsheet.getRange('C1:C'+cnt).activate();
};
