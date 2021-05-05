<template>
  <q-layout :view="view" class="bg-grey-2" style="font-family: 微软雅黑">
    <q-resize-observer @resize="onResize" />
    <q-header
      class="bg-white title-grey-8 shadow-1 sc-design"
      height-hint="64"
      v-if="styleSettingsData.contentSettings.header"
    >
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="onClick"
          aria-label="Menu"
          icon="format_indent_increase"
          color="grey-8"
        />
        <q-btn dense flat size="sm" class="q-mr-xs" v-show="$q.screen.gt.xs">
          <q-avatar size="sm">
            <q-img src="imgs/logo/sika-logo.png"/>
          </q-avatar>
        </q-btn>
        <q-space />
        <div class="q-gutter-xs" v-if="$q.screen.gt.sm">
          <q-btn type="a" target="_blank" unelevated size="sm" dense round
                 href="http://www.cc-admin.top">
            <q-avatar size="sm">
              <q-img alt="GreaterWMS" src="imgs/logo/cc-admin-logo.png" style="width: 32px" />
              <q-tooltip>
                {{$t('StandardLayout.enterpriseRapidDevelopmentPlatform')}}
              </q-tooltip>
            </q-avatar>
          </q-btn>
          <q-btn type="a" target="_blank" unelevated size="sm" dense round
                 href="https://www.56yhz.com">
            <q-avatar size="sm">
              <q-img alt="GreaterWMS" src="imgs/logo/greater-wms-logo.png" />
              <q-tooltip>
                {{$t('StandardLayout.greaterWmsSupplyChainManagementSystem')}}
              </q-tooltip>
            </q-avatar>
          </q-btn>
          <q-btn type="a" target="_blank" unelevated size="sm" dense round
                 href="http://www.quasarchs.com/">
            <q-avatar size="sm">
              <img alt="quasar" src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
              <q-tooltip>
                {{$t('StandardLayout.quasarChineseOfficialDocumentation')}}
              </q-tooltip>
            </q-avatar>
          </q-btn>
        </div>
        <div class="q-gutter-xs q-ml-sm row items-center no-wrap">
          <q-btn type="a" target="_blank" unelevated size="sm" dense round
                 href="https://github.com/dq-open-cloud/quasar-sika-design">
            <q-avatar size="sm" text-color="primary">
              <q-icon class="iconhuaban88 iconfont text-primary" />
              <q-tooltip v-if="$q.screen.gt.sm">
                {{$t('StandardLayout.githubAddress')}}
              </q-tooltip>
            </q-avatar>
          </q-btn>
          <q-btn unelevated size="sm" dense round @click="copyQQ('327424532')">
            <q-avatar size="sm">
              <q-icon class="iconfont iconqq text-primary" />
              <q-tooltip v-if="$q.screen.gt.sm">
                {{$t('StandardLayout.clickToCopyQqGroup_327424532AcFeedback')}}
              </q-tooltip>
            </q-avatar>
          </q-btn>
          <q-btn round dense flat size="sm" color="grey-7" icon="help_outline">
            <q-tooltip>{{$t('StandardLayout.helpDocumentation')}}</q-tooltip>
          </q-btn>
          <q-btn
            round
            flat
            size="sm"
            color="grey-8"
            icon="notifications_none"
            @click="openMessage"
          >
            <q-badge
              color="negative"
              style="padding: 2px 4px"
              title-color="white"
              floating
              v-if="totalInformCount > 0"
            >{{ totalInformCount }}
            </q-badge>
          </q-btn>
          <span class="inline-block">
            <q-chip dense color="white" class="cursor-pointer q-ml-sm">
               <q-avatar size="xs">
                <q-img src="imgs/logo/sika-logo.png" />
              </q-avatar>
              <span
                class="inline-block"
                style="
                  max-width: 50px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                "
              >{{$t('StandardLayout.Emailseeeeee')}}</span
              >
              <q-menu
                :offset="[0, 26]"
                transition-show="jump-down"
                transition-hide="jump-up"
                :content-class="menuContentClass"
              >
                <q-list dense>
                  <q-item clickable v-close-popup to="/account/center">
                    <q-item-section
                      avatar
                      class="q-mr-sm q-pa-none"
                      style="min-width: 0"
                    >
                      <q-icon name="person" size="xs" />
                    </q-item-section>
                    <q-item-section>{{$t('StandardLayout.Emailseeeeee')}}</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup to="/account/settings">
                    <q-item-section
                      avatar
                      class="q-mr-sm q-pa-none"
                      style="min-width: 0"
                    >
                      <q-icon name="settings" size="xs" />
                    </q-item-section>
                    <q-item-section>{{$t('StandardLayout.personalCenter')}}</q-item-section>
                  </q-item>
                  <q-separator color="grey-4" />
                  <q-item clickable v-close-popup to="/user/login">
                    <q-item-section
                      avatar
                      class="q-mr-sm q-pa-none"
                      style="min-width: 0"
                    >
                      <q-icon name="logout" size="xs" />
                    </q-item-section>
                    <q-item-section>{{$t('StandardLayout.signOut')}}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-chip>
          </span>
          <q-btn round dense flat color="grey-9" size="sm" icon="translate">
            <q-menu
              transition-show="jump-down"
              transition-hide="jump-up"
              :offset="[0, 24]"
            >
              <q-list style="min-width: 120px" dense>
                <q-item
                  clickable
                  v-close-popup
                  v-for="(item, index) in languageDatas"
                  :key="index"
                >
                  <q-item-section
                    avatar
                    class="q-mr-sm q-pa-none"
                    style="min-width: 20px"
                  >
                    <q-img :src="item.nationalFlag" :ratio="16 / 10" />
                  </q-item-section>
                  <q-item-section>{{ item.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <div>
          <q-menu
            :offset="[0, 36]"
            transition-show="jump-down"
            transition-hide="jump-up"
            content-style="width: 400px;"
            max-height="800px"
            v-model="showMessage"
          >
            <div>
              <q-card class="full-width">
                <q-tabs
                  v-model="messageTab"
                  class="text-grey"
                  active-color="primary"
                  indicator-color="primary"
                  align="justify"
                  narrow-indicator
                >
                  <q-tab name="informs">
                    <span v-if="informCount > 0">
                      {{$t('StandardLayout.notice')}}({{ informCount }})
                    </span>
                    <span v-else>{{$t('StandardLayout.notice')}}</span>
                  </q-tab>
                  <q-tab name="notifies">
                    <span v-if="notifiesCount > 0">
                      {{$t('StandardLayout.news')}}({{ notifiesCount }})
                    </span>
                    <span v-else>{{$t('StandardLayout.news')}}</span>
                  </q-tab>
                  <q-tab name="waitDeals">
                    <span v-if="waitDealCount > 0">
                      {{$t('StandardLayout.upcoming')}}({{ waitDealCount }})
                    </span>
                    <span v-else>{{$t('StandardLayout.upcoming')}}</span>
                  </q-tab>
                </q-tabs>
                <q-separator />
                <q-tab-panels v-model="messageTab" animated>
                  <q-tab-panel name="informs" class="q-pa-none">
                    <q-list>
                      <div
                        v-for="(inform, index) in informs"
                        v-bind:key="index"
                        @click="look('inform', index)"
                      >
                        <q-item
                          class="cursor-pointer q-ma-xs"
                          :disable="inform.disable"
                        >
                          <q-item-section avatar>
                            <q-avatar
                              :color="inform.color"
                              :text-color="inform.textColor"
                              :icon="inform.icon"
                            />
                          </q-item-section>
                          <q-item-section class="q-gutter-xs">
                            <q-item-label :lines="1">
                              {{ inform.title }}
                            </q-item-label>
                            <q-item-label caption>
                              {{ inform.desc }}
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator
                          v-if="index < informs.length - 1"
                          inset="item"
                        />
                      </div>
                      <q-separator />
                      <q-item class="row q-pa-none text-center cursor-pointer">
                        <q-item-section class="col q-pa-none q-ma-none">
                          <q-btn
                            :label="$t('StandardLayout.emptyNotice')"
                            flat
                            :ripple="{ color: 'info' }"
                            class="q-ma-none full-width full-height no-border-radius"
                            @click="clearMessage('informs')"
                          ></q-btn>
                        </q-item-section>
                        <q-separator vertical />
                        <q-item-section class="col q-pa-none q-ma-none">
                          <q-btn
                            :label="$t('StandardLayout.seeMore')"
                            flat
                            :ripple="{ color: 'info' }"
                            class="q-ma-none full-width full-height no-border-radius"
                            @click="lookMore($t('StandardLayout.viewNotice'))"
                          ></q-btn>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-tab-panel>
                  <q-tab-panel name="notifies" class="q-pa-none">
                    <q-list>
                      <div
                        v-for="(notify, index) in notifies"
                        v-bind:key="index"
                        @click="look('notify', index)"
                      >
                        <q-item
                          class="cursor-pointer q-ma-xs"
                          :disable="notify.disable"
                        >
                          <q-item-section avatar>
                            <q-avatar
                              :color="notify.color"
                              :text-color="notify.textColor"
                              :icon="notify.icon"
                            />
                          </q-item-section>
                          <q-item-section class="q-gutter-xs">
                            <q-item-label :lines="1">
                              {{ notify.title }}
                            </q-item-label>
                            <q-item-label caption>
                              {{ notify.desc }}
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator
                          v-if="index < informs.length - 1"
                          inset="item"
                        />
                      </div>
                      <q-separator />
                      <q-item class="row q-pa-none text-center cursor-pointer">
                        <q-item-section class="col q-pa-none q-ma-none">
                          <q-btn
                            :label="$t('StandardLayout.emptyNotice')"
                            flat
                            :ripple="{ color: 'info' }"
                            class="q-ma-none full-width full-height no-border-radius"
                            @click="clearMessage('notifies')"
                          ></q-btn>
                        </q-item-section>
                        <q-separator vertical />
                        <q-item-section class="col q-pa-none q-ma-none">
                          <q-btn
                            :label="$t('StandardLayout.seeMore')"
                            flat
                            :ripple="{ color: 'info' }"
                            class="q-ma-none full-width full-height no-border-radius"
                             @click="lookMore($t('StandardLayout.viewNotice'))"
                          ></q-btn>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-tab-panel>
                  <q-tab-panel name="waitDeals" class="q-pa-none">
                    <q-list>
                      <div
                        v-for="(waitDeal, index) in waitDeals"
                        v-bind:key="index"
                        @click="look('waitDeal', index)"
                      >
                        <q-item
                          class="cursor-pointer q-ma-xs"
                          :disable="waitDeal.disable"
                        >
                          <q-item-section avatar>
                            <q-avatar
                              :color="waitDeal.color"
                              :text-color="waitDeal.textColor"
                              :icon="waitDeal.icon"
                            />
                          </q-item-section>
                          <q-item-section class="q-gutter-xs">
                            <q-item-label :lines="1">
                              {{ waitDeal.title }}
                            </q-item-label>
                            <q-item-label caption>
                              {{ waitDeal.desc }}
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-separator
                          v-if="index < informs.length - 1"
                          inset="item"
                        />
                      </div>
                      <q-separator />
                      <q-item class="row q-pa-none text-center cursor-pointer">
                        <q-item-section class="col q-pa-none q-ma-none">
                          <q-btn
                            :label="$t('StandardLayout.emptyNotice')"
                            flat
                            :ripple="{ color: 'info' }"
                            @click="clearMessage('waitDeals')"
                            class="q-ma-none full-width full-height no-border-radius"
                          ></q-btn>
                        </q-item-section>
                        <q-separator vertical />
                        <q-item-section class="col q-pa-none q-ma-none">
                          <q-btn
                            :label="$t('StandardLayout.seeMore')"
                            flat
                            :ripple="{ color: 'info' }"
                            class="q-ma-none full-width full-height no-border-radius"
                             @click="lookMore($t('StandardLayout.viewNotice'))"
                          ></q-btn>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-tab-panel>
                </q-tab-panels>
              </q-card>
            </div>
          </q-menu>
        </div>
      </q-toolbar>
    </q-header>
    <q-footer
      class="text-blue-grey-4 bg-grey-2"
      v-if="styleSettingsData.contentSettings.footer"
    >
      <div class="q-my-lg">
        <div class="text-center q-mb-sm">
          <span class="inline-block q-mr-sm">Sika Design Pro</span>
          <q-btn type="a" target="_blank" unelevated size="12px" dense round
                 href="http://www.quasarchs.com/">
            <q-avatar size="sm">
              <img alt="quasar" src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
          </q-btn>
          <q-btn type="a" target="_blank" unelevated size="12px" dense round
                 href="https://github.com/dq-open-cloud/quasar-sika-design">
            <q-avatar size="sm">
              <q-icon class="iconfont iconhuaban88 text-primary" />
            </q-avatar>
          </q-btn>
          <span class="inline-block q-ml-sm">Sika Design</span>
        </div>
        <div class="text-center">{{`Copyright@2020 Sika ${$t('StandardLayout.experienceTheTechnicalDepartment')}`}}</div>
      </div>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-white"
      :width="240"
    >
      <div
        class="absolute-top bg-white q-mt-sm"
        v-if="styleSettingsData.contentSettings.leftMenuHeader"
      >
        <div class="bg-transparent q-px-sm q-gutter-x-sm">
          <q-avatar class="q-mb-sm">
            <q-img style="width: 40px" src="imgs/logo/sika-logo.png" />
          </q-avatar>
          <div class="text-body1 inline-block text-primary">
            <strong>Sika Design Pro</strong>
          </div>
        </div>
      </div>
      <div
        :class="{
          leftMenuHeader: styleSettingsData.contentSettings.leftMenuHeader,
          leftMenuUnHeader: !styleSettingsData.contentSettings.leftMenuHeader
        }"
      >
        <q-scroll-area
          class="fit"
          :thumb-style="scrollStyleData.thumbStyle"
          :content-style="scrollStyleData.contentStyle"
          :content-active-style="scrollStyleData.contentActiveStyle"
        >
          <q-list class="rounded-borders text-black">
            <menu-tree :data="menuData" />
          </q-list>
        </q-scroll-area>
      </div>
    </q-drawer>
    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      :width="280"
      @before-show="rightShow"
      @before-hide="rightHide"
      behavior="mobile"
      content-class="bg-white"
    >
      <q-scroll-area
        class="fit"
        :thumb-style="scrollStyleData.thumbStyle"
        :content-style="scrollStyleData.contentStyle"
        :content-active-style="scrollStyleData.contentActiveStyle"
      >
        <div class="q-pa-sm">
          <q-list padding>
            <q-item v-if="false">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.overallStyleSetting')}}</q-item-label>
                <q-item-label>
                  <div class="q-mt-sm q-gutter-x-md row" style="height: 50px">
                    <div
                      class="col-auto shadow-1 cursor-pointer"
                      style="
                        width: 50px;
                        height: 100%;
                        background-color: white;
                        border-radius: 5px;
                      "
                    >
                      <q-icon
                        size="sm"
                        name="done"
                        color="primary"
                        style="margin-top: 15px; margin-left: 15px"
                      />
                    </div>
                    <div
                      class="col-auto shadow-1 cursor-pointer"
                      style="
                        width: 50px;
                        height: 100%;
                        background-color: white;
                        border-radius: 5px;
                      "
                    >
                      <div
                        class="inline-block"
                        style="
                          width: 15px;
                          height: 100%;
                          background-color: #1d1d1d;
                          border-top-left-radius: 5px;
                          border-bottom-left-radius: 5px;
                        "
                      ></div>
                    </div>
                    <div
                      class="col-auto shadow-1 cursor-pointer"
                      style="
                        width: 50px;
                        height: 100%;
                        background-color: #1d1d1d;
                        border-radius: 5px;
                      "
                    ></div>
                  </div>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.themeColor')}}</q-item-label>
                <q-item-label class="q-gutter-sm">
                  <span
                    style="width: 20px; height: 20px"
                    :key="index"
                    v-for="(item, index) in styleSettingsData.themeColorSetting"
                    @click="changeThemeColor(index)"
                  >
                    <q-btn
                      :style="item.style"
                      text-color="white"
                      flat
                      icon="done"
                      dense
                      v-if="item.checked"
                      style="width: 18px; height: 18px"
                      size="xs"
                    />
                    <q-btn
                      :style="item.style"
                      text-color="white"
                      flat
                      dense
                      v-else
                      style="width: 18px; height: 18px"
                      size="xs"
                    />
                  </span>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator spaced="12px" />

            <q-item v-if="false">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.navigationMode')}}</q-item-label>
                <q-item-label caption>
                  <div class="q-mt-sm q-gutter-x-md" style="height: 50px">
                    <div
                      class="inline-block shadow-1 cursor-pointer"
                      style="
                        width: 50px;
                        height: 100%;
                        background-color: white;
                        border-radius: 5px;
                      "
                    ></div>
                    <div
                      class="inline-block shadow-1 cursor-pointer"
                      style="
                        width: 50px;
                        height: 100%;
                        background-color: white;
                        border-radius: 5px;
                      "
                    >
                      <div
                        class="inline-block"
                        style="
                          width: 15px;
                          height: 100%;
                          background-color: #1d1d1d;
                          border-top-left-radius: 5px;
                          border-bottom-left-radius: 5px;
                        "
                      ></div>
                    </div>
                    <div
                      class="inline-block shadow-1 cursor-pointer"
                      style="
                        width: 50px;
                        height: 100%;
                        background-color: #1d1d1d;
                        border-radius: 5px;
                      "
                    ></div>
                  </div>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item tag="div" class="q-mt-md">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.contentAreaWidth')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-select
                  behavior="menu"
                  dense
                  color="primary"
                  outlined
                  v-model="rightSelect"
                  options-dense
                  :options="[$t('StandardLayout.flow'),'流式']"
                >
                </q-select>
              </q-item-section>
            </q-item>
            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.fixedHeader')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle
                  color="primary"
                  v-model="styleSettingsData.fixed.fixedHead"
                  val="friend"
                  @input="changeFixed"
                />
              </q-item-section>
            </q-item>

            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.fixedFooter')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle
                  color="primary"
                  v-model="styleSettingsData.fixed.fixedFooter"
                  val="friend"
                  @input="changeFixed"
                />
              </q-item-section>
            </q-item>

            <q-separator spaced="12px" />
            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.contentArea')}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.header')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle
                  color="primary"
                  v-model="styleSettingsData.contentSettings.header"
                />
              </q-item-section>
            </q-item>
            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.topRapeMenu')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle
                  color="primary"
                  v-model="styleSettingsData.contentSettings.topBar"
                />
              </q-item-section>
            </q-item>
            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.glossy')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle
                  color="primary"
                  v-model="styleSettingsData.contentSettings.topBarGlossy"
                />
              </q-item-section>
            </q-item>
            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.footage')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle
                  color="primary"
                  v-model="styleSettingsData.contentSettings.footer"
                />
              </q-item-section>
            </q-item>
            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.menuHead')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle
                  color="primary"
                  v-model="styleSettingsData.contentSettings.leftMenuHeader"
                />
              </q-item-section>
            </q-item>
            <q-separator spaced="“12px" />
            <q-item-label header>{{$t('StandardLayout.otherSettings')}}</q-item-label>

            <q-item tag="label">
              <q-item-section>
                <q-item-label>{{$t('StandardLayout.viwindMode')}}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-toggle color="primary" v-model="notif2" val="friend" />
              </q-item-section>
            </q-item>
            <q-separator spaced="“12px" />
            <q-item>
              <div
                class="row q-pa-md cursor-pointer"
                style="
                  border: 1px solid #ffe58f;
                  background-color: #fffbe6;
                  border-radius: 2px;
                "
              >
                <div class="col-1">
                  <q-icon name="alarm" />
                </div>
                <div class="col-11">
                  {{$t('StandardLayout.onlyUsedForPreview')}}
                </div>
              </div>
            </q-item>
            <q-item tag="label">
              <q-btn
                :label="$t('StandardLayout.copySetting')"
                class="full-width"
                outline
                color="secondary"
                icon="lightbulb_outline"
                @click="copy"
              ></q-btn>
            </q-item>
          </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <q-page
        :class="{
          topBarClass: styleSettingsData.contentSettings.topBar,
          'q-mt-sm': !styleSettingsData.contentSettings.topBar
        }"
      >
        <q-page-sticky
          v-if="styleSettingsData.contentSettings.topBar"
          expand
          position="top"
          style="z-index: 2000"
          class="q-py-xs bg-grey-2"
        >
          <q-toolbar style="min-height: 40px">
            <q-tabs
              dense
              shrink
              inline-label
              indicator-color="transparent"
              active-bg-color="primary"
              active-color="white"
              v-model="currentPath"
            >
              <div
                v-for="(tab, index) in tabs"
                :key="index"
                class="q-mr-sm items-center"
              >
                <q-tab
                  :ripple="false"
                  :label="tab.name"
                  :name="tab.to"
                  @click="routeTo(tab.to)"
                  :class="{
                    glossy: styleSettingsData.contentSettings.topBarGlossy,
                    'bg-white': !tab.active,
                    'text-grey-7': !tab.active
                  }"
                  exact
                  style="padding: 0 8px; min-height: 24px; border-radius: 4px"
                >
                  <q-icon
                    size="18px"
                    name="refresh"
                    class="q-mx-xs"
                    @click="refresh"
                  ></q-icon>
                  <q-icon
                    v-if="tab.to !== '/dashboard/analysis'"
                    size="18px"
                    name="close"
                    @click.stop="removeTab(index)"
                  ></q-icon>
                </q-tab>
              </div>
            </q-tabs>
          </q-toolbar>
        </q-page-sticky>
        <transition mode="out-in">
          <router-view :key="activeDate" />
        </transition>
        <q-page-sticky
          position="top-right"
          style="z-index: 3000"
          :offset="rightOffsetGithub"
        >
          <q-btn type="a" target="_blank" unelevated dense round
                 href="https://github.com/dq-open-cloud/quasar-sika-design">
            <q-avatar style="width: 40px; height: 40px">
              <q-icon class="iconfont iconhuaban88 text-primary"/>
              <q-tooltip v-if="$q.screen.gt.sm">
                Github 地址
              </q-tooltip>
            </q-avatar>
          </q-btn>
        </q-page-sticky>
        <q-page-sticky
          position="top-right"
          style="z-index: 3000"
          :offset="rightOffset"
        >
          <q-btn
            ref="morphedElement2"
            unelevated
            padding="8px"
            @show="1"
            v-model="rightDrawerSetting"
            icon="settings"
            color="primary"
            square
            @click="triggerRightDrawer"
          />
        </q-page-sticky>
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="150"
          :offset="[5, 68]"
        >
          <q-btn fab-mini icon="keyboard_arrow_up" color="primary" glossy />
        </q-page-scroller>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuTree from 'components/tree/MenuTree'
