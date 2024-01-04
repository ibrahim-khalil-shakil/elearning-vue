<template>
  <!-- Breadcrumb Starts Here -->

  <!-- Event Info Starts Here -->
  <div class="event-info section pt-0 mb-0 pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="event-info-main">
            <h6 class="mb-2 font-title--card display-6 text-start">{{ event.title }}</h6>
            <div class="image mb-2">
              <img :src="event.image" alt="img" class="img-fluid rounded-2 " />
            </div>
            <div class="tab-content event-info-tab-content pt-0" id="nav-tabContent">
              <div class="tab-pane nav-overview fade show active" id="nav-overview" role="tabpanel"
                aria-labelledby="nav-overview-tab">
                <h4 class="p-2">Event Topic</h4>
                <p class=" mb-3"><b>{{ event.topic }}</b></p>
                <p class="mb-3">{{ event.description }}</p>
                <h4 class="p-2">Our Goal</h4>
                <p class=" mb-3"><b>{{ event.goal }}</b></p>
                <p class="mb-3">{{ event.description }}</p>
              </div>
              <h1 class="font-title--card">Event Type & Location:</h1>
              <p class="mb-3">{{ event.location }}</p>
              <h1 class="font-title--card">Organized By:</h1>
              <p class="mb-3">{{ event.hosted_by }}</p>
              <h1 class="font-title--card">Date:</h1>
              <p class="mb-3">{{ event.date }}</p>
            </div>
            <div class="cart__checkout-process">
              <form action="#">
                <button type="submit" class="button button-lg button--primary w-100 mb-2">Book a Seat</button>
                <p class="time-left text-center pb-3">You must <a href="http://localhost/elearning/student/login">login</a> before register event</p>
              </form>
              <div class="cart__includes-info">
                <ul class="mb-0">
                  <li>
                    <p>Total Slot:</p>
                    <p>250</p>
                  </li>
                  <li>
                    <p>Booked Slot:</p>
                    <p>172</p>
                  </li>
                  <li class="border-0 mb-0 pb-0">
                    <p>Remaining Slot:</p>
                    <p>78</p>
                  </li>
                  <li class="d-none">
                    <p class="font-title--card">Total:</p>
                    <p class="total-price font-title--card">$36.49</p>
                  </li>
                </ul>
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
  name: 'Blogs',
  data() {
    return {
      event: [],
      recblogs: []
    };
  },
  methods: {
    sEvent(id) {
      DataService.singleEvent(id)
        .then(response => {
          console.log(response.data)
          if (response.data)
            this.event = response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
        });
    },
    recblog() {
      DataService.recentblogs()
        .then(response => {
          if (response.data)
            this.recblogs = response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
        });
    },
  }, mounted() {
    this.sEvent(this.$route.params.id);
    //this.recblog();
  }
}
</script>
