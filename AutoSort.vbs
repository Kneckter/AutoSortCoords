Sub AutoSort()
' Author: Kasmar
'
' AutoSort Macro
' Used to automatically sort a list of coordinates based on their distance from the last coordinate.
'

Dim cnt As Long
Dim i As Long
Dim old As String
Dim replace As String

'Split the data into two columns
ActiveWorkbook.ActiveSheet.Columns("A:A").TextToColumns _
    Destination:=Range("A1"), _
    DataType:=xlDelimited, _
    TextQualifier:=xlDoubleQuote, _
    Tab:=True, _
    Comma:=True, _
    FieldInfo:=Array(Array(1, 1), Array(2, 1)), _
    TrailingMinusNumbers:=True

'Count the rows; set the variables and formula
cnt = Application.WorksheetFunction.CountA(Range("A:A"))

i = 1
Cells(1, 3).Value = 0
Cells(2, 3).Formula = _
    "=6371*ACOS(COS(RADIANS(90-$A$1))*COS(RADIANS(90-A2))+SIN(RADIANS(90-$A$1))*SIN(RADIANS(90-A2))*COS(RADIANS($B$1-B2)))/1.609"

'Auto fill the formula
Range("C2").Select
Selection.AutoFill Destination:=Range("C2:C" & cnt)

'Loop a sort by distance until all rows are in order from the last coordinate
'Also sets the distance to 0 so the sort order isnt lost
Do Until i > cnt
    old = "$" & i
    replace = "$" & i + 1
    
    ActiveWorkbook.ActiveSheet.Sort.SortFields.Clear
    ActiveWorkbook.ActiveSheet.Sort.SortFields.Add _
        Key:=Range("C2"), _
        SortOn:=xlSortOnValues, _
        Order:=xlAscending, _
        DataOption:=xlSortNormal
    
    With ActiveWorkbook.ActiveSheet.Sort
        .SetRange Range("A1:C" & cnt)
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .SortMethod = xlPinYin
        .Apply
    End With
    
    Cells.replace _
        What:=old, _
        Replacement:=replace, _
        LookAt:=xlPart, _
        SearchOrder:=xlByRows
    
    Cells(i + 1, 3).Value = 0
    i = i + 1
Loop

'Delete the distance column since it isn't needed anymore
Range("C:C").Select
Selection.ClearContents

'Make a concatinated cell for each coordinate pair again
Cells(1, 3).Formula = "=A1&"",""&B1"
Range("C1").Select
Selection.AutoFill Destination:=Range("C1:C" & cnt)
Range("C1:C" & cnt).Select

End Sub
