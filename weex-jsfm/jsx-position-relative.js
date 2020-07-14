const {
  Document,
  Text,
  Header,
  Section,
  Div
} = require('./element')

var box = {
  width: 400,
  height: 400,
  position: 'absolute'
}

var document = new Document({
  style: {
    flex: 1, 
    padding: 60,
    backgroundColor: '#dddddd'
  },
  children: [
    new Div({
      text: "Div1",
      style: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#cccccc'
      },
      children: [
        new Div({
          style: Object.assign({
            top: 1,
            left: 1,
            backgroundColor: '#ff0000'
          }, box),
          text: "box1",
        }),
        new Div({
          style: Object.assign({
            top: 150,
            left: 150,
            backgroundColor: '#0055dd'
          }, box),
          text: "box2",
        }),
        new Div({
          style: Object.assign({
            top: 300,
            left: 300,
            backgroundColor: '#00ff49'
          }, box),
          text: "box3",
        }),
      ],
    }),
  ]
})

module.exports = document