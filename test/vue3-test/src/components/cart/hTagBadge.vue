<template>
  <h1 v-if="hTag === 'h1'">
    {{ keyText }}
    <BaseBadge v-if="isBadge && valueText" mode="elegant">{{
      valueText
    }}</BaseBadge>
    <span v-else-if="!isBadge && valueText">{{ valueText }}</span>
  </h1>
  <h2 v-else-if="hTag === 'h2'">
    {{ keyText }}
    <BaseBadge v-if="isBadge && valueText" mode="elegant">{{
      valueText
    }}</BaseBadge>
    <span v-else-if="!isBadge && valueText">{{ valueText }}</span>
  </h2>
  <h3 v-else>
    {{ keyText }}
    <BaseBadge v-if="isBadge && valueText" mode="elegant">{{
      valueText
    }}</BaseBadge>
    <span v-else-if="!isBadge && valueText">{{ valueText }}</span>
  </h3>
</template>

<script>
export default {
  props: {
    isBadge: {
      type: Boolean,
      default: false,
    },
    hTag: {
      type: String,
      default: 'h3',
    },
    valueText: {
      type: String,
      default: '',
    },
    keyText: {
      type: String,
      default: '',
    },
  },
};
</script>
