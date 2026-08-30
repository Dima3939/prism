import { ref, reactive } from 'vue'
import type { CursorState } from '../types'

const cursorState = ref<CursorState>('DEFAULT')
const cursorLabel = ref<string>('')
const cursorPosition = reactive({ x: -100, y: -100 })
const isHoveringInteractive = ref(false)

export function useCursor() {
  function setCursor(state: CursorState, label = '') {
    cursorState.value = state
    cursorLabel.value = label
    isHoveringInteractive.value = state !== 'DEFAULT'
  }

  function resetCursor() {
    cursorState.value = 'DEFAULT'
    cursorLabel.value = ''
    isHoveringInteractive.value = false
  }

  function updatePosition(x: number, y: number) {
    cursorPosition.x = x
    cursorPosition.y = y
  }

  return {
    cursorState,
    cursorLabel,
    cursorPosition,
    isHoveringInteractive,
    setCursor,
    resetCursor,
    updatePosition
  }
}
