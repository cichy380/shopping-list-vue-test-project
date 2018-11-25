<template>
  <div class="shopping-list mt-4">
    <h2 class="mb-4">{{ title }}</h2>
    <add-item-component></add-item-component>
    <items-component :items="items"></items-component>
  </div>
</template>

<script>
import AddItemComponent from './AddItemComponent'
import ItemsComponent from './ItemsComponent'

export default {
  components: { AddItemComponent, ItemsComponent },
  props: ['title', 'items']
}
</script>
