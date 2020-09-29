<template>
  <div class="container-fluid">
    <router-link to="/"><p class="mt">Home</p></router-link>
    <div class="card mb-3" style="max-width: 100%;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="showImage" class="card-img" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2>{{showName}}</h2>
        <h5 class="card-title">Rating - {{showRating}}</h5>
        <p class="card-text"><span v-html="showSummary"></span></p>
        <p class="card-text"><a :href="showOfficialSite">Go to Official Site</a></p>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {

  props: ['showdetailss'],
  data() {
    return {
      tvShows: [],
      showSummary: '',
      showOfficialSite: '',
      showImage: '',
      showRating: '',
      showName: ''

    }
  },
  mounted () {
    this.showSummary = this.$route.params.ShowSummary
    this.showOfficialSite = this.$route.params.ShowOfficialSite
    this.showImage = this.$route.params.ShowImage
    this.showRating = this.$route.params.ShowRating
    this.showName = this.$route.params.ShowName
  }


}
</script>

<style scoped>

  .imgWidth {
    width: 50%;
    height: 50%;
  }

  .mt {
    margin-top: 20px;
    /* font-weight: bold; */
  }
</style>