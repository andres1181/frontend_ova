<script>

	import dedent from 'dedent'
	import Codemirror from 'codemirror/lib/codemirror.js'
	import 'codemirror/lib/codemirror.css'
	import 'codemirror/mode/clike/clike.js'
	import 'codemirror/theme/dracula.css'

	export default {
		name: 'Editor',
    props: {
      codigo: {
        type: String,
        defalult: '#include <iostream>\nusing namespace std;',
        required: true
      }
    },
		data: () => ({
			code: '',
			editor: '',
			text: ''
		}),
		watch: {},
		methods: {
		/* mostrar() {
				this.text = dedent(this.editor.getValue())
			}*/
		},
		mounted() {
			this.editor = Codemirror.fromTextArea(document.getElementById('editor'), {
				mode: 'text/x-c++src',
				theme: 'dracula',
				lineNumbers: true,
        readOnly: 'nocursor'
			})
		},
    created(){
      this.code = dedent(this.codigo)
    }
	}

</script>

<template>

	<div class="">

		<textarea v-model="code" rows="20" cols="80" id="editor" disabled></textarea>
		<!-- <div class="" height="300px">
			<v-btn @click="mostrar()">Mostrar</v-btn>
			<p>
				{{text}}
			</p>
		</div> -->
	</div>

</template>

<style>

</style>
