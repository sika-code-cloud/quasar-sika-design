<template>
  <div class="sc-design">
    <div>
      <q-form @submit="onSubmit" @reset="onReset" ref="loginForm">
        <q-tabs
          v-model="tab"
          active-color="primary"
          indicator-color="primary"
          align="left"
          :breakpoint="0"
          narrow-indicator
          class="text-black"
        >
          <q-tab name="mails" no-caps :label="$t('user.login.userPasswordLogin')" />
          <q-tab name="alarms" no-caps :label="$t('user.login.phoneLogin')" />
        </q-tabs>
        <div class="q-gutter-y-sm">
          <q-tab-panels v-model="tab" class="text-center">
            <q-tab-panel name="mails" class="q-col-gutter-y-sm">
              <div class="row">
                <div class="col">
                  <q-input
                    outlined
                    clearable
                    clear-icon="cancel"
                    v-model="name"
                    dense
                    debounce="500"
                    :label="userNameLabel"
                    lazy-rules
                    square
                    :rules="[
                      (val) => (val && val.length > 0) || '请输入用户名'
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="event" />
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <q-input
                    outlined
                    clearable
                    clear-icon="cancel"
                    :type="isPwd ? 'password' : 'text'"
                    v-model="password"
                    dense
                    debounce="500"
                    :label="passwordLabel"
                    lazy-rules
                    square
                    :rules="[(val) => (val && val.length > 0) || '请输入密码']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="event" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="alarms" class="q-col-gutter-y-sm">
              <div class="row">
                <div class="col">
                  <q-input
                    outlined
                    clearable
                    clear-icon="cancel"
                    v-model="name"
                    dense
                    debounce="500"
                    :label="$t('user.login.phone')"
                    lazy-rules
                    square
                    :rules="[
                      (val) => (val && val.length > 0) || '请输入用户名'
                    ]"
                  >
                    <template v-slot:prepend>
                      <q-icon name="event" />
                    </template>
                  </q-input>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <q-input
                    outlined
                    :type="isPwd ? 'password' : 'text'"
                    v-model="password"
                    dense
                    debounce="500"
                    :label="$t('user.login.verifyCode')"
                    lazy-rules
                    square
                    :rules="[(val) => (val && val.length > 0) || '请输入密码']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="event" />
                    </template>
                    <template v-slot:after>
                      <q-btn
                        unelevated
                        color="secondary"
                        class="no-border-radius"
                        :label="$t('user.login.getCode')"
                      />
                    </template>
                  </q-input>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
          <div class="q-mx-md">
            <div class="row">
              <div class="col text-left">
                <q-checkbox v-model="autoLogin" :label="$t('user.login.autoLogin')" />
              </div>
              <div class="col text-right">
                <q-btn no-caps color="primary" flat :label="$t('user.login.forgotPassword')" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <q-btn
                  no-caps
                  dense
                  unelevated
                  :label="$t('user.login.login')"
                  size="17px"
                  color="primary q-mt-sm"
                  class="full-width no-border-radius"
                  type="submit"
                  :loading="loginLogin"
                >
                  <template v-slot:loading>
                    <q-spinner-ios class="on-left" />
                    {{ $t('user.login.login') }} ...
                  </template>
                </q-btn>
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-auto text-left q-pt-sm">
                <span>{{ $t('user.login.otherLoginType') }}</span>
                <q-icon
                  v-for="(val, key) in loginIcon"
                  v-bind:key="key"
                  :size="val.size"
                  :class="[val.class.iconName, val.class.color]"
                  @click="thirdLogin(key)"
                  @mouseover="mouseOver(key, $event)"
                  @mouseleave="mouseLeave(key, $event)"
                  style="cursor: pointer"
                  class="iconfont q-ml-sm"
                />
              </div>
              <div class="col text-right">
                <q-btn
                  to="/user/register"
                  color="primary"
                  flat
                  no-caps
                  :label="$t('user.login.register')"
                />
              </div>
            </div>
          </div>
        </div>
      </q-form>
    </div>
    <q-dialog
      v-model="currentLogin.login"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Persistent</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ currentLogin.obj }}
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      iconObject: {
        weixin: {
          class: {
            iconName: 'iconweixin',
            color: 'text-grey'
          },
          size: '22px'
        },
        zhifubao: {
          class: {
            iconName: 'iconzhifubao',
            color: 'text-grey'
          },
          size: '20px'
        },
        taobao: {
          class: {
            iconName: 'icontaobao',
            color: 'text-grey'
          },
          size: '22px'
        },
        weibo: {
          class: {
            iconName: 'iconweibo',
            color: 'text-grey'
          },
          size: '20px'
        },
        github: {
          class: {
            iconName: 'iconhuaban88',
            color: 'text-grey'
          },
          size: '23px',
          type: 'link'
        }
      },
      iconActive: {
        weibo: 'grey'
      },
      userNameLabel: this.$t('user.login.userName') + ':admin',
      passwordLabel: this.$t('user.login.userName') + ':sika',
      tab: 'mails',
      name: null,
      password: null,
      accept: false,
      isPwd: true,
      autoLogin: true,
      card: false,
      loginLogin: false,
      currentLogin: {
        login: false,
        obj: {}
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.name !== 'admin' || this.password !== 'sika') {
        this.$q.notify({
          color: 'white',
          textColor: 'negative',
          icon: 'cancel',
          position: 'top',
          message: '用户名或密码不正确'
        })
        return
      }
      this.loginLogin = true
      setTimeout(() => {
        // we're done, we reset loading state
        this.$q.notify({
          color: 'white',
          textColor: 'positive',
          icon: 'check_circle',
          position: 'top',
          message: '登录成功'
        })
        this.loginLogin = true
        this.$q.localStorage.set('name', this.name)
        this.$router.push({
          path: '/'
        })
      }, 2000)
    },
    onReset() {
      this.name = null
      this.age = null
      this.accept = false
    },
    mouseOver(iconKey, event) {
      this.activeForLoginType(iconKey, 'text-primary')
    },
    mouseLeave(iconKey, event) {
      this.activeForLoginType(iconKey, 'text-grey')
    },
    activeForLoginType(iconKey, targetColor) {
      this.iconObject[iconKey].class.color = targetColor
    },
    thirdLogin(iconKey, event) {
      this.currentLogin.login = true
      this.currentLogin.obj = this.iconObject[iconKey]
    }
  },
  computed: {
    loginIcon: function() {
      return this.iconObject
    }
  }
}
</script>

<style scoped>
/*@import '~assets/icons/iconfont.sass';*/
@import 'http://at.alicdn.com/t/font_2136554_1fgggi4y4wt.css';

.q-tab-panel {
}

.flip-list-move {
  transition: transform 1s;
}
</style>
