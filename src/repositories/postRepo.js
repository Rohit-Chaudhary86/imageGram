import Post from "../schema/post"

export const createPost=async(caption,image,user)=>{  //this function creates posts
    try {
        const newPost=await Post.create({caption,image,user});
        return newPost;
    } catch (error) {
        console.log(error);
    }
}

export const findPosts=async()=>{  //this function finds all the posts
    try {
        const posts=await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        
    }
}

// to find a specific post
export const sindSpecificPost=async(id)=>{
    try {
        const post=await Post.findById(id);
        return post;
    } catch (error) {
        console.log(error);
    }
}