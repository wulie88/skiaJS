const {
  Document,
  Text,
  Header,
  Section,
  Div
} = require('./dom-tree-static')

var document = new Document({
  style: { flex: 1, },
  children: [
    new Header({
      text: "header",
      style: {
        height: 100,
        padding: 10,
        paddingRight: 200
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
            flexDirection: 'row',
            paddingTop: 100
          },
          text: "2",
          children: [
            new Div({
              text: "2-1",
              style: {
                width: 200,
              },
              onClick() {
                this.style['width'] -= 10
              }
            }),
            new Div({
              text: "2-2",
              style: { flex: 1, }
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
        flexDirection: 'row',
        height: 150
      },
      child: new Div({
        text: '3-0',
        style: {
          flex: 1
        },
      }),
      onClick() {
        this.addChild(new Div({
          text: '3-' + (this.children.length + 1),
          style: {
            width: 250
          },
        }))
      }
    })
  ]
})

module.exports = document