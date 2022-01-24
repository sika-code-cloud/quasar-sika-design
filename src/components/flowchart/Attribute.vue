<template>
  <div style="max-width: 600px; width: 100%">
    <q-card
      square
      style="box-shadow: none">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="attr" label="属性" />
      </q-tabs>

      <q-separator />

      <q-tab-panels keep-alive v-model="tab" animated>
        <q-tab-panel name="attr">
          <div style="max-width: 350px">
            <q-list bordered padding>
              <q-item-label header>网格</q-item-label>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Content filtering</q-item-label>
                  <q-item-label caption>
                    <q-btn @click="drawGrid" label="重绘网格"></q-btn>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Content filtering</q-item-label>
                  <q-item-label caption>
                    <q-btn @click="drawBackground" label="重绘背景"></q-btn>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Content filtering</q-item-label>
                  <q-item-label caption>
                    <q-btn @click="snapline" label="切换对齐线"></q-btn>
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>
                    <q-btn @click="undo" label="撤销" :disable="!canUndo"></q-btn>
                  </q-item-label>
                  <q-item-label>
                    <q-btn @click="redo" label="重做" :disable="!canRedo"></q-btn>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  <q-item-label>Password</q-item-label>
                  <q-item-label caption>
                    Require password for purchase or use
                    password to restrict purchase
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />
              <q-item-label header>General</q-item-label>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-checkbox v-model="check1" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>Notifications</q-item-label>
                  <q-item-label caption>
                    Notify me about updates to apps or games that I downloaded
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-checkbox v-model="check2" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>Sound</q-item-label>
                  <q-item-label caption>
                    Auto-update apps at anytime. Data charges may apply
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-checkbox v-model="check3" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>Auto-add widgets</q-item-label>
                  <q-item-label caption>
                    Automatically add home screen widgets
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />
              <q-item-label header>Notifications</q-item-label>

              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Battery too low</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-toggle color="blue" v-model="notif1" val="battery" />
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Friend request</q-item-label>
                  <q-item-label caption>Allow notification</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-toggle color="green" v-model="notif2" val="friend" />
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section>
                  <q-item-label>Picture uploaded</q-item-label>
                  <q-item-label caption>Allow notification when uploading images</q-item-label>
                </q-item-section>
                <q-item-section side top>
                  <q-toggle color="red" v-model="notif3" val="picture" />
                </q-item-section>
              </q-item>

              <q-separator spaced />
              <q-item-label header>Other settings</q-item-label>

              <q-item>
                <q-item-section side>
                  <q-icon color="teal" name="volume_down" />
                </q-item-section>
                <q-item-section>
                  <q-slider
                    v-model="volume"
                    :min="0"
                    :max="10"
                    label
                    color="teal"
                  />
                </q-item-section>
                <q-item-section side>
                  <q-icon color="teal" name="volume_up" />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section side>
                  <q-icon color="deep-orange" name="brightness_medium" />
                </q-item-section>
                <q-item-section>
                  <q-slider
                    v-model="brightness"
                    :min="0"
                    :max="10"
                    label
                    color="deep-orange"
                  />
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section side>
                  <q-icon color="primary" name="mic" />
                </q-item-section>
                <q-item-section>
                  <q-slider
                    v-model="mic"
                    :min="0"
                    :max="50"
                    label
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>

export default {
  name: 'Attribute',
  props: {
    graph: {
      require: true
    }
  },
  data() {
    return {
      tab: 'attr',
      check1: true,
      check2: false,
      check3: false,

      notif1: true,
      notif2: true,
      notif3: false,

      volume: 6,
      brightness: 3,
      mic: 8,
      canUndo: false,
      canRedo: false
    }
  },
  methods: {
    drawGrid() {
      const grid = {
        size: 10,
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#eee',
            thickness: 1
          },
          {
            color: '#ddd',
            thickness: 1,
            factor: 4
          }
        ]
      }
      this.graph.drawGrid(grid)
    },

    drawBackground() {
      const background = {
        color: 'green',
        image: 'demo/logo.jpg',
        size: '200px',
        repeat: 'flip-xy',
        opacity: 0.2
      }
      this.graph.drawBackground(background)
    },
    snapline() {
      this.graph.toggleSharpSnapline(!this.graph.isSharpSnapline())
    },
    redo() {
      this.graph.history.redo()
    },
    undo() {
      this.graph.history.undo()
    },
    bindKey() {
      this.graph.bindKey('ctrl+a', () => {
        const cells = this.graph.getCells()
        if (cells.length) {
          this.graph.select(cells)
        }
        return false
      })
      this.graph.bindKey('ctrl+c', () => {
        const cells = this.graph.getSelectedCells()
        if (cells.length) {
          this.graph.copy(cells)
        }
        return false
      })

      this.graph.bindKey('ctrl+v', () => {
        if (!this.graph.isClipboardEmpty()) {
          const cells = this.graph.paste({ offset: 32 })
          this.graph.cleanSelection()
          this.graph.select(cells)
        }
        return false
      })

      this.graph.bindKey('delete', () => {
        const cells = this.graph.getSelectedCells()
        if (cells.length) {
          this.graph.removeCells(cells)
        }
        return false
      })
    }
  },
  mounted() {
    this.graph.history.on('change', () => {
      this.canRedo = this.graph.history.canRedo()
      this.canUndo = this.graph.history.canUndo()
    })
    this.graph.on('node:selected', (args) => {
      const node = args.node
      const bbox = node.getBBox()
      // node.resize(150, 40)
      console.log('bbox:', bbox)
    })
    this.bindKey()
  },
  computed: {}
}
</script>

<style lang="scss">

</style>
