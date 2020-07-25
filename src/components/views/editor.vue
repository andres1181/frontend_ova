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
				code: '',
				editor: '',
				text: ''
			}
		},

		mounted() {
			this.editor = Codemirror.fromTextArea(document.getElementById(this.nombre), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true,
				readOnly: 'nocursor'
			})
		},
		created() {
			this.code = dedent(this.codigo)
		}
	}

</script>

<template>

	<div class="">

		<textarea v-model="code" :id="nombre" diseable></textarea>

	</div>

</template>

<style>

</style>
