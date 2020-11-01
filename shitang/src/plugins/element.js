import Vue from 'vue'
import { Button, Tag ,Main ,Header ,Aside ,MenuItem ,Menu, MenuItemGroup,
Submenu, Container, Card, Scrollbar,RadioButton,RadioGroup,Drawer,Table,TableColumn,Tabs,Link,
Avatar,Form,Input,FormItem,Image,Upload,Notification,MessageBox,Message,Col,Row} from 'element-ui'

// import lang from 'element-ui/lib/locale'
// import locale from 'element-ui/lib/locale'
//
// locale.use(lang)
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message



Vue.use(Col)
Vue.use(Row)
Vue.use(Upload)
Vue.use(Image)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Container)
Vue.use(Card)
Vue.use(Scrollbar)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Drawer)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Link)
Vue.use(Avatar)

