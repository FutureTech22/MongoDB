(function() {
    'use strict';

    angular
        .module('people')
        .factory('api', function($http) {

            return {

                getData:()=>{
                  return $http({
                    method: 'GET',
                    url: 'http://localhost:8081/users',
                })
                },
                 createData:(user)=>{
                  return $http({
                    method: 'POST',
                    data:user,
                    url: 'http://localhost:8081/users',
                      
                     })
                },
                 getUserData:()=>{
                  return $http({
                    method: 'GET',
                    data:data,
                    url: 'http://localhost:8081/users',
                      
                     })
                },
                deleteData:(id)=>{
                  console.log(id)
                  return $http({
                    method: 'DELETE',
                    url: `http://localhost:8081/users/${id}`,
                      
                     })
                },
                


            }

        });

})();
