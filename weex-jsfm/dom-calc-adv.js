const yoga = require('yoga-layout')
const {Node} = yoga

const document = Node.create();
document.setWidth(500);
document.setHeight(600);
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

  get nodes () {
    return this.children.length + this.child ? 1: 0
  }

  append (parentNode, parent) {
    this.rid = rid ++
    const {children, child, style, text} = this
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
    if ('flexDirection' in style) {
      setter['flexDirection'] = style['flexDirection']
      node.setFlexDirection(style['flexDirection']== 'row'?yoga.FLEX_DIRECTION_ROW:yoga.FLEX_DIRECTION_COLUMN)
    }

    const index = parentNode.getChildCount()
    console.log(`${parent.constructor.name}[${parent.rid}]`, '->', `${this.constructor.name}[${this.rid}]`, setter, index)
    parentNode.insertChild(node, 0)


    if (children) {
      children.forEach((element, index) => {
        element.append(node, this)
      });
    }

    if (child) {
      child.append(node, this)
    }
    this.node = node
  }

  dump () {
    return {name: this.constructor.name, rid: this.rid, id: this.id, layout: document.getComputedLayout(), children: this.children.map(ele => ele.dump()), child: this.child ?this.child.dump():null, style: this.style}
  }
}

class Section extends Div {}

class Text extends Div {}

var root = new Div({
  style: { flex: 1, },
  children: [
    new Div({
      style: {
        height: 100
      },
      child: new Text({
        style: { flex: 1, },
        text: "heander"
      })
    }),
    new Section({
      style: {
        flex: 1,
        flexDirection: 'row'
      },
      text: "section",
      children: [
        new Div({
          style: { flex: 1, },
          text: "1"
        }),
        new Div({
          style: { width: 500, },
          text: "2"
        }),
        new Div({
          style: { flex: 1, },
          text: "3"
        }),
      ]
    })
  ]
})


root.append(document, root)

document.calculateLayout(500, 600, yoga.DIRECTION_LTR);
console.log('document', document.getComputedLayout());

var dump = root.dump()
// console.log('dump', JSON.stringify(dump, null, '\t'));


const fs = require('fs')
fs.writeFileSync('dom-calc-adv.json', JSON.stringify(dump, null, '\t'))