function ExternalBallistics() {
    this.BCOMP_MAXRANGE = 50001; // maximum ballistics calculation range in feet
    this.DEFAULT_GRAVITY = -32.194; // gravity in feet - could also be set as a variable
    this.DEFAULT_YINTERCEPT = 0; // y-height of the projectile when it crosses the zero range (inches) - could also be set as a variable
    this.DRAG_FUNCTIONS = {
        'G1': {
            'thresholds': [4230, 3680, 3450, 3295, 3130, 2960, 2830, 2680, 2460, 2225, 2015, 1890, 1810, 1730, 1595, 
                           1520, 1420, 1360, 1315, 1280, 1220, 1185, 1150, 1100, 1060, 1025, 980, 945, 905, 860, 810, 
                           780, 750, 700, 640, 600, 550, 250, 100, 65, 0],
            'values': [
                {'A':1.477404177730177e-04, 'M':1.9565},
                {'A':1.920339268755614e-04, 'M':1.925},
                {'A':2.894751026819746e-04, 'M':1.875},
                {'A':4.349905111115636e-04, 'M':1.825},
                {'A':6.520421871892662e-04, 'M':1.775},
				{'A':9.748073694078696e-04, 'M':1.725},
				{'A':1.453721560187286e-03, 'M':1.675},
				{'A':2.162887202930376e-03, 'M':1.625},
				{'A':3.209559783129881e-03, 'M':1.575},
				{'A':3.904368218691249e-03, 'M':1.55},
				{'A':3.222942271262336e-03, 'M':1.575},
				{'A':2.203329542297809e-03, 'M':1.625},
				{'A':1.511001028891904e-03, 'M':1.675},
				{'A':8.609957592468259e-04, 'M':1.75},
				{'A':4.086146797305117e-04, 'M':1.85},
				{'A':1.954473210037398e-04, 'M':1.95},
				{'A':5.431896266462351e-05, 'M':2.125},
				{'A':8.847742581674416e-06, 'M':2.375},
				{'A':1.456922328720298e-06, 'M':2.625},
				{'A':2.419485191895565e-07, 'M':2.875},
				{'A':1.657956321067612e-08, 'M':3.25},
				{'A':4.745469537157371e-10, 'M':3.75},
				{'A':1.379746590025088e-11, 'M':4.25},
				{'A':4.070157961147882e-13, 'M':4.75},
				{'A':2.938236954847331e-14, 'M':5.125},
				{'A':1.228597370774746e-14, 'M':5.25},
				{'A':2.916938264100495e-14, 'M':5.125},
				{'A':3.855099424807451e-13, 'M':4.75},
				{'A':1.185097045689854e-11, 'M':4.25},
				{'A':3.566129470974951e-10, 'M':3.75},
				{'A':1.045513263966272e-08, 'M':3.25},
				{'A':1.291159200846216e-07, 'M':2.875},
				{'A':6.824429329105383e-07, 'M':2.625},
				{'A':3.569169672385163e-06, 'M':2.375},
				{'A':1.839015095899579e-05, 'M':2.125},
				{'A':5.71117468873424e-05 , 'M':1.950},
				{'A':9.226557091973427e-05, 'M':1.875},
				{'A':9.337991957131389e-05, 'M':1.875},
				{'A':7.225247327590413e-05, 'M':1.925},
				{'A':5.792684957074546e-05, 'M':1.975},
				{'A':5.206214107320588e-05, 'M':2.000}
            ]
       },
       'G2': {
            'thresholds': [1674, 1172, 1060, 949, 670, 335, 0],
            'values': [
				{'A':0.0079470052136733, 'M':1.36999902851493},
				{'A':1.00419763721974e-03, 'M':1.65392237010294},
				{'A':7.15571228255369e-23, 'M':7.91913562392361},
				{'A':1.39589807205091e-10, 'M':3.81439537623717},
				{'A':2.34364342818625e-04, 'M':1.71869536324748},
				{'A':1.77962438921838e-04, 'M':1.76877550388679},
				{'A':5.18033561289704e-05, 'M':1.98160270524632}
            ]
       },
       'G5': {
            'thresholds': [1730, 1228, 1116, 1004, 837, 335, 0],
            'values': [
				{'A':7.24854775171929e-03, 'M':1.41538574492812},
				{'A':3.50563361516117e-05, 'M':2.13077307854948},
				{'A':1.84029481181151e-13, 'M':4.81927320350395},
				{'A':1.34713064017409e-22, 'M':7.8100555281422},
				{'A':1.03965974081168e-07, 'M':2.84204791809926},
				{'A':1.09301593869823e-04, 'M':1.81096361579504},
				{'A':3.51963178524273e-05, 'M':2.00477856801111}	
            ]
       },
       'G6': {
            'thresholds': [3236, 2065, 1311, 1144, 1004, 670, 0],
            'values': [
				{'A':0.0455384883480781, 'M':1.15997674041274},
				{'A':7.167261849653769e-02, 'M':1.10704436538885},
				{'A':1.66676386084348e-03, 'M':1.60085100195952},
				{'A':1.01482730119215e-07, 'M':2.9569674731838},
				{'A':4.31542773103552e-18, 'M':6.34106317069757},
				{'A':2.04835650496866e-05, 'M':2.11688446325998},
				{'A':7.50912466084823e-05, 'M':1.92031057847052}
            ]
       },
       'G7': {
            'thresholds': [4200, 3000, 1470, 1260, 1110, 960, 670, 540, 0],
            'values': [
				{'A':1.29081656775919e-09, 'M':3.24121295355962},
				{'A':0.0171422231434847, 'M':1.27907168025204},
				{'A':2.33355948302505e-03, 'M':1.52693913274526},
				{'A':7.97592111627665e-04, 'M':1.67688974440324},
				{'A':5.71086414289273e-12, 'M':4.3212826264889},
				{'A':3.02865108244904e-17, 'M':5.99074203776707},
				{'A':7.52285155782535e-06, 'M':2.1738019851075},
				{'A':1.31766281225189e-05, 'M':2.08774690257991},
				{'A':1.34504843776525e-05, 'M':2.08702306738884}
            ]
       },
       'G8': {
           'thresholds': [3571, 1841, 1120, 1088, 976, 0],
           'values': [
				{'A':0.0112263766252305, 'M':1.33207346655961},
				{'A':0.0167252613732636, 'M':1.28662041261785},
				{'A':2.20172456619625e-03, 'M':1.55636358091189},
				{'A':2.0538037167098e-16, 'M':5.80410776994789},
				{'A':5.92182174254121e-12, 'M':4.29275576134191},
				{'A':4.3917343795117e-05, 'M':1.99978116283334}
           ]
       }
   };
}

