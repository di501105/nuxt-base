import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

const palettes = {
  base: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'error'],
} as { [key: string]: string[] }

function baseColor(group: string[]) {
  const colors = {} as { [key: string]: string }
  group.forEach((name) => {
    colors[`el-${name}`] = `var(--el-color-${name})`
    colors[`el-${name}-light-1`] = `var(--el-color-${name}-light-1)`
    colors[`el-${name}-light-2`] = `var(--el-color-${name}-light-2)`
    colors[`el-${name}-light-3`] = `var(--el-color-${name}-light-3)`
    colors[`el-${name}-light-4`] = `var(--el-color-${name}-light-4)`
    colors[`el-${name}-light-5`] = `var(--el-color-${name}-light-5)`
    colors[`el-${name}-light-6`] = `var(--el-color-${name}-light-6)`
    colors[`el-${name}-light-7`] = `var(--el-color-${name}-light-7)`
    colors[`el-${name}-light-8`] = `var(--el-color-${name}-light-8)`
    colors[`el-${name}-light-9`] = `var(--el-color-${name}-light-9)`
    colors[`el-${name}-dark`] = `var(--el-color-${name}-dark)`
    colors[`el-${name}-dark-2`] = `var(--el-color-${name}-dark-2)`
  })
  return colors
}

function componentColor() {
  const colors = {} as { [key: string]: string }
  colors['el-box-shadow'] = 'var(--el-box-shadow)'
  colors['el-box-shadow-light'] = 'var(--el-box-shadow-light)'
  colors['el-box-shadow-lighter'] = 'var(--el-box-shadow-lighter)'
  colors['el-box-shadow-dark'] = 'var(--el-box-shadow-dark)'
  colors['el-bg-color-page'] = 'var(--el-bg-color-page)'
  colors['el-bg-color'] = 'var(--el-bg-color)'
  colors['el-bg-color-overlay'] = 'var(--el-bg-color-overlay)'
  colors['el-text-color-primary'] = 'var(--el-text-color-primary)'
  colors['el-text-color-regular'] = 'var(--el-text-color-regular)'
  colors['el-text-color-secondary'] = 'var(--el-text-color-secondary)'
  colors['el-text-color-placeholder'] = 'var(--el-text-color-placeholder)'
  colors['el-text-color-disabled'] = 'var(--el-text-color-disabled)'
  colors['el-border-color-darker'] = 'var(--el-border-color-darker)'
  colors['el-border-color-dark'] = 'var(--el-border-color-dark)'
  colors['el-border-color'] = 'var(--el-border-color)'
  colors['el-border-color-light'] = 'var(--el-border-color-light)'
  colors['el-border-color-lighter'] = 'var(--el-border-color-lighter)'
  colors['el-border-color-extra-light'] = 'var(--el-border-color-extra-light)'
  colors['el-fill-color-darker'] = 'var(--el-fill-color-darker)'
  colors['el-fill-color-dark'] = 'var(--el-fill-color-dark)'
  colors['el-fill-color'] = 'var(--el-fill-color)'
  colors['el-fill-color-light'] = 'var(--el-fill-color-light)'
  colors['el-fill-color-lighter'] = 'var(--el-fill-color-lighter)'
  colors['el-fill-color-extra-light'] = 'var(--el-fill-color-extra-light)'
  colors['el-fill-color-blank'] = 'var(--el-fill-color-blank)'
  colors['el-mask-color'] = 'var(--el-mask-color)'
  colors['el-mask-color-extra-light'] = 'var(--el-mask-color-extra-light)'
  return colors
}

function getColors(palettes: { [key: string]: string[] }) {
  const colors = {}
  for (const key in palettes) {
    const group = palettes[key]
    if (key === 'base') {
      Object.assign(colors, baseColor(group))
    }
  }
  Object.assign(colors, componentColor())
  return colors
}

export default defineConfig({
  // ...UnoCSS options

  // 設定預設或者自定義的預設規則
  presets: [presetUno({ important: true }), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
  theme: {
    colors: getColors(palettes),
  },
})
