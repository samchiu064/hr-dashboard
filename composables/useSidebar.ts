import { ref } from 'vue'

export const useSidebar = () => {
  const isActive: Ref<boolean> = useState('isActive', () => ref(false))

  const open = () => {
    isActive.value = true
  }

  const close = () => {
    isActive.value = false
  }

  const toggle = () => {
    isActive.value = !isActive.value
  }

  return { isActive, open, close, toggle }
}