ExternalBallistics.prototype.setVariables = function(variables) {
    this.dragFunction = variables.dragFunction; // drag function 'G1', 'G2', 'G5', 'G6', 'G7' or 'G8'
    this.dragCoefficient = variables.dragCoefficient; // ballistic coefficient of the projectile for the drag function
    this.muzzleVelocity = variables.muzzleVelocity; // muzzle velocity of the projectile (feet)
    this.sightHeight = variables.sightHeight; // height of the line of sight from the center of the bore of the barrel (inches)
    this.shootingAngle = variables.shootingAngle; // up-down angle of the barrel relative to the ground (degrees)
    this.windSpeed = variables.windSpeed; // wind speed (feet)
    this.windAngle = variables.windAngle; // angle of the wind (degrees)
    this.zeroRange = variables.zeroRange; // zero range of the weapon system (yards)
    this.gravity = this.DEFAULT_GRAVITY;
    this.yIntercept = this.DEFAULT_YINTERCEPT;
    this.maximumValidRange = 0; // maximum valid range of the solution (feet)
    this.solution = [];
};

ExternalBallistics.prototype.solveAll = function() {
    var deltaTime = 0;
    
    var zeroAngle = this.getZeroAngle();
    
    var velocity = 0;
    var velocityX = this.muzzleVelocity * Math.cos( this.degToRad(zeroAngle) );
	var velocityY = this.muzzleVelocity * Math.sin( this.degToRad(zeroAngle) );
    
    var headWind = this.getHeadWind(this.windSpeed, this.windAngle);
    var crossWind = this.getCrossWind(this.windSpeed, this.windAngle);
    
    var gravityVectorX = this.gravity * Math.sin( this.degToRad( (this.shootingAngle + zeroAngle) ) );
    var gravityVectorY = this.gravity * Math.cos( this.degToRad( (this.shootingAngle + zeroAngle) ) );
    
    var currentHeight = -this.sightHeight / 12;
    var currentRange = 0;
    
    this.maximumValidRange = 0;
    
    for (var time = 0;; time = time + deltaTime) {
        
        velocityX1 = velocityX; 
        velocityY1 = velocityY;	
        
        velocity = Math.sqrt(velocityX * velocityX + velocityY * velocityY);

        // Compute acceleration using the drag function retardation	
        var dragVelocity = this.retard(velocity + headWind);		
        var dragVelocityX = -(velocityX / velocity) * dragVelocity;
        var dragVelocityY = -(velocityY / velocity) * dragVelocity;

        // Compute velocity, including the resolved gravity vectors.	
        velocityX = velocityX + deltaTime * dragVelocityX + deltaTime * gravityVectorX;
        velocityY = velocityY + deltaTime * dragVelocityY + deltaTime * gravityVectorY;
        
        if (currentRange / 3 >= this.maximumValidRange) {
            this.solution[10*this.maximumValidRange+0] = currentRange / 3; // Range (yards)
            this.solution[10*this.maximumValidRange+1] = currentHeight * 12; // Path (inches)
            this.solution[10*this.maximumValidRange+2] = -this.radToMinuteOfAngle( 
                Math.atan(currentHeight / currentRange) ); // Correction (MOA)
            this.solution[10*this.maximumValidRange+3] = time + deltaTime; // Time (seconds)
            this.solution[10*this.maximumValidRange+4] = this.getWindageDeflection(
                crossWind, this.muzzleVelocity, currentRange, time + deltaTime); // Windage (inches)
            this.solution[10*this.maximumValidRange+5] = this.radToMinuteOfAngle( 
                Math.atan( (this.solution[10*this.maximumValidRange+4]/12) / 
                           (this.solution[10*this.maximumValidRange+0]*3) ) ); // Windage (MOA)
            this.solution[10*this.maximumValidRange+6] = velocity; // Combined velocity (feet)
            this.solution[10*this.maximumValidRange+7] = velocityX; // x-velocity (feet)
            this.solution[10*this.maximumValidRange+8] = velocityY; // y-velocity (feet)
            
            this.maximumValidRange++;
       }	

        // Compute position based on average velocity.
        currentRange = currentRange + deltaTime * (velocityX + velocityX1) / 2;
        currentHeight = currentHeight + deltaTime * (velocityY + velocityY1) / 2;
        
        deltaTime = 0.5 / velocity;
        
        if (Math.abs(velocityY) > Math.abs(3*velocityX)) {
            break;
        }
		if (this.maximumValidRange > this.BCOMP_MAXRANGE) {
            break;
        }
        
   }
};

