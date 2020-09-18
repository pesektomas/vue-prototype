<template>
	<div class="web__container">
		<ul class="list-menu dont-print list-menu--root">
			<li v-for="(category, idx) in categories" :key="idx" class="list-menu__item" v-on:mouseover="hoverStart(category.uuid)" v-on:mouseleave="hoverStop(category.uuid)">
				<router-link :to="{ name: 'CategoryList', params: { slug: setSlug(category.name), categoryUuid: category.uuid }}" class="list-menu__item__link list-menu__item__link--level-1">
					{{ category.name}}
					<i v-if="category.children.length > 0" class="list-menu__item__control svg svg-arrow"></i>
				</router-link>
				<ul class="list-menu dont-print" :style="getDisplayStyle(category.uuid)">
					<li v-for="(subcatgory, subidx) in category.children" :key="subidx" class="list-menu__item">
						<router-link :to="{ name: 'CategoryList', params: { slug: setSlug(subcatgory.name), categoryUuid: subcatgory.uuid }}" class="list-menu__item__link list-menu__item__link--level-2">
							{{ subcatgory.name }}
						</router-link>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>

	import { GET_CATEGORIES_FOR_MAIN_MENU } from '../../model/Category/getCategoriesForMainMenuQuery';

	export default {
		data: function() {
			return {
				categories: [],
				visibleCategories: {}
			}
		},
		apollo: {
			categories: {
				query: GET_CATEGORIES_FOR_MAIN_MENU
			}
		},
		methods: {
			hoverStart(categoryUuid) {
				const newObject = {... this.visibleCategories};
				newObject[categoryUuid] = true;

				this.visibleCategories = newObject;
			},
			hoverStop(categoryUuid) {
				const newObject = {... this.visibleCategories};
				newObject[categoryUuid] = false;

				this.visibleCategories = newObject;
			},
			getDisplayStyle(categoryUuid) {
				return {display: this.visibleCategories[categoryUuid] ? 'block' : 'none' };
			}
		}
	}
</script>
