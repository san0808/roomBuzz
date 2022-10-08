from itertools import count
from pprint import pprint
from time import time
from dotenv import dotenv_values
from supabase import create_client, Client
import csv


config = dotenv_values(".env")

SUPABASE_URL = config['SUPABASE_URL']
SUPABASE_KEY = config['SUPABASE_KEY']


supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

supabase.table("rb_timetable").delete().gt("id", 0).execute()

timetables = supabase.table("rb_timetable").select(
    "*", count="exact").execute()
print(timetables)

with open("data/csv/timetables.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        pprint(row)
        supabase.table("rb_timetable").insert(row).execute()

    print("Insert operation successful")

    timetables = supabase.table("rb_timetable").select(
        "*", count="exact").execute()
    print(timetables)
