<template>
  <div class="container pt-4 pb-4">
    <h2 class="mb-4">{{ title }}</h2>

    <add-item-component></add-item-component>

    <items-component></items-component>

    <hr class="invisible">

    <strong class="text-muted">data preview:</strong>
    <pre class="p-3 bg-light text-muted"><code>{{ items }}</code></pre>

    <template id="add-item-component-template">
      <form @submit.prevent="addItem" class="mb-4">
        <div class="input-group">
          <input v-model="newItem" placeholder="New item name" type="text" class="form-control">
          <div class="input-group-append">
            <button type="submit" class="btn btn-outline-secondary">Add</button>
          </div>
        </div>
      </form>
    </template>

    <template id="items-component-template">
      <ul class="list-unstyled">
        <li v-for="item in items" :key="item.id" :class="{'removed':item.checked}">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" v-model="item.checked" class="custom-control-input" :id="item.id" />
            <label class="custom-control-label" :for="item.id">{{ item.text }}</label>
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'

let data = {
  items: [
    {id: 'sl-01', text: 'Bananas', checked: false},
    {id: 'sl-02', text: 'Apples', checked: true},
    {id: 'sl-03', text: 'Orange', checked: false}
  ],
  title: 'Shopping List based on Template Components',
  newItem: ''
}

let ItemsComponent = Vue.extend({
  data: function () {
    return data
  },
  template: '<i></i>'
  // template: '#add-item-component-template'
})

let AddItemComponent = Vue.extend({
  data: function () {
    return data
  },
  methods: {
    addItem: function () {
      let text = this.newItem.trim()

      if (text) {
        this.items.push({
          id: this._generateId(),
          text: text,
          checked: false
        })
        this.newItem = ''
      }
    },

    _generateId: function () {
      return 'sl-' + Math.random().toString(36).substr(2, 9)
    }
  },
  template: '<i></i>'
  // template: '#items-component-template'
})

export default {
  name: 'ShoppingListTemplates',
  components: { ItemsComponent, AddItemComponent },
  data () {
    return data
  }
}
</script>
