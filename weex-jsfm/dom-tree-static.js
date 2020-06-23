const yoga = require('yoga-layout')
const { Node } = yoga

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

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

class Event {
  constructor (name, x, y) {
    this.name = name
    this.x = x
    this.y = y
    this.target = null
  }
}

const root = Node.create();
root.setWidth(750);
root.setHeight(1136);
root.setDisplay(yoga.DISPLAY_FLEX)
root.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)

var rid = 1, id = 1
class Element {
  constructor(options, eventProxy) {
    const { children, child, style, text } = options
    this.id = id++
    this.zIndex = 0 // 视图层次
    this.style = style
    this.children = children || []
    this.child = child
    this.text = text || ""
    this.handlers = {}
    this.ref = options.ref
    this.userInteractionEnabled = false
    if ('onClick' in options) {
      this.userInteractionEnabled = true
      this.handlers['onClick'] = options['onClick'].bind(this)
    }
    if (options.event && options.event.indexOf('click') > -1) {
      this.userInteractionEnabled = true
      this.handlers['onClick'] = () => {
        eventProxy.publish('click', this)
      }
    }
    console.log(`constructor ${this.constructor.name}[id${this.id}] ${text}`)
  }

  addChild (child) {
    this.children.push(child)
  }

  get name() {
    return this.constructor.name
  }

  get nodes() {
    return this.children.length + this.child ? 1 : 0
  }

  get bounds() {
    return this.node ? this.node.getComputedLayout() : { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 }
  }

  get backgroundColor() {
    if (!this._backgroundColor) {
      this._backgroundColor = randomColor()
    }
    return this._backgroundColor
  }

  // 绝对位置
  get frame() {
    const frame = this.bounds;
    var parent = this.parent
    if (parent) {
      const pframe = parent.frame
      frame.left += pframe.left
      frame.right -= pframe.right
      frame.top += pframe.top
      frame.bottom -= pframe.bottom
    }

    return frame
  }

  append(parentNode, parent) {
    const { children, child, style } = this
    this.rid = rid++
    this.zIndex = parent.zIndex + 1
    let node = this.node
    if (!node) {
      node = Node.create()
      node.setDisplay(yoga.DISPLAY_FLEX)
      node.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
  
      const index = parentNode.getChildCount()
      parentNode.insertChild(node, index)
      this.node = node
      this.parent = parent

      console.log(`create Node ${this.constructor.name}[rid${this.rid}｜id${this.id}] => ${parent.constructor.name}[rid${parent.rid}｜id${parent.id}]`)
    }

    const styleCache = this.styleCache || {}
    let hasChanged = false
    function updateStyle(key, cb) {
      if ((key in style) && styleCache[key] != style[key]) {
        styleCache[key] = style[key]
        hasChanged = true
        cb(style[key])
      }
    }

    updateStyle('height', (val) => node.setHeight(val))
    updateStyle('width', (val) => node.setWidth(val))
    updateStyle('flex', (val) => node.setFlex(val))
    updateStyle('padding', (val) => node.setPadding(yoga.EDGE_ALL, val))
    updateStyle('paddingTop', (val) => node.setPadding(yoga.EDGE_TOP, val))
    updateStyle('paddingBottom', (val) => node.setPadding(yoga.EDGE_BOTTOM, val))
    updateStyle('paddingLeft', (val) => node.setPadding(yoga.EDGE_LEFT, val))
    updateStyle('paddingRight', (val) => node.setPadding(yoga.EDGE_RIGHT, val))
    updateStyle('margin', (val) => node.setMargin(yoga.EDGE_ALL, val))
    updateStyle('marginTop', (val) => node.setMargin(yoga.EDGE_TOP, val))
    updateStyle('marginBottom', (val) => node.setMargin(yoga.EDGE_BOTTOM, val))
    updateStyle('marginLeft', (val) => node.setMargin(yoga.EDGE_LEFT, val))
    updateStyle('marginRight', (val) => node.setMargin(yoga.EDGE_RIGHT, val))
    updateStyle('flexDirection', (val) => node.setFlexDirection(val == 'row' ? yoga.FLEX_DIRECTION_ROW : yoga.FLEX_DIRECTION_COLUMN))
    updateStyle('backgroundColor', (val) => )

    this.styleCache = styleCache
    if (hasChanged) {
      console.log(`update Node ${this.constructor.name}[rid${this.rid}｜id${this.id}]`, styleCache)
    }

    if (children) {
      children.forEach((element, index) => {
        element.append(node, this)
      });
    }

    if (child) {
      child.append(node, this)
    }
  }

