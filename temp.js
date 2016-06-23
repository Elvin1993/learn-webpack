function Foo(){

}

Foo.method = function() {
	function test() {
		console.log(this)
	}
	test()
}

Foo.method();