/**
 * render tree
 * collection of Element
 */

const {
  Document,
  Text,
  Header,
  Section,
  Div
} = require('./element')

class Figure extends Div {}
class P extends Div {}
class RecycleList extends Div {}

class EventProxy {
  sub(context, instanceId) {
    this.context = context
    this.instanceId = instanceId
  }

  publish(event, element) {
    const func = this.context['__WEEX_CALL_JAVASCRIPT__']
    // id, tasks
    func(this.instanceId, [
      {
        method: 'fireEvent',
        module: "",
        args: [
          element.ref,
          'click'
        ]
      }
    ])
  }
}

const eventProxy = new EventProxy()

// should share with precompiler.
const metaMap = {
  figure: ['img', 'image', 'gif', 'figure'],
  p: ['text', 'p'],
  div: ['container', 'div'],
  section: ['cell', 'cell-slot'],
  'recycle-list': ['recycle-list']
}

const checkMap = Object.keys(metaMap).reduce(function (pre, targetTag) {
  const tagArr = metaMap[targetTag]
  tagArr.forEach(function (fromTag) {
    pre[fromTag] = targetTag
  })
  return pre
}, {})

const _stdTagMap = {
  p: 'text',
  figure: 'image',
  section: 'cell'
}
function getStdTag (tag) {
  const stdTag = _stdTagMap[tag]
  return stdTag || tag
}
function transformTag (tag) {
  const elementTag = checkMap[tag]
  return elementTag || tag
}

function desc2element(desc, parentDesc) {
  console.log('desc', desc, 'parentDesc', parentDesc)

  if ('_root' == parentDesc.ref) {
    parentDesc.element = document
  }

  const tag = transformTag(desc['type'])
  const element = new Div(desc, eventProxy)
  desc.element = element
  parentDesc.element.addChild(element)
}

var document = new Document({
  style: { flex: 1, },
});

module.exports = {
  eventProxy,
  document,
  desc2element
}