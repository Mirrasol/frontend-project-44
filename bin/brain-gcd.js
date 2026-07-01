#!/usr/bin/env node
import play from '../src/index.js'
import { getGameResults as game, MESSAGE } from '../games/gcd.js'

play(game, MESSAGE)
