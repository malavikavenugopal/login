class Landing {
    //property
    dataBase = {
        'Milan': { username: "Milan", password: "123" },
        'Alan': { username: "Alan", password: "1234" },
        'Manu': { username: "Manu", password: "12345" },
        'Priya': { username: "Priya", password: "123456" }
    }
    //method
    saveData(){
       if(this.dataBase){
        localStorage.setItem("database",JSON.stringify(this.dataBase))
       } 
    }
    //get data from local storage

    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("database"))
    }



    //register
    register() {
        
        let user = reguser.value
        let pswd = regpswd.value

        if (user == "" || pswd == "") {
            alert('Please enter valid input')
        }
        else {
           if(user in this.dataBase){
            alert("user already exists")
           }
            else {
                this.dataBase[user] = { username: user, password: pswd }
                console.log(this.dataBase);
                alert('Successfull registered')
                this.saveData()
                //navigate to login page
                window.location="login.html"
            }
        }

    }
    login(){

        let user1 = loguser.value
        console.log(user1);
        let pswd1 = logpswd.value
        console.log(pswd1);


       //call storedd database
       this.getData()
       if(user1 in this.dataBase){
         if(this.dataBase[user1].password ==pswd1){
            //to store
            localStorage.setItem("user",user1)

            alert('login successfull')
            //navigate to home page
            window.location ="home.html"
         }
         else{
            alert("invalid password or username")
         }
       }
       else{
        alert("User doesn't exist")
       }







    }






}
//object
const obj = new Landing()
obj.getData()
