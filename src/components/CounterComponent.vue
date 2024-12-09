<template>
    <div>
      <h1>Contador: {{ counter }}</h1>
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['counter']),
    },
    methods: {
      ...mapActions(['increment', 'decrement']),
    },
  };
  </script>
  
  <style scoped>
  button {
    margin: 5px;
  }
  </style>
  