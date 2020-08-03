<script>

	import dedent from 'dedent'
	import Codemirror from 'codemirror/lib/codemirror.js'
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/clike/clike.js'
	import 'codemirror/theme/dracula.css'

	export default {
		name: 'Editor',
		props: {
			nombre: {
				type: String,
				required: true
			},
			codigo: {
				type: String,
				defalult: '#include <iostream>\nusing namespace std;',
				required: true
			}
		},

		data() {
			return {
				//code: '',
				editor: '',
			//	text: ''
			}
		},
		methods: {
			iniciarEditor(){
				this.editor = Codemirror.fromTextArea(document.getElementById(this.nombre), {
					mode: 'text/x-c++src',
					theme: 'dracula',
					lineNumbers: true,
					readOnly: 'nocursor'
				})

				this.editor.setValue(dedent(this.codigo))
				setTimeout(()=>{ this.editor.refresh()}, 1)
			}
		},
		mounted() {
		this.iniciarEditor()

		},
		created() {
		//	this.code =
		}
	}

</script>

<template>

	<div class="">

		<textarea :id="nombre" diseable></textarea>

	</div>

</template>

<style>

</style>
