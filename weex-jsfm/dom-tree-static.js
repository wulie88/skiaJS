const yoga = require('yoga-layout')
const {Node} = yoga

const document = Node.create();
document.setWidth(1280);
document.setHeight(720);
document.setDisplay(yoga.DISPLAY_FLEX)
document.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)

var rid = 1, id = 1
class Div {
  constructor ({children, child, style, text} = options) {
    this.id = id ++
    this.style = style
    this.children = children || []
    this.child = child
    this.text = text
  }

  get name () {
    return this.constructor.name
  }

  get nodes () {
    return this.children.length + this.child ? 1: 0
  }

  get bounds () {
    return this.node?this.node.getComputedLayout(): {left:0, right:0, top:0, bottom:0, width:0, height:0}
  }

  get backgroundColor () {
    if (!this._bg) {
      this._bg = skColorSetArgb(0xFF, Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255))
    }
    return this._bg
  }

  // 绝对位置
  get frame () {
    const frame = this.bounds;
    var parent = this.parent
    while (parent) {
      const pframe = parent.frame
      frame.left += pframe.left
      frame.right -= pframe.right
      frame.top += pframe.top
      frame.bottom -= pframe.bottom
      parent = parent.parent
    }
    
    return frame
  }

  append (parentNode, parent) {
    const {children, child, style, text} = this
    this.rid = rid ++
    const node = Node.create()
    node.setDisplay(yoga.DISPLAY_FLEX)
    node.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)

    var setter = {}
    if ('height' in style) {
      setter['height'] = style['height']
      node.setHeight(style['height'])
    }
    if ('width' in style) {
      setter['width'] = style['width']
      node.setWidth(style['width'])
    }
    if ('flex' in style) {
      setter['flex'] = style['flex']
      node.setFlex(style['flex'])
    }
    if ('padding' in style) {
      setter['padding'] = style['padding']
      node.setPadding(yoga.EDGE_ALL, style['padding'])
    }
    if ('paddingTop' in style) {
      setter['paddingTop'] = style['paddingTop']
      node.setPadding(yoga.EDGE_TOP, style['paddingTop'])
    }
    if ('paddingLeft' in style) {
      setter['paddingLeft'] = style['paddingLeft']
      node.setPadding(yoga.EDGE_LEFT, style['paddingLeft'])
    }
    if ('paddingRight' in style) {
      setter['paddingRight'] = style['paddingRight']
      node.setPadding(yoga.EDGE_RIGHT, style['paddingRight'])
    }
    if ('paddingBottom' in style) {
      setter['paddingBottom'] = style['paddingBottom']
      node.setPadding(yoga.EDGE_BOTTOM, style['paddingBottom'])
    }
    if ('flexDirection' in style) {
      setter['flexDirection'] = style['flexDirection']
      node.setFlexDirection(style['flexDirection']== 'row'?yoga.FLEX_DIRECTION_ROW:yoga.FLEX_DIRECTION_COLUMN)
    }

    const index = parentNode.getChildCount()
    console.log(node,`${parent.constructor.name}[rid${parent.rid}｜id${parent.id}]`, '->', `${this.constructor.name}[rid${this.rid}｜id${this.id}]`, setter, index)
    parentNode.insertChild(node, index)


    if (children) {
      children.forEach((element, index) => {
        element.append(node, this)
      });
    }

    if (child) {
      child.append(node, this)
    }
    this.node = node
    this.parent = parent
  }

  render (canvas) {
    const {children, child} = this
    // Rect
    const frame = this.frame
    const fill = skPaintNew();
    skPaintSetColor(fill, this.backgroundColor);
    const rect = new skRect({
        left: frame.left,
        top: frame.top,
        right: frame.left+frame.width,
        bottom: frame.top+frame.height
    });
    skCanvasDrawRect(canvas, rect, fill);

    // Text
    const familyName = "Times New Roman";
    const textStyle = skFontstyleNew(400, 1, enums.UPRIGHT_SK_FONT_STYLE_SLANT);
    const typeface = skTypefaceCreateFromNameWithFontStyle(familyName, textStyle);
    const text = skPaintNew();
    skPaintSetColor(text, skColorSetArgb(0xFF, 0xFF, 0xFF, 0xFF));
    skPaintSetTextsize(text, 20.0);
    skPaintSetTypeface(text, typeface);
    const str = `[${this.name}]${this.text}`;
    skCanvasDrawText(canvas, str, str.length, frame.left+10, frame.top+50, text);

    // layout
    const text1 = skPaintNew();
    skPaintSetColor(text1, skColorSetArgb(0xFF, 0xEE, 0xEE, 0xEE));
    skPaintSetTextsize(text1, 14.0);
    skPaintSetTypeface(text1, typeface);
    const str1 = `${frame.width}x${frame.height}`;
    skCanvasDrawText(canvas, str1, str1.length, frame.left+frame.width-100, frame.top+50, text);

    if (children) {
      children.forEach((element, index) => {
        element.render(canvas)
      });
    }

    if (child) {
      child.render(canvas)
    }
  }

  print () {
    return {name: this.constructor.name, text: this.text, rid: this.rid, id: this.id, frame: this.frame, style: this.style}
  }

  dump () {
    return {name: this.constructor.name, text: this.text, rid: this.rid, id: this.id, layout: this.node.getComputedLayout(), frame: this.frame, children: this.children.map(ele => ele.dump()), child: this.child ?this.child.dump():null, style: this.style}
  }
}

class Section extends Div {}

class Text extends Div {}

class Header extends Div {}

var root = new Div({
  style: { flex: 1, },
  children: [
    new Header({
      text: "header",
      style: {
        height: 100,
        padding: 10
      },
      child: new Text({
        style: { flex: 1, },
        text: "Logo",
      })
    }),
    new Section({
      style: {
        flex: 1,
        flexDirection: 'row',
        padding: 60
      },
      text: "section",
      children: [
        new Div({
          style: { flex: 1, },
          text: "1"
        }),
        new Div({
          style: {
            width: 500, 
            flexDirection: 'row'
          },
          text: "2",
          children: [
            new Div({
              text: "2-1",
              style: {
                width: 200,
              },
            }),
            new Div({
              text: "2-2",
              style: { flex: 1, },
            })
          ]
        }),
        new Div({
          style: { flex: 1, },
          text: "3"
        }),
      ]
    }),
    new Div({
      text: 'Footer',
      style: {
        height: 150
      },
    })
  ]
})

var noop = new Div({
  text: 'noop'
})
noop.rid = 0
root.append(document, noop)

document.calculateLayout(1280, 720, yoga.DIRECTION_LTR);

var dump = root.dump()

const fs = require('fs')
fs.writeFileSync('./dom-calc-static.json', JSON.stringify(dump, null, '\t'))

module.exports = root