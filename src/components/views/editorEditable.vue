<script>

	//import dedent from 'dedent'
	import Codemirror from 'codemirror/lib/codemirror.js'
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/clike/clike.js'
	import 'codemirror/theme/dracula.css'

	export default {
		name: 'EditorEditable',

		data: () => ({
			code: '#include <iostream>\nusing namespace std;',
			readOnly: '',
			editor: '',
			text: ''
		}),
		watch: {$emit('codigo', this.code)},
		methods: {

		/* mostrar() {
				this.text = dedent(this.editor.getValue())
			}*/
		},
		computed() {

		},
		mounted() {
			this.editor = Codemirror.fromTextArea(document.getElementById('editor'), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true,

			})
		},
    created(){

    }
	}

</script>

<template>

	<div class="">

		<textarea v-model="code" rows="20" cols="80" id="editor"></textarea>
		<!-- <div class="" height="300px">
			<v-btn @click="mostrar()">Mostrar</v-btn>
			<p>
				{{text}}
			</p>
		</div> -->
		{{code}}
	</div>

</template>

<style>

</style>
