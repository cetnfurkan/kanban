<template>
  <div
    style="min-width: 290px; max-width: 350px"
    class="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-12 mx-2 p-2 vh-100"
  >
    <div
     @drop="drop({sectionIndex, who: 'section'})"
    class="row">
      <div
        style="font-size: 16px; font-weight: 500; font-style: normal"
        class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-8"
      >
        <input class="form-control" v-if="edit" type="text" :value="section.name"
        @blur="sectionData.name = $event.target.value; edit = false;"
        @keyup.enter=" sectionData.name = $event.target.value; edit = false;">
        <p v-else @click="edit = true">{{section.name}}</p>
      </div>
      <div
        style="cursor: pointer"
        @click.capture="addItem(sectionIndex)"
        class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"
      >
        <icon name="plus" size="10px" />
      </div>
      <div
        style="cursor: pointer"
        @click="deleteSection({sectionIndex})"
      class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
        <icon name="trash" size="10px" />
      </div>
      <draggable
        tag="transition-group"
        v-bind="dragOptions"
       :list="section.items"
       >
        <Items
          v-for="(item, index) in section.items"
          :sectionIndex="sectionIndex"
          :itemIndex="index"
          :key="index"
          :item="item"
          :section="section"
        />
        <div
          v-if="section.items.length == 0"
          style="max-height: 800px"
          class="row vh-100 grad rounded-3 mt-3"
        >
          <span class="text-center mt-4">
            <span @click="addItem(sectionIndex)" style="cursor: pointer"
              ><icon name="plus" size="12px" /> Add Task</span
            ></span
          >
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import Items from './Items.vue'
import { VueDraggableNext } from 'vue-draggable-next'
export default {
  data () {
    return {
      item: this.section.items,
      sectionData: this.section,
      edit: false
    }
  },
  props: {
    section: Object,
    sectionIndex: Number
  },
  methods: {
    addItem (e) {
      this.$store.commit('addItem', e)
    },
    drop (e) {
      this.$store.commit('onDropItem', e)
    },
    deleteSection (e) {
      this.$store.commit('deleteSection', e)
    }
  },
  components: {
    Items,
    draggable: VueDraggableNext
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  }
}
</script>

<style>
.grad {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(231, 231, 231, 0.164) 0%,
    rgba(202, 205, 208, 0.315) 100%
  );
}
.ghost {
  opacity: 0.5;
}
</style>
