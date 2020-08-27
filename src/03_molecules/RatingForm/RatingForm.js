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
			
				newVal > 5 && (this.theRating = oldVal)
				
			}
		},

		'thePercentage': {
			handler(newVal,oldVal) {
			
				newVal > 100 && (this.thePercentage = oldVal)
				
			}
		}
	}
}