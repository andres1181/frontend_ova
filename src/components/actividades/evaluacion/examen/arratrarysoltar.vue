<script>
//import { ContainerMixin, ElementMixin } from 'vue-slicksort'
// const SortableList = {
// 	mixins: [ContainerMixin],
// 	template: `
//         <ul class="list">
//           <slot />
//         </ul>
//       `
// }
// const SortableItem = {
// 	mixins: [ElementMixin],
// 	props: ['item'],
// 	template: `
//       <li class="list-item">{{item}}</li>
//     `
// }
import {
  misMixins
} from '@/mixins/mixins.js'

import draggable from 'vuedraggable'
export default {
  name: 'ArrastrarSoltar',

  components: {
    draggable
    // SortableItem,
    // SortableList
  },
  data: () => ({
    items: [{
        id: 1,
        name: "<p<#include <iostream>       using namespace std; int main()"

      },
      {
        id: 2,
        name: '{        int a = 0,        b = 0,        c = 0;        cout << "ingrese un numero: ";cin >> a;       '
      },
      {
        id: 3,
        name: 'cout<<" ingrese otro numero: ";cin>>b;'
      },
      {
        id: 4,
        name: 'Karen
				ldldldl'
      }
    ],
    items2: []
  }),
  mixins: [misMixins],
  methods: {

  },
  created() {
    this.items2 = this.shuffle(this.items);
  }
}
</script>

<template>
<div>

  <v-card outlined flat>
    <!-- <v-list>
				<v-list-item>
					<v-list-item-action>
						<h4>2</h4>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>I'm a item</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list> -->
    <draggable v-model="items2" class="list-group" tag="v-list">
      <transition-group>
        <v-list-item @click="" v-for="element in items2" :key="element.id">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title><p>{{element.name}}</p></v-list-item-title>
        </v-list-item>
        <v-divider :inset="inset"></v-divider>
      </transition-group>
    </draggable>

  </v-card>
  <v-card outlined flat>
    {{items}}
  </v-card>
</div>
</template>

<style >

</style>
