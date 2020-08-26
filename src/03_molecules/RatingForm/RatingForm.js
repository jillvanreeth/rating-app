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
	}
}