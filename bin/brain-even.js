#!/usr/bin/env node
import play from '../src/index.js'
import { isEven as game, MESSAGE } from '../games/even.js'

play(game, MESSAGE)
