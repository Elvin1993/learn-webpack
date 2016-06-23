import React, {Component} from 'react'
import autobind from 'autobind-decorator'
import ReactDome from 'react-dom'


@autobind
export default class Home extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
	}
	handleChange(e) {
		this.setState({
			name: e.target.value
		})
		console.log(document.getElementById("name").attribute)
	}

	resetAndFocus() {
		this.setState({name: ''}, () => {
			// console.log(this)
			// 当我们需要获取 React 组件上某个 DOM 节点时，React 提供了 refs 方法方便我们快速引用。为了方便我们使用，React 还「贴心」地对 refs 做了一层封装，使用 this.refs.xxx.getDOMNode() 或 React.findDOMNode(this.refs.xxx) 可以获取到真正的 DOM 节点。
			// 结果发现大家真正需要的就是 DOM 节点本身，封装了半天完全是浪费感情。
			// 于是在 v0.14 版中 refs 指向的就是 DOM 节点，同时也会保留 .getDOMNode() 方法（带 warning），最终在 v0.15 版中去除该方法。
			// ReactDome.findDOMNode(this.refs.name).focus()
			this.refs.name.focus()
		})
	}
	getChildren() {
		let list = this.refs.ul.children
		// list.forEach((element) => {
		// 	// element.style.color = 'red';
		// 	console.log(element)
		// })
		for(let i=0; i<list.length; i++) {
			ReactDome.findDOMNode(list[i]).style.color = 'red'
		}1
	}

  render() {
  	let {name} = this.state
  	let userList = [{id: -1, name: 'elvin'}
  	// , {id: 1, name: 'fly'}
  	]
    return <div>首页1
    	<button onClick={this.resetAndFocus.bind(this)}>click to focus and reset</button>
    	<input type="text" defaultValue="hello"  onChange={this.handleChange} ref="name" id="name"/>
    	<input type="text" value={null} ref="txt1"/>
    	<div>
	    	<button onClick={this.getChildren}>get component children</button>
	    	<ul ref="ul">{
	    		userList.map((element, index) => {
	    			return <li key={element.id}>name: {element.name} <br /> id: {element.id}</li>
	    		})
	    	}
	    	</ul>
	    	<select multiple={true}  onChange={null}>
	    		<option value="a">apple</option>
	    		<option value="b">banana</option>
	    		<option value="c">color</option>
	    	</select>
    	</div>
    </div>
  }
}
