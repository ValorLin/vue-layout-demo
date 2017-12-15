# Vue Layout Demo

> A simple way to manage layouts with vue-router

Create App.vue

**src/App.vue**
```html
<router-view id="app" name="layout">
  <router-view></router-view>
</router-view>
```



Create a layout component, <slot> is required, nothing special.
**src/components/layouts/Jumbotron.vue**

```html
<template>
  <div class="jumbotron-layout">

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
     <!-- nav content -->
    </nav>

    <!-- <slot> is required -->
    <slot></slot>

    <footer class="container">
      <p>&copy; Company 2017</p>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'jumbotron-layout'
  }
</script>

<style lang="scss">
  /* Move down content because we have a fixed navbar that is 3.5rem tall */
  .jumbotron-layout {
    padding-top: 3.5rem;
  }
</style>
```



Create a view component.
**src/views/Home.vue**

```
  <main role="main">
    Hello world
  </main>
```



Configure routes
**src/router/index.js**

```javascript
import Jumbotron from '@/components/Layouts/Jumbotron'
export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    components: {
      // This is the main component
      default: Home,
      // Specific which layout you want to use
      layout: Jumbotron
    }
  }]
})
```

For more details, check out the source code.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
