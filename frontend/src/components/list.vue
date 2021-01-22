<template>
    <div>
        <div class= "item">{{item.text}} <button class="buttonX" v-on:click="deleteCity(item.id)"> X </button></div>

    </div> 
</template>
<script>
export default {
    name: 'list',
    props: ['item'],
    methods: {
        deleteCity: function (itemId) {
            this.$emit('deleteCity', itemId)
        }
    }
}
</script>