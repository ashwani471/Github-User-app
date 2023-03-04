class Github{
    constructor(){
        this.client_id = '54d63f06605313e3ab0b';
        this.client_Secret = '22c0fbdabfe804f3931ff9e3106d58a0cca7a02b';
    }

    async getUser(user){
       const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_Secret}`);

       const profile = await profileResponse.json();

       return {
        profile
       }
    }
}