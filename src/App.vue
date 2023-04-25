<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavBar />
  <!-- <a class="navbar-brand " href="../views/TimelineView.vue">考研时间线</a> -->
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: "APP",
  components: {
    NavBar,
  }
}

</script>

<style></style>
