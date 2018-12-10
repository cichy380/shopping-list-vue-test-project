<template>
  <form @submit.prevent="changeText">
    <div class="input-group input-group-lg">
      <input v-model="newText" placeholder="New title" type="text" class="form-control">
      <div class="input-group-append">
        <button type="submit" class="btn btn-outline-secondary">Change</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['title'],
  data: function () {
    return {
      newText: this.title
    }
  },
  methods: {
    changeText: function () {
      let text = this.newText.trim()

      if (text) {
        this.$emit('change', text)
      }
    }
  }
}
</script>
