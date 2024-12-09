<template>
    <h1>Vista de Parent</h1>
    <ParentComponent />
</template>
<script>
import ParentComponent from '@/components/ParentComponent.vue'

export default {
  name: 'ParentView',
  components: {
    ParentComponent
  }
}
</script>