<template>
	
	<div class="rating">
		<div class="rating__inner">
			<div :class="['rating__symbol', theRating >= n && 'is-visible']" v-for="n in 5" :key="n">
				<SymbolStar></SymbolStar>
			</div>
		</div>
		
	</div>

</template>

<style lang="scss">@import "./Rating";</style>
<script src="./Rating.js"></script>