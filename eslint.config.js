import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    unocss: true,
    formatters: true,
  }, {
    rules: {
      'ts/no-explicit-any': 'off',
      'import/no-named-as-default': 0,
      'style/eol-last': 0,
      'vue/no-multiple-template-root': 'off',
    },
  }),
)
