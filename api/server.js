#!/usr/bin/env node
'use strict';

process.env.NODE_ENV = 'production';

// Start Strapi
const strapi = require('strapi');
strapi().start();