  findEventTarget(event, p) {
    const { children, child } = this
    if (this.userInteractionEnabled && RectContainsPoint(this.frame, p)) {
      if (!event.target || event.target.zIndex < this.zIndex) {
        event.target = this
      }
    }

    if (children) {
      children.forEach((element, index) => {
        element.findEventTarget(event, p)
      });
    }

    if (child) {
      child.findEventTarget(event, p)
    }
  }

  onMouseMove(event) {
    this._backgroundColor = randomColor()
  }

  onClick(event) {
    if (this.handlers['onClick']) {
      this.handlers['onClick'](event)
    }
    const k = ' clicked'
    if (!this.text.includes(k)) {
      this.text += k
    }
    setTimeout(() => {
      this.text = this.text.replace(k, '')
    }, 500)
  }

  draw(canvas) {
    const { children, child } = this
    // Rect
    const frame = this.frame
    const fill = skPaintNew();
    skPaintSetColor(fill, this.backgroundColor);
    const rect = new skRect({
      left: frame.left,
      top: frame.top,
      right: frame.left + frame.width,
      bottom: frame.top + frame.height
    });
    if (this.zIndex <= 2)
      skCanvasDrawRect(canvas, rect, fill);
    else
      skCanvasDrawRoundRect(canvas, rect, 8, 8, fill);

    // Text
    const familyName = "Times New Roman";
    const textStyle = skFontstyleNew(400, 1, enums.UPRIGHT_SK_FONT_STYLE_SLANT);
    const typeface = skTypefaceCreateFromNameWithFontStyle(familyName, textStyle);
    const text = skPaintNew();
    skPaintSetColor(text, skColorSetArgb(0xFF, 0xFF, 0xFF, 0xFF));
    skPaintSetTextsize(text, 20.0);
    skPaintSetTypeface(text, typeface);
    const str = `${this.text}`;
    skCanvasDrawText(canvas, str, str.length, frame.left + 10, frame.top + 50, text);

    // layout
    const text1 = skPaintNew();
    skPaintSetColor(text1, skColorSetArgb(0xFF, 0xEE, 0xEE, 0xEE));
    skPaintSetTextsize(text1, 12.0);
    skPaintSetTypeface(text1, typeface);
    const str1 = `${this.name} ${this.zIndex} ${frame.width}x${frame.height}`;
    skCanvasDrawText(canvas, str1, str1.length, frame.left + frame.width - 140, frame.top + 50, text);

    if (children) {
      children.forEach((element, index) => {
        element.draw(canvas)
      });
    }

    if (child) {
      child.draw(canvas)
    }
  }

  print() {
    return { name: this.constructor.name, text: this.text, rid: this.rid, id: this.id, frame: this.frame, style: this.style }
  }

  dump() {
    return { name: this.constructor.name, text: this.text, rid: this.rid, id: this.id, layout: this.node.getComputedLayout(), frame: this.frame, children: this.children.map(ele => ele.dump()), child: this.child ? this.child.dump() : null, style: this.style }
  }

  inspect() {
    return `${this.constructor.name}[rid${this.rid}｜id${this.id}]${this.text}`
  }
}

class _Block extends Element { }

class _Inline extends Element { }

class Div extends _Block { }

class Section extends _Block { }

class Text extends _Inline { }

class Header extends _Block { }

class Document extends _Block {

  dispatchMouseEventMove(x, y) {
    const p = {x, y}
    const event = new Event('MouseMove', x, y)
    this.findEventTarget(event, p)
    if (event.target) {
      const handlerName = `onMouseMove`
      if (event.target[handlerName]) {
        event.target[handlerName](event)
      }
    }
    this.event = event
  }

  /**
   * 分发鼠标按下事件
   */
  dispatchMouseEventLeftDown() {
    if (this.event && this.event.target) {
      this.event.source = this.event.target
    }
  }

  /**
   * 分发鼠标松开事件
   */
  dispatchMouseEventLeftUp() {
    if (this.event.target && this.event.source == this.event.target) {
      this.event.source = null
      const handlerName = `onClick`
      console.log(handlerName, this.event.target)
      if (this.event.target[handlerName])
        this.event.target[handlerName](this.event)
    }
  }

  buildNodes () {
    rid = 0
    noop.rid = 0
    this.append(root, noop)
    root.calculateLayout(750, 1136, yoga.DIRECTION_LTR);
  }

  renderTick (canvas) {
    this.draw(canvas)
  }

  dumpJsonFile () {
    var dump = this.dump()

    const fs = require('fs')
    fs.writeFileSync('./dom-calc-static.json', JSON.stringify(dump, null, '\t'))
  }
}

var noop = new Div({
  text: 'noop'
})

module.exports = {
  noop,
  Document,
  Text,
  Header,
  Section,
  Div
}