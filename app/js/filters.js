'use strict';

eventsApp.filter('durations', function(){
    return function(duration){
        switch(duration){
            case 1:
                return "Half Hour";
            case 2:
                return "One Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
})

eventsApp.filter('levels', function(){
    return function(level){
        switch(level){
            case 'introductory':
                return 'fa fa-battery-empty';
            case 'intermediate':
                return 'fa fa-battery-quarter';
            case 'hard':
                return 'fa fa-battery-half';
            default:
                return "fa fa-battery-full";
        }
    }
})