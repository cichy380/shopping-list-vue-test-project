<template>
  <li :class="{'removed':item.checked}">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" v-model="item.checked" class="custom-control-input" :id="item.id" />
      <label class="custom-control-label"
             :for="item.id"
             :style="{textDecoration: item.checked ? 'line-through' : 'none'}">{{ item.text }}</label>
    </div>
  </li>
</template>

<script>
export default {
  props: ['item']
}
</script>
