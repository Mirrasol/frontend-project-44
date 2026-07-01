#!/usr/bin/env node
import play from '../src/index.js'
import { makeProgression as game, MESSAGE } from '../games/progression.js'

play(game, MESSAGE)
