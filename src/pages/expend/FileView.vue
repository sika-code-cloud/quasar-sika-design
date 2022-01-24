<template>
  <div>
    <q-card class="q-mx-md" square>
      <q-list>
        <q-item clickable>
          <q-item-section>
            <q-item-label>
              <q-input label="文件URL" v-model="url" style="max-width: 500px"></q-input>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <q-card class="column full-height q-ma-md q-pa">
      <q-card-section class="q-pa-sm">
        <q-toolbar>
          <q-toolbar-title>文件预览</q-toolbar-title>
          <q-btn type="a" label="全屏访问" :href="fullUrl" target="_blank" color="primary" unelevated>
          </q-btn>
        </q-toolbar>
      </q-card-section>
      <q-card-section class="q-pa-sm">
        <div style="height: 70vh; width: 100%;">
          <iframe id="test1"
                  :src="fullUrl"
                  width="100%" height="100%">
          </iframe>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'FileView',
  data() {
    return {
      url: 'http://81.71.72.66:8012/demo/sika-logo.png',
      medium: false
    }
  },
  computed: {
    fullUrl() {
      if (this.url && this.url !== '') {
        const Base64 = require('js-base64').Base64
        return 'http://81.71.72.66:8012/onlinePreview?url=' + encodeURIComponent(Base64.encode(this.url))
      }
      return ''
    }
  }
}
</script>

<style scoped>

</style>
