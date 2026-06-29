#!/usr/bin/env node
import play from '../src/index.js'
import { makeCalc as game, MESSAGE } from '../games/calc.js'

play(game, MESSAGE)
