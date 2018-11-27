<template>
  <div class="shopping-list mt-4">
    <h2 class="mb-4">{{ title }}</h2>

    <add-item-component @add="addItem"></add-item-component>

    <items-component :items="items"></items-component>
  </div>
</template>

<script>
import AddItemComponent from './AddItemComponent'
import ItemsComponent from './ItemsComponent'

export default {
  components: { AddItemComponent, ItemsComponent },
  props: ['title', 'items'],
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
