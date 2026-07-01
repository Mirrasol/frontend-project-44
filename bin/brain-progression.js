#!/usr/bin/env node
import play from '../src/index.js'
import { getGameResults as game, MESSAGE } from '../games/progression.js'

play(game, MESSAGE)
