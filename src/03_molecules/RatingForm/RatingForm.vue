<template>
			
	<form class="ratingForm" novalidate>
		<div class="ratingForm__item">
			<label class="ratingForm__item__label input__label">Rating</label>

			<input 
				v-model.number="theRating" 
				@input="$emit('emitRating', theRating)"
				class="input__field" name="rating" type="number" min="0" max="5">				
		</div>

		<div class="ratingForm__item">
			<label class="ratingForm__item__label input__label">Percentage</label>
		
			<input 
				v-model.number="thePercentage" 
				@input="$emit('emitPercentage', thePercentage)"
				class="input__field" name="percentage" type="number" min="0" max="100">					
		</div>										
	</form>

</template>

<style lang="scss">@import "./RatingForm";</style>
<script src="./RatingForm.js"></script>
