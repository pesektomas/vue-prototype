<template>
	<div>
		<h2>List of subcategories</h2>
		<ul class="list-categories">
			<li 
				class="list-categories__item"
				v-for="subcategory in subcategories"
				:key="subcategory.uuid"
			>
				<router-link :to="{ name: 'CategoryList', params: { slug: setSlug(subcategory.name), categoryUuid: subcategory.uuid }}" class="list-categories__item__block">
					<span class="list-categories__item__image">
						<picture>
							<img :alt=subcategory.name :title=subcategory.name loading="lazy"
									:src=subcategory.images[0].url
									class="image-category" itemprop="image" /> 
						</picture>
					</span>
					<h3 class="list-categories__item__title">{{ subcategory.name }}</h3>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'ListOfSubcategories',
		props: {
			subcategories: {
				type: Array
			}
		}
	}
</script>
