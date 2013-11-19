if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Sheba',
    author: 'Lab',
    url: 'http://sachagreif.com/introducing-telescope/',
    img: 'http://no-pedia.com/data_images/labrador-retriever/labrador-retriever-01.jpg'
  });
  
  Posts.insert({
    title: 'Frank',
    author: 'Pug',
    url: 'http://meteor.com',
    img: 'http://3.bp.blogspot.com/-b2UosT7m2QA/UFOXcXEuoWI/AAAAAAAAAJk/AfJcP2F47TA/s1600/Pug+Fawn.jpg'
  });
  
  Posts.insert({
    title: 'Jasmine',
    author: 'Daschund',
    url: 'http://themeteorbook.com',
    img: 'http://4.bp.blogspot.com/_Y3uhFc0bf60/TMro3KP79bI/AAAAAAAAAQg/UMCik5qUVIY/s1600/IMG_20100930_143731.jpg'
  });

  Posts.insert({
    title: 'Snoopy',
    author: 'Terrier',
    url: 'http://themeteorbook.com',
    img: 'http://www.canaryzoo.com/Dog%20Species%201/jack%20russell%20terrier.jpeg'
  });
}