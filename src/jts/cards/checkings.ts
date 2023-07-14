export class CheckingCards {
	cards: any;
	constructor(cards: any[]) {
		this.cards = cards;
	}

	get getingCards(): any[] {
		// console.log('-->>', this.cards)
		// const respon = this.cards.entries();
		// for (let [k, v] of respon.next().value) {
			// 	console.log('VK:', k, v)

		// }
		let result = this.cards
		// console.log('ppp:', Array.from(result.entries()))

		// console.log('///:', result)

		return [0]
	}

	startWork() {
		return this.getingCards;
	}
}