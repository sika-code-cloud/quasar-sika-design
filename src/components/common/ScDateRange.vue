<template>
  <q-field :square="fieldSquare"
           :dense="fieldDense"
           outlined
           :style="fieldStyle"
           v-model="startAndEndDateFormat"
           :rules="rules">
    <template v-slot:control>
      <div class="self-center full-width no-outline" tabindex="0">
        {{ startAndEndDateFormat }}
      </div>
    </template>
    <template v-slot:prepend>
      <q-icon :name="dateIcon" class="cursor-pointer" :color="dateIconColor">
        <q-menu
          square
          :offset="offset"
          :transition-show="transitionShow"
          :transition-hide="transitionHide"
        >
          <q-date v-model="startAndEndDate" square mask="YYYY-MM-DD" range :locale="myLocale" :title="title" />
        </q-menu>
      </q-icon>
    </template>
    <template v-slot:append>
      <q-icon :name="clearIcon" class="cursor-pointer" :color="clearIconColor" v-on:click="clear()" />
    </template>
  </q-field>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'ScStartEndDate',
  props: {
    rules: {
      type: [Object, Array],
      required: false
    },
    clearIcon: {
      type: String,
      default: 'cancel',
      required: false
    },
    clearIconColor: {
      type: String,
      default: 'grey',
      required: false
    },
    dateFormat: {
      type: String,
      default: 'YYYY-MM-DD',
      required: false
    },
    offset: {
      type: [Object, Array],
      default: () => [12, 10],
      required: false
    },
    transitionShow: {
      type: String,
      default: 'jump-down',
      required: false
    },
    transitionHide: {
      type: String,
      default: 'jump-up',
      required: false
    },
    dateIcon: {
      type: String,
      default: 'event',
      required: false
    },
    dateIconColor: {
      type: String,
      default: 'primary',
      required: false
    },
    fieldSquare: {
      type: Boolean,
      default: true,
      required: false
    },
    fieldDense: {
      type: Boolean,
      default: true,
      required: false
    },
    fieldStyle: {
      type: Object,
      required: false
    },
    fromDate: {
      type: Date,
      required: false
    },
    toDate: {
      type: Date,
      required: false
    }
  },
  data() {
    return {
      myLocale: {
        /* starting with Sunday */
        days: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        daysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        firstDayOfWeek: 1
      },
      visitQuery: 'currentDay',
      startAndEndDateForRet: {
        from: this.fromDate,
        to: this.toDate
      },
      startAndEndDate: {
        from: this.fromDate,
        to: this.toDate
      },
      startAndEndDateFormat: ''
    }
  },
  computed: {
    title() {
      if (this.startAndEndDate && this.startAndEndDate.from && this.startAndEndDate.to) {
        return this.formatTitle(this.startAndEndDate.to, this.startAndEndDate.from)
      } else if (date.isValid(this.startAndEndDate)) {
        return this.formatTitle(this.startAndEndDate, this.startAndEndDate)
      }
      return '0天'
    }
  },
  methods: {
    formatTitle(to, from) {
      return (date.getDateDiff(to, from, 'days') + 1) + '天'
    },
    formatDate(dateFormat) {
      return date.formatDate(dateFormat, this.dateFormat)
    },
    buildStartAndEndDate(from, to) {
      if (from === to) {
        this.startAndEndDate = from
        return
      }
      this.startAndEndDate = this.defaultValue()
      if (date.isValid(from)) {
        this.startAndEndDate.from = this.formatDate(from)
      }
      if (date.isValid(to)) {
        this.startAndEndDate.to = this.formatDate(to)
      }
    },
    formatStartAndAnd() {
      const startEndDate = this.startAndEndDateForRet
      if (!startEndDate.from) {
        startEndDate.from = this.formatDate(Date.now())
      }
      if (!startEndDate.to) {
        startEndDate.to = this.formatDate(Date.now())
      }
      if (startEndDate.from === startEndDate.to) {
        this.startAndEndDate = startEndDate.from
      }
      this.startAndEndDateFormat = startEndDate.from + '~' + startEndDate.to
    },
    buildNow() {
      return date.startOfDate(Date.now(), 'day')
    },
    clear() {
      this.startAndEndDate = this.defaultValue()
    },
    defaultValue() {
      return {
        from: '',
        to: ''
      }
    }
  },
  mounted() {
    this.formatStartAndAnd()
  },
  watch: {
    startAndEndDate: {
      handler(newValue, oldValue) {
        this.startAndEndDateForRet = newValue
        if (!newValue) {
          newValue = this.defaultValue()
          this.startAndEndDateForRet = this.defaultValue()
          this.startAndEndDate = this.defaultValue()
        }
        if (!newValue || newValue.from === '' || newValue.to === '') {
          this.startAndEndDateForRet = null
          this.startAndEndDateFormat = ''
          return
        }
        if (date.isValid(newValue)) {
          this.startAndEndDateForRet = {
            from: newValue,
            to: newValue
          }
        }
        this.formatStartAndAnd()
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped></style>
