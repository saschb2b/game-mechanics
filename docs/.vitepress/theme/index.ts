import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import './style.css'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // Zoom every <img> in the docs content area EXCEPT those inside an <a>
      // tag (the home-page game cards are anchors-with-images and should
      // navigate, not zoom).
      const imgs = Array.from(
        document.querySelectorAll<HTMLImageElement>('.vp-doc img')
      ).filter((img) => !img.closest('a'))
      mediumZoom(imgs, {
        background: 'var(--vp-c-bg)',
        margin: 24,
      })
    }
    onMounted(() => initZoom())
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}
