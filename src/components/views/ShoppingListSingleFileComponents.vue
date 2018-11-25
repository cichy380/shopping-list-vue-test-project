<template>
  <div class="container pt-4 pb-4">
    <h2 class="mb-4">{{ title }}</h2>

    <add-item-component @add="addItem"></add-item-component>

    <items-component :items="items"></items-component>

    <hr class="invisible">
    <strong class="text-muted">data preview:</strong>
    <pre class="p-3 bg-light text-muted"><code>{{ items }}</code></pre>
  </div>
</template>

<script>
import AddItemComponent from './../AddItemComponent'
import ItemsComponent from './../ItemsComponent'

let data = {
  items: [
    {id: 'sl-01', text: 'Bananas', checked: false},
    {id: 'sl-02', text: 'Apples', checked: true},
    {id: 'sl-03', text: 'Orange', checked: false}
  ],
  title: 'Shopping List based on Single File Components',
  newItem: ''
}

export default {
  name: 'ShoppingListSingleFileComponents',
  components: { AddItemComponent, ItemsComponent },
  data () {
    return data
  },
  methods: {
    addItem: function (text) {
      this.items.push({
        id: this._generateId(),
        text: text,
        checked: false
      })
    },

    _generateId: function () {
      return 'sl-' + Math.random().toString(36).substr(2, 9)
    }
  }
}
</script>
