const yoga = require('yoga-layout')

function RectContainsPoint(rect, point) {
  return point.x > rect.left && point.x < rect.left + rect.width
    && point.y > rect.top && point.y < rect.top + rect.height
}

function randomColor() {
  return skColorSetArgb(0xFF, Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255))
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgba(r, b, g, a) {
  return {r, b, g, a}
}

function str2color(val) {
  const {r, b, g, a} = hexToRgb(val)
  return skColorSetArgb(a*255.0, r, g, b)
}

function hexToRgb(val) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(val);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 1
  } : eval(val);
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function string2enum (strings, emuns, val) {
  var index = strings.indexOf(val)
  if (index != -1) {
    return emuns[index]
  }

  return emuns[0]
}
function transformFlexDirection(val) {
  return string2enum(
    ['column', 'column-reverse', 'row', 'row-reverse'], 
    [yoga.FLEX_DIRECTION_COLUMN, yoga.FLEX_DIRECTION_COLUMN_REVERSE, yoga.FLEX_DIRECTION_ROW, yoga.FLEX_DIRECTION_ROW_REVERSE], 
    val
  )
}
function transformFlexWrap(val) {
  return string2enum(['nowrap', 'wrap', 'wrap-reverse'], [yoga.WRAP_NO_WRAP, yoga.WRAP_WRAP, yoga.WRAP_WRAP_REVERSE], val)
}
function transformJustifyContent(val) {
  return string2enum(
    ['flex-start', 'flex-end', 'center', 'space-between'], 
    [yoga.JUSTIFY_FLEX_START, yoga.JUSTIFY_FLEX_END, yoga.JUSTIFY_CENTER, yoga.JUSTIFY_SPACE_BETWEEN], 
    val
  )
}
function transformAlignItems(val) {
  return string2enum(
    ['stretch','flex-start', 'flex-end', 'center'], 
    [yoga.ALIGN_STRETCH, yoga.ALIGN_FLEX_START, yoga.ALIGN_FLEX_END, yoga.ALIGN_CENTER], 
    val
  )
}

module.exports = {
  RectContainsPoint,
  str2color,
  randomColor,
  transformJustifyContent,
  transformAlignItems
}