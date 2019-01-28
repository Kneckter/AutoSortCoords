# AutoSortCoords
An Excel VBS (Google Sheets JS) macro that will sort coordinates by their distance from the last coordinate to make the shortest route through a list or coordinates.

Proof of concent is shown in the image below. The first image is a path of 305 coordinates put through the TSP website. The second image is a path of the same coordinates if you sorted by distance based on the origin location. The last image is the path after you run the macro on the same coordinates.

![alt text](https://raw.githubusercontent.com/Kneckter/AutoSortCoords/master/Proof.png)

# Get Started With Excel
To get started using the macro in Excel, you can download the XLSM file (macro enabled Excel file) from the release page. If you would like to import the macro yourself, you can create a new spreadsheet and record a dummy macro. Then edit the dummy and paste the contexts of the VBS file in this repository into the VBS editor.

After you have the file setup, paste a copy of your coordinate pairs into column A of the spreadsheet. Then push Ctrl+a to start the macro. Once it is completed, copy the selected output into your program. Note that it takes about 70 seconds to process 1000 coordinate pairs on a 2 GHz dual core processor and that column C will be the same as A&B together.

# Get Started With Google Sheets
**Warning** You will be asked to provide access to your Google Drive if you create a copy of the sheet and try to run the macro. This is because the macro is an Apps Script that will be copied to your account separately from the sheet.

To get started using the macro in Sheets, you can grab a copy of the workbook located at https://docs.google.com/spreadsheets/d/1D0Xczv-F4fBgtZw2uI8tw-2P54wOUDcNSFziIt1dKfg/edit?usp=sharing. 


If you would like to import the macro yourself, you can create a new spreadsheet on your Google drive and record a dummy macro. Then edit the dummy and paste the contexts of the GS file in this repository into the script editor.

After you have the file setup, paste a copy of your coordinate pairs into column A of the spreadsheet. Then push Ctrl+Alt+Shift+0 (because google is lame) to start the macro. Once it is completed, copy the selected output into your program. Note that it takes about 200 seconds to process 1000 coordinate pairs on Google Sheets and that column C will be the same as A&B together.

## Notes
This has been tested on Windows running Excel 2007/2010/365 Business and Mac running Excel 2019. 

It did not work on Windows running Excel 2003 and Mac running Excel 15.35 from 2017.

Thanks to http://www.gpsvisualizer.com/, you can upload your coordinates and get images like the ones in this post.
