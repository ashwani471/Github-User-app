const github = new Github;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    const userName = e.target.value;

    if(userName!==''){
        github.getUser(userName)
        .then(data=>{
            if(data.profile.message === 'Not found'){
                //show alert
            }else{
                //show user
            }
        }); 
    }else{
        //clear profile
    }
})