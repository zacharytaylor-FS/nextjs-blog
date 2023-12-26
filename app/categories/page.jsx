// `app/categories/page.jsx` is the UI for the '/categories' URL
import Categories from '../../components/Categories'
import { categoryQuery } from "../../sanity/lib/queries"
import { sanityFetch } from "../../sanity/lib/sanityFetch"
// Server Component
export default async function CategoriesPage() {
  const categories = await sanityFetch({query: categoryQuery})
  console.log(categories)
    return (
      <section>
        <div className="flex flex-row gap-2 p-4 scroll-smooth" >
          <Categories categories={categories}/>
        </div>
      </section>
    )
  }
  

  