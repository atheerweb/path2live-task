import { config, RouterLinkStub } from '@vue/test-utils'

import vuetify from './src/plugins/vuetify'
import router from './src/router'

config.global.plugins = [vuetify, router]
global.ResizeObserver = require('resize-observer-polyfill')
