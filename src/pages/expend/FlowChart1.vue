<template>
  <div class="app row">
    <div class="col-md-2 col-sm-3 gt-xs flex">
      <ComponentList :graph="graph" v-if="graph" />
    </div>
    <div class="col-md-7 col-sm-6 col-xs-12 flex">
      <div class="app-content" id="app-content" />
      <!--      <vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">-->
      <!--        <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>-->
      <!--          X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>-->
      <!--      </vue-draggable-resizable>-->
    </div>
    <div class="col-md-3 col-sm-3 gt-xs">
      <Attribute :graph="graph" v-if="graph" />
    </div>
  </div>
</template>
<script>

import { Graph, Shape } from '@antv/x6'
import ComponentList from 'components/flowchart/ComponentList'
import Attribute from 'components/flowchart/Attribute'
// import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Shape.Circle.config({
  attrs: {
    body: {
      fill: '#f5f5f5',
      stroke: '#d9d9d9',
      strokeWidth: 1
    }
  },
  ports: {
    groups: {
      top: {
        position: {
          name: 'top',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden'
              }
            }
          }
        }
      },
      bottom: {
        position: {
          name: 'bottom',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden'
              }
            }
          }
        }
      },
      left: {
        position: {
          name: 'left',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden'
              }
            }
          }
        }
      },
      right: {
        position: {
          name: 'right',
          attrs: {
            circle: {
              r: 4,
              magnet: true,
              stroke: '#5F95FF',
              strokeWidth: 1,
              fill: '#fff',
              style: {
                visibility: 'hidden'
              }
            }
          }
        }
      }
    }
  },
  portMarkup: [
    {
      tagName: 'circle',
      selector: 'portBody',
      attrs: {
        r: 5,
        magnet: true,
        stroke: '#31d0c6',
        fill: '#fff',
        strokeWidth: 2
      }
    }
  ]
})
Shape.Rect.config({
  attrs: {
    body: {
      fill: '#f5f5f5',
      stroke: '#d9d9d9',
      strokeWidth: 1
    }
  },
  ports: {
    groups: {
      top: {
        position: { name: 'top' }
      },
      bottom: {
        position: { name: 'bottom' }
      },
      left: {
        position: { name: 'left' }
      },
      right: {
        position: { name: 'right' }
      }
    }
  },
  portMarkup: [
    {
      tagName: 'circle',
      selector: 'portBody',
      attrs: {
        r: 5,
        magnet: true,
        stroke: '#31d0c6',
        fill: '#fff',
        strokeWidth: 2
      }
    }
  ]
})
export default {
  name: 'FlowChart',
  components: {
    Attribute,
    ComponentList
  },
  data() {
    return {
      graph: null,
      container: null,
      stencilContainer: null,
      minimapContainer: null,
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    // 控制连接桩显示/隐藏
    showPorts(show) {
      const ports = this.container.querySelectorAll(
        '.x6-port-body'
      )
      for (let i = 0, len = ports.length; i < len; i = i + 1) {
        ports[i].style.visibility = show ? 'visible' : 'hidden'
      }
    },
    onResize: function(x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function(x, y) {
      this.x = x
      this.y = y
    },
    initData() {
      this.container = document.getElementById('app-content')
      this.minimapContainer = document.getElementById('app-mini')
    },
    bindData() {
      this.graph = new Graph({
        container: this.container,
        grid: true,
        autoResize: true,
        history: true,
        infinite: true,
        clipboard: {
          enabled: true
        },
        resizing: true,
        connecting: {
          snap: true,
          allowBlank: true,
          allowLoop: false,
          allowNode: true,
          highlight: true,
          validateMagnet({ magnet }) {
            return true
          },

          validateConnection({ sourceMagnet, targetMagnet }) {
            return true
          }
        },
        keyboard: {
          enabled: true
        },
        rotating: {
          enabled: true,
          grid: 5
        },
        mousewheel: {
          enabled: true,
          modifiers: ['ctrl', 'meta']
        },
        embedding: {
          enabled: true,
          findParent({ node }) {
            const bbox = node.getBBox()
            return this.getNodes().filter((node) => {
              const data = node.getData()
              if (data && data.parent) {
                const targetBBox = node.getBBox()
                return bbox.isIntersectWithRect(targetBBox)
              }
              return false
            })
          }
        },
        panning: {
          enabled: true,
          modifiers: 'ctrl'
        },
        snapline: {
          enabled: true,
          clear: true,
          resizing: true,
          sharp: true
        },
        selecting: {
          enabled: true,
          multiple: true,
          rubberband: true,
          movable: true,
          showNodeSelectionBox: true,
          strict: true
        }
      })
      this.graph.addNode({
        x: 200,
        y: 80,
        width: 240,
        height: 160,
        zIndex: 1,
        label: 'Parent',
        attrs: {
          body: {
            fill: '#fffbe6'
          }
        },
        data: {
          parent: true
        }
      })
      const source = this.graph.addNode({
        x: 130,
        y: 30,
        width: 100,
        height: 40,
        attrs: {
          label: {
            text: 'Hello',
            fill: '#6a6c8a'
          },
          body: {
            stroke: '#31d0c6'
          }
        },
        ports: [
          {
            id: 'top',
            group: 'top'
          },
          {
            id: 'bottom',
            group: 'bottom'
          },
          {
            id: 'left',
            group: 'left'
          },
          {
            id: 'right',
            group: 'right'
          }
        ]
      })

      const target = this.graph.addNode({
        x: 320,
        y: 240,
        width: 100,
        height: 40,
        attrs: {
          label: {
            text: 'World',
            fill: '#6a6c8a'
          },
          body: {
            stroke: '#31d0c6'
          }
        },
        ports: [
          {
            id: 'top',
            group: 'top'
          },
          {
            id: 'bottom',
            group: 'bottom'
          },
          {
            id: 'left',
            group: 'left'
          },
          {
            id: 'right',
            group: 'right'
          }
        ]
      })

      this.graph.addNode({
        shape: 'circle',
        x: 100,
        y: 240,
        width: 40,
        height: 40,
        attrs: {
          label: {
            text: 'World1',
            fill: '#6a6c8a'
          },
          body: {
            stroke: '#31d0c6'
          }
        },
        ports: [
          {
            id: 'top',
            group: 'top'
          },
          {
            id: 'bottom',
            group: 'bottom'
          },
          {
            id: 'left',
            group: 'left'
          },
          {
            id: 'right',
            group: 'right'
          }
        ]
      })

      this.graph.addEdge({
        source: {
          cell: source.id,
          port: 'bottom'
        },
        target: {
          cell: target.id,
          port: 'top'
        }
      })

      this.graph.centerContent()
      // 控制连接桩显示/隐藏
      this.graph.on('node:mouseenter', () => {
        this.showPorts(true)
      })
      this.graph.on('node:mouseleave', () => {
        this.showPorts(false)
      })
      this.showPorts(false)
      console.log('this.graph: ', this.graph)
    }
  },
  created() {
  },
  mounted() {
    this.initData()
    this.bindData()
  },
  computed: {}
}
</script>
<style lang="scss">
.app {
  font-family: sans-serif;
  padding: 0;
  display: flex;
  padding: 16px 8px;
}

.app-content {
  flex: 1;
  height: 520px;
  margin-left: 8px;
  margin-right: 8px;
  box-shadow: 0 0 10px 1px #e9e9e9;
}

.app-mini {
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

.home {
  height: 100vh;
}

.x6-widget-stencil {
  background-color: #fff;
}

.x6-widget-stencil-title {
  background-color: #fff;
}

.x6-widget-stencil-group-title {
  background-color: #fff !important;
}

.x6-widget-transform {
  margin: -1px 0 0 -1px;
  padding: 0px;
  border: 1px solid #239edd;
}

.x6-widget-transform > div {
  border: 1px solid #239edd;
}

.x6-widget-transform > div:hover {
  background-color: #3dafe4;
}

.x6-widget-transform-active-handle {
  background-color: #3dafe4;
}

.x6-widget-transform-resize {
  border-radius: 0;
}

.x6-widget-selection-inner {
  border: 1px solid #239edd;
}

.x6-widget-selection-box {
  opacity: 0;
}
</style>
