<template>

	<div id="app">
		<main class="app__inner">

			<section class="app__section">
				<Banner :inputData="inputData" :id="1"></Banner>

				<Banner :inputData="inputData" :id="2"></Banner>
			
				<RatingForm 
					:rating="rating" 
					:percentage="percentage" 
					@emitRating="setRating" 
					@emitPercentage="setPercentage">	
				</RatingForm>
			</section>
		
		</main>
	</div>

</template>


<style lang="scss">@import "./App";</style>
<script src="./App.js"></script>
