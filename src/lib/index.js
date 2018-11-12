import Captcha from './vue-imgcaptcha.vue'

export default {
	install (Vue, options) {
		Vue.component('vue-imgcaptcha', Captcha)
	}
}