ExternalBallistics.prototype.getHeadWind = function(windAngle, windSpeed) {
    return Math.cos( this.degToRad(windAngle) ) * windSpeed;
};

ExternalBallistics.prototype.getCrossWind = function(windAngle, windSpeed) {
    return Math.sin( this.degToRad(windAngle) ) * windSpeed;
};

ExternalBallistics.prototype.getWindageDeflection = function(windSpeed, muzzleVelocity, range, time) {
    windVelocity = windSpeed * 17.60; // Convert to inches per second.
    return windVelocity * (time - range / muzzleVelocity);
};

ExternalBallistics.prototype.degToRad = function(degrees) {
    return degrees * Math.PI / 180.0;  
};

ExternalBallistics.prototype.radToDeg = function(radians) {
    return radians * 180.0 / Math.PI;
};

ExternalBallistics.prototype.minuteOfAngleToRad = function(minuteOfAngle) {
    return minuteOfAngle / 60.0 * Math.PI / 180.0;
};

ExternalBallistics.prototype.radToMinuteOfAngle = function(radians) {
    return radians * 60.0 * 180.0 / Math.PI;
};

ExternalBallistics.prototype.getZeroAngle = function() {
    var time = 0;
	var deltaTime = 1 / this.muzzleVelocity;
    
    var currentRange = 0;
    var currentHeight = 0;
    
    var angle = 0;
    var deltaAngle = this.degToRad(14);
    
    for (angle = 0;; angle = angle + deltaAngle) {
        
        velocityY = this.muzzleVelocity * Math.sin(angle);
        velocityX = this.muzzleVelocity * Math.cos(angle);
        gravityVectorX = this.gravity * Math.sin(angle);
        gravityVectorY = this.gravity * Math.cos(angle);
        
        for (time = 0, currentRange = 0, currentHeight = 0-this.sightHeight/12; 
             currentRange <= this.zeroRange*3; time = time + deltaTime) {
            velocityY1 = velocityY;
            velocityX1 = velocityX;
            velocity = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
            
			deltaTime = 1 / velocity;
            
            dragVelocity = this.retard(velocity);
            dragVelocityY = -(velocityY / velocity) * dragVelocity;
			dragVelocityX = -(velocityX / velocity) * dragVelocity;
            
            velocityY += deltaTime * dragVelocityY + deltaTime * gravityVectorY;
            velocityX += deltaTime * dragVelocityX + deltaTime * gravityVectorX;

            currentHeight += deltaTime * (velocityY + velocityY1) / 2;
            currentRange += deltaTime * (velocityX + velocityX1) / 2;
            
            // Break early to save CPU time if we won't find a solution.
            if (velocityY < 0 && currentHeight < this.yIntercept) {
                break;
           }
            if (velocityY > 3 * velocityX) {
                break;
           }
       }
        
        if (currentHeight > this.yIntercept && deltaAngle > 0) {
            deltaAngle = -deltaAngle / 2;
       }
        if (currentHeight < this.yIntercept && deltaAngle < 0) {
            deltaAngle = -deltaAngle / 2;
       }
       
       if (Math.abs(deltaAngle) < this.minuteOfAngleToRad(0.01)) {
           break;
       }
       if (angle > this.degToRad(45)) {
           break;
       }
        
   }
    
    return this.radToDeg(angle);
};

