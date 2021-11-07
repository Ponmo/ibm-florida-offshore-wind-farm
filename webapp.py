from flask import Flask, redirect, Markup, url_for, session, request, jsonify
from flask import render_template

import pprint
import os
import json
import sys
from datetime import datetime, date, timedelta
from pytz import timezone
import pytz

app = Flask(__name__)

@app.route('/') 
def render_main():
  grid = []
  with open('windturbine.json') as d:
        data = json.load(d)
      
  #for row in grid:
  #  for square in row:
      
      
  return render_template('main.html')

if __name__ == "__main__":
    app.run()
