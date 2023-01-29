<template>
	<!-- <article id="intro" class="ctnr ctnr-flexible">
		<div class="flexbox">
			<h1>太平境馬雅各紀念教會</h1>
			<p>{{ sent.saying }}（{{ sent.source }}）</p>
		</div>
	</article> -->

	<!-- 聚會時間 -->
	<Slideshow :show="slide" />
	<section class="Meeting_time">
		<h1 id="party_title">聚會時間地點</h1>
		<article id="party-time">
			<div class="times" v-for="item in party_block" :key="item.title">
				<h2>{{ item.party_title }}</h2>
				<h3>時間 --> {{ item.party_time }}</h3>
				<h3>地點 --> {{ item.party_place }}</h3>
			</div>
		</article>
	</section>

	<!-- 最新消息 AND 近期活動-->
	<section class="container">
		<div class="news">
			<!-- 標題 AND 更多消息 -->
			<div class="news_block">
				<div class="new_title">
					<h2>最新消息</h2>
				</div>
				<div class="more_block">
					<a class="more_new" href="https://skl8d0.csb.app/news" title="更多消息">更多消息</a>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
						stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</div>
			</div>

			<!-- 分類標籤 -->
			<ul class="sm_nav" >
				<li v-for="item in news_sort" :key="item.title">
					<a href="#">{{item.title}}</a>
				</li>
			</ul>

			<!-- 最新消息內全部列表 AND 連結 -->
			<div class="list_rows">
				<div class="list_row" v-for="item in news_list" :key="item.cnt">
					<div class="ceil" :style="{backgroundColor:item.changColor}"></div>
					<div class="list_cnt">
						<a href="#"> {{ item.cnt }} </a>
					</div>
					<div class="list_date">
						<span>{{ item.date }}</span>
					</div>
				</div>
			</div>

			<!-- 公告指示燈 -->
			<div class="new_lamp">
				<div class="today_new" v-for="item in new_lamp">
					<div class="point" id="p_orange" :style="{backgroundColor:item.lampColor}"></div>
					<h3>{{ item.title }}</h3>
				</div>
			</div>
		</div>
		<div class="activity">
			<h2>近期活動</h2>
			<div class="act_card" v-for="item in act_block" :key="item.act_title">
				<div class="act_style  act_date">{{ item.act_date }}</div>
				<div class="act_style  act_link">
					<a :href=item.act_link :title=item.act_title target="_blank">
						{{ item.act_title }}
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref } from "vue";
import img from '@/assets/img/church.png';
import ancmt from '@/models/data/ancmt.json';
import bible from '@/models/data/bible.json';
import slide from '@/models/data/slide.json';
import Slideshow from '@/components/Slideshow.vue';

export default {
	name: 'Home',
	components: { Slideshow },
	setup() {
		const sent = bible[Math.floor(Math.random() * (bible.length - 0)) + 0];

		(async root => {
			const rsp = await fetch(img);
			const res = await rsp.blob();
			const url = URL.createObjectURL(res);

			root.style.setProperty('--intro-background', `url('${url}')`);
		})(document.documentElement);

		// 聚會時間區塊內容
		const party_block = ref([
			{
				party_title: "聚會標題一",
				party_time: "19:30",
				party_place: "太平境教會教堂"
			},
			{
				party_title: "聚會標題二",
				party_time: "19:30",
				party_place: "太平境教會教堂"
			},
			{
				party_title: "聚會標題三",
				party_time: "19:30",
				party_place: "太平境教會教堂"
			},
			{
				party_title: "聚會標題四",
				party_time: "19:30",
				party_place: "太平境教會教堂"
			},
			{
				party_title: "聚會標題五",
				party_time: "19:30",
				party_place: "太平境教會教堂"
			},
			{
				party_title: "聚會標題六",
				party_time: "19:30",
				party_place: "太平境教會教堂"
			}
		])

		// 最新消息區塊內容
		const news_sort = ref([
			{
				title: "全部",
				href: ""
			},
			{
				title: "教會事務",
				href: ""
			},
			{
				title: "禮拜資訊",
				href: ""
			}
		])
		const news_list = ref([
			{
				cnt:"目前國內疫情趨緩，部分防疫規定自 4 月 29 日起鬆綁",
				changColor:"blue",
				date:"08/21"
			},
			{
				cnt:"目前國內疫情趨緩，部分防疫規定自 4 月 29 日起鬆綁",
				changColor:"#f57648",
				date:"08/21"
			},
			{
				cnt:"目前國內疫情趨緩，部分防疫規定自 4 月 29 日起鬆綁",
				changColor:"#f57648",
				date:"08/21"
			},
			{
				cnt:"目前國內疫情趨緩，部分防疫規定自 4 月 29 日起鬆綁",
				changColor:"#f57648",
				date:"08/21"
			}
		])
		const new_lamp = ref([
			{
				title:"今日消息",
				lampColor:"#f57648"
			},
			{
				title:"一般消息",
				lampColor:"blue"
			}
		])

		// 近期活動區塊內容
		const act_block = ref([
			{
				act_date:"12/25",
				act_title:"111-1教會近期舉辦活動",
				act_link:"#"
			},
			{
				act_date:"12/25",
				act_title:"111-1教會近期舉辦活動",
				act_link:"#"
			},
			{
				act_date:"12/25",
				act_title:"111-1教會近期舉辦活動",
				act_link:"#"
			}
		])

		return {
			sent,
			ancmt,
			slide,
			party_block,
			news_sort,
			news_list,
			new_lamp,
			act_block
		};
	},
};
</script>

