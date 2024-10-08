import { ElMessage } from 'element-plus'

export default defineNuxtPlugin((_nuxtApp) => {
  // const { session } = useUserSession()

  const api = $fetch.create({

    baseURL: import.meta.dev ? '/' : '/api',
    timeout: 60 * 1000,
    onRequest({ options }) {
      let token
      = 'WEB:V33Kzx1yregtze49a+ojrkJN3JhVQrqELT/gahs8EdKa8kSmq+VYy/JLW9uHdH28'
      window.microApp && (token = window.microApp.getData().token)
      options.headers = options.headers || {}
      options.headers.set('Token', token)
      options.headers.set('Tenantid', 'todoTenantId')
      // if (session.value?.token) {
      //   const headers = options.headers ||= {}
      //   if (Array.isArray(headers)) {
      //     headers.push(['Authorization', `Bearer ${session.value?.token}`])
      //   } else if (headers instanceof Headers) {
      //     headers.set('Authorization', `Bearer ${session.value?.token}`)
      //   } else {
      //     headers.Authorization = `Bearer ${session.value?.token}`
      //   }
      // }
    },
    async onResponseError({ response }) {
      const status = response.status
      switch (status) {
        case 500:
          ElMessage.error('Error!')
          break
        case 502:
          break
        case 503:
          ElMessage.error('Error!')
          break
        case 404:
          ElMessage.error('Error!')
          break
        case 403:
          break
        case 400:
          break
        case 401:
          ElMessage.error('token 失效！')
          break
        case 408:
          ElMessage.error('登录过期！')
          break
        default:
          ElMessage.error('系统开小差了，请稍后重试！')
          break
      }
    },
  })

  return {
    provide: {
      api,
    },
  }
})