<template>
  <form @submit.prevent="onSubmit" class="mb-4">
    <div class="input-group">
      <input v-model="newItem" placeholder="New item name" type="text" class="form-control">
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['id'],
  data: function () {
    return {
      newItem: ''
    }
  },
  methods: {
    onSubmit () {
      this.addItem({item: this.newItem, id: this.id})
      this.newItem = ''
    },
    ...mapActions(['addItem'])
  }
}
</script>
