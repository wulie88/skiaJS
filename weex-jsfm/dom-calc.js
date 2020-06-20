const yoga = require('yoga-layout')
const {Node} = yoga

function createNode () {
  const node = Node.create();
  node.setDisplay(yoga.DISPLAY_FLEX)
  node.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
  return node
}

const document = createNode();
document.setWidth(500);
document.setHeight(600);
document.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
// document.setJustifyContent(yoga.JUSTIFY_CENTER);

const wrap = createNode();
wrap.setFlex(1);
document.insertChild(wrap, 0);

const header = createNode();
header.setHeight(100);
wrap.insertChild(header, 0);

const section = createNode();
section.setFlex(1);
section.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
section.setFlexDirection(yoga.FLEX_DIRECTION_ROW)

wrap.insertChild(section, 1);


const section0 = createNode();
section0.setFlex(1);
section.insertChild(section0, 0);
const section1 = createNode();
section1.setWidth(400);
section.insertChild(section1, 1);
const section2 = createNode();
section2.setFlex(1);
section.insertChild(section2, 2);

const footer = createNode();
footer.setHeight(50);
wrap.insertChild(footer, 2);

const copyText = createNode();
copyText.setFlex(1);
copyText.setMargin(yoga.EDGE_TOP, 20)
copyText.setMargin(yoga.EDGE_BOTTOM, 20)
footer.insertChild(copyText, 0);

document.calculateLayout(500, 600, yoga.DIRECTION_LTR);

console.log('document', document.getComputedLayout());
console.log('header', header.getComputedLayout());
console.log('section', section.getComputedLayout());
console.log('footer', footer.getComputedLayout());
console.log('copyText', copyText.getComputedLayout());
console.log('section0', section0.getComputedLayout());
console.log('section1', section1.getComputedLayout());
console.log('section2', section2.getComputedLayout());