<style lang="less" scoped>
#events {
	.card {
		width: 100%;
		display: grid;
		grid-template-areas: 'date info';
		grid-template-columns: 20% auto;
		margin-bottom: 0.5rem;
		transition: box-shadow 0.5s;

		&:hover {
			box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
		}
	}

	.date {
		grid-area: date;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #324b64;
		font-size: 1.5rem;
		color: #fafafa;
		padding: 1rem;
	}

	.info {
		grid-area: info;
		display: flex;
		align-items: center;
		padding: 1rem;
	}
}

.label {
	display: inline-block;
	background-color: #fa4b4b;
	font-weight: bold;
	color: #fafafa;
	border-radius: 0.25rem;
	margin-right: 0.5rem;
	padding: 0 0.25rem;
}

.item {
	display: table;
	margin-bottom: 0.25rem;
}

#tabs {
	margin-bottom: 0.5rem;

	label {
		display: inline-block;
		position: relative;
		padding: 0 0.5rem;
		margin-right: 0.5rem;
		cursor: pointer;

		&.active {
			font-weight: bold;
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background-color: #fac896;
			transform: skewX(-15deg);
			z-index: -1;
		}
	}
}

#intro {
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	padding: 5rem 2rem;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: var(--intro-background);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
		filter: contrast(1.5);
		z-index: -1;
	}

	& .flexbox {
		max-width: 50rem;
		background-color: rgba(0, 0, 0, 0.75);
		border-radius: 1rem;
		color: var(--minus-text-color);
		text-align: center;
		padding: 2rem;
	}
}

// 聚會時間表
.Meeting_time {
	padding: 0 15%;
	#party_title {
		font-weight: 600;
		font-size: 2.2rem;
		text-align: left;
		margin: .8rem 0;
	}

	#party-time {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		grid-gap: 10px;
		justify-content: flex-start;
		color: #fff;
		margin-bottom: 10px;
		.times {
			border-radius: 5px;
			padding: 1.5rem 4rem;
			background-color: #3C4048;
			font-weight: 400;

			h2 {
				font-size: 1.5rem;
				position: relative;

				&::before {
					content: '';
					position: absolute;
					top: 8px;
					left: -12px;
					background-color: #fff;
					width: 2px;
					height: 55%;
				}
			}

			h3 {
				font-size: 1.2rem;
			}

			span {
				font-size: 1.2rem;
			}
		}
	}
}

// 最新消息
.container {
	background-color: #EDEDED;
	width: 100%;
	padding:20px 15%;
	margin: 4rem 0 4rem 0;
	display:flex;
	align-items: center;
	gap:50px;

	// 最新消息 News
	.news {
		flex:1 1 50%;
		.news_block {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.new_title {
				h2 {
					font-size: 2.2rem;
					margin-bottom: 15px;
				}
			}

			.more_block {
				display: flex;
				align-items: center;

				.more_new {
					font-size: 1.2rem;
					font-weight: 600;
					transition: all 0.5s;
					text-decoration: none;
					color: #324b64;

					&:hover {
						color: #FF6E31;
						letter-spacing: 1.5px;
					}
				}

				svg {
					width: 20px;
					height: 20px;
					color: #2B3467;
				}
			}
		}

		.sm_nav {
			display: flex;
			flex-wrap: wrap;
			gap: 10px;
			list-style-type: none;

			li {
				a {
					text-decoration: none;
					background-color: #50577A;
					border-radius: 4px;
					color: white;
					font-weight: 800;
					padding: 0.5rem 0.9rem;

					&:hover {
						background-color: #3C4048;
					}
				}
			}
		}

		.list_rows {
			margin-top: 15px;

			.list_row {
				position: relative;
				display: flex;
				align-items: center;
				width: 100%;
				padding: 0.5rem;

				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					width: 100%;
					height: 1px;
					background-color: rgba(0, 0, 0, 0.4);
				}

				.ceil {
					flex: 1 1 5px;
					width: 10%;
					width: 5px;
					height: 5px;
					border-radius: 50%;
				}

				.list_cnt {
					flex: 1 1 90%;
					width: 70%;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					margin-left: 0.5rem;

					a {
						text-decoration: none;
						color: #000;
						font-size: 1rem;
					}
				}

				.list_date {
					text-align: right;
					width: 20%;
					padding: 0 2rem;
					flex: 1 1 5%;

					span {
						text-align: right;
					}
				}
			}
		}

		.new_lamp {
			width: 100%;
			display: flex;
			justify-content: flex-end;

			.today_new {
				display: flex;
				align-items: center;
				margin: 0.5rem 0.8rem 0 0;

				.point {
					width: 7px;
					height: 7px;
					margin-right: 0.3rem;
					border-radius: 50%;
				}

				h3 {
					font-size: 1.2rem;
					position: relative;
					font-weight: 500;
				}
			}
		}
	}

	// 近期活動 activity
	.activity {
		flex:1 1 50%;
		h2 {
			font-size: 2.2rem;
			margin-bottom: 15px;
		}

		.act_card {
			display: flex;
			align-items: center;
			margin-bottom:20px;
			.act_style{
				float:left;
				height: 70px;
				line-height:70px;
				padding:0 1.2rem;
			}

			.act_date{
				color:#fff;
				font-size:1.5rem;
				font-weight:600;
				background-color:#3C4048;
				text-align: center;
			}

			.act_link{
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				font-size:1.2rem;
				background-color:#fafafa;
				color:#222;
				width: 100%;
				text-align: left;
			}
		}
	}
}

@media screen and (max-width: 991px) {
	.Meeting_time {
		padding:0 .8rem;
		#party_title{
			text-align: center;
		}
	}

	.container {
		display:flex;
		flex-flow:column wrap;
		padding:0 .8rem;
		gap:20px;
		.news {
			width: 100%;
			.sm_nav {
				li {
					a {
						padding: 0.3rem;
					}
				}
			}
		}

		.activity {
			width: 100%;
		}
	}
}
</style>