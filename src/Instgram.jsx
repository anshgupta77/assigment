import { useState } from 'react';

export default function InstagramFeedbackApp() {
  // Sample data for posts
  const initialPosts = [
    {
      id: 1,
      username: "traveler123",
      imageUrl: "data:image/jpeg;base64,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",
      caption: "Beautiful sunset at the beach today! 🌅",
      comments: [
        { id: 1, username: "user1", text: "Amazing view!" },
        { id: 2, username: "user2", text: "Wish I was there!" }
      ],
    },
    {
      id: 2,
      username: "foodie_adventures",
      imageUrl: "data:image/png;base64,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",
      caption: "Homemade pasta night! 🍝 Recipe in bio.",
      comments: [
        { id: 1, username: "chef_mike", text: "Looks delicious!" }
      ],
    },
    {
      id: 3,
      username: "fitness_journey",
      imageUrl: "data:image/jpeg;base64,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",
      caption: "New personal record today! 💪 Never give up on your goals.",
      comments: [],
    }
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [likes, setLikes] = useState({});
  const [newComment, setNewComment] = useState("");
  const [activeCommentId, setActiveCommentId] = useState(null);


  const handleLike = (postId) => {
    setLikes(prev =>{
        return { ... prev, [postId]: !prev[postId]}
    })
  };


  const handleAddComment = (postId) => {
   

    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newCommentObj = {
          id: post.comments.length + 1,
          username: "current_user",
          text: newComment
        };
        return { ...post, comments: [...post.comments, newCommentObj] };
      }
      return post;
    }));

    setNewComment("");
    setActiveCommentId(null);
  };

  

  const toggleCommentInput = (postId) => {
    setActiveCommentId(activeCommentId === postId ? null : postId);
    setNewComment("");
  };


    

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-6">Instagram Feed</h1>
      
      {posts.map(post => (
        <div key={post.id} className="mb-8 border rounded text-left">
       
          <div className="p-4 flex items-left">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            <div className="ml-2 font-medium">{post.username}</div>
          </div>
          
     
          <img 
            src={post.imageUrl} 
            alt="Post" 
            className="w-full" 
          />
          
        
          <div className="p-4">
            <div className="flex space-x-4 mb-2">
              <button 
                onClick={() => handleLike(post.id)}
                className="font-medium"
              >
                 {likes[post.id] ? "❤️" : " 🖤"}
              </button>

              <button 
                onClick={() => toggleCommentInput(post.id)}
                className="font-medium"
              >
                💬 {post.comments.length}
              </button>

              
            </div>
            
      
            <div className="mb-2 ">
              <span className="font-medium">{post.username}</span> {post.caption}
            </div>
           
            {post.comments.length > 0 && (
              <div className="mt-2">
                {post.comments.map(comment => (
                  <div key={comment.id} className="text-sm mb-1">
                    <span className="font-medium">{comment.username}</span> {comment.text}
                  </div>
                ))}
              </div>
            )}
            
        
            {activeCommentId === post.id && (
              <div className="mt-3 flex">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-grow border rounded p-2 mr-2"
                />
                <button 
                  onClick={() => handleAddComment(post.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Post
                </button>
              </div>
            )}

          </div>
        </div>
      ))}
    </div>
  );
}