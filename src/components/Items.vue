<template>
  <div class="p-2"
    @dragstart="dragStart({sectionIndex, itemIndex, item})"
    @drop="onDrop({sectionIndex, itemIndex, item, who: 'item'})"
  >
    <div
    style="min-height: 110px"
    class="row bg-white rounded-3 border border-1 shadow-sm"
  >
    <div class="col-3 d-flex align-items-center">
      <div class="rounded-pill bg-dark p-4 pt-1 pb-1"></div>
    </div>
    <div class="col-9 d-flex align-items-start justify-content-end">
      <icon name="ellipsis-h" class="mt-2" size="13px" />
    </div>
    <div class="col-12">{{ item.name }}</div>
    <div style="font-size: 10px" class="col-8">24 Şub</div>
    <div
      style="font-size: 13px"
      class="col-4 d-flex align-items-start justify-content-end"
    >
      3 &nbsp;<icon class="mt-1" name="list-ul" size="12px" />
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    sectionIndex: Number,
    itemIndex: Number
  },
  methods: {
    dragStart (e) {
      this.$store.commit('setDraggedItem', e)
    },
    onDrop (e) {
      this.$store.commit('onDropItem', e)
    }
  }
}
</script>
