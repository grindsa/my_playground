#!/usr/bin/python
from pprint import pprint
import json

if __name__ == '__main__':

    INFILE = 'heatmap/shots.txt'

    shot_dic = {}
    fso = open(INFILE, "r")
    cnt = 0
    for line in fso:
        cnt += 1
        line = line.rstrip()

        # splint line in x and y
        (myx, myy) = line.split(';')

        # x = -100, 100
        # y = 0, 105
        # calculate coordicates
        calc_x = round((float(myx) + 100) * 295/100)
        calc_y = round((105 - float(myy)) * 595/105)

        clul = 19
        # round to next 10
        calc_x = round((calc_x/clul)) * clul
        calc_y = round((calc_y/clul)) * clul
        print(calc_x, calc_y)

        line = '{0}; {1}'.format(calc_x, calc_y)
        if line in shot_dic:
            shot_dic[line] += 1
        else:
            shot_dic[line] = 1

    shot_list = []
    maxl = 0
    for shot in shot_dic:
        (myx, myy) = shot.split(';')
        if shot_dic[shot] > maxl:
            maxl = shot_dic[shot]
            print(maxl)

        shot_list.append({'x': myx, 'y': myy, 'value': shot_dic[shot]})

    fso = open('heatmap/shots.json', "w")
    fso.write('shots =\'' + json.dumps(shot_list) +'\'')
    fso.close