ExternalBallistics.prototype.retard = function(velocity) {
    A = -1;
    M = -1;
    
    dragFunction = this.DRAG_FUNCTIONS[this.dragFunction];
    if (typeof dragFunction !== 'undefined') {
        thresholdsLength = dragFunction.thresholds.length;
        for (var i = 0; i < thresholdsLength; i++) {
            if (velocity > dragFunction.thresholds[i]) {
                A = dragFunction.values[i]['A'];
                M = dragFunction.values[i]['M'];
                break;
            }
        }
    }
    
    if (A != -1 && M != -1 && velocity > 0 && velocity < 10000) {
        retardedVelocity = A * Math.pow(velocity, M) / this.dragCoefficient;
        return retardedVelocity;
    }
    
    return -1;
};

ExternalBallistics.prototype.getRange = function(yardage) {
    if (yardage < this.maximumValidRange) {
        return this.solution[10*yardage];
    }
    
    return 0;
};

ExternalBallistics.prototype.getPath = function(yardage) {
    if (yardage < this.maximumValidRange) {
        return this.solution[10*yardage+1];
    }
    
    return 0; 
};

ExternalBallistics.prototype.getMinuteOfAngle = function(yardage) {
    if (yardage < this.maximumValidRange) {
        return this.solution[10*yardage+2];
    }
    return 0;
};


ExternalBallistics.prototype.getTime = function(yardage) {
	if (yardage < this.maximumValidRange) {
		return this.solution[10*yardage+3];
	}
    return 0;
};

ExternalBallistics.prototype.getWindage = function(yardage) {
    if (yardage < this.maximumValidRange){
        return this.solution[10*yardage+4];
    }
    return 0;
}

ExternalBallistics.prototype.getWindageMOA = function(yardage) {
    if (yardage < this.maximumValidRange) {
        return this.solution[10*yardage+5];
    }
    return 0;
}

ExternalBallistics.prototype.getVelocity = function(yardage) {
	if (yardage < this.maximumValidRange) {
		return this.solution[10*yardage+6];
	}
    
    return 0;
};

ExternalBallistics.prototype.getVelocityX = function(yardage) {
	if (yardage < this.maximumValidRange) {
		return this.solution[10*yardage+7];
	}
    
	return 0;
};

ExternalBallistics.prototype.getVelocityY = function(yardage) {
	if (yardage < this.maximumValidRange) {
		return this.solution[10*yardage+8];
	}
    
	return 0;
}