if (Posts.find().count() === 0) { 
	Posts.insert({
		dog: 'Frank',
		breed: 'Pug',
		url: 'http://sachagreif.com/introducing-telescope/',
		bio: 'this dog is fucking amazing and will get you instant pussay if you take it for a walk'
	});
	
	Posts.insert({
		dog: 'Sheba',
		breed: 'Labrodor',
		url: 'http://sachagreif.com/introducing-telescope/',
		bio: 'this dog is fucking amazing and will get you instant pussay if you take it for a walk'
	});

	Posts.insert({
		dog: 'Jasmine',
		breed: 'Dachsund',
		url: 'http://sachagreif.com/introducing-telescope/',
		bio: 'this dog is fucking amazing and will get you instant pussay if you take it for a walk'
	});
}