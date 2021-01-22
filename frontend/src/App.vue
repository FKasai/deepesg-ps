<template>

    <div id= "app">
    
    <div v-if= "page == 'home'">
    <input v-model= "message" v-on:keyup.enter= "searchCity">

    <h2> {{lastCityName}} </h2>
    <p v-if = "lastTemp != none" class="item"> Temperature: {{lastTemp}}°C</p>
    <p v-if = "lastHumidity != none" class="item"> Humidity: {{lastHumidity}}% </p>
    <p v-if = "lastWindSpeedy != none" class="item"> Wind Speedy: {{lastWindSpeedy}} </p>

    <p> <button v-if= "saveButton" v-on:click= "saveCity"> Save </button> </p>


    <p class="item" v-if= "errView"> {{errMsg}} </p> 



    <ol>
        <List
            v-for= "city in cities"
            v-bind:item="city"
            v-bind:key = "city.id"
            @deleteCity="deleteCity"
        ></List>
    </ol>

    <p> <button v-if= "quantity >= 2" v-on:click= "page = 'compare'"> Compare </button> </p>
    </div>

    <div v-if= "page == 'compare'">

      <table>
        <thead>
          <tr>
            <th>
                Name
            </th>
            <th>
               Temperature  
            </th>
            <th>
                Humidity
            </th>
            <th>
                Wind Speedy
            </th>
          </tr>
        </thead>
        <tbody>
          <tr 
          v-for="city in cities" v-bind:key="city">
            <td>{{city.text}}</td>
            <td>{{city.temp}}°C</td>
            <td>{{city.humidity}}%</td>
            <td>{{city.wind_velocity}}</td>
          </tr>
        </tbody>
      </table>



        <button v-on:click= "page='home'"> Voltar </button>
    </div>
    </div>

</template>


<script>

import axios from "axios";
import List from './components/list';

export default {
    name: 'app',
    components:{
        List
    },
    data() {
        return {
            info: null,
            lastTemp: null,
            lastHumidity : null,
            lastWindSpeedy: null,
            lastCityName: null,

            saveButton: false,
            errView: false,

            page: "home",

            quantity:0,
            idIndex: 0,
            maximum:5,


            errMsg: "teste",
            message: "Sao Paulo",
            
            cities:[]
        }
    },
    methods: {
        searchCity: function(){
            axios
                .get(`http://localhost:3000/api/${encodeURI(this.message)}`)
                .then(response => {
                    this.lastCityName = response.data.city
                    this.lastTemp = response.data.temp
                    this.lastHumidity = response.data.humidity
                    this.lastWindSpeedy = response.data.wind_speedy
                    this.saveButton = true

                    this.errView = false
                })
                .catch(err => {
                    this.errView = true
                    this.errMsg = err.message

                })
        },
        saveCity: function(){
            var overlap = 0
            for (let i = 0; i < this.quantity; i++) {

                if (this.cities[i].text == this.message){
                    overlap = 1
                    

                }
            }

            if (overlap == 1) {
                this.errView = true
                this.errMsg = `You may not compare the same city two times`
            }
            else if (this.quantity >= this.maximum){
                this.errView = true
                this.errMsg = `You may not add more than ${this.maximum} cities`

            }

            else {


                for (let i = 0; i < this.quantity; i++) {

                    if (this.cities[i].text == this.lastCityName){
                        overlap = 1
                        this.errView = true
                        this.errMsg = `You may not compare the same city two times`

                    }
                }

                if (overlap == 0) {
                    this.errView = false
                    this.cities.push({
                        id: this.idIndex,
                        text: this.lastCityName,
                        temp: this.lastTemp,
                        humidity: this.lastHumidity,
                        wind_velocity: this.lastWindSpeedy
                    })
                    this.quantity += 1
                    this.idIndex += 1
                }
        
            }

        },
        deleteCity: function(cityId){
            for (let k = 0; k < this.quantity; k++) {
                if (cityId == this.cities[k].id){
                    console.log(cityId)
                    console.log(k)
                    this.cities.splice(k, 1)
                    this.quantity -= 1
                    break
                }
                
            }
        }

    }
}

</script>


<style> 
@import 'style.css';
</style>