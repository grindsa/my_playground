#!/usr/bin/python3
from lxml import etree

if __name__ == '__main__':

    filename = 'Template EPG BD.xml'

    with open(filename) as fobj:
       xml = fobj.read()

    root = etree.fromstring(xml)
    # root = etree.parse(filename)
    print(root.tag)
    for sub_l1 in root.getchildren():
        print(' ', sub_l1.tag)
        print(sub_l1.attrib)
        for sub_l2 in sub_l1.getchildren():
            print('  ', sub_l2.tag)
            print(' ', sub_l2.attrib)
            for sub_l3 in sub_l2.getchildren():
                print('   ', sub_l3.tag)
                for sub_l4 in sub_l3.getchildren():
                    print('    ', sub_l4.tag)
