import Post from './Post.js';
import PostService from './PostService.js';

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getOne(id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async update(req, res) {
    try {
      const post = req.body;
      const updatedPost = await PostService.update(post);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;

      const deletedPost = await PostService.delete(id);
      return res.status(200).json({ deleted: deletedPost });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
