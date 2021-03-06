const yoga = require('yoga-layout')
const {
  RectContainsPoint,
  str2color,
  randomColor,
  transformJustifyContent,
  transformAlignItems
} = require('./element-helpper')
const { Node } = yoga

class Event {
  constructor (name, x, y) {
    this.name = name
    this.x = x
    this.y = y
    this.target = null
  }
}

const root = Node.createDefault();
root.setWidth(750);
root.setHeight(1136);
root.setDisplay(yoga.DISPLAY_FLEX)
// root.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)

var rid = 1, id = 1
class Element {
  constructor(desc, eventProxy) {
    const { ref, parentRef, children, child, style, attr, text } = desc
    this.id = id++
    this.zIndex = 0 // 视图层次
    this.style = style
    this.children = children || []
    this.child = child
    this.text = text || (attr && attr.value) || ""
    this.handlers = {}
    this.parentRef = parentRef
    this.ref = ref
    this.userInteractionEnabled = false
    if ('onClick' in desc) {
      this.userInteractionEnabled = true
      this.handlers['onClick'] = desc['onClick'].bind(this)
    }
    if (desc.event && desc.event.indexOf('click') > -1) {
      this.userInteractionEnabled = true
      this.handlers['onClick'] = (event) => {
        eventProxy.publish('click', this, event)
      }
    }
    console.log(`constructor ${this.constructor.name}[id${this.id}] ${this.text}`, style)
    this._paddingTop = this._paddingRight = this._paddingBottom = this._paddingLeft = 0
  }
  
  update (desc) {
    if (desc['style']) {
      this.style = Object.assign(this.style, desc['style'])
    }
    if (desc['value']) {
      this.text = desc['value']
    }
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
      // this._backgroundColor = randomColor()
    }

