<template>
	<div class="web__line">
		<div class="web__container">
			<h2>Popular categories</h2>
			<ul class="list-categories">
				<li class="list-categories__item" v-for="category in categories" :key=category.uuid>
					<router-link :to="{ name: 'CategoryList', params: { slug: setSlug(category.name), categoryUuid: category.uuid }}" class="list-categories__item__block">
						<span class="list-categories__item__image">
							<picture>
								<img alt="Electronics" title="Electronics" loading="lazy"
									:src=category.images[0].url
									class="image-category" itemprop="image" />
							</picture>
						</span>
						<h3 class="list-categories__item__title">
							{{ category.name }}
						</h3>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

	import { GET_POPULAR_CATEGORIES } from '../../model/Category/getPopularCategoriesQuery';

	export default {
		data: function() {
			return {
				categories: [],
			}
		},
		apollo: {
			categories: {
				query: GET_POPULAR_CATEGORIES,
				update: data => {
					return data.categories.slice(0,3);
				}
			}
		}
	}
</script>
