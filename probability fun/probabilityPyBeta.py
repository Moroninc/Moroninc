import math
import random

def percentCalculator():
    return random.randint(1,100) #picks a number between 1 & 100


def percentage_Manager(percent, topic=1):
    if topic == 1:
        if percent == 0: # x = 0
            return "impossible"

        
        elif percent >= 1 and percent <= 10: # 1 ≤ x ≤ 10
            return "extraordinarily unlikely"

        
        elif percent >= 11 and percent <= 15: # 11 ≤ x ≤ 15
            return "extremely unlikey"


        elif percent >= 16 and percent <= 25: # 16 ≤ x ≤ 25
            return "very unlikey"


        elif percent >= 26 and percent <= 39:
            return "moderately unlikey"


        elif percent >= 40 and percent <= 49:
            return "mostly unlikely":


        elif percent == 50:
            return "equally likely and unlikey to happen"


        elif percent >= 51 and percent <= 59:
            return "mostly likely"


        elif percent >= 60 and percent <= 74:
            return "moderately likely"


        elif percent >= 75 and percent <= 84:
            return "very likely"


        elif percent >=85 and percent <= 89:
            return "extremely likely"


        elif percent >=90 and percent <= 99:
            return "extraordinarily likely"


        elif percent == 100:
            return "will happen without a doubt"
        
