<template>
	
	<div class="rating">
		
		<div :class="[theRating >= n && 'is-visible','rating__symbol']" v-for="n in 5" :key="n">
			<SymbolStar></SymbolStar>
		</div>
		
	</div>

</template>

<style lang="scss">@import "./Rating";</style>
<script src="./Rating.js"></script>