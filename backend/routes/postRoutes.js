const router = require("express").Router();
const controller = require("../controllers/postController");
const { protect } = require("../middlewares/authMiddleware");

function optionalProtect(req, res, next) {
  if (!req.headers.authorization) return next();
  return protect(req, res, next);
}

router.get("/", optionalProtect, controller.getPosts);
router.get("/mine", protect, controller.getMyPosts);
router.get("/:id", optionalProtect, controller.getPost);
router.post("/", protect, controller.createPost);
router.put("/:id", protect, controller.updatePost);
router.delete("/:id", protect, controller.deletePost);

module.exports = router;