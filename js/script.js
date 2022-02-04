/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
|Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
|Far comparire gli indirizzi email solamente quando sono stati tutti generati.
|Evitare i doppioni nella lista delle mail 
*/

const app = new Vue({
   el: "#root",
   data: {
      emails: [],
   },
   methods: {
      getEmail() {
         axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
            this.emails.push(res.data.response);
         });
      },
      getRandomEmails() {
         let i = 0;
         while (i < 10 && !this.emails.some((em) => this.emails.includes(em))) {
            this.getEmail();
            i++;
         }
      },
   },
   mounted() {
      this.getRandomEmails();
   },
});
