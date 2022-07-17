const { Post } = require('../models');

const postdata = [
  {
    title: 'Techie stuff here',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 1
  },
  {
    title: 'Some tech stuff I wrote',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 1
  },
  {
    title: 'Techie stuff here',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 2
  },
  {
    title: 'Some tech stuff I wrote',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 2
  },
  {
    title: 'Techie stuff here',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 3
  },
  {
    title: 'Some tech stuff I wrote',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 3
  },
  {
    title: 'This is really techie stuff',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 1
  },
  {
    title: 'Heres some techie stuff',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 1
  },
  {
    title: 'This is really techie stuff',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 2
  },
  {
    title: 'This is really techie stuff',
	blog_body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;