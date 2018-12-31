<template>
  <div id="app">
    <div>
      <TopHeader />
      <router-link to="/home">Go to home</router-link>
      <router-link to="/new">Go to New</router-link>
      <router-link to="/api">Go to Api</router-link>
      <router-link to="/about">Go to About</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
 import TopHeader from './components/conmon/topHeader';
  axios.get('https://cnodejs.org/api/v1/topics', {
    params: {
      page: 1
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  export default {
    name: 'App',
    components: { TopHeader }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
