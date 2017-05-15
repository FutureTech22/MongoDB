(function() {
    'use strict';

    angular
        .module('people')
        .controller('tableController', function (api) {


           

            const vm = this;

            let ajaxGetData = api.getData();
            ajaxGetData.then(res=>{
                vm.data = res.data;
                
            })


            vm.createData = function (valid) {
                if(valid) {
                    let user = vm.user;
                    let newUser = Object.assign({}, user);
                    console.log(newUser);
                    let addNewUser = api.createData(newUser);
                    addNewUser.then(res=>{
                        console.log(res);
                        vm.data = res.data;
                        console.log(vm.users);
                    })
                    vm.user = {};
                }else{
                    alert('invalid')
                }
            }
            //delete the user by id
            vm.delete = function(id) {
                    let removeData = api.deleteData(id);
                    removeData.then(response =>{
                        vm.data = response.data;
                    })
                }
                //send user by id to the api <------is that even right???
                vm.getUserData = function (id) {
                    let data = api.deleteData(id);
                    data.then(res=> {
                        let getNewUser = api.getData();
                         getNew.then(res => { //getting the data back from the api
                            console.log("Heres your data", res);
                            vm.data = res.data 
                        })
                    });
                }

            })


})();

