<template>
  <main role="main">
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Vue Layout Demo</h1>
        <p>Choose different layout: </p>

        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input"
                   type="radio"
                   name="layout"
                   value="/empty"
                   v-model="layout">
            Empty Layout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input"
                   type="radio"
                   name="layout"
                   value="/jumbotron"
                   v-model="layout">
            Jumbotron Layout
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input"
                   type="radio"
                   name="layout"
                   value="/narrow-jumbotron"
                   v-model="layout">
            Narrow Layout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
            Donec sed odio dui. </p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
            condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.
            Donec sed odio dui. </p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div class="col-md-4">
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta
            felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
            massa justo sit amet risus.</p>
          <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>
    </div> <!-- /container -->
  </main>
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        layout: this.$route.path
      }
    },
    watch: {
      layout (val) {
        this.$router.push(val)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
