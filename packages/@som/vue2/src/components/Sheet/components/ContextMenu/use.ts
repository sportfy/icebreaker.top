import { IContextMenuContext } from './type'
import { reactive } from 'vue-demi'
export function useContextMenu() {
  const context: IContextMenuContext = reactive({
    show() {
      throw new Error('context is null')
    },
    close() {
      throw new Error('context is null')
    },
    el: undefined
  })
  return {
    context
  }
}
