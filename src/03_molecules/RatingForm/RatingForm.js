export default {
	name: 'RatingForm',

	props: {
		rating: Number,
		percentage: Number,
	},

	data() {
		return {		
			theRating: this.rating,
			thePercentage: this.percentage,
		}
	},

	watch: {
		'theRating': {
			handler(newVal,oldVal) {
			
				if(newVal > 5) { this.theRating = oldVal}
				
			}
		}
	}
}