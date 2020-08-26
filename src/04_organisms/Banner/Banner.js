import Rating from '@/03_molecules/Rating/Rating.vue'


export default {
	name: 'Banner',

	components: {
		Rating
	},

	props: {
		rating: Number,
		percentage: Number,
	},

	data() {
		return {
			thePercentage: this.percentage ? this.percentage : 0,
		}
	},

	watch: {
		percentage: function() {

			this.thePercentage = this.percentage
			return this.thePercentage
		}
	},

	methods: {

	}
}