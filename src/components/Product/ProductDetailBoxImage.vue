<template>
	<div class="box-detail__image">
		<div class="box-detail__image__main">
			<a href="http://master.heimdall.netdevelo:7980/content/images/product/original/1.jpg">
				<picture>
					<source media="(min-width: 480px) and (max-width: 768px)" srcset="http://master.heimdall.netdevelo:7980/content/images/product/default/additional_0_1.jpg">
					<img itemprop="image" alt="" title="" :src="getImagesBySize('original').length > 0 ? getImagesBySize('original')[0].url : NO_IMAGE" loading="lazy" class="image-product loaded">
				</picture>
			</a>
		</div>

		<div class="in-flag dont-print ">
			<Flag v-for="(flag, idx) in product.flags" :key="idx" :flag=flag />
		</div>

		<div class="box-gallery dont-print">
			<span class="box-gallery__arrow box-gallery__arrow--prev slick-arrow slick-hidden" aria-disabled="true" tabindex="-1">
				<i class="svg svg-arrow"></i>
			</span>
			<div class="box-gallery__in slick-initialized slick-slider">

				<div aria-live="polite" class="slick-list draggable">
					<div class="slick-track" role="listbox" style="opacity: 1; width: 260px; transform: translate3d(0px, 0px, 0px);">

						<div v-for="(gallery, idx) in getImagesBySize('galleryThumbnail')" :key="idx" class="box-gallery__item slick-slide slick-current slick-active" style="width: 120px;">
							<a class="box-gallery__item__link">
								<picture>
									<img alt="" title="" :src="gallery.url">
								</picture>
							</a>
						</div>
					</div>
				</div>
			</div>
			<span class="box-gallery__arrow box-gallery__arrow--next slick-arrow slick-hidden" aria-disabled="true" tabindex="-1">
				<i class="svg svg-arrow"></i>
			</span>
		</div>
	</div>
</template>

<script>

	import Flag from './Flag/Flag.vue';

	export default {
		name: 'ProductDetailBoxImage',
		data: function () {
			return {
				NO_IMAGE: ''
			}
		},
		props: {
			product: {
				type: Object,
				default: function () {
					return {
						images: []
					}
				}
			}
		},
		methods: {
			getImagesBySize(size) {
				if (!this.product.images) {
					return [];
				}

				return this.product.images.filter(image => image.size === size);
			}
		},
		components: {
			Flag
		}
	}
</script>
