<template>
	<div class="web__header">
			<div class="web__line">
				<div class="web__container">
					<header class="header">
						<div class="header__logo">
							<h1 class="logo">
								<router-link to="/">
									<img src="../../../public/images/logo.svg" alt="Internetový obchod">
								</router-link>
							</h1>
						</div>

						<div class="header__middle dont-print">
							<div class="search" id="js-search-autocomplete">
								<form action="http://127.0.0.1:8000/hledani/" method="get">
									<div class="search__form">
										<div class="search__form__input">
											<input type="text" name="q" value="" placeholder="Searching"
												class="input search__input" id="js-search-autocomplete-input"
												autocomplete="off"
												data-autocomplete-url="http://127.0.0.1:8000/search/autocomplete/" />
											<span class="search__form__icon">
												<i class="svg svg-search"></i>
											</span>
										</div>
										<button type="submit"
											class="btn search__form__button js-search-autocomplete-submit">
											Search
										</button>
									</div>
									<div id="js-search-autocomplete-results"></div>
								</form>
							</div>

							<div class="contact-us">
								<span class="contact-us__phone">
									<i class="svg svg-phone"></i>
									+420123456789
								</span>
								<span class="contact-us__days">
									(Mon-Sat, 10:00 - 16:00)
								</span>
								<span class="contact-us__email">
									no-reply@shopsys.cz
								</span>
							</div>
						</div>

						<div class="header__mobile dont-print">
							<div class="header__mobile-button header__mobile-button--menu">
								<span class="header__mobile-button__in js-responsive-toggle"
									data-element="js-categories" data-hide-on-click-out="true">
									<i class="svg svg-burger-menu"></i>
									Menu
								</span>
							</div>

							<div class="header__mobile-button dont-print">
								<a href="tel:+420123456789" class="header__mobile-button__in">
									<i class="svg svg-phone"></i>
								</a>
							</div>

							<div class="header__mobile-button">
								<span class="header__mobile-button__in js-responsive-toggle" data-element="js-user-menu"
									data-hide-on-click-out="true">
									<i class="svg svg-user"></i>
								</span>
								<div class="header__mobile-button__menu" id="js-user-menu">
									<a class="js-login-button" href="http://127.0.0.1:8000/prihlaseni/"
										data-url="http://127.0.0.1:8000/login/form">
										Log in
									</a>
									<a href="http://127.0.0.1:8000/registrace/">
										Registration
									</a>
								</div>
							</div>
						</div>

						<div class="header__top dont-print">
							<div class="header__top__left">
								<ul class="menu dont-print">
									<li class="menu__item">
										<a class="menu__item__link" href="http://127.0.0.1:8000/novinky/">News</a>
									</li>
									<li class="menu__item">
										<a class="menu__item__link" href="http://127.0.0.1:8000/jak-nakupovat/">Shopping guide</a>
									</li>
								</ul>

							</div>

							<div class="header__top__right">
								<ul class="menu-iconic">
									<li class="menu-iconic__item">
										<a href="http://127.0.0.1:8000/prihlaseni/"
											data-url="http://127.0.0.1:8000/login/form"
											class="js-login-link-desktop js-login-button menu-iconic__item__link">
											<i class="svg svg-user"></i>
											<span>
												Log in
											</span>
										</a>
									</li>
									<li class="menu-iconic__item">
										<a href="http://127.0.0.1:8000/registrace/"
											class="js-registration-link-desktop menu-iconic__item__link">
											<span>
												Registration
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>


						<cart />
					</header>

				</div>
			</div>
		</div>
</template>

<script>

	import Cart from './Cart.vue';

	export default {
		components: {
			Cart: Cart
		}
	}
</script>
