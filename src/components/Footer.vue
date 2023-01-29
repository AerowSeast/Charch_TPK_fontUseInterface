<template>
	<footer id="footer">
		<div class="ctnr ctnr-flexible">
			<div v-for="(v, i) in model.menu" :key="i" class="flexbox">
				<h5>{{ v.name }}</h5>
				<p>
					<a v-for="(val, idx) in v.list" :key="idx" :href="val.href">{{ val.text }}</a>
				</p>
			</div>
			<div class="flexbox">
				<div class="contact_info">
					<ul>
						<li class="contact">
							<a href="#" title="">聯絡我們</a>
						</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
								stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
							</svg>
							<a href="tel:+062282184" >
								06-2282184
							</a>
						</li>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
								stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
							</svg>
							<a href="https://goo.gl/maps/5bcg7Kup8ittyrh6A">
								700 臺南市中西區公園路 6 號
							</a>
						</li>

					</ul>
				</div>
			</div>
		</div>
		<div class="copy_right">
			<span>
				Copyright © 太平境馬雅各教會 All Rights Reserved
			</span>
		</div>
	</footer>
</template>

<script>
import * as model from '@/models/Footer.json';

export default {
	name: 'Footer',
	setup() {
		return { model };
	},
};
</script>

<style lang="less" scoped>
#footer {
	position: relative;
	bottom: 0;
	left: 0;
	// background-image: linear-gradient(to bottom, transparent 5rem, var(--minus-background) 5rem);
	color: #FAFAFA;
	background-color: #2B3A55;
	padding: 20px 0;
	// &::before {
	// 	content: '';
	// 	width: 100%;
	// 	height: 5rem;
	// 	position: absolute;
	// 	top: 0;
	// 	background-image: linear-gradient(to right bottom, transparent 49.5%, var(--minus-background) 50.5%);
	// 	z-index: -1;
	// }

	.ctnr {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		&::after {
			content: "";
			width: 100%;
			height: 1px;
			background-color: #fafafa;
			margin-top: 20px;
		}

		.flexbox {
			p {
				display: flex;
				flex-direction: column;
				gap: 5px;
			}

			.contact_info {
				ul {
					display: flex;
					flex-direction: column;
					gap: 5px;
					list-style-type: none;

					li {
						display: flex;
						align-items: center;
						gap: 5px;

						svg {
							width: 20px;
							height: 20px;
						}
					}

					.contact {
						a {
							border-radius: 8px;
							width: 150px;
							height: 35px;
							line-height: 35px;
							background-color: white;
							text-align: center;
							color: #333;
							font-size: 1.2rem;
							font-weight: 600;
							transition: all .5s;

							&:hover {
								letter-spacing: 5px;
							}
						}
					}
				}
			}
		}
	}

	.copy_right {
		text-align: center;

		span {
			font-size: .8rem;
		}
	}
}

@media screen and (max-width:991px) {
	footer {
		.ctnr {
			flex-flow:column wrap;
			gap:2rem;
		}
	}
}
</style>