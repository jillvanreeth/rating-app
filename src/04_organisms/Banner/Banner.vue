<template>
	<div class="banner" v-bind:style="bannerStyles.visual">
	<!-- <div class="banner" v-bind:style="{ backgroundImage: 'url(' + 'img/bg-blizzak.jpg' + ')' }"> -->
		<div class="banner__inner">
			
			<div class="banner__graphic" :style="bannerStyles.visual"></div>

			<header class="banner__content">
				
				<Rating :theRating="inputData.rating"></Rating>

				<h2 class="banner__title">
					<span class="banner__title--highlight">{{thePercentage}}%</span> 
					of some <strong>tyre users</strong> recommend this tyre
				</h2>

				<aside class="banner__score">
					<p><strong>Score of 4.95 of 5</strong> from 220 reviews</p>
				</aside>
			</header>

		</div>
	</div>	

</template>

<style lang="scss">@import "./Banner";</style>
<script src="./Banner.js"></script>