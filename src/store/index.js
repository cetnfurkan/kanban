import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        name: 'Section 1',
        items: [
          {
            name: 'Section 1 Item 1', id: '0-0'
          },
          {
            name: 'Section 1 Item 2', id: '0-1'
          },
          {
            name: 'Section 1 Item 3', id: '0-2'
          },
          {
            name: 'Section 1 Item 4', id: '0-3'
          },
          {
            name: 'Section 1 Item 5', id: '0-4'
          }
        ]
      },
      {
        name: 'Section 2',
        items: [
          {
            name: 'Section 2 Item 1 drag', id: '1-0'
          },
          {
            name: 'Section 3 Item 2', id: '1-1'
          },
          {
            name: 'Section 3 Item 3', id: '1-2'
          },
          {
            name: 'Section 3 Item 4', id: '1-3'
          },
          {
            name: 'Section 3 Item 5', id: '1-4'
          }
        ]
      },
      {
        name: 'Section 3',
        items: [
          {
            name: 'Section 3 Item 1', id: '2-0'
          },
          {
            name: 'Section 3 Item 2', id: '2-1'
          },
          {
            name: 'Section 3 Item 3', id: '2-2'
          },
          {
            name: 'Section 3 Item 4', id: '2-3'
          },
          {
            name: 'Section 3 Item 5', id: '2-4'
          }
        ]
      }
    ],
    draggedItem: null
  },
  mutations: {
    addSection (state) {
      state.list.push(
        { name: `Section ${state.list.length + 1}`, items: [] }
      )
    },
    addItem (state, payload) {
      state.list[payload].items.push({ name: `New Task Item ${state.list[payload].items.length + 1}`, id: `${payload}- ${state.list[payload].items}` })
    },
    setDraggedItem (state, payload) {
      state.draggedItem = payload
    },
    onDropItem (state, payload) {
      if (payload.sectionIndex !== state.draggedItem.sectionIndex) {
        const some = state.list[payload.sectionIndex].items.some((value) => {
          if (value.id === state.draggedItem.item.id) {
            return true
          }
        })
        if (!some) {
          if (payload.who === 'item') {
            state.list[payload.sectionIndex].items.splice(payload.itemIndex, 0, state.draggedItem.item)
            state.list[state.draggedItem.sectionIndex].items.splice(state.draggedItem.itemIndex, 1)
          } else if (payload.who === 'section') {
            state.list[state.draggedItem.sectionIndex].items.splice(state.draggedItem.itemIndex, 1)
            state.list[payload.sectionIndex].items.push(state.draggedItem.item)
          }
        }
      }
    },
    deleteSection (state, payload) {
      state.list.splice(payload.sectionIndex, 1)
    }
  },
  getters: {
    getList: state => state.list,
    getDraggedItem: state => state.draggedItem
  },
  actions: {
  },
  modules: {
  }
})
