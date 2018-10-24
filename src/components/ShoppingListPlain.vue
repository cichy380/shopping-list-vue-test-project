<template>
  <div class="container pt-4 pb-4">
    <h2>{{ title }}</h2>
    <ul class="list-unstyled">
      <li v-for="item in items" :key="item.text" :class="{'removed':item.checked}">
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="item.checked" /> {{ item.text }}
          </label>
        </div>
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <div class="input-group">
        <input v-model="newItem" placeholder="New item name" type="text" class="form-control">
        <div class="input-group-append">
          <button type="submit" class="btn btn-outline-secondary">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
var data = {
  items: [
    {text: 'Bananas', checked: false},
    {text: 'Apples', checked: true},
    {text: 'Orange', checked: false}
  ],
  title: 'Shopping List: Plain',
  newItem: ''
}

export default {
  name: 'ShoppingListPlain',
  data () {
    return data
  },
  methods: {
    addItem: function () {
      this.items.push({
        text: this.newItem,
        checked: false
      })
    }
  }
}
</script>
