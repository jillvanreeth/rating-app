<template>

	<div id="app">
		<main class="app__inner">

			<section class="app__section">
				<div class="app__section__item">
					<Banner :inputData="inputData" :id="1"></Banner>
				</div>

				<div class="app__section__item">
					<Banner :inputData="inputData" :id="2"></Banner>
				</div>
				
				<div class="app__section__item">
					<RatingForm 
						:rating="rating" 
						:percentage="percentage" 
						@emitRating="setRating" 
						@emitPercentage="setPercentage">	
					</RatingForm>
				</div>
			</section>
		
		</main>
	</div>

</template>


<style lang="scss">@import "./App";</style>
<script src="./App.js"></script>
