'use strict';
eventsApp.controller('EventController',
    function EventController($scope){

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.myStyle = {color:'red'};
        $scope.myClass = 'blue';
        $scope.btnDisabled = true;
        $scope.sortOrder = 'name';

        $scope.event = {
            name : 'Angular Boot Camp',
            date : '1/1/2013',
            time : '10:30 am',
            location : {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province : 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name : 'Directives Masterclass',
                    creatorName : 'Bob Smith',
                    duration : 1,
                    level : 'advanced',
                    abstract : 'In this session you will learn ins and outs of directives',
                    upVoteCount : 0
                },
                {
                    name : 'Scopes for fun and profit',
                    creatorName : 'Bob Smith',
                    duration : 2,
                    level : 'introductory',
                    abstract : 'In this session you will learn ins and outs of directives',
                    upVoteCount : 0
                },
                {
                    name:'Well behaved controller',
                    creatorName : 'Bob Smith',
                    duration : 4,
                    level : 'intermediate',
                    abstract : 'In this session you will learn ins and outs of directives',
                    upVoteCount : 0
                }
            ]
        }

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
                    session.upVoteCount--;
        };
    }
)