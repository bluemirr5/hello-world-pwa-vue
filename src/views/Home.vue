<template>
  <div>
    <first-comp />
  </div>
</template>

<script>
// @ is an alias to /src
import FirstComp from '@/components/First.vue'

export default {
  name: 'home',
  components: { FirstComp }
}
</script>
