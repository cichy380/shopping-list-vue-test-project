<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link to="/plain" class="nav-item nav-link">Plain</router-link>
        <router-link to="/components" class="nav-item nav-link">Components</router-link>
        <router-link to="/templates" class="nav-item nav-link">Templates</router-link>
        <router-link to="/singlefile" class="nav-item nav-link">Single File</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
