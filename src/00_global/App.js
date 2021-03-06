import RatingForm from '@/03_molecules/RatingForm/RatingForm.vue'

import Banner 		from '@/04_organisms/Banner/Banner.vue'


export default {
	name: 'App',

	components: {
		Banner,
		RatingForm,
	},

	data() {
		return {
			inputData: {
				rating: 0,
				percentage: 0,
			},
			rating: 0,
			percentage: 0,
		}
	},

	methods: {

		setRating(theRating) {
			
			this.inputData.rating = !theRating ? 0 : theRating
		
		},

		setPercentage(thePercentage) {
		
			this.inputData.percentage = !thePercentage ? 0 : thePercentage
		
		}
	}
}