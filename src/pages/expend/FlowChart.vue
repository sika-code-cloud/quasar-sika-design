<template>
  <div>
    <div class="q-pa-md q-gutter-x-md">
      <q-btn label="导出Img" @click="exportImg" color="primary" unelevated />
      <q-btn label="导出Svg" @click="exportSVG" color="primary" unelevated />
      <q-btn label="保存" @click="save" color="primary" unelevated />
    </div>
    <div id="container" style="height: 800px">
      <div id="stencil" />
      <div id="graph-container" />
    </div>
  </div>
</template>
<script>

import { Graph, Shape, Addon, DataUri, Vector } from '@antv/x6'
// import ComponentList from 'components/flowchart/ComponentList'
// import Attribute from 'components/flowchart/Attribute'
// import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
const ports = {
  groups: {
    top: {
      position: 'top',
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
    },
    right: {
      position: 'right',
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
    },
    bottom: {
      position: 'bottom',
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
    },
    left: {
      position: 'left',
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
  items: [
    {
      group: 'top'
    },
    {
      group: 'right'
    },
    {
      group: 'bottom'
    },
    {
      group: 'left'
    }
  ]
}

Graph.registerNode(
  'custom-rect',
  {
    inherit: 'rect',
    width: 66,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF'
      },
      text: {
        fontSize: 12,
        fill: '#262626'
      }
    },
    ports: { ...ports }
  },
  true
)

Graph.registerNode(
  'custom-polygon',
  {
    inherit: 'polygon',
    width: 66,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF'
      },
      text: {
        fontSize: 12,
        fill: '#262626'
      }
    },
    ports: {
      ...ports
    }
  },
  true
)

Graph.registerNode(
  'custom-circle',
  {
    inherit: 'circle',
    width: 45,
    height: 45,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF'
      },
      text: {
        fontSize: 12,
        fill: '#262626'
      }
    },
    ports: { ...ports }
  },
  true
)

Graph.registerNode(
  'custom-image',
  {
    inherit: 'rect',
    width: 52,
    height: 52,
    markup: [
      {
        tagName: 'rect',
        selector: 'body'
      },
      {
        tagName: 'image'
      },
      {
        tagName: 'text',
        selector: 'label'
      }
    ],
    attrs: {
      body: {
        stroke: '#5F95FF',
        fill: '#5F95FF'
      },
      image: {
        width: 26,
        height: 26,
        refX: 13,
        refY: 16
      },
      label: {
        refX: 3,
        refY: 2,
        textAnchor: 'left',
        textVerticalAnchor: 'top',
        fontSize: 12,
        fill: '#fff'
      }
    },
    ports: { ...ports }
  },
  true
)

