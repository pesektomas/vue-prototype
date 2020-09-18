<template>
	<div class="web__footer web__footer--with-cookies js-eu-cookies-consent-footer-gap">
		<div class="footer">
			<div class="web__line web__line--grey clearfix dont-print">
				<div class="web__container">
					<form name="subscription_form" method="post" action="/newsletter/subscribe-email/" novalidate="novalidate" data-on-submit="ajaxSubmit" data-success="false" role="form">
						<div class="footer__newsletter">
							<div class="footer__newsletter__text">
								<p>Do you want to receive the newest information about our shop? Subscribe to our email newsletter.</p>
							</div>
							<div class="footer__newsletter__form">
								<div class="footer__newsletter__form__wrap">
									<div class="footer__newsletter__form__in">
										<input type="email" id="subscription_form_email" name="subscription_form[email]" required="required" placeholder="Enter email" class="footer__newsletter__input input">
										<span class="js-validation-errors-list js-validation-error-list-subscription_form_email form-error  display-none"><span class="form-error__icon"><i class="svg svg-warning"></i></span><ul class="form-error__list"></ul></span>
									</div>
									<button type="submit" id="subscription_form_send" name="subscription_form[send]" class="footer__newsletter__form__btn btn">Log in</button>
								</div>
								<span class="js-validation-errors-list js-validation-error-list-subscription_form in-message in-message--alert display-none"><ul class="in-message__list"></ul></span>
								<div class="form-choice">
									<input type="checkbox" id="subscription_form_privacyPolicyAgreement" name="subscription_form[privacyPolicyAgreement]" required="required" class="css-checkbox" value="1">
									<label class="css-checkbox__image form-choice__label" for="subscription_form_privacyPolicyAgreement">
										I agree with <a href="http://master.heimdall.netdevelo:7980/privacy-policy/" target="_blank">privacy policy</a>.
										<span class="js-validation-errors-list js-validation-error-list-subscription_form_privacyPolicyAgreement form-error form-error--choice display-none"><span class="form-error__icon"><i class="svg svg-warning"></i></span><ul class="form-error__list"></ul></span>
									</label>
								</div>
							</div>
						</div>

						<dl class="js-honey display-none" style="display: none;">
							<dt>
								<label for="subscription_form_email2">Email2:</label>
							</dt>
							<dd>
								<input type="text" id="subscription_form_email2" name="subscription_form[email2]" class="input">
								<span class="js-validation-errors-list js-validation-error-list-subscription_form_email2 form-error form-error--line display-none"><span class="form-error__icon"><i class="svg svg-warning"></i></span><ul class="form-error__list"></ul></span>
							</dd>
						</dl>
						<input type="hidden" id="subscription_form__token" name="subscription_form[_token]" class="input" value="gliSyEjTnm1VZXsFaHuBFWYQBSqJ1ktrQltbGBU8z8A">
					</form>
				</div>
			</div>

			<div class="web__line web__line--grey dont-print">
				<div class="web__container">
					<div class="in-place in-place--footer">
						<a href="http://www.shopsys.cz/"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJXYXJzdHdhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNzcuOXB4IiBoZWlnaHQ9IjQxLjlweCIgdmlld0JveD0iMCAwIDE3Ny45IDQxLjkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE3Ny45IDQxLjkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM1NjZDQjIiIHN0cm9rZS13aWR0aD0iMy44NTg1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0zOS4yLDIwLjUiLz4KPHBvbHlsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJEMzA4QyIgc3Ryb2tlLXdpZHRoPSIzLjg1ODUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRzPSIxNS4zLDcuOQoJNy44LDE1LjYgMTUuMywyMy4yICIvPgo8Zz4KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y5YjYyYyIgc3Ryb2tlLXdpZHRoPSIzLjg1ODUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTIwLjQsMS45CgkJYzEwLjIsMCwxOC40LDguNSwxOC40LDE4LjkiLz4KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y5YjYyYyIgc3Ryb2tlLXdpZHRoPSIzLjg1ODUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTIwLjMsMzkuNwoJCWMtMTAuMiwwLTE4LjQtOC41LTE4LjQtMTguOSIvPgo8L2c+Cjxwb2x5bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiMyRDMwOEMiIHN0cm9rZS13aWR0aD0iMy44NTg1IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50cz0iMjUuNCwzMy43CgkzMi45LDI2IDI1LjQsMTguNCAiLz4KPGc+Cgk8cGF0aCBmaWxsPSIjMkQzMDhDIiBkPSJNNzkuNiwxNC45Yy0yLjUsMC00LjMsMC45LTUuNCwyLjhWOC4yaC0zLjh2MjVoMy44di05LjZjMC0xLjcsMC40LTMsMS4yLTMuOWMwLjgtMC44LDEuOS0xLjMsMy4yLTEuMwoJCWMxLjIsMCwyLjIsMC40LDIuOSwxLjFjMC43LDAuNywxLDEuNywxLDMuMXYxMC42aDMuOHYtMTFjMC0yLjMtMC42LTQuMS0xLjgtNS40QzgzLjIsMTUuNiw4MS42LDE0LjksNzkuNiwxNC45eiIvPgoJPHBhdGggZmlsbD0iIzJEMzA4QyIgZD0iTTk4LjYsMTQuOWMtMi42LDAtNC43LDAuOS02LjUsMi43Yy0xLjgsMS44LTIuNyw0LTIuNyw2LjdjMCwyLjYsMC45LDQuOSwyLjcsNi43YzEuOCwxLjgsNCwyLjcsNi41LDIuNwoJCWMyLjYsMCw0LjgtMC45LDYuNS0yLjdjMS44LTEuOCwyLjctNCwyLjctNi43YzAtMi42LTAuOS00LjktMi43LTYuN0MxMDMuNCwxNS44LDEwMS4yLDE0LjksOTguNiwxNC45eiBNMTAyLjUsMjguNAoJCWMtMSwxLjEtMi4zLDEuNi0zLjksMS42Yy0xLjUsMC0yLjgtMC41LTMuOS0xLjZjLTEtMS4xLTEuNi0yLjQtMS42LTRjMC0xLjYsMC41LTMsMS42LTRjMS0xLjEsMi4zLTEuNiwzLjktMS42CgkJYzEuNSwwLDIuOCwwLjUsMy45LDEuNmMxLDEuMSwxLjYsMi40LDEuNiw0QzEwNCwyNiwxMDMuNSwyNy4zLDEwMi41LDI4LjR6Ii8+Cgk8cGF0aCBmaWxsPSIjMkQzMDhDIiBkPSJNMTIxLjEsMTQuOWMtMi43LDAtNC43LDEtNi4xLDN2LTIuNmgtMy44djI2LjVoMy44VjMwLjdjMS40LDIsMy41LDMsNi4xLDNjMi40LDAsNC40LTAuOSw2LjEtMi43CgkJYzEuNy0xLjgsMi41LTQsMi41LTYuN2MwLTIuNi0wLjktNC44LTIuNS02LjdDMTI1LjYsMTUuOCwxMjMuNSwxNC45LDEyMS4xLDE0Ljl6IE0xMjQuNSwyOC40Yy0xLDEuMS0yLjQsMS42LTMuOSwxLjYKCQljLTEuNiwwLTIuOS0wLjUtMy45LTEuNmMtMS0xLjEtMS42LTIuNS0xLjYtNC4xYzAtMS42LDAuNS0zLDEuNi00LjFjMS0xLjEsMi40LTEuNiwzLjktMS42YzEuNiwwLDIuOSwwLjUsMy45LDEuNgoJCWMxLDEuMSwxLjYsMi41LDEuNiw0LjFDMTI2LDI2LDEyNS41LDI3LjMsMTI0LjUsMjguNHoiLz4KCTxwYXRoIGZpbGw9IiMyRDMwOEMiIGQ9Ik0xNTUuNCwyOS4xbC01LjItMTMuN0gxNDZsNy40LDE4LjNsLTAuMiwxLjFjLTAuNSwxLjItMS4xLDIuMi0xLjgsMi43Yy0wLjcsMC42LTEuNywwLjgtMi45LDAuOHYzLjYKCQljNCwwLjIsNi44LTIsOC41LTYuNmw2LjctMTkuOWgtNEwxNTUuNCwyOS4xeiIvPgoJPHBhdGggZmlsbD0iIzJEMzA4QyIgZD0iTTE3NywyNS4yYy0wLjYtMC44LTEuNC0xLjQtMi40LTEuN2MtMC45LTAuMy0xLjktMC42LTIuOC0wLjljLTAuOS0wLjMtMS43LTAuNi0yLjMtMC45CgkJYy0wLjYtMC4zLTEtMC44LTEtMS40YzAtMC42LDAuMi0xLjEsMC43LTEuNGMwLDAsMC4xLTAuMSwwLjEtMC4xYzAuNS0wLjMsMS0wLjQsMS43LTAuNGMxLDAsMS44LDAuMywyLjQsMC44YzAsMCwwLDAsMCwwCgkJYzAuNCwwLjMsMC43LDAuNywxLDEuMWwwLjctMC43bDEuOC0xLjljMCwwLDAsMCwwLDBsMCwwYy0wLjUtMC44LTEuMi0xLjQtMi4xLTEuOWMtMS4xLTAuNy0yLjQtMS0zLjktMWMwLDAsMCwwLTAuMSwwCgkJYy0wLjEsMC0wLjEsMC0wLjIsMGMtMC4xLDAtMC4xLDAtMC4yLDBjMCwwLDAsMCwwLDBsMCwwYzAsMCwwLDAsMCwwYy0xLjYsMC4xLTMsMC42LTQuMSwxLjVjLTEuMiwxLTEuOCwyLjMtMS44LDQKCQljMCwxLjIsMC4zLDIuMiwxLDNjMC42LDAuOCwxLjQsMS4zLDIuNCwxLjZjMC45LDAuMywxLjksMC42LDIuOCwwLjljMC45LDAuMywxLjcsMC42LDIuMywxYzAuNiwwLjQsMSwwLjgsMSwxLjQKCQljMCwxLjEtMC43LDEuNy0yLDEuOWMtMC4zLDAtMC42LDAuMS0xLDAuMWMtMS4xLDAtMi0wLjMtMi43LTAuOGMtMC41LTAuNC0xLTEtMS40LTEuNWwtMi42LDIuNmMwLjUsMC45LDEuMywxLjYsMi4yLDIuMQoJCWMxLjIsMC43LDIuNywxLjEsNC40LDEuMWMyLDAsMy42LTAuNSw0LjktMS41YzEuMy0xLDEuOS0yLjMsMS45LTRDMTc3LjksMjcsMTc3LjYsMjYsMTc3LDI1LjJ6Ii8+Cgk8cGF0aCBmaWxsPSIjMkQzMDhDIiBkPSJNMTQyLjMsMjMuNWMtMC45LTAuMy0xLjktMC42LTIuOC0wLjljLTAuOS0wLjMtMS43LTAuNi0yLjMtMC45Yy0wLjYtMC4zLTEtMC44LTEtMS40CgkJYzAtMC42LDAuMi0xLjEsMC43LTEuNGMwLDAsMC4xLTAuMSwwLjEtMC4xYzAuNS0wLjMsMS0wLjQsMS43LTAuNGMxLDAsMS44LDAuMywyLjQsMC44YzAsMCwwLDAsMCwwYzAuNCwwLjMsMC43LDAuNywxLDEuMWwyLjUtMi42CgkJYy0wLjUtMC44LTEuMi0xLjQtMi4xLTEuOWMtMS4xLTAuNy0yLjQtMS0zLjktMWMtMC4xLDAtMC4yLDAtMC4zLDBjLTAuMSwwLTAuMSwwLTAuMiwwYy0xLjYsMC4xLTMsMC42LTQuMSwxLjUKCQljLTEuMiwxLTEuOCwyLjMtMS44LDRjMCwxLjIsMC4zLDIuMiwxLDNjMC42LDAuOCwxLjQsMS4zLDIuNCwxLjZjMC45LDAuMywxLjksMC42LDIuOCwwLjljMC45LDAuMywxLjcsMC42LDIuMywxCgkJYzAuNiwwLjQsMSwwLjgsMSwxLjRjMCwxLjEtMC43LDEuNy0yLDEuOWMtMC4zLDAtMC42LDAuMS0xLDAuMWMtMS4xLDAtMi0wLjMtMi43LTAuOGMtMC41LTAuNC0xLTEtMS40LTEuNWwtMi42LDIuNgoJCWMwLjUsMC45LDEuMywxLjYsMi4yLDIuMWMxLjIsMC43LDIuNywxLjEsNC40LDEuMWMyLDAsMy42LTAuNSw0LjktMS41YzEuMy0xLDEuOS0yLjMsMS45LTRjMC0xLjItMC4zLTIuMy0xLTMuMQoJCUMxNDQsMjQuNCwxNDMuMiwyMy44LDE0Mi4zLDIzLjV6Ii8+Cgk8cGF0aCBmaWxsPSIjMkQzMDhDIiBkPSJNNjQuOSwyMS4zYy0wLjItMC4xLTAuMy0wLjItMC41LTAuM2MtMC4yLTAuMS0wLjMtMC4yLTAuNi0wLjNjMCwwLDAsMCwwLDBjLTAuNC0wLjItMC44LTAuNC0xLjItMC42CgkJYy0wLjctMC4zLTEuNy0wLjYtMi44LTEuMWMtMC4yLDAtMC4zLTAuMS0wLjUtMC4xYy0wLjEsMC0wLjItMC4xLTAuNC0wLjFjLTEuMy0wLjQtMi4zLTAuOC0zLTEuMmMtMC4xLTAuMS0wLjItMC4xLTAuMy0wLjIKCQljLTAuMi0wLjEtMC4zLTAuMi0wLjUtMC4zYy0wLjctMC41LTEuMS0xLjItMS4xLTIuMmMwLTEsMC40LTEuNywxLTIuM2MwLjItMC4xLDAuNC0wLjMsMC42LTAuNGMwLjYtMC4zLDEuMy0wLjUsMi4yLTAuNQoJCWMxLDAsMS45LDAuMiwyLjYsMC42YzAsMCwwLDAsMCwwYzAuMywwLjEsMC41LDAuMywwLjcsMC41YzAsMCwwLjEsMCwwLjEsMC4xYzAuMiwwLjIsMC40LDAuNCwwLjYsMC43YzAuMywwLjQsMSwxLjMsMSwxLjNsMi44LTIuOAoJCWMtMC43LTEuMi0xLjYtMi4xLTIuNy0yLjhjLTAuMi0wLjEtMC40LTAuMy0wLjYtMC40Yy0wLjEsMC0wLjItMC4xLTAuMi0wLjFjLTEuMy0wLjctMi43LTEtNC4zLTFjLTIuMiwwLTQsMC43LTUuNSwyCgkJQzUwLjgsMTEsNTAsMTIuNyw1MCwxNWMwLDEuMSwwLjIsMi4xLDAuNiwyLjljMC40LDAuOCwxLDEuNSwxLjgsMi4xYzAuMiwwLjIsMC41LDAuMywwLjcsMC40YzAsMCwwLDAsMC4xLDAKCQljMC4xLDAuMSwwLjIsMC4xLDAuMywwLjJjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAsMC4xLDAuMSwwLjIsMC4xYzAuMywwLjIsMC43LDAuMywxLDAuNWMwLjcsMC4zLDEuNywwLjYsMi44LDEuMQoJCWMwLjIsMC4xLDAuNSwwLjEsMC43LDAuMmMwLDAsMCwwLDAsMGMwLjEsMCwwLjEsMCwwLjIsMC4xYzEuNiwwLjUsMi43LDEsMy40LDEuNWMwLjgsMC41LDEuMiwxLjMsMS4yLDIuM2MwLDEtMC40LDEuOC0xLjEsMi40CgkJYzAsMCwwLDAtMC4xLDBjMCwwLDAsMCwwLDBjLTAuOCwwLjYtMS45LDAuOS0zLjMsMC45Yy0wLjYsMC0xLjEsMC0xLjYtMC4xYy0xLjEtMC4yLTEuOS0wLjYtMi43LTEuMmMtMC4yLTAuMS0wLjMtMC4zLTAuNC0wLjQKCQljMCwwLDAsMCwwLDBjLTAuMi0wLjItMC4zLTAuNC0wLjUtMC42Yy0wLjQtMC41LTAuNy0xLTEtMS42bC0yLjksMi45YzAuNywxLjQsMS43LDIuNiwzLDMuNGMwLjIsMC4yLDAuNSwwLjMsMC43LDAuNAoJCWMwLjEsMC4xLDAuMiwwLjEsMC4zLDAuMmMwLjEsMC4xLDAuMiwwLjEsMC40LDAuMmMxLjMsMC42LDIuOSwwLjksNC42LDAuOWMyLjYsMCw0LjctMC43LDYuMy0yYzAsMCwwLjEtMC4xLDAuMS0wLjEKCQljMCwwLDAsMCwwLjEtMC4xYzEuNS0xLjMsMi4zLTMuMSwyLjMtNS4zYzAtMS4xLTAuMi0yLjEtMC42LTIuOUM2Ni4zLDIyLjUsNjUuNywyMS44LDY0LjksMjEuM3oiLz4KPC9nPgo8L3N2Zz4K" alt="banner"></a>
					</div>
				</div>
			</div>
			
			<div class="web__line">
				<footer class="web__container footer__bottom">
					<div class="footer__bottom__copyright dont-print">
						Made with passion by <a href="http://www.shopsys-framework.com/">Shopsys Framework</a>
					</div>
					<div class="footer__bottom__articles">
						+1-234-567-8989
						no-reply@shopsys.com
						<ul class="menu dont-print">
							<li class="menu__item">
								<a class="menu__item__link" href="http://master.heimdall.netdevelo:7980/terms-and-conditions/">Terms and conditions</a>
							</li>
						</ul>

						<a class="menu__item__link" href="http://master.heimdall.netdevelo:7980/contact/">Contact</a>
					</div>
				</footer>
			</div>
		</div>
	</div>
</template>