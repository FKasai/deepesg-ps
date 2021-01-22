<template>
  <div class="Home">
  <p> alooo </p>
  <input v-model="message">
  <p> <button v-on:click= "saveCity"> Save </button> </p>


    <p v-if= "errView"> You may not add more than {{maximum}} cities </p>

    <p> <button v-on:click= "axiosTest"> atualizar  </button> {{info}}</p>

    <ol>
        <list
            v-for= "name in cityNames"
            v-bind:item="name"
            v-bind:key = "name.id"
        ></list>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    cityNames: String,
    maximum: Number,


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
