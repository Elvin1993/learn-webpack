import React, {Component} from 'react'

export default class Home extends Component {
  render() {
    return <div>首页1</div>
  }
}

function Foo() {
	this.value = 12;
}

Foo.prototype = {
	method: function() {}
}

function Bar() {

}

Bar.prototype = new Foo()

Bar.prototype.foo = "hello world"

Bar.prototype.constructor = Bar

let test = new Bar()
console.log(test.method)