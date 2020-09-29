<template>
<div class="home">
    <div class="container-fluid">
    <input type="text" placeholder="Search Show Name" v-model="search" @keyup="filteredTvShows()" class="search">
    <img src="https://image.flaticon.com/icons/png/512/49/49672.png" class='img-fluid'/>
    <h2 class="mt" v-if="!searchCompleted && comedyTvShows.length">Comedy TV Shows</h2>
    <div class="card-deck">
    <div v-for="show in comedyTvShows" :key="show.id">
      <!-- <div> -->
      <div class="card mt"><router-link 
      :to="{
              name: 'ShowDetails',
              params: { showId: show.id , ShowSummary: show.summary, ShowOfficialSite: show.officialSite, ShowImage: show.image.medium,  ShowRating: show.rating.average, ShowName: show.name}
              
            }">
      <img :src="show.image.medium" class="card-img-top">
      <div class="card-body">
        <p class="card-title">{{show.name}}</p>
      </div>
       </router-link>
      <!-- </div> -->
      </div>
     </div>
    </div>
    <!-- ********************************************************************************** -->
    <h2 class="mt" v-if="!searchCompleted && actionTvShows.length">Action TV Shows</h2>
    <div class="card-deck">
    <div v-for="show in actionTvShows" :key="show.id">
      <div class="card mt ml"><router-link 
      :to="{
              name: 'ShowDetails',
              params: { showId: show.id , ShowSummary: show.summary, ShowOfficialSite: show.officialSite, ShowImage: show.image.medium, ShowRating: show.rating.average, ShowName: show.name}
              
            }">
      <img :src="show.image.medium" class="card-img-top">
      <div class="card-body">
        <p class="card-title">{{show.name}}</p>
      </div>
       </router-link>
      </div>
     </div>
    </div>
    <!-- ***************************************************************************** -->
    <h2 class="mt" v-if="!searchCompleted && dramaTvShows.length">Drama TV Shows</h2>
    <div class="card-deck">
    <div v-for="show in dramaTvShows" :key="show.id">
      <div class="card mt ml" @click="eventBus.$emit('openReverseTransactionDialog', {showdetails:show})"><router-link 
      :to="{
              name: 'ShowDetails',
              params: { showId: show.id , ShowSummary: show.summary, ShowOfficialSite: show.officialSite, ShowImage: show.image.medium, ShowRating: show.rating.average,  ShowName: show.name}
              
            }">
      <img :src="show.image.medium" class="card-img-top">
      <div class="card-body">
        <p class="card-title">{{show.name}}</p>
      </div>
       </router-link>
      </div>
     </div>
    </div>
    <!-- ***************************************************************************** -->
  </div>
</div>
</template>

<script>
import { tvShowList } from '../services/api/tvShows'

export default {
  name: 'Home',
  components:  {
  },
  data() {
    return {
      tvShows: [],
      search: '',
      actionTvShowList: [],
      comedyTvShowList:[],
      dramaTvShowList:[],
      comedy: '',
      searchResult: [],
      searchCompleted: false,
      allTvShow: []
    }
  },
  mounted() {
  },
  created() {
    this.init()
  },
  computed: {
    
    actionTvShows() {
      return this.tvShows.filter((eachshow) => {
        if(eachshow.genres == 'Action'){
          return this.actionTvShowList.push(eachshow)
        }
      })
    },
    comedyTvShows() {
      return this.tvShows.filter((eachshow) => {
        if(eachshow.genres == 'Comedy'){
          return this.comedyTvShowList.push(eachshow)
        }
      })
    },
    dramaTvShows() {
      return this.tvShows.filter((eachshow) => {
        if(eachshow.genres == 'Drama'){
          return this.dramaTvShowList.push(eachshow)
        }
      })
    }
  },
  methods: {
    async init(){
      try{
        const thePromiseData = await tvShowList();
        this.tvShows = thePromiseData.data;
        this.allTvShow = thePromiseData.data;
      }
      catch(err){
        this.errorStatus = true;
      }
    },
     filteredTvShows() {
        const search = this.search;
        if(this.search){
          const tvshows = this.tvShows.filter((eachshow) => {
            let searchArr = eachshow.name
            return String(searchArr).toLowerCase().indexOf(search.toLowerCase()) !== -1;
          })
          this.tvShows = tvshows;
          this.searchCompleted = true
        } 
        else {
            this.tvShows = this.allTvShow
            this.searchCompleted = false
        }
        
     }
  
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mt {
  margin-top: 20px;

}

.ml {
  margin-left: 40px;
}
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}

.home {
  background-color: cadetblue;
}

.search {
  width: 300px;
  margin-top: 30px;
  /* margin-left: 10px; */
}

.img-fluid {
    max-width: 100%;
    height: 40px;
    float: right;
    margin-top: 25px;

}

</style>