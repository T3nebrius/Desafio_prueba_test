<template>
    <div>
        <h2>Componente Parent</h2>
      <Child @sendText="updateText" />
      <p>Texto recibido: {{ receivedText }}</p>
    </div>
  </template>
  
  <script>
  import Child from '@/components/ChildComponent.vue';
  
  export default {
    components: { Child },
    data() {
      return {
        receivedText: '',
      };
    },
    methods: {
      updateText(text) {
        this.receivedText = text;
      },
    },
  };
  </script>
  
  <style scoped>
  p {
    margin-top: 10px;
  }
  </style>
  