<template>
  <form @submit.prevent="changeTitle({title: newTitle, id: id})">
    <div class="input-group input-group-lg">
      <input v-model="newTitle" placeholder="New title" type="text" class="form-control">
      <div class="input-group-append">
        <button type="submit" class="btn btn-outline-secondary">Change</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'id'],
  data: function () {
    return {
      newTitle: this.title
    }
  },
  methods: {
    ...mapActions(['changeTitle'])
  }
}
</script>
