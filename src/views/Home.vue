<template>
    <div class="container-fluid">
      <draggable
        tag="transition-group"
        v-bind="dragOptions"
       :list="list" class="row flex-nowrap">
        <Section
          :list="list"
          v-for="(section, index) in list"
          :key="index"
          :section="section"
          :sectionIndex="index"
        />
        <div
          style="min-width: 290px; max-width: 350px"
          class="col-xl-3 col-lg-4 col-md-5 col-sm-7 col-12 mx-3 p-2"
        >
          <div class="row">
            <div
              @click="addSection(index)"
              style="font-size: 16px; font-weight: 500; font-style: normal; cursor: pointer;"
              class="
                col-xl-9 col-lg-9 col-md-9 col-sm-9 col-8
                d-flex
                align-items-center
              "
            >
              <icon class="mt-1" name="plus" size="13px" /> &nbsp; Add Section
            </div>
          </div>
        </div>
      </draggable>
    </div>
</template>

<script>
import Section from '../components/Section.vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default {
  data () {
    return {
      list: this.$store.getters.getList
    }
  },
  methods: {
    addSection (event) {
      this.$store.commit('addSection')
    }
  },
  components: {
    Section,
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
.ghost {
  opacity: 0.5;
}
</style>
