<template>
  <ul class="list-unstyled">
    <item-component v-for="item in items" :item="item" :key="item.id"></item-component>
  </ul>
</template>

<script>
import ItemComponent from './ItemComponent'

export default {
  components: { ItemComponent },
  props: ['items']
}
</script>
