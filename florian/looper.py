#!/usr/bin/python
import re

if __name__ == '__main__':

    INPUT = [('\xc0', {(1005, 10415): [('\xc0', 'SUB-PROFILE:sub-profile-lns-dia')]}), ('\xc0', {(1003, 10415): [('\xc0', '\x00\x00\x03\xed\xc0\x00\x00\x0f\x00\x00(\xafBSR\x00\x00\x00\x04"\x80\x00\x00\x1c\x00\x00(\xaf\x00\x00\x048\x80\x00\x00\x10\x00\x00(\xaf\x00\x00\x00\x01\x00\x00\x03\xf8\xc0\x00\x00<\x00\x00(\xaf\x00\x00\x04\x04\xc0\x00\x00\x10\x00\x00(\xaf\x00\x00\x00\x08\x00\x00\x02\x03\xc0\x00\x00\x10\x00\x00(\xaf\x02\xfa\xf0\x80\x00\x00\x02\x04\xc0\x00\x00\x10\x00\x00(\xaf\x00\x98\x96\x80')]}), ('\xc0', {(1005, 10415): [('\xc0', 'CAT-MAP:TEF-cat-map-1')]})]

    for install_rule in INPUT:
        # key = list(install_rule[1].keys())[0]

        ## we test if Rule-Name value starts with ^SUB-PROFILE
        if re.match("^SUB-PROFILE", install_rule[1][list(install_rule[1].keys())[0]][0][1]):
          # sub_profile = install_rule[1][(1005, 10415)][0][1]
          print("found sub-profile")

        ## we test if Rule-Name value starts with ^CAT-MAP
        elif re.match("^CAT-MAP", install_rule[1][list(install_rule[1].keys())[0]][0][1]):
          # cat_map = install_rule[1][key][0][1]
          print("found cat-map")
