import { Card } from './Card';

export const cardWidth: number = 48;
export const cardHeight: number = 64;

export class CardSprite extends Phaser.GameObjects.Sprite {
	public faceUp: boolean;
	public card: Card | null;

	constructor(scene: Phaser.Scene, x: number, y: number, card: Card) {
		super(scene, x, y, 'card', 'back');
		this.card = card;
		this.faceUp = false;
		this.setOrigin(0);
		this.scene.add.existing(this);
	}

	public flipCard(faceUp: boolean): CardSprite {
		this.faceUp = faceUp;
		this.setFrame(faceUp ? this.card.textureKey : 'back');

		return this;
	}

	public setCard(card: Card): CardSprite {
		if (card) {
			this.card = card;

			if (this.faceUp) {
				this.setFrame(this.card.textureKey);
			}
		}

		return this;
	}

	public discard() {
		this.card = null;
		this.destroy();
	}
}
