var randomUser = new Vue({
  el: '#randomUserApp',
  data: {
    users: []
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then( json => {randomUser.users = json.results;})
    }
  },
  created() {
    this.fetchUser();
  }

});
