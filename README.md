# AutoSortCoords
An Excel VBS macro that will sort coordinates by their distance from the last coordinate to make the shortest route through a list or coordinates.

Proof of concent is shown in the image below. The first image is a path of 305 coordinates put through the TSP website. The second image is a path of the same coordinates if you sorted by distance based on the origin location. The last image is the path after you run the macro on the same coordinates.

![alt text](https://raw.githubusercontent.com/Kneckter/AutoSortCoords/master/Proof.png)

# Get Started
To get started using the macro, you can download the XLSM file (macro enabled Excel file) from the release page. If you would like to import the macro yourself, you can create a new spreadsheet and record a dummy macro. Then edit the dummy and paste the contexts of the VBS file in this repository into the VBS editor.

After you have the Excel file, copy your list of coordinate pairs into column A of the spreadsheet. Then push Ctrl+a to start the macro. Once it is completed, copy the selected output into your program. Note that it takes about 70 seconds to process 1000 coordinate pairs on a 2 GHz dual core processor.

## Notes
This has been tested on Windows running Excel 2007/2010/365 Business and Mac running Excel 2019. It did not work on Windows running Excel 2003 and Mac running Excel 15.35 from 2017.
