<template>
  <div class="q-chat-message">
    <q-chat-message
      :text="['Have you seen Quasar?']"
      sent
      text-color="white"
      bg-color="primary"
    >
      <template v-slot:name>me</template>
      <template v-slot:stamp>7 minutes ago</template>
      <template v-slot:avatar>
        <img
          class="q-message-avatar q-message-avatar--sent"
          src="https://cdn.quasar.dev/img/avatar4.jpg"
        >
      </template>
    </q-chat-message>
    <q-chat-message
      bg-color="amber"
    >
      <template v-slot:name>Mary</template>
      <template v-slot:avatar>
        <img
          class="q-message-avatar q-message-avatar--received"
          src="https://cdn.quasar.dev/img/avatar2.jpg"
        >
      </template>
      <div>
        Already building an app with it...
        <img src="https://cdn.quasar.dev/img/discord-qeart.png" class="my-emoji">
      </div>
      <q-spinner-dots size="2rem" />
    </q-chat-message>
    <q-chat-message
      :text="['Have you seen Quasar?']"
      sent
      text-color="white"
      bg-color="primary"
    >
      <template v-slot:name>me</template>
      <template v-slot:stamp>7 minutes ago</template>
      <template v-slot:avatar>
        <img
          class="q-message-avatar q-message-avatar--sent"
          src="https://cdn.quasar.dev/img/avatar4.jpg"
        >
      </template>
    </q-chat-message>
    <q-chat-message
      bg-color="amber"
    >
      <template v-slot:name>Mary</template>
      <template v-slot:avatar>
        <img
          class="q-message-avatar q-message-avatar--received"
          src="https://cdn.quasar.dev/img/avatar2.jpg"
        >
      </template>
      <div>
        Already building an app with it...
        <img src="https://cdn.quasar.dev/img/discord-qeart.png" class="my-emoji">
      </div>
      <q-spinner-dots size="2rem" />
    </q-chat-message>
  </div>
</template>

<script>
export default {
  props: {
    propValue: {
      type: String,
      default: ''
    },
    element: {
      type: Object
    }
  },
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  created() {
    // console.log(this.element.attr)
  }
}
</script>

<style lang="scss" scoped>
.q-chat-message {
  transition: .1s;
  width: 100%;

  .my-emoji {
    vertical-align: middle;
    height: 2em;
    width: 2em;
  }
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
</style>
