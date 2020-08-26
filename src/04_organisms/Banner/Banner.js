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
			thePercentage: this.inputData.percentage ? this.inputData.percentage : 0,
			bannerData: bannerJSON,
			bannerStyles: {},
		}
	},

	watch: {
		percentage: function() {

			this.inputData.thePercentage = this.inputData.percentage
			return this.thePercentage
		}
	},

	mounted() {

			console.log(this.bannerData)
			
			// for (var i = 0; i < this.bannerData.length; i++) { 
			// 	if(this.bannerData[i].id == this.theId) { 
			// 		console.log(this.theId,'found')
			// 	} 
			// }

			let currentBanner = this.bannerData.find(elm => elm.id == this.theId)
			console.log(currentBanner.id)
			
			this.bannerStyles = { 
				visual: {
					backgroundImage: `url("img/${currentBanner.visual}")`,
					backgroundPosition: currentBanner.visual_alignment,
					backgroundSize: currentBanner.visual_size, 
					backgroundRepeat: currentBanner.visual_repeat,
				}
			}

	}, 


	methods: {}
}