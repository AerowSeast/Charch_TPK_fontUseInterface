<template>
	<nav id="nav" :data-hidden="hidden">
		<input type="checkbox" hidden id="nav-switch" />
		<div id="nav-logo">
			<div @click="jumpHome" class="logo">TPKCH</div>
			<label for="nav-switch">
				<svg style="width:35px;height:35px;font-size:2rem;font-weight:800;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</label>
		</div>

		<div id="nav-menu">
			<!-- 無次列表 -->
			<div class="nav-item" v-for="(i, k) in model.menu" :key="k">
				<!-- 第一階層連結 -->
				<a href="#" @click="clickJump(i)">{{ i.name }}</a>
			</div>

			<!-- 切換語言 -->
			<div class="language-wrap">
				<select class="language-switch" name="language-switch">
					<option v-for="item in language" :key="item.id" :value="item.value">{{ item.label }}</option>
				</select>
			</div>
		</div>
	</nav>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import * as model from '@/models/Navbar.json';

export default {
	name: 'Navbar',
	setup() {
		// router use
		const router = useRouter();

		// scroll effect
		let ofst = window.pageYOffset;
		const hidden = ref(!1);

		// languageData
		const language = ref([
			{
				id:"1",
				label:"繁中",
				value:"zh-tw"
			},
			{
				id:"2",
				label:"簡中",
				value:"zh-ch"
			},
			{
				id:"3",
				label:"EN",
				value:"en"
			}
		])

		onMounted(() =>
			window.addEventListener('scroll', () => {
				hidden.value = ofst < window.pageYOffset;
				ofst = window.pageYOffset;
			})
		);

		// routes jump
		const clickJump = (item) => {
			router.push({
				path: item.path
			})
		}

		const jumpHome = () =>{
			router.push({
				path:"/home"
			})
		}

		return {
			model,
			language,
			hidden,
			clickJump,
			jumpHome
		};
	},
};
</script>

<style lang="less" scoped>
#nav {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px 10%;
	background-color: #fafafa;
	box-shadow:0 0 5px #B2B2B2;

	#nav-logo {
		.logo {
			font-size: 2rem;
			font-weight: 600;
			cursor: pointer;
		}
		svg{
			display:none;
			cursor:pointer;
		}
	}

	#nav-menu {
		display: flex;
		align-items: center;
		gap: 15px;

		.nav-item {
			position: relative;
			padding: 2px 8px;

			a {
				color: #3C4048;
				font-size: 1.05rem;

				&::after {
					content: "";
					position: absolute;
					bottom: 0;
					left: 0;
					width: 0;
					height: 3px;
					background-color: #65647C;
					transition: all .3s;
				}

				&:hover {
					color: #222222;
				}

				&:hover::after {
					width: 100%;
				}
			}

		}

		.language-wrap{
			.language-switch{
				border:none;
				border-radius:4px;
				outline:none;
				padding:5px 20px;
				font-size:1rem;
				box-shadow:0px 0px 10px rgba(0,0,0,0.1);
				cursor:pointer;
				option{
					font-size:1.05rem;
				}
			}
		}
	}
}

@media screen and (max-width:991px) {
	#nav {
		position:relative;
		top: 0;
		left: 0;
		display: flex;
		flex-flow: column wrap;
		align-items: flex-start;
		padding: 0;

		#nav-logo{
			svg{
				display:block;
			}
			width: 100%;
			display:flex;
			align-items:center;
			justify-content: space-between;
			padding:.2rem .8rem;
		}

		#nav-menu {
			flex-flow: column wrap;
			justify-content: center;
			width: 100%;
			padding:.5rem 0;
			transition:all .3s;
			display:none;
		}

		#nav-switch:checked ~ #nav-menu{
			display:flex;
		}
	}
}
</style>
