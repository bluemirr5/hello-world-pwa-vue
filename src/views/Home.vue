<template>
  <div>
    <first-comp />
    <button @click="sendToServiceWorker">send service worker</button>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstComp from '@/components/First.vue'

export default {
  name: 'home',
  components: { FirstComp },
  methods: {
    sendToServiceWorker () {
      if (navigator.serviceWorker.controller) {
        Notification.requestPermission().then(function (result) {
          if (result === 'granted') {
            navigator.serviceWorker.controller.postMessage({
              command: 'oneWayCommunication',
              message: 'Hi, SW'
            })
          }
        })
      } else {
        console.error('No active ServiceWorker')
      }
    }
  }
}
</script>
