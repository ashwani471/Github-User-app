const github = new Github;

const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    const userName = e.target.value;

    if(userName!==''){
        github.getUser(userName)
        .then(data=>{
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User Not Found' , 'alert alert-danger');
            }else{
                //show user
                console.log(data);
                 ui.showUser(data.profile);
            }
        }); 
    }else{
        //clear profile
        ui.clearProfile();
    }
})