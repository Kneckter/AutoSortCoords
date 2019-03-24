# TSP Py
A python script that will sort coordinates by using the TSP Solver module to make the shortest route through a list or coordinates. I did not write this script but I wanted to show it in this repository since it works better than my VBS macro. I did modified it slightly so it does not need Tkinter. 

Proof of concent is shown in the image below. The first image is a path of 400 coordinates generated from RDM Tools. The second image is a path of the same coordinates using the AutoSortCoords macro. The last image is the path using the same coordinates and the pythong script.

![alt text](https://raw.githubusercontent.com/Kneckter/AutoSortCoords/python/Proof.png)

# Get Started With Python
To get started using the python script, you can download the two files or `git clone` this repository branch. The script requires python's matplotlib for calculating the route.

Once you have the files on your system, create a text file of your coordinates named `infile.txt`. Then run the command `python tsp.py infile.txt > outfile.txt` to sort the coordinates and output them to outfile.txt. 

## Notes
This has been tested on Ubuntu 18.04 with Python2.7. 

Thanks to http://www.gpsvisualizer.com/, you can upload your coordinates and get images like the ones in this post.
