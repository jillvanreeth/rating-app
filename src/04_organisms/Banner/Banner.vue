<template>
	<div class="banner" >
	
		<div class="banner__inner">
		
			<header :class="['banner__content', bannerStyles.contentClass && bannerStyles.contentClass.alignment]">
				
				<Rating :theRating="theRating"></Rating>

				<h2 class="banner__title">
					<strong class="banner__title--highlight">{{thePercentage}}%</strong> 
					of some <strong>tyre users</strong> recommend this tyre
				</h2>

				<aside class="banner__score">
					<p><strong>Score of 4.95 of 5</strong> from 220 reviews</p>
				</aside>
			</header>

			<div 
				:class="['banner__graphic', bannerStyles.visualClass && bannerStyles.visualClass.position]" 
				:style="mq !== 'xsmall' || (bannerStyles.mobile && !bannerStyles.mobile.backgroundImage && mq == 'xsmall') ? bannerStyles.desktop : bannerStyles.mobile">
			</div>

		</div>
	</div>	

</template>

<style lang="scss">@import "./Banner";</style>
<script src="./Banner.js"></script>