import LAYOUT_DATA from '@/mock/data/layout/layoutData'
import { morph, colors, copyToClipboard } from 'quasar'

export default {
  name: 'StandardLayout',
  props: {},
  data() {
    return {
      informs: LAYOUT_DATA.informsData,
      notifies: LAYOUT_DATA.notifyDatas,
      menuData: LAYOUT_DATA.routeDatas,
      waitDeals: LAYOUT_DATA.waitDealDatas,
      languageDatas: LAYOUT_DATA.languageDatas,
      scrollStyleData: LAYOUT_DATA.scrollStyleData,
      styleSettingsData: LAYOUT_DATA.styleSettingsData,
      showMessage: false,
      messageTab: 'informs',
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      rightDrawerSetting: false,
      rightOffset: LAYOUT_DATA.rightOffset.rightOffsetInit,
      rightOffsetGithub: LAYOUT_DATA.rightOffset.rightOffsetGithubInit,
      rightSelect: '流式',
      search: '',
      gtSm: this.$q.screen.gt.sm,
      tabs: LAYOUT_DATA.accessTabs,
      currentPath: null,
      notif2: true,
      activeDate: 1
    }
  },
  components: {
    MenuTree
  },
  methods: {
    buildTabRoute() {
      this.currentPath = LAYOUT_DATA.addTab(this.$route.path).to
    },
    routeTo(to) {
      this.$router.push(to).catch((err) => {
        console.log(err)
      })
    },
    removeTab(index) {
      this.tabs.splice(index, 1)
      let to = '/'
      if (this.tabs.length > 0) {
        to = this.tabs[this.tabs.length - 1].to
      }
      this.$router.push(to).catch((err) => {
        console.log(err)
      })
    },
    changeFixed() {
      const fixedData = this.styleSettingsData.fixed
      if (fixedData.fixedHead) {
        fixedData.viewHead = this.replaceView(fixedData.viewHead, 'H')
      } else {
        fixedData.viewHead = this.replaceView(fixedData.viewHead, 'h')
      }
      if (this.styleSettingsData.fixed.fixedFooter) {
        fixedData.viewFoot = this.replaceView(fixedData.viewFoot, 'F')
      } else {
        fixedData.viewFoot = this.replaceView(fixedData.viewFoot, 'f')
      }
    },
    replaceView(sourceStr, str) {
      return sourceStr.substr(0, 1) + str + sourceStr.substr(2)
    },
    changeThemeColor(index) {
      for (
        let i = 0;
        i < this.styleSettingsData.themeColorSetting.length;
        ++i
      ) {
        this.styleSettingsData.themeColorSetting[i].checked = false
      }
      colors.setBrand(
        'primary',
        this.styleSettingsData.themeColorSetting[index].color
      )
      this.styleSettingsData.themeColorSetting[index].checked = true
    },
    look(type, index) {
      if (type === 'inform') {
        this.informs[index].disable = true
      } else if (type === 'notify') {
        this.notifies[index].disable = true
      } else {
        this.waitDeals[index].disable = true
      }
    },
    lookMore(message) {
      this.$q.notify({
        progress: true,
        color: 'primary',
        group: false,
        icon: 'check_circle',
        position: 'top',
        timeout: 2000,
        message: message
      })
    },
    openMessage() {
      this.showMessage = !this.showMessage
    },
    clearMessage(items) {
      if (items === 'informs') {
        this.disable(this.informs)
      } else if (items === 'notifies') {
        this.disable(this.notifies)
      } else {
        this.disable(this.waitDeals)
      }
    },
    disable(items) {
      for (let i = 0; i < items.length; ++i) {
        items[i].disable = true
      }
    },
    onClick() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    rightHide() {
      this.rightOffset = LAYOUT_DATA.rightOffset.rightOffsetInit
      this.rightDrawerSetting = false
    },
    rightShow() {
      this.rightOffset = LAYOUT_DATA.rightOffset.rightOffsetShow
    },
    onResize(size) {
      // 监听容器大小变化
      console.log('----------' + JSON.stringify(size))
    },
    triggerRightDrawer() {
      this.rightDrawerOpen = !this.rightDrawerOpen
      morph({
        from: this.$refs.morphedElement2.$el,
        duration: 30,
        tween: true,
        tweenFromOpacity: 0.8,
        tweenToOpacity: 0.4
      })
    },
    copyQQ(qq) {
      copyToClipboard(qq)
        .then(() => {
          this.$q.notify({
            color: 'white',
            textColor: 'positive',
            icon: 'check_circle',
            position: 'top',
            message: '成功复制QQ群号：' + qq
          })
        })
        .catch(() => {
          // 失败
        })
    },
    copy() {
      copyToClipboard(JSON.stringify(this.styleSettingsData))
        .then(() => {
          this.$q.notify({
            color: 'white',
            textColor: 'positive',
            icon: 'check_circle',
            position: 'top-right',
            message: '成功复制样式'
          })
        })
        .catch(() => {
          // 失败
        })
    },
    refresh() {
      this.activeDate = new Date().getTime()
    }
  },
  watch: {
    gtSm: function() {
      this.rightHide()
    },
    $route: {
      handler: function(val, oldVal) {
        this.buildTabRoute()
      },
      // 深度观察监听
      deep: true
    }
  },
  computed: {
    view: function() {
      return (
        this.styleSettingsData.fixed.viewHead +
        ' ' +
        this.styleSettingsData.fixed.viewBody +
        ' ' +
        this.styleSettingsData.fixed.viewFoot
      )
    },
    menuContentClass: function() {
      if (this.$q.screen.lt.sm) {
        return 'q-mx-xs'
      }
      return ''
    },
    informCount: function() {
      return LAYOUT_DATA.getAvailableCount(this.informs)
    },
    notifiesCount: function() {
      return LAYOUT_DATA.getAvailableCount(this.notifies)
    },
    waitDealCount: function() {
      return LAYOUT_DATA.getAvailableCount(this.waitDeals)
    },
    totalInformCount: function() {
      return this.informCount + this.notifiesCount + this.waitDealCount
    }
  },
  mounted: function() {
    this.buildTabRoute()
  }
}
</script>
<style>
@import 'http://at.alicdn.com/t/font_2136554_95kmewdgocg.css';
</style>

<style lang="sass">
.leftMenuHeader
  height: calc(100% - 55px)
  margin-top: 55px

.leftMenuUnHeader
  height: calc(100%)

.topBarClass
  padding-top: 50px

.v-enter
  opacity: 0
  transform: translate3d(0, -100px, 0)

.v-leave-to
  opacity: 0
  transform: translate3d(0, 100px, 0)

.v-enter-active, .v-leave-active
  transition: all 0.4s ease

.GNL
  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%
</style>
