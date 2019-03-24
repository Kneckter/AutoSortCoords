#!/usr/bin/python
import random, numpy, math, copy
import matplotlib
matplotlib.use('Agg') 
import matplotlib.pyplot as plt
import sys
from tsp_solver import solve_tsp

assert(len(sys.argv) >= 2)
infile = sys.argv[1]
points = []
with (open(infile,'r')) as f:
        for line in f:
                line = line.rstrip('\n')
                (lat,lon) = [numpy.float64(x) for x in line.split(',')]
                points.append((lat,lon))

tour = [i for i in range(len(points))]

D = numpy.zeros((len(points),len(points)))
for i in range(len(points)):
        for j in range(len(points)):
                D[i][j]=numpy.linalg.norm(numpy.subtract(points[i],points[j]))

tour = solve_tsp( D )

plt.plot([points[tour[i]][0] for i in range(len(points))], [points[tour[i]][1]
for i in range(len(points))], 'xb-');
for i in tour:
        print("%s,%s" % (points[i][0].astype(str), points[i][1].astype(str)))
plt.show()
