/**
 * Vampire Slayer App.js
 * Contains Vue Code for the game
 * Version 1.0
 * Latisha McNeel
 * July 2018
 */
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        vampireHealth: 100,
        playing: false,
        messages: [],
        specialAttackCooldown: 0,
        specialAttack: false,
    },
    methods: {
        reset: function() {
            this.playing = true;
            this.playerHealth = 100;
            this.vampireHealth = 100;
            this.specialAttackCooldown = 0;
            this.specialAttack = false;
            this.messages = [];
        },
        attack: function() {
            if(this.specialAttackCooldown > 0){
                this.specialAttackCooldown = this.specialAttackCooldown - 1;
            }else{
                this.specialAttack = false;
            }
            const playerAttack = Math.floor(Math.random() * 10);
            const vampireAttack = Math.floor(Math.random() * 10);
            this.playerHealth = this.playerHealth - vampireAttack;
            this.vampireHealth = this.vampireHealth - playerAttack;

            this.messages.unshift({classes: 'alert-success', text: `You attack Alucard for <strong>${playerAttack}</strong> damage` });
            this.messages.unshift({classes: 'alert-warning', text: `Alucard attacks you for <strong>${vampireAttack}</strong> damage`});
            if(this.playerHealth <= 0){
                this.messages.unshift({classes: 'alert-danger', text: '<h3 class="alert-heading">OH NO!</h3> Alucard killed you!'});
                this.playing = false;
            }else if(this.vampireHealth <= 0){
                this.messages.unshift({classes: 'alert-primary', text: '<h3 class="alert-heading">GREAT JOB HUNTER!</h3> You killed Alucard. The world is safer.'});
                this.playing = false;
            }
        },
        spAttack: function() {
            this.specialAttackCooldown = 3;
            this.specialAttack = true;
            const playerAttack = Math.floor(Math.random() * 15);
            const vampireAttack = Math.floor(Math.random() * 10);
            this.playerHealth = this.playerHealth - vampireAttack;
            this.vampireHealth = this.vampireHealth - playerAttack;

            this.messages.unshift({classes: 'alert-dark', text: `You performed a SPECIAL ATTACK on Alucard for <strong>${playerAttack}</strong> damage` });
            this.messages.unshift({classes: 'alert-warning', text: `Alucard attacks you for <strong>${vampireAttack}</strong> damage`});
            if(this.playerHealth <= 0){
                this.messages.unshift({classes: 'alert-danger', text: '<h3 class="alert-heading">OH NO!</h3> Alucard killed you!'});
                this.playing = false;
            }else if(this.vampireHealth <= 0){
                this.messages.unshift({classes: 'alert-primary', text: '<h3 class="alert-heading">GREAT JOB HUNTER!</h3> You killed Alucard. The world is safer.'});
                this.playing = false;
            }
        },
        heal: function() {
            if(this.specialAttackCooldown > 0){
                this.specialAttackCooldown = this.specialAttackCooldown - 1;
            }else{
                this.specialAttack = false;
            }
            const playerAttack = Math.floor(Math.random() * 10);
            const vampireAttack = Math.floor(Math.random() * 10);
            this.playerHealth = this.playerHealth - vampireAttack + playerAttack;

            this.messages.unshift({classes: 'alert-light', text: `You  heal yourself for <strong>${playerAttack}</strong> damage` });
            this.messages.unshift({classes: 'alert-warning', text: `Alucard attacks you for <strong>${vampireAttack}</strong> damage`});
            if(this.playerHealth <= 0){
                this.messages.unshift({classes: 'alert-danger', text: '<h3 class="alert-heading">OH NO!</h3> Alucard killed you!'});
                this.playing = false;
            }else if(this.vampireHealth <= 0){
                this.messages.unshift({classes: 'alert-primary', text: '<h3 class="alert-heading">GREAT JOB HUNTER!</h3> You killed Alucard. The world is safer.'});
                this.playing = false;
            }
        },
        giveUp: function() {
           this.reset();
           this.playing = false;
           this.messages.unshift({classes: 'alert-danger', text: '<h3 class="alert-heading">You run away!!</h3> Its ok Hunter. You will get him next time!!'})
        }
    }
});