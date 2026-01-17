import { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";

interface CommentsProps {
  postSlug: string;
}

export default function Comments({ postSlug }: CommentsProps) {
  const [comments, setComments] = useState<{ id: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "comments", postSlug, "posts"),
      orderBy("timestamp", "asc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({ id: doc.id, text: doc.data().text }))
      );
    });
    return () => unsubscribe();
  }, [postSlug]);

  const addComment = async () => {
    if (!input.trim()) return;
    await addDoc(collection(db, "comments", postSlug, "posts"), {
      text: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="mt-6">
      <h3 className="font-bold text-lg mb-2">Comments</h3>
      <div className="flex space-x-2 mb-2">
        <input
          className="border rounded px-2 py-1 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a comment..."
        />
        <button
          onClick={addComment}
          className="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
        >
          Post
        </button>
      </div>
      <ul className="space-y-1">
        {comments.map((c) => (
          <li key={c.id} className="border-b py-1">
            {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
