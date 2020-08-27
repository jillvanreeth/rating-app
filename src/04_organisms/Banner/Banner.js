import bannerJSON from './assets/banners.json'

import Rating from '@/03_molecules/Rating/Rating.vue'


export default {
	name: 'Banner',

	components: {
		Rating
	},

	props: {
		inputData: Object,
		id: Number,
	},

	data() {
		return {
			theId: this.id,
			thePercentage: this.inputData.percentage,
			theRating: this.inputData.rating,
			bannerData: bannerJSON,
			bannerStyles: {},
		}
	},

	watch: {
		'inputData.percentage': {
			handler() {
				this.thePercentage = this.inputData.percentage
				return this.thePercentage
			}
		},

		'inputData.rating':  {
			handler() {
				this.theRating = this.inputData.rating
				return this.theRating
			}	
		}
	},

	mounted() {

			let currentBanner = this.bannerData.find(elm => elm.id == this.theId)
			
			this.bannerStyles = { 
				visual: {
					backgroundImage: `url("img/${currentBanner.visual}")`,
					backgroundPosition: currentBanner.visual_alignment,
					backgroundSize: currentBanner.visual_size, 
					backgroundRepeat: currentBanner.visual_repeat,
				},
				contentClass: {
					alignment: `banner__content--${currentBanner.text_alignment}`,
				}
			}

	}, 


	methods: {}
}