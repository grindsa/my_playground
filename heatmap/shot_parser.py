#!/usr/bin/python
from pprint import pprint
import json

if __name__ == '__main__':

    INFILE = 'heatmap/shots.txt'

    shot_dic = {}
    mapping_dic = {}
    fso = open(INFILE, "r")
    cnt = 0

    # cluster size
    clul = 20

    for line in fso:
        cnt += 1
        line = line.rstrip()

        # splint line in x and y
        (myx, myy) = line.split(';')
        calc_x = float(myx)
        calc_y = float(myy)

        # x = -100, 100
        # y = 0, 105
        # calculate coordicates
        calc_x = round((calc_x + 100) * 295/100)
        calc_y = round((105 - calc_y) * 595/105)

        # round to clul
        calc_x = round((calc_x/clul)) * clul
        calc_y = round((calc_y/clul)) * clul

        mapping = '{0}; {1}'.format(calc_x, calc_y)
        if mapping in shot_dic:
            shot_dic[mapping] += 1
        else:
            shot_dic[mapping] = 1

    shot_list = []
    maxl = 0
    for shot in shot_dic:
        (myx, myy) = shot.split(';')
        if shot_dic[shot] > maxl:
            maxl = shot_dic[shot]

        shot_list.append({'x': myx, 'y': myy, 'value': shot_dic[shot]})

    fso = open('heatmap/shots.json', "w")
    fso.write('shots = \'' + json.dumps(shot_list) +'\'\n')
    fso.write('jmax = ' + str(maxl))
    fso.close
