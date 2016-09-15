import Post from './post.model'
import cuid from 'cuid'
import slug from 'limax'
import sanitizeHtml from 'sanitize-html'

/**
 * @api {get} /posts List of Posts
 * @apiName GetPosts
 * @apiGroup Post
 * @apiVersion 0.1.0
 *
 * @apiSuccess {String} name Author.
 * @apiSuccess {String} title  Title of Post.
 * @apiSuccess {String} content Content of Post.
 * @apiSuccess {Date} dateAdded Post date.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "posts":[
 *        {
 *          "_id":"57d5805dbf9936a627468a69",
 *          "name":"Admin",
 *          "title":"Lorem Ipsum",
 *          "slug":"lorem-ipsum",
 *          "cuid":"cikqgkv4q01ck7453ualdn3hf",
 *          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
 *          "__v":0,
 *          "dateAdded":"2016-09-11T16:03:41.168Z"
 *        }
 *      ]
 *   }
 */
export function getPosts(req, res) {
  Post.find().sort('-dateAdded').exec((err, posts) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ posts })
  })
}

/**
 * Save a post
 * @param req
 * @param res
 * @returns void
 */
export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end()
  }

  const newPost = new Post(req.body.post)

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title)
  newPost.name = sanitizeHtml(newPost.name)
  newPost.content = sanitizeHtml(newPost.content)

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true })
  newPost.cuid = cuid()
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ post: saved })
  })
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getPost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ post })
  })
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deletePost(req, res) {
  Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
    if (err) {
      res.status(500).send(err)
    }

    post.remove(() => {
      res.status(200).end()
    })
  })
}
