Vue.use(VueMaterial);

var app = new Vue({
    el: '#app',
    data: {
        pageHeader: 'This is my test application',
        header: 'What I plan to build:',
        todos: [
            { text: 'Weather aggregate', description: 'Time and weather for a set location?' },
            { text: 'Cigar and Pipe Tobacco review list', description: '1 to 5 stars and brief comments paired with name of blend/cigar' },
            { text: 'Plex playlist sorter(?)', description: 'Still TBD' }
        ]
    }
});