// ./nextjs-app/app/_components/Posts.tsx
import { Divider, Link } from "@nextui-org/react";

export default function Categories({ categories = [] }) {
  const categoryCount = categories.length === 1 ? `1 Post` : `${categories.length} `;

  return (
    <div className="container mx-auto">
    <div className="">

    <p className="text-[12px] italic py-3"> {categoryCount} Categoi</p>
    <h1 className="text-3xl mb-3 font-extrabold">Posts</h1>
    </div>
    <Divider />
    <div className="container mx-auto py-3 grid grid-cols-1 gap-10 divide-y justify-center divide-blue-100">
    <div className="flex flex-row gap-2 p-4 scroll-smooth" >
          {categories.map((category) => (
              <Link key={category._id} href={`#`} className="px-4 py-2 hover:text-blue-800 bg-blue-300 rounded-lg">{category.title}</Link>
          ))}
          <h1>CATEGORIES</h1>
        </div>
    </div>
    </div>
  );
}