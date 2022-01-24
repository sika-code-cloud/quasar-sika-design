<template>
  <div>
    <div class="toolbar q-gutter-x-sm ">
      <q-btn @click="undo" color="primary" size="small" label="撤消" unelevated />
      <q-btn @click="redo" color="primary" size="small" label="重做" unelevated />
      <q-btn @click="uploadFile" color="primary" size="small" label="插入图片" unelevated></q-btn>
      <!--      <label for="input" class="insert">插入图片</label>-->
      <input type="file" @change="handleFileChange" id="input" ref="input" hidden />
      <q-btn @click="preview" color="primary" size="small" label="预览" unelevated />
      <q-btn @click="save" color="primary" size="small" label="保存" unelevated />
      <q-btn @click="clearCanvas" color="primary" size="small" label="清空画布" unelevated />
      <q-btn @click="compose" color="primary" size="small" label="组合" unelevated
             :disabled="!areaData.components.length" />
      <q-btn @click="decompose" color="primary" size="small" label="拆分" unelevated
             :disabled="!curComponent || curComponent.isLock || curComponent.component !== 'Group'" />
      <q-btn @click="lock" color="primary" size="small" label="锁定" unelevated
             :disabled="!curComponent || curComponent.isLock" />
      <q-btn @click="unlock" color="primary" size="small" label="解锁" unelevated
             :disabled="!curComponent || !curComponent.isLock" />
      <div class="canvas-config  small-input">
        <div class="inline-block" >
          <q-input outlined square v-model="canvasStyleData.width">
            <template v-slot:before>
              <span>画布大小</span>
            </template>
          </q-input>
        </div>
        <div class="inline-block" >
          <q-input outlined square v-model="canvasStyleData.height">
            <template v-slot:before>
              <span>*</span>
            </template>
          </q-input>
        </div>
        <div class="inline-block">
          <q-input outlined square v-model="scale"  @input="handleScaleChange">
            <template v-slot:before>
              <span>画布比例</span>
            </template>
            <template v-slot:after>
              <span>%</span>
            </template>
          </q-input>
        </div>
      </div>
    </div>

    <!-- 预览 -->
    <Preview v-model="isShowPreview" @change="handlePreviewChange" />
  </div>
</template>

<script>
import generateID from '../utils/generateID'
import toast from '../utils/toast'
import { mapState } from 'vuex'
import Preview from '../common-component/Editor/Preview'
import { commonStyle, commonAttr } from '../custom-component/component-list'
import eventBus from '../utils/eventBus'
import { deepCopy } from '../utils/utils'

export default {
  components: { Preview },
  data() {
    return {
      isShowPreview: false,
      needToChange: [
        'top',
        'left',
        'width',
        'height',
        'fontSize',
        'borderWidth'
      ],
      scale: '100%',
      timer: null
    }
  },
  computed: mapState([
    'componentData',
    'canvasStyleData',
    'areaData',
    'curComponent'
  ]),
  created() {
    eventBus.$on('preview', this.preview)
    eventBus.$on('save', this.save)
    eventBus.$on('clearCanvas', this.clearCanvas)
    this.scale = this.canvasStyleData.scale
  },
  methods: {
    format(value) {
      const scale = this.scale
      return value * parseInt(scale) / 100
    },

    getOriginStyle(value) {
      const scale = this.canvasStyleData.scale
      const result = value / (parseInt(scale) / 100)
      return result
    },
    uploadFile() {
      this.$refs.input.dispatchEvent(new MouseEvent('click'))
    },
    handleScaleChange() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        // 画布比例设一个最小值，不能为 0
        // eslint-disable-next-line no-bitwise
        this.scale = (~~this.scale) || 1
        const componentData = deepCopy(this.componentData)
        componentData.forEach(component => {
          Object.keys(component.style).forEach(key => {
            if (this.needToChange.includes(key)) {
              // 根据原来的比例获取样式原来的尺寸
              // 再用原来的尺寸 * 现在的比例得出新的尺寸
              // 不能用 Math.round 防止 1 px 的边框变 0
              component.style[key] = Math.ceil(this.format(this.getOriginStyle(component.style[key])))
            }
          })
        })

        this.$store.commit('setComponentData', componentData)
        this.$store.commit('setCanvasStyle', {
          ...this.canvasStyleData,
          scale: this.scale
        })
      }, 1000)
    },

    lock() {
      this.$store.commit('lock')
    },

    unlock() {
      this.$store.commit('unlock')
    },

    compose() {
      this.$store.commit('compose')
      this.$store.commit('recordSnapshot')
    },

    decompose() {
      this.$store.commit('decompose')
      this.$store.commit('recordSnapshot')
    },

    undo() {
      this.$store.commit('undo')
    },

    redo() {
      this.$store.commit('redo')
    },

    handleFileChange(e) {
      const file = e.target.files[0]
      if (!file.type.includes('image')) {
        toast('只能插入图片')
        return
      }

      const reader = new FileReader()
      reader.onload = (res) => {
        const fileResult = res.target.result
        const img = new Image()
        img.onload = () => {
          this.$store.commit('addComponent', {
            component: {
              ...commonAttr,
              id: generateID(),
              component: 'Picture',
              label: '图片',
              icon: '',
              propValue: fileResult,
              style: {
                ...commonStyle,
                top: 0,
                left: 0,
                width: img.width,
                height: img.height
              }
            }
          })

          this.$store.commit('recordSnapshot')

          // 修复重复上传同一文件，@change 不触发的问题
          document.querySelector('#input').setAttribute('type', 'text')
          document.querySelector('#input').setAttribute('type', 'file')
        }

        img.src = fileResult
      }

      reader.readAsDataURL(file)
    },

    preview() {
      this.isShowPreview = true
      this.$store.commit('setEditMode', 'preview')
    },

    save() {
      localStorage.setItem('canvasData', JSON.stringify(this.componentData))
      localStorage.setItem('canvasStyle', JSON.stringify(this.canvasStyleData))
      this.$message.success('保存成功')
    },

    clearCanvas() {
      this.$store.commit('setCurComponent', {
        component: null,
        index: null
      })
      this.$store.commit('setComponentData', [])
      this.$store.commit('recordSnapshot')
    },

    handlePreviewChange() {
      this.$store.commit('setEditMode', 'edit')
    }
  }
}
</script>

<style lang="scss">
.small-input {
  .q-field__marginal {
    height: 23px;
    font-size: 14px;
  }
  .q-field__control {
    height: 23px;
    width: 60px;
  }
  .q-field__after {
    padding-left: 0;
  }
}
</style>
<style lang="scss" scoped>
.toolbar {
  padding: 15px 10px;
  white-space: nowrap;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ddd;

  .canvas-config {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;

    input {
      width: 50px;
      margin-left: 10px;
      outline: none;
      padding: 0 5px;
      border: 1px solid #ddd;
      color: #606266;
    }

    span {
      margin-left: 10px;
    }
  }

  .insert {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;

    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: 0;
    }

    &:hover {
      background-color: #ecf5ff;
      color: #3a8ee6;
    }
  }
}
</style>
