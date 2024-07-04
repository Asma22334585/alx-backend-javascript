#!/usr/bin/env python3
'''Variable Annotations'''
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''multiplies a float by multiplier'''
    def mult_func(x: float) -> float:
        return x*multiplier
    return mult_func