export default {
  name: 'FlowChart',
  components: {},
  data() {
    return {
      timer: null,
      graph: null,
      graphContainer: null,
      stencilContainer: null,
      minimapContainer: null,
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    initData() {
      this.graphContainer = document.getElementById('graph-container')
      this.stencilContainer = document.getElementById('stencil')
    },
    exportImg() {
      this.graph.toPNG((dataUri) => {
        // 下载
        DataUri.downloadDataUri(dataUri, 'chart.png')
      })
    },
    save() {
      // console.log('this.graph.toJSON()：', JSON.stringify(this.graph.toJSON().cells))
      this.$q.localStorage.set('graph', JSON.stringify(this.graph.toJSON().cells))
      this.$q.notify({
        message: '保存成功',
        position: 'top-right',
        color: 'primary'
      })
    },
    exportSVG() {
      this.graph.toSVG((dataUri) => {
        // 下载
        DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), 'chart.svg')
      })
    },
    initStencil() {
      const graph = this.graph
      // #region 初始化图形
      const r1 = graph.createNode({
        shape: 'custom-rect',
        label: '开始',
        attrs: {
          body: {
            rx: 20,
            ry: 26
          }
        },
        data: {
          bizID: 125,
          date: '20200630',
          price: 89.00
        }
      })
      const r2 = graph.createNode({
        shape: 'custom-rect',
        label: '过程'
      })
      const r3 = graph.createNode({
        shape: 'custom-rect',
        attrs: {
          body: {
            rx: 6,
            ry: 6
          }
        },
        label: '可选过程'
      })
      const r4 = graph.createNode({
        shape: 'custom-polygon',
        attrs: {
          body: {
            refPoints: '0,10 10,0 20,10 10,20'
          }
        },
        label: '决策'
      })
      const r5 = graph.createNode({
        shape: 'custom-polygon',
        attrs: {
          body: {
            refPoints: '10,0 40,0 30,20 0,20'
          }
        },
        label: '数据'
      })
      const r6 = graph.createNode({
        shape: 'custom-circle',
        label: '连接'
      })

      const imageShapes = [
        {
          label: 'Client',
          image:
            'https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg'
        },
        {
          label: 'Http',
          image:
            'https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg'
        },
        {
          label: 'Api',
          image:
            'https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg'
        },
        {
          label: 'Sql',
          image:
            'https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg'
        },
        {
          label: 'Clound',
          image:
            'https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg'
        },
        {
          label: 'Mq',
          image:
            'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg'
        }
      ]
      const imageNodes = imageShapes.map((item) =>
        graph.createNode({
          shape: 'custom-image',
          label: item.label,
          attrs: {
            image: {
              'xlink:href': item.image
            }
          }
        })
      )
      // #region 初始化 stencil
      const stencil = new Addon.Stencil({
        title: '流程图',
        target: graph,
        stencilGraphWidth: 200,
        stencilGraphHeight: 180,
        collapsable: true,
        groups: [
          {
            title: '基础流程图',
            name: 'group1'
          },
          {
            title: '系统设计图',
            name: 'group2',
            graphHeight: 250,
            layoutOptions: {
              rowHeight: 70
            }
          }
        ],
        layoutOptions: {
          columns: 2,
          columnWidth: 80,
          rowHeight: 55
        }
      })
      this.stencilContainer.appendChild(stencil.container)
      stencil.load([r1, r2, r3, r4, r5, r6], 'group1')
      stencil.load(imageNodes, 'group2')
      // #endregion
    },
    bindData() {
      const graph = new Graph({
        container: this.graphContainer,
        panning: {
          enabled: true,
          modifiers: ['ctrl', 'meta']
        },
        grid: {
          type: 'doubleMesh',
          visible: true,
          size: 10,
          args: [
            {
              // 主网格线颜色
              color: '#eee',
              // 主网格线宽度
              thickness: 1
            },
            {
              // 次网格线颜色
              color: '#ddd',
              // 次网格线宽度
              thickness: 1,
              // 主次网格线间隔
              factor: 4
            }
          ]
        },
        mousewheel: {
          enabled: true,
          zoomAtMousePosition: true,
          modifiers: 'ctrl',
          minScale: 0.5,
          maxScale: 3
        },
        connecting: {
          router: {
            name: 'manhattan',
            args: {
              padding: 1
            }
          },
          connector: {
            name: 'jumpover',
            args: {
              radius: 5
            }
          },
          anchor: 'center',
          connectionPoint: 'anchor',
          allowBlank: true,
          snap: {
            enable: true,
            radius: 20
          },
          createEdge() {
            return new Shape.Edge({
              attrs: {
                line: {
                  stroke: '#A2B1C3',
                  strokeWidth: 2,
                  targetMarker: {
                    name: 'block',
                    width: 12,
                    height: 8
                  },
                  style: {
                    strokeDasharray: '20, 10, 5',
                    animation: 'ant-line 30s infinite linear'
                  }
                }
              },
              zIndex: 0
            })
          },
          validateConnection({ targetMagnet }) {
            return !!targetMagnet
          }
        },
        highlighting: {
          magnetAdsorbed: {
            name: 'stroke',
            args: {
              attrs: {
                fill: '#5F95FF',
                stroke: '#5F95FF'
              }
            }
          }
        },
        resizing: true,
        rotating: true,
        selecting: {
          strict: true,
          enabled: true,
          rubberband: true,
          showNodeSelectionBox: true
        },
        snapline: true,
        keyboard: true,
        clipboard: true,
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
        }
      })

      const localData = this.$q.localStorage.getItem('graph')
      if (localData) {
        graph.fromJSON(JSON.parse(localData))
      } else {
        graph.addNode({
          shape: 'custom-rect',
          x: 200,
          y: 200,
          label: 'source'
        })

        graph.addNode({
          shape: 'custom-rect',
          x: 350,
          y: 150,
          label: 'target'
        })

        graph.addNode({
          x: 50,
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
      }
      // #endregion
      // #region 快捷键与事件
      graph.centerContent()

      // copy cut paste
      graph.bindKey(['meta+c', 'ctrl+c'], () => {
        const cells = graph.getSelectedCells()
        if (cells.length) {
          graph.copy(cells)
        }
        return false
      })
      graph.bindKey(['meta+x', 'ctrl+x'], () => {
        const cells = graph.getSelectedCells()
        if (cells.length) {
          graph.cut(cells)
        }
        return false
      })
      graph.bindKey(['meta+v', 'ctrl+v'], () => {
        if (!graph.isClipboardEmpty()) {
          const cells = graph.paste({ offset: 32 })
          graph.cleanSelection()
          graph.select(cells)
        }
        return false
      })

      // undo redo
      graph.bindKey(['meta+z', 'ctrl+z'], () => {
        if (graph.history.canUndo()) {
          graph.history.undo()
        }
        return false
      })
      graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
        if (graph.history.canRedo()) {
          graph.history.redo()
        }
        return false
      })

      // select all
      graph.bindKey(['meta+a', 'ctrl+a'], () => {
        const nodes = graph.getNodes()
        if (nodes) {
          console.log('graph:', graph)
          graph.select(nodes)
        }
      })

      // delete
      graph.bindKey('delete', () => {
        const cells = graph.getSelectedCells()
        if (cells.length) {
          graph.removeCells(cells)
        }
      })

      // zoom
      graph.bindKey(['ctrl+1', 'meta+1'], () => {
        const zoom = graph.zoom()
        if (zoom < 1.5) {
          graph.zoom(0.1)
        }
      })
      graph.bindKey(['ctrl+2', 'meta+2'], () => {
        const zoom = graph.zoom()
        if (zoom > 0.5) {
          graph.zoom(-0.1)
        }
      })

      // 控制连接桩显示/隐藏
      const showPorts = (ports, show) => {
        for (let i = 0, len = ports.length; i < len; i = i + 1) {
          ports[i].style.visibility = show ? 'visible' : 'hidden'
        }
      }
      graph.on('node:mouseenter', () => {
        const container = document.getElementById('graph-container')
        const ports = container.querySelectorAll(
          '.x6-port-body'
        )
        showPorts(ports, true)
      })
      graph.on('node:mouseleave', () => {
        const container = document.getElementById('graph-container')
        const ports = container.querySelectorAll(
          '.x6-port-body'
        )
        showPorts(ports, false)
      })

      graph.on('edge:mouseenter', ({ cell }) => {
        cell.addTools([
          {
            name: 'source-arrowhead'
          },
          {
            name: 'target-arrowhead',
            args: {
              attrs: {
                fill: 'red'
              }
            }
          }
        ])
      })

      graph.on('edge:mouseleave', ({ cell }) => {
        cell.removeTools([
          {
            name: 'source-arrowhead'
          },
          {
            name: 'target-arrowhead'
          }
        ])
      })
      // 双击进入编辑模式
      graph.on('cell:dblclick', ({ cell, e }) => {
        cell.addTools([
          {
            name: cell.isEdge() ? 'edge-editor' : 'node-editor',
            args: {
              event: e,
              attrs: {
                backgroundColor: '#ffd591'
              }
            }
          }
        ])
      })
      // 双击进入编辑模式
      graph.on('selection:changed', (args) => {
        args.added.forEach((cell) => {
          if (cell.isNode()) {
            cell.attr('body', {
              fill: '#ffd591',
              stroke: '#ffa940'
            })
          } else {
            cell.attr('line/stroke', '#ffa940')
          }
        })
        args.removed.forEach((cell) => {
          if (cell.isNode()) {
            cell.attr('body', {
              stroke: '#5F95FF',
              fill: '#EFF4FF'
            })
          } else {
            cell.attr('line/stroke', '#A2B1C3')
          }
        })
      })

      function flash(cell) {
        const cellView = graph.findViewByCell(cell)
        if (cellView) {
          cellView.highlight()
          setTimeout(() => cellView.unhighlight(), 1000)
        }
      }

      graph.on('signal', (cell) => {
        if (cell.isEdge()) {
          const view = graph.findViewByCell(cell)
          if (view) {
            const token = Vector.create('circle', {
              r: 6,
              fill: '#feb662'
            })
            const target = cell.getTargetCell()
            setTimeout(() => {
              view.sendToken(token.node, 1000, () => {
                if (target) {
                  graph.trigger('signal', target)
                  cell.attr('line/stroke', '#ffa940')
                }
              })
            }, 300)
            setTimeout(() =>
              cell.attr('line/stroke', '#A2B1C3'), 10000)
          }
        } else {
          flash(cell)
          const edges = graph.model.getConnectedEdges(cell, {
            outgoing: true
          })
          edges.forEach((edge) => graph.trigger('signal', edge))
        }
      })

      graph.on('node:mousedown', ({ cell }) => {
        graph.trigger('signal', cell)
      })

      this.graph = graph
      // #endregion
    }
  },
  created() {
  },
  mounted() {
    this.initData()
    this.bindData()
    this.initStencil()
    this.timer = setInterval(() => {
      this.save()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  computed: {}
}
</script>
<style lang="scss">
#container {
  display: flex;
  border: 1px solid #dfe3e8;
}

#stencil {
  width: 180px;
  height: 100%;
  position: relative;
  background-color: blue;
  border-right: 1px solid #dfe3e8;
}

#graph-container {
  width: calc(100% - 180px);
  height: 100%;
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
  padding: 0;
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

@keyframes ant-line {
  to {
    stroke-dashoffset: -1000
  }
}
</style>
