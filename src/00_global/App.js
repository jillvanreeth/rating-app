import RatingForm from '@/03_molecules/RatingForm/RatingForm.vue'

import Banner 		from '@/04_organisms/Banner/Banner.vue'


export default {
	name: 'App',

	components: {
		Banner,
		RatingForm,
	},

	props: {
		
	},

	data() {
		return {
			rating: 0,
			percentage: 0,
		}
	},

	methods: {

		setRating(theRating) {
			
			this.rating = theRating
		
		},

		setPercentage(thePercentage) {
		
			this.percentage = thePercentage
		
		}
	}
}