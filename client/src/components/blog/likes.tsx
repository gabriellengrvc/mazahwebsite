import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";

interface LikesProps {
  postSlug: string;
}

export default function Likes({ postSlug }: LikesProps) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Listen to real-time updates for this post's likes
    const ref = doc(db, "likes", postSlug);
    const unsubscribe = onSnapshot(ref, (docSnap) => {
      if (docSnap.exists()) {
        setLikes(docSnap.data()?.count || 0);
      } else {
        setLikes(0);
      }
    });

    return () => unsubscribe();
  }, [postSlug]);

  const handleLike = async () => {
    if (liked) return; // prevent multiple likes per user session
    const ref = doc(db, "likes", postSlug);
    await setDoc(ref, { count: increment(1) }, { merge: true });
    setLiked(true);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-1 mt-4 transition-colors duration-200 ${
        liked ? "text-red-600" : "text-gray-500 hover:text-red-500"
      }`}
    >
      <Heart className="w-5 h-5" fill={liked ? "currentColor" : "none"} />
      <span>{likes}</span>
    </button>
  );
}
