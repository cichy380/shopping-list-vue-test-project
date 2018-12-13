<template>
  <div class="shopping-list mt-4">
    <header class="mb-4">
      <h2 v-show="!editTitleMode" @click="editTitleMode=true" class="mb-0">{{ title }}</h2>
      <change-title-component :id="id" :title="title" v-show="editTitleMode"></change-title-component>
    </header>

    <add-item-vuex-component :id="id"></add-item-vuex-component>

    <items-component :items="items"></items-component>
  </div>
</template>

<script>
import AddItemVuexComponent from './AddItemVuexComponent'
import ItemsComponent from './ItemsComponent'
import ChangeTitleComponent from './ChangeTitleComponent'

export default {
  components: { AddItemVuexComponent, ItemsComponent, ChangeTitleComponent },
  props: ['id', 'title', 'items'],
  data () {
    return {
      editTitleMode: false
    }
  }
}
</script>
