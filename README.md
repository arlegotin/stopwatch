# Stopwatch
Simple stopwatch.

###Creating

```javascript
//creating an instance
var my_watch = new Stopwatch();
```

###Methods

##### `start`

Starts new interval. Can be called only when the stopwatch is stopped.
```javascript
my_watch.start();
```

##### `stop`

Finishes current interval. Can be called only when the stopwatch is started.
```javascript
my_watch.stop();
```

##### `getTime`

Returns the total duration of all intervals in milliseconds.  
If current interval is not finished, the current time will be considered as its end.
```javascript
var current_time = my_watch.getTime();
```

##### `lap`

Saves the current value of **getTime** method.  
It can be called many times.
```javascript
my_watch.lap();
```

##### `laps`

Returns all values, saved by **lap** method.
```javascript
var laps = my_watch.laps();
```

##### `reset`

Resets all the stopwatch and returns to its original condition.
```javascript
my_watch.reset();
```

###Example
```javascript
//creating an instance
var my_watch = new Stopwatch();

//current time is 0 and there's no laps yet
my_watch.getTime();//returns "0"
my_watch.laps();//returns "[]";

//starts an interval
my_watch.start();

//...waiting for a while...

//stops current interval
my_watch.stop();
my_watch.getTime();//returns "3654", for example

//remember current time
my_watch.lap();

//starts new interval
my_watch.start();

//...waiting again...

//remember one more time
my_watch.lap();

//...waiting...

//remember one more time
my_watch.lap();

//...waiting...

//stops current interval
my_watch.stop();
my_watch.getTime();//returns "7522"

//remember one more time
my_watch.lap();

//...waiting...

//remember one more time
my_watch.lap();

//see all laps
my_watch.laps();//returns "[ 3654, 3870, 5600, 7522, 7522 ]"

//reset
me_watch.reset();

//current time is 0 and there's no laps again
my_watch.getTime();//returns "0"
my_watch.laps();//returns "[]";
```
