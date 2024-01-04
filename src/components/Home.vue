<template>
  <!-- Events -->
  <div class="row">
    <div class="container">
      <h1 class="text-center p-3">Our Events</h1>
      <div class="col-lg-12">
        <div class="row event-search-content">

          <div class="col-md-6 mb-4 shadow-lg" v-for="event in events" :key="event.id">
            <div class="contentCard contentCard--event">
              <div class="contentCard-top">
              <router-link :to="'/event/' + event.id" >
              <img :src="event.image" alt="images" class="img-fluid" />
              </router-link>
              
              </div>
              <div class="contentCard-bottom">
                <h5><router-link :to="'/event/' + event.id" >{{event.title}} </router-link> </h5>
                <div class="contentCard-more">
                  <div class="d-flex align-items-center">
                    <div class="icon"> 
                      <img src="dist/images/icon/Location.png" alt="location" />
                    </div>
                    <span>{{event.location}}</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <div class="icon">
                      <img src="dist/images/icon/calendar.png" alt="calendar" />
                    </div>
                    <span>{{event.date}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

         </div>
            </div>
        </div>
    </div>
</template>

<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: 'Home',
  data() {
    return {
      events:[]
    };
  },
  methods: {
    Allblog() {
       DataService.event()
        .then(response => {
          console.log(response.data);
          if(response.data)
            this.events= response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    }
  }, mounted() {
    this.Allblog();
  }
}
</script>
