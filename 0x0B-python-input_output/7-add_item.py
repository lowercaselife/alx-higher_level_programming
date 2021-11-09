#!/usr/bin/python3


from sys import argv
save_to_json_file = __import__('7-save_to_json_file').save_to_json_file
load_from_json_file = __import__('8-load_from_json_file').load_from_json_file


filename = "add_item.json"
try:
    the_list = load_from_json_file(filename) + argv[1:]
    save_to_json_file(the_list, filename)
except:
    save_to_json_file(argv[1:], filename)
