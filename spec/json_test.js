describe('json', function() {
	var resAllfailed = {
	  "body": [
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.320px.baseline.png",
	      "regressionPath": "visual/reference/Body_win7-ie9.body.320px.regression.png",
	      "diffPath": "visual/failed/Body_win7-ie9.body.320px.diff.png",
	      "message": "mismatch tolerance exceeded (+38.92), image-diff created",
	      "misMatchPercentage": 38.97,
	      "isExactSameImage": false,
	      "isSameDimensions": false,
	      "isWithinMisMatchTolerance": false,
	      "properties": []
	    },
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.568px.baseline.png",
	      "regressionPath": "visual/reference/Body_win7-ie9.body.568px.regression.png",
	      "diffPath": "visual/failed/Body_win7-ie9.body.568px.diff.png",
	      "message": "mismatch tolerance exceeded (+51.39), image-diff created",
	      "misMatchPercentage": 51.44,
	      "isExactSameImage": false,
	      "isSameDimensions": false,
	      "isWithinMisMatchTolerance": false,
	      "properties": []
	    },
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.1024px.baseline.png",
	      "regressionPath": "visual/reference/Body_win7-ie9.body.1024px.regression.png",
	      "diffPath": "visual/failed/Body_win7-ie9.body.1024px.diff.png",
	      "message": "mismatch tolerance exceeded (+60.86), image-diff created",
	      "misMatchPercentage": 60.91,
	      "isExactSameImage": false,
	      "isSameDimensions": false,
	      "isWithinMisMatchTolerance": false,
	      "properties": []
	    }
	  ]
	};

	var resAllSucceed = {
	  "body": [
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.320px.baseline.png",
	      "message": "mismatch tolerance not exceeded (~0), baseline didn\"t change",
	      "misMatchPercentage": 0,
	      "isExactSameImage": true,
	      "isSameDimensions": true,
	      "isWithinMisMatchTolerance": true
	    },
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.568px.baseline.png",
	      "message": "mismatch tolerance not exceeded (~0), baseline didn\"t change",
	      "misMatchPercentage": 0,
	      "isExactSameImage": true,
	      "isSameDimensions": true,
	      "isWithinMisMatchTolerance": true
	    },
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.1024px.baseline.png",
	      "message": "mismatch tolerance not exceeded (~0), baseline didn\"t change",
	      "misMatchPercentage": 0,
	      "isExactSameImage": true,
	      "isSameDimensions": true,
	      "isWithinMisMatchTolerance": true
	    }
	  ]
	};

	var resOnefailed = {
	  "body": [
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.320px.baseline.png",
	      "regressionPath": "visual/reference/Body_win7-ie9.body.320px.regression.png",
	      "diffPath": "visual/failed/Body_win7-ie9.body.320px.diff.png",
	      "message": "mismatch tolerance exceeded (+38.92), image-diff created",
	      "misMatchPercentage": 38.97,
	      "isExactSameImage": false,
	      "isSameDimensions": false,
	      "isWithinMisMatchTolerance": false,
	      "properties": []
	    },
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.568px.baseline.png",
	      "regressionPath": "visual/reference/Body_win7-ie9.body.568px.regression.png",
	      "diffPath": "visual/failed/Body_win7-ie9.body.568px.diff.png",
	      "message": "mismatch tolerance exceeded (+51.39), image-diff created",
	      "misMatchPercentage": 51.44,
	      "isExactSameImage": false,
	      "isSameDimensions": false,
	      "isWithinMisMatchTolerance": true,
	      "properties": []
	    },
	    {
	      "baselinePath": "visual/reference/Body_win7-ie9.body.1024px.baseline.png",
	      "regressionPath": "visual/reference/Body_win7-ie9.body.1024px.regression.png",
	      "diffPath": "visual/failed/Body_win7-ie9.body.1024px.diff.png",
	      "message": "mismatch tolerance exceeded (+60.86), image-diff created",
	      "misMatchPercentage": 60.91,
	      "isExactSameImage": false,
	      "isSameDimensions": false,
	      "isWithinMisMatchTolerance": true,
	      "properties": []
	    }
	  ]
	}

	it('should all fail', function(){
		expect(resAllfailed["body"].every(function(element, index, array){
        	return element.isWithinMisMatchTolerance; 
      	})).toBe(false);
	});

	it('should all succeed', function(){
		expect(resAllSucceed["body"].every(function(element, index, array){
        	return element.isWithinMisMatchTolerance; 
      	})).toBe(true);
	});

	it('should one failed', function(){
		expect(resOnefailed["body"].every(function(element, index, array){
        	return element.isWithinMisMatchTolerance; 
      	})).toBe(false);
	});
});