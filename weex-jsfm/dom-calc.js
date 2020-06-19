const yoga = require('yoga-layout')
const {Node} = yoga

const document = Node.create();
document.setWidth(500);
document.setHeight(600);
document.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
// document.setJustifyContent(yoga.JUSTIFY_CENTER);

const wrap = Node.create();
wrap.setFlex(1);
document.insertChild(wrap, 0);

const header = Node.create();
header.setHeight(100);
wrap.insertChild(header, 0);

const section = Node.create();
section.setFlex(1);
section.setFlexDirection(yoga.FLEX_DIRECTION_COLUMN)
section.setFlexDirection(yoga.FLEX_DIRECTION_ROW)

wrap.insertChild(section, 1);


const section0 = Node.create();
section0.setFlex(1);
section.insertChild(section0, 0);
const section1 = Node.create();
section1.setWidth(400);
section.insertChild(section1, 1);
const section2 = Node.create();
section2.setFlex(1);
section.insertChild(section2, 2);

const footer = Node.create();
footer.setHeight(50);
wrap.insertChild(footer, 2);

const copyText = Node.create();
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