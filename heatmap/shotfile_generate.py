#!/usr/bin/python
from pprint import pprint
import json
import rink_dimensions as rd

def _shoot_coordinates_convert(logger, coordinate_x, coordinate_y):
    """ convert  arbitrary coordinates to actual coordinates in meters sourse: leaffan.net """
    try:
        x2m = 0.3048
        y2m = 0.1524
        meter_x = x2m * int(coordinate_x)
        meter_y = y2m * int(coordinate_y)
    except BaseException as err_:
        logger.critical('error in _shoot_coordinates_convert(): {0}'.format(err_))
        meter_x = 0
        meter_y = 0

    return(round(meter_x, 2), round(meter_y, 2))

if __name__ == '__main__':

    INFILE = 'heatmap/shots.del.json'
    with open(INFILE) as json_file:
        data = json.load(json_file)

        fso = open('heatmap/shots.txt', "w")
        for shot in data['match']['shots']:
            if shot['team_id'] == 3:
                myx = shot['coordinate_x']
                myy = shot['coordinate_y'] * -1
                # print(shot['coordinate_x'], myx, shot['coordinate_y'], myy)             
                fso.write('{0};{1}\n'.format(myx, myy))
 
            else:          
                myy = shot['coordinate_y']
                myx = shot['coordinate_x'] * -1                          
                #print(shot['coordinate_x'], myx, shot['coordinate_y'], myy)             
                #fso.write('{0};{1}\n'.format(myx, myy))

        fso.close
