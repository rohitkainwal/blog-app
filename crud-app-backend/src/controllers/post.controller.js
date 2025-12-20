import postModel from "../models/post.model.js";
import asyncHandler from "express-async-handler";
import CustomError from "../utils/CustomError.util.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import { deleteImage, uploadImage, } from "../utils/cloudinary.util.js";
import { getURL } from "../utils/getURL.js";
// create post
export const createPost = asyncHandler(async (req, res, next) => {
  const { title, content } = req.body;

  console.log("request body",req.body);
console.log("request file ",req.file);
//image buffer get
const buffer = req.file.buffer;


if (!req.file) {
  return next(new CustomError(400, "Image is required"));
}
//buffer to baseurl 
const imageURL = getURL(buffer, req.file.mimetype);

//cloudinary upload

const uploaded = await uploadImage(imageURL);

  if (!title || !content) {
    return next(new CustomError(400, "title and content required"));
  }
  const newPost = new postModel({
    title,
    content,
    image:{
      url:uploaded.secure_url,
      public_id:uploaded.public_id,
    },
    author: req.user._id,
  });


  await newPost.save();
  new ApiResponse(200, "post created successfully", newPost).send(res);
});

// get all post

export const getPosts = asyncHandler(async (req, res, next) => {
  const posts = await postModel.find().populate("author", "username email");

  if (posts.length === 0) {
    return next(new CustomError(400, "no blogs found"));
  }

  new ApiResponse(200, "all blogs fetched", posts).send(res);
});

// get one post

export const getPost = asyncHandler(async (req, res, next) => {
  const postId = req.params.id;
  const post = await postModel
    .findById(postId)
    .populate("author", "username email");

  if (!post) {
    return next(new CustomError(400, "no post found"));
  }
  new ApiResponse(200, "post fetched", post).send(res);
});

//  edit blog

export const editPost = asyncHandler(async (req, res, next) => {
  const updatePost = await postModel.findByIdAndUpdate(
    {
      _id: req.params.id,
      author: req.user._id,
    },
    req.body,
    { new: true }
  );

  if (!updatePost) {
    return next(new CustomError(400, "no post found for update"));
  }

  new ApiResponse(200, "post updated successfully", updatePost).send(res);
});

// delete post

export const deletePost = asyncHandler(async (req, res, next) => {
  const post = await postModel.findByIdAndDelete(req.params.id );
  console.log(req.params.id)
  if (!post) {
      return next(new CustomError(400, "no post found"));
    }

 
    
   
  new ApiResponse(200, "post delete successfully", post).send(res);
});
