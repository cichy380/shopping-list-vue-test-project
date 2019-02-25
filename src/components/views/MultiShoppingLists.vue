<template>
  <div class="container pt-4 pb-4">
    <h2 class="mb-4">Multi Shopping Lists from Server</h2>

    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(list, index) in shoppinglists" :key="list.id">
        <button class="nav-link" :class="{'active': activeTab === index}" @click="activeTab=index">
          {{ list.title }}
          <span class="badge badge-danger" v-show="activeItemsCount(list.id)">{{ activeItemsCount(list.id) }}</span>
        </button>
      </li>
    </ul>

    <shopping-list-component v-for="(list, index) in shoppinglists"
                             :key="list.id"
                             :id="list.id"
                             :items="list.items"
                             :title="list.title"
                             v-show="activeTab === index"></shopping-list-component>

    <hr>
    <strong class="text-muted">data preview:</strong>
    <pre class="p-3 bg-light text-muted"><code>{{ shoppinglists }}</code></pre>
  </div>
</template>

<script>
import store from './../../vuex/store'
import { mapGetters, mapActions } from 'vuex'
import ShoppingListComponent from './../ShoppingListComponent'

export default {
  name: 'MultiShoppingLists',
  store,
  components: { ShoppingListComponent },
  data () {
    return {
      activeTab: 0
    }
  },
  computed: mapGetters({
    shoppinglists: 'getLists',
    activeItemsCount: 'activeItemsByListIdCount'
  }),
  mounted () {
    this.populateShoppingLists()
  },
  methods: {
    ...mapActions(['populateShoppingLists'])
  }
}
</script>

<style scoped>
  .nav-link {
    position: relative;
    background: #fff;
    top: -1px;
    outline: none;
  }
  .nav-link:hover,
  .nav-link.active {
    top: 0;
  }
</style>