    return this._backgroundColor
  }

  get textColor() {
    if (!this._textColor) {
      this._textColor = randomColor()
    }

    return this._textColor
  }

  get isAbsolute() {
    return this.style && this.style['position'] === 'absolute'
  }

  // 绝对位置
  get frame() {
    const frame = this.bounds;
    var parent = this.parent
    if (!this.isAbsolute && parent) {
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
      node = Node.createDefault()
      node.setDisplay(yoga.DISPLAY_FLEX)
      node.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
      // node.setFlexDirection(yoga.POSITION_TYPE_RELATIVE)
  
      const index = parentNode.getChildCount()
      parentNode.insertChild(node, index)
      this.node = node
      this.parent = parent

      console.log(`create Node ${this.constructor.name}[rid${this.rid}｜id${this.id}] => ${parent.constructor.name}[rid${parent.rid}｜id${parent.id}]`)
    }

    const styleCache = this.styleCache || {}
    let hasChanged = false
    function updateStyle(key, cb, transform) {
      if ((key in style) && styleCache[key] != style[key]) {
        const val = transform?transform(style[key]):style[key]
        styleCache[key] = style[key]
        hasChanged = true
        cb(val)
      }
    }

    // -- layout --
    updateStyle('height', (val) => node.setHeight(val))
    updateStyle('width', (val) => node.setWidth(val))
    updateStyle('flex', (val) => node.setFlex(val))
    updateStyle('padding', (val) => {
      node.setPadding(yoga.EDGE_ALL, val)
      this._paddingTop = this._paddingRight = this._paddingBottom = this._paddingLeft = val
    }, parseInt)
    updateStyle('paddingTop', (val) => {
      node.setPadding(yoga.EDGE_TOP, val)
      this._paddingTop = val
    }, parseInt)
    updateStyle('paddingBottom', (val) => {
      node.setPadding(yoga.EDGE_BOTTOM, val)
      this._paddingBottom = val
    }, parseInt)
    updateStyle('paddingLeft', (val) => {
      node.setPadding(yoga.EDGE_LEFT, val)
      this._paddingLeft = val
    }, parseInt)
    updateStyle('paddingRight', (val) => {
      node.setPadding(yoga.EDGE_RIGHT, val)
      this._paddingRight = val
    }, parseInt)
    updateStyle('margin', (val) => node.setMargin(yoga.EDGE_ALL, val))
    updateStyle('marginTop', (val) => node.setMargin(yoga.EDGE_TOP, val))
    updateStyle('marginBottom', (val) => node.setMargin(yoga.EDGE_BOTTOM, val))
    updateStyle('marginLeft', (val) => node.setMargin(yoga.EDGE_LEFT, val))
    updateStyle('marginRight', (val) => node.setMargin(yoga.EDGE_RIGHT, val))
    updateStyle('flexDirection', (val) => node.setFlexDirection(val == 'row' ? yoga.FLEX_DIRECTION_ROW : yoga.FLEX_DIRECTION_COLUMN))
    updateStyle('justifyContent', (val) => node.setJustifyContent(transformJustifyContent(val)))
    updateStyle('alignItems', (val) => node.setAlignItems(transformAlignItems(val)))
    updateStyle('borderWidth', (val) => node.setBorder(yoga.EDGE_ALL, val))
    updateStyle('position', (val) => node.setFlexDirection(val == 'absolute' ? yoga.POSITION_TYPE_ABSOLUTE : yoga.POSITION_TYPE_RELATIVE))
    updateStyle('top', (val) => node.setPosition(yoga.EDGE_TOP, val))
    updateStyle('bottom', (val) => node.setPosition(yoga.EDGE_BOTTOM, val))
    updateStyle('left', (val) => node.setPosition(yoga.EDGE_LEFT, val))
    updateStyle('right', (val) => node.setPosition(yoga.EDGE_RIGHT, val))
    updateStyle('display', (val) => node.setDisplay(val == 'none' ? yoga.DISPLAY_NONE : yoga.DISPLAY_FLEX))

    // -- style --
    updateStyle('backgroundColor', (val) => {
      this._backgroundColor = str2color(val)
    })
    updateStyle('color', (val) => {
      this._textColor = str2color(val)
    })
    updateStyle('fontSize:', (val) => {
      this._fontSize = val
    })
    updateStyle('borderRadius', (val) => {
      this._borderRadius = val
    })

    this.styleCache = styleCache
    if (hasChanged) {
      console.log(`update Node ${this.text} ${this.constructor.name}[rid${this.rid}｜id${this.id}]`, styleCache)
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
    // this._backgroundColor = randomColor()
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

  drawDebug(canvas) {
    const { children, child } = this
    // Rect
    const frame = this.frame

    // Text
    const familyName = "Hei";
    const textStyle = skFontstyleNew(400, 1, enums.UPRIGHT_SK_FONT_STYLE_SLANT);
    const typeface = skTypefaceCreateFromNameWithFontStyle(familyName, textStyle);
    const text = skPaintNew();
    skPaintSetAntialias(text, true)
    skPaintSetColor(text, skColorSetArgb(240, 0x32, 0x30, 0x4F));
    skPaintSetTextsize(text, 12);
    skPaintSetTypeface(text, typeface);
    const str = `z:${this.zIndex} x:${frame.left} y:${frame.top} ${frame.width}x${frame.height}`;
    skCanvasDrawText(canvas, str, str.length, frame.left + 10, frame.top + 10, text);

    if (children) {
      children.forEach((element, index) => {
        element.drawDebug(canvas)
      });
    }

    if (child) {
      child.drawDebug(canvas)
    }
  }

  draw(canvas) {
    const { children, child } = this
    // Rect
    const frame = this.frame
    if (this.backgroundColor) {
      const fill = skPaintNew();
      skPaintSetAntialias(fill, true)
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
        skCanvasDrawRoundRect(canvas, rect, this._borderRadius || 8, this._borderRadius || 8, fill);
    }

    // Text
    const familyName = "Hei";
    const textStyle = skFontstyleNew(400, 1, enums.UPRIGHT_SK_FONT_STYLE_SLANT);
    const typeface = skTypefaceCreateFromNameWithFontStyle(familyName, textStyle);
    const text = skPaintNew();
    skPaintSetAntialias(text, true)
    skPaintSetColor(text, this.textColor);
    skPaintSetTextsize(text, this._fontSize || 20);
    skPaintSetTypeface(text, typeface);
    const str = `${this.text}`;
    skCanvasDrawText(canvas, str, str.length, frame.left + this._paddingLeft, frame.top + this._paddingTop, text);

    // 深度优先
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
    return { name: this.constructor.name, ref: this.ref, parentRef: this.parentRef, text: this.text, rid: this.rid, id: this.id, style: this.style, layout: this.node.getComputedLayout(), frame: this.frame, children: this.children.map(ele => ele.dump()), child: this.child ? this.child.dump() : null }
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

    this.dumpJsonFile()
  }

  renderTick (canvas) {
    this.draw(canvas)
    this.drawDebug(canvas)
  }

  dumpJsonFile () {
    var dump = this.dump()

    const fs = require('fs')
    fs.writeFileSync('./element.json', JSON.stringify(dump, null, '\t'))
  }

  listFontNames () {
    const mgr = skFontmgrCreateDefault()
    const count = skFontmgrCountFamilies(mgr)
    let name = skStringNewEmpty()
    const ref = skFontmgrGetFamilyName(mgr, 0, name)
    console.log('skFontmgrCountFamilies', count, name, getMemory(name))
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