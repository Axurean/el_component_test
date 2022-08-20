import Aside from './aside.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Container from './container.vue'
import Main from './main.vue'
import { App } from 'vue'
export default {
  install(app: App) {
    app.component(Aside.name, Aside)
    app.component(Footer.name, Footer)
    app.component(Header.name, Header)
    app.component(Container.name, Container)
    app.component(Main.name, Main)
  }
}