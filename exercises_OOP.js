//exercise 1

//stopwatch object
//1 property: duration
//3 methods: reset, start, stop
//duration adds secs from start
//resets duration on reset call

//initially duration = 0
//can't call stop, start twice in a row



const sw = new Stopwatch();

//constructor function
function Stopwatch(){
    //private variables
    let startTime, endTime, running, duration = 0;

    this.start = function (){
        if (running) //check to see if stopwatch is running
            throw new Error('Stopwatch has already started.');
        
        running = true;

        //initiates a new date object
        startTime = new Date();
    };

    this.stop = function (){
        //check to see if stopwatch is running or not
        if (!running)
            throw new Error('Stopwatch is not started.');
    
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    //reset all variables to initial value
    this.reset = function (){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    //defined a read-only property 'duration'
    //that 'gets' the duration property value
    Object.defineProperty(this, 'duration', {
        get: function(){ return duration;} 
    });
}

