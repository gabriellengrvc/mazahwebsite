import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { Heart } from "lucide-react";

interface LikesProps {
  postSlug: string;
}

export default function Likes({ postSlug }: LikesProps) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      const docRef = doc(db, "likes", postSlug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLikes(docSnap.data().count);
      } else {
        await setDoc(docRef, { count: 0 });
        setLikes(0);
      }
    };
    fetchLikes();
  }, [postSlug]);

  const addLike = async () => {
    const docRef = doc(db, "likes", postSlug);
    await updateDoc(docRef, { count: increment(1) });
    setLikes((prev) => prev + 1);
  };

  return (
    <button
      onClick={addLike}
      className="flex items-center space-x-1 text-red-500 hover:text-red-600 mt-4"
    >
      <Heart className="w-5 h-5" />
      <span>{likes}</span>
    </button>
  );
}
