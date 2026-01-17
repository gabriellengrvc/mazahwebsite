import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import { signInAnonymously } from "firebase/auth";

interface CommentsProps {
  postSlug: string;
}

export default function Comments({ postSlug }: CommentsProps) {
  const [comments, setComments] = useState<{ id: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    signInAnonymously(auth).catch(console.error);
    const q = query(
      collection(db, "comments", postSlug, "messages"),
      orderBy("createdAt")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
        }))
      );
    });

    return () => unsubscribe(); 
  }, [postSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return; 

    await addDoc(collection(db, "comments", postSlug, "messages"), {
      text: input,
      createdAt: serverTimestamp(),
    });

    setInput(""); 
  };

  return (
    <div className="mt-6">
      <h4 className="font-semibold mb-2">Comments</h4>
      <form onSubmit={handleSubmit} className="flex mb-4 space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-green-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Post
        </button>
      </form>
      <ul className="space-y-2">
        {comments.map((c) => (
          <li
            key={c.id}
            className="text-gray-700 border-b border-gray-200 pb-1"
          >
            {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
