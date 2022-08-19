import ElButton from './button.vue'
import { App } from 'vue'

export default {
  install(app:App) {
    app.component(ElButton.name, ElButton)
  }
}