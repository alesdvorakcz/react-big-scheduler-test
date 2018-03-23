import React, { Component } from 'react';

import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css';
import moment from 'moment';

//2. create the view model, put it in the props obj
let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week);
//set locale moment to the schedulerData, if your locale isn't English. By default, Scheduler comes with English(en, United States).
moment.locale('zh-cn');
schedulerData.setLocaleMoment(moment);
//set resources here or later
let resources = [
    {
        id: 'r1',
        name: 'Resource1'
    },
    {
        id: 'r2',
        name: 'Resource2'
    },
    {
        id: 'r3',
        name: 'Resource3'
    }
];
schedulerData.setResources(resources);
//set events here or later, 
//the event array should be sorted in ascending order by event.start property, otherwise there will be some rendering errors
let events = [
    {
        id: 1,
        start: '2017-12-18 09:30:00',
        end: '2017-12-19 23:30:00',
        resourceId: 'r1',
        title: 'I am finished',
        bgColor: '#D9D9D9'
    }, 
    {
        id: 2,
        start: '2017-12-18 12:30:00',
        end: '2017-12-26 23:30:00',
        resourceId: 'r2',
        title: 'I am not resizable',
        resizable: false
    }, 
    {
        id: 3,
        start: '2017-12-19 12:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r3',
        title: 'I am not movable',
        movable: false
    }, 
    {
        id: 4,
        start: '2017-12-19 14:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r1',
        title: 'I am not start-resizable',
        startResizable: false
    }, 
    {
        id: 5,
        start: '2017-12-19 15:30:00',
        end: '2017-12-20 23:30:00',
        resourceId: 'r2',
        title: 'I am not end-resizable',
        endResizable: false
    }
];
schedulerData.setEvents(events);

class App extends Component {
    render() {
        return (
            <div>
                <span>App</span>
                <Scheduler schedulerData={schedulerData} />
            </div>
        );
    }
}

export default App;