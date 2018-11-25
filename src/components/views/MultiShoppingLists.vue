<template>
  <div class="container pt-4 pb-4">
    <h2 class="mb-4">Multi Shopping Lists</h2>

    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="list in lists" :key="list.id">
        <button class="nav-link" :class="{'active': list.active}" @click="selectList(list.id)">{{ list.title }}</button>
      </li>
    </ul>

    <shopping-list-component v-for="list in lists"
                             :key="list.id"
                             :items="list.items"
                             :title="list.title"
                             v-show="list.active"></shopping-list-component>

    <hr>
    <strong class="text-muted">data preview:</strong>
    <pre class="p-3 bg-light text-muted"><code>{{ lists }}</code></pre>
  </div>
</template>

<script>
import ShoppingListComponent from './../ShoppingListComponent'

export default {
  name: 'MultiShoppingLists',
  components: { ShoppingListComponent },
  data () {
    return {
      lists: [
        {
          id: 'food',
          title: 'Food list',
          items: [
            {id: 'sl-01', text: 'Bananas', checked: false},
            {id: 'sl-02', text: 'Apples', checked: true},
            {id: 'sl-03', text: 'Orange', checked: false}
          ],
          active: true
        },
        {
          id: 'clothes',
          title: 'Clothes list',
          items: [
            {id: 'sl-04', text: 'Shoes', checked: false},
            {id: 'sl-05', text: 'T-shirt', checked: false},
            {id: 'sl-06', text: 'Hat', checked: true},
            {id: 'sl-07', text: 'Jacket', checked: false}
          ],
          active: false
        }
      ]
    }
  },
  methods: {
    selectList (selectedListId) {
      this.lists.forEach(list => {
        if (list.id === selectedListId) {
          list.active = true
        } else {
          list.active = false
        }
      })
    }
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
