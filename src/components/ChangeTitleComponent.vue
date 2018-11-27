<template>
  <form @submit.prevent="changeText">
    <div class="input-group input-group-lg">
      <input :value="value" placeholder="New title" type="text" class="form-control">
      <div class="input-group-append">
        <button type="submit" class="btn btn-outline-secondary">Change</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['value'],
  data: function () {
    return {
      newText: ''
    }
  },
  methods: {
    changeText: function () {
      let text = this.newText.trim()

      if (text) {
        this.$emit('change', text)
        this.newText = ''
      }
    }
  }
}
</script>
