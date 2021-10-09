from flask import Flask, redirect, Markup, url_for, session, request, jsonify
from flask import render_template
from bson.objectid import ObjectId

import pprint
import os
import sys
import pymongo
import gspread
from datetime import datetime, date, timedelta
from pytz import timezone
import pytz

app = Flask(__name__)

@app.route('/') 
def render_maps():
  return render_template('main.html')

if __name__ == "__main__":
    app.run()
