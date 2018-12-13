<template>
  <form @submit.prevent="addItem" class="mb-4">
    <div class="input-group">
      <input v-model="newItem" placeholder="New item name" type="text" class="form-control">
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem: function () {
      let text = this.newItem.trim()
      if (text) {
        this.$emit('add', text)
        this.newItem = ''
      }
    }
  }
}
</script>
