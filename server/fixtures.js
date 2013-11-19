if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Sheba',
    author: 'Lab',
    url: 'http://sachagreif.com/introducing-telescope/'
  });
  
  Posts.insert({
    title: 'Frank',
    author: 'Pug',
    url: 'http://meteor.com'
  });
  
  Posts.insert({
    title: 'Jasmine',
    author: 'Daschund',
    url: 'http://themeteorbook.com'
  });

  Posts.insert({
    title: 'Snoopy',
    author: 'Terrier',
    url: 'http://themeteorbook.com'
  });
}