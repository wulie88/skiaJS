const document = require('./jsx-position')
const renderer = require('./renderer')

const skia = require('../generated/interface');
const glfw = require('glfw-n-api');

Object.assign(global, glfw);
Object.assign(global, skia);

renderer(document)