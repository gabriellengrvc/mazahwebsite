import ReduceFoodWaste from "./reduce-food-waste.mdx";
import FoodWasteStats from "./food-waste-statistics.mdx";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: React.FC;
  image: string;
};

const posts: BlogPost[] = [
  {
    slug: "reduce-food-waste",
    title: "How to Reduce Food Waste at Home",
    date: "2026-01-15",
    description: "Practical ways to reduce food waste and save money.",
    content: ReduceFoodWaste, 
    image: "/assets/sample-1.jpg",
  },
  {
    slug: "food-waste-statistics",
    title: "Food Waste Statistics You Need to Know",
    date: "2026-01-12",
    description: "Important facts about food waste around the world.",
    content: FoodWasteStats,
    image: "/assets/sample-1.jpg",
  },
  {
    slug: "reduce-food-waste",
    title: "How to Reduce Food Waste at Home",
    date: "2026-01-15",
    description: "Practical ways to reduce food waste and save money.",
    content: ReduceFoodWaste, 
    image: "/assets/sample-1.jpg",
  },
  {
    slug: "food-waste-statistics",
    title: "Food Waste Statistics You Need to Know",
    date: "2026-01-12",
    description: "Important facts about food waste around the world.",
    content: FoodWasteStats,
    image: "/assets/sample-1.jpg",
  }
];

export default posts;
