# TSP Py
A python script that will sort coordinates by using the TSP Solver module to make the shortest route through a list of coordinates. I did not write this script but I wanted to show it in this repository since it works better than my VBS macro. I did modified it slightly so it does not need Tkinter. 

Proof of concent is shown in the image below. The first image is a path of 400 coordinates generated from RDM Tools. The second image is a path of the same coordinates using the AutoSortCoords macro. The last image is the path using the same coordinates and the pythong script.

![alt text](https://raw.githubusercontent.com/Kneckter/AutoSortCoords/python/Proof.png)

# Get Started With Python
To get started using the python script, you can download the two python files or `git clone https://github.com/Kneckter/AutoSortCoords/ -b python` for this repository branch. The script requires python's `matplotlib` package for calculating the route. You can install it with `pip install matplotlib`. Note that I have only tested this with Python 2.7

Once you have the files on your system, create a text file of your coordinates named `infile.txt` that has one coordinate pair per line like this: 
```
15.0001,-25.0001
15.0002,-25.0002
15.0003,-25.0003
```

Then run the command `python tsp.py infile.txt > outfile.txt` to sort the coordinates and output them to outfile.txt. The outfile will be formatted as one coordinate pair per line like the infile.

## Notes
This has been tested on Ubuntu 18.04 with Python 2.7. 

Thanks to https://github.com/dmishin/tsp-solver for the tsp-solver module.
Thanks to http://www.gpsvisualizer.com/, you can upload your coordinates and get images like the ones in this post.
