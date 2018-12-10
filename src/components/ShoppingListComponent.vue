<template>
  <div class="shopping-list mt-4">
    <header class="mb-4">
      <h2 v-show="!editTitleMode" @click="editTitleMode=true" class="mb-0">{{ title }}</h2>
      <change-title-component :title="title" @change="changeTitle" v-show="editTitleMode"></change-title-component>
    </header>

    <add-item-component @add="addItem"></add-item-component>

    <items-component :items="items"></items-component>
  </div>
</template>

<script>
import AddItemComponent from './AddItemComponent'
import ItemsComponent from './ItemsComponent'
import ChangeTitleComponent from './ChangeTitleComponent'
import { generateId } from './../common/utils'

export default {
  components: { AddItemComponent, ItemsComponent, ChangeTitleComponent },
  props: ['title', 'items'],
  data () {
    return {
      editTitleMode: false
    }
  },
  methods: {
    addItem: function (text) {
      this.items.push({
        id: generateId(),
        text: text,
        checked: false
      })
    },

    changeTitle: function (text) {
      console.log(text)
      this.editTitleMode = false
      this.$emit('change-title', text)
    }
  }
}
</script>
