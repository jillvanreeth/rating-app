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
			mq: this.getWindowSize(),
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

	created() {
		
		window.addEventListener('resize', this.getWindowSize)
	},

	mounted() {

		this.setTheSettings()

	}, 

	methods: {

		setTheSettings() {

			let currentBanner = this.bannerData.find(elm => elm.id == this.theId)
		
			this.bannerStyles = { 
				desktop: {
					backgroundImage: `url("img/${currentBanner.visual}")`,
					backgroundPosition: currentBanner.visual_alignment,
					backgroundSize: currentBanner.visual_size, 
					backgroundRepeat: currentBanner.visual_repeat,
				},
				mobile: {
					backgroundImage: currentBanner.visual_mobile && `url("img/${currentBanner.visual_mobile}")`,
				},
				visualClass: {
					position: `banner__visual--${currentBanner.visual_position}`,
				},
				contentClass: {
					alignment: `banner__content--${currentBanner.text_alignment}`,
				}
			}
		},

		getWindowSize() {
			
			this.mq = window.getComputedStyle(document.getElementById('app'), ':before').getPropertyValue('content').replace(/"/g,'')
			
			return this.mq
		}
	}
}