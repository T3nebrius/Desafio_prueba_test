<template>
    <div>
      <input v-model="inputText" placeholder="Escribe algo" />
      <button @click="sendText">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputText: '',
      };
    },
    methods: {
      sendText() {
        this.$emit('sendText', this.inputText);
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    margin-top: 10px;
  }
  </style>
  