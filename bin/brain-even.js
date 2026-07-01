#!/usr/bin/env node
import play from '../src/index.js'
import { getGameResults as game, MESSAGE } from '../games/even.js'

play(game, MESSAGE)
