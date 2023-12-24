// `app/categories/page.jsx` is the UI for the '/categories' URL
import { Link } from "@nextui-org/react"
import { categoryQuery } from "../../sanity/lib/queries"
import { sanityFetch } from "../../sanity/lib/sanityFetch"
// Server Component
export default async function CategoriesPage() {
  const categories = await sanityFetch({query: categoryQuery})
  console.log(categories)
    return (
      <section>
        <div className="flex flex-row gap-2 p-4 scroll-smooth" >
          {categories.map((category) => (
              <Link key={category._id} href={``} className="px-4 py-2 hover:text-blue-800 bg-blue-300 rounded-lg">{category.title}</Link>
          ))}
          <h1>CATEGORIES</h1>
        </div>
      </section>
    )
  }
  

  