import 'babel-polyfill' 
import React, {Component} from 'react'
import ReactDome from 'react-dom'
// import AppRouter from './AppRouter'
import Home from './Home'


// export default class App extends Component {
//   render() {
//     return AppRouter
//   }
// }
// console.log(Home)
ReactDome.render(<Home />, document.getElementById('app'))
