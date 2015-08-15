( function( window, undefined ) {
    var Stopwatch = function() {
        this.reset();
    };
    
    Stopwatch.prototype.reset = function() {
        this._intervals = [];
        this._intervals_length = 0;
        this._laps = [];
        this._laps_length = 0;
        this._is_started = false;
        
        return this;
    };
    
    Stopwatch.prototype._setState = function( state ) {
        if ( this._is_started !== state ) {
            this._is_started = state;
            this._intervals[ this._intervals_length++ ] = Date.now();
            
            return true;
        } else {    
            return false;
        }
    };
    
    Stopwatch.prototype.start = function() {
        return this._setState( true );
    };
    
    Stopwatch.prototype.stop = function() {
        return this._setState( false );
    };
    
    Stopwatch.prototype.getTime = function() {
        var i,
            time = 0,
            prev,
            last;
        
        for ( i = 0; i < this._intervals_length; i += 2 ) {
            prev = this._intervals[ i ];
            last = this._intervals[ i + 1 ];
            
            if ( prev === undefined ) {
                prev = Date.now();
            }
            
            if ( last === undefined ) {
                last = Date.now();
            }
        
            time += last - prev;
        }
        
        return time;
    };
    
    Stopwatch.prototype.lap = function() {
        this._laps[ this._laps_length++ ] = this.getTime();
        
        return this;
    };
    
    Stopwatch.prototype.laps = function() {
        return this._laps;
    };
    
    window.Stopwatch = window.Stopwatch || Stopwatch;
} )( window );