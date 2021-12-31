const PLAYER_MAX_DAMAGE = 12,
	PLAYER_MIN_DAMAGE = 5,
	MONSTER_MAX_DAMAGE = 15,
	MONSTER_MIN_DAMAGE = 8,
	MONSTER_WIN = "monster",
	PLAYER_WIN = "player",
	DRAW = "draw";

function getRandomNumber(max, min) {
	return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
	data() {
		return {
			playerHP: 100,
			monsterHP: 100,
			currentRound: 0,
			result: "",
			logMessages: [],
		};
	},
	computed: {
		computedPlayerHP() {
			return { width: this.playerHP + "%" };
		},

		computedMonsterHP() {
			return { width: this.monsterHP + "%" };
		},

		specialAttackIsAvailable() {
			return this.currentRound % 3 !== 0;
		},
	},
	watch: {
		playerHP(newPlayerHP) {
			if (this.monsterHP === 0 && newPlayerHP === 0) {
				this.result = DRAW;
			} else if (newPlayerHP === 0) {
				this.result = MONSTER_WIN;
			}
		},
		monsterHP(newMonsterHP) {
			if (newMonsterHP === 0 && this.playerHP === 0) {
				this.result = DRAW;
			} else if (newMonsterHP === 0) {
				this.result = PLAYER_WIN;
			}
		},
	},
	methods: {
		startGame() {
			this.playerHP = 100;
			this.monsterHP = 100;
			this.currentRound = 0;
			this.result = "";
			this.logMessages = [];
		},
		attackMonster() {
			this.currentRound++;
			const attackValue = getRandomNumber(PLAYER_MAX_DAMAGE, PLAYER_MIN_DAMAGE);
			this.monsterHP = this.monsterHP > attackValue ? this.monsterHP - attackValue : 0;
			this.addLogMessage("player", "attack", attackValue);
			this.attackPlayer();
		},
		attackPlayer() {
			const attackValue = getRandomNumber(MONSTER_MAX_DAMAGE, MONSTER_MIN_DAMAGE);
			this.playerHP = this.playerHP > attackValue ? this.playerHP - attackValue : 0;
			this.addLogMessage("monster", "attack", attackValue);
		},
		specialAttackMonster() {
			this.currentRound++;
			const attackValue = getRandomNumber(PLAYER_MAX_DAMAGE * 2, 2 * PLAYER_MIN_DAMAGE);

			this.monsterHP = this.monsterHP > attackValue ? this.monsterHP - attackValue : 0;
			this.addLogMessage("player", "attack", attackValue);
			this.attackPlayer();
		},
		healPlayer() {
			this.currentRound++;
			const healValue = getRandomNumber(MONSTER_MAX_DAMAGE, MONSTER_MIN_DAMAGE);
			this.playerHP = this.playerHP + healValue > 100 ? 100 : this.playerHP + healValue;
			this.addLogMessage("player", "heal", healValue);
			this.attackPlayer();
		},
		surrender() {
			this.result = MONSTER_WIN;
		},
		addLogMessage(who, action, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionType: action,
				actionValue: value,
			});
		},
	},
});

app.mount("#game");
