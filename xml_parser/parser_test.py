#!/usr/bin/python3
from datetime import datetime
from lxml import etree
import csv
from collections import defaultdict

def print_debug(debug, text):
    """ little helper to print debug messages """
    if debug:
        print('{0}: {1}'.format(datetime.now(), text))

def csv_group(debug, csv_list, group_by):
    """ stack csv list """
    print_debug(debug, 'csv_group()')

    csv_dic = defaultdict(dict)
    for rowdict in csv_list:
        if None in rowdict:
            del rowdict[None]
        # ele_0 = rowdict.pop(group_by[0])
        # ele_1 = rowdict.pop(group_by[1])
        ele_0 = rowdict[group_by[0]]
        ele_1 = rowdict[group_by[1]]
        csv_dic[ele_0][ele_1] = rowdict
    return csv_dic

if __name__ == '__main__':

    DEBUG = True

    xml_template = 'Template EPG BD.xml'
    csv_file = 'DEPLOY_BD_EPG.csv'

    group_by = ['TENANT', 'BD_NAME']

    mapping_dic  = {
        'TENANT': 'fvTenant',
        'BD_NAME': 'fvBD'
    }

    csv_list = csv.DictReader(open(csv_file, encoding='utf-8-sig'), delimiter=';')
    csv_dic = csv_group(DEBUG, csv_list, group_by)

    from pprint import pprint
    pprint(dict(csv_dic))


    #with open(filename) as fobj:
    #    xml = fobj.read()

    #root = etree.fromstring(xml)
    # root = etree.parse(filename)
    #print(root.tag)
    #for sub_l1 in root.getchildren():
    #    print(' ', sub_l1.tag)
    #    print(sub_l1.attrib)
    #    for sub_l2 in sub_l1.getchildren():
    #        print('  ', sub_l2.tag)
    #        print(' ', sub_l2.attrib)
    #        for sub_l3 in sub_l2.getchildren():
    #            print('   ', sub_l3.tag)
    #            for sub_l4 in sub_l3.getchildren():
    #                print('    ', sub_l4.tag)
