import Link from "next/link";
import { Category } from '../../interfaces/index';

interface Categories {
    categories: Category[]
}

export default function CategoriesWidget({ categories }: Categories) {
    return (
        <div className="widget categories-widget">
            <h5 className="widget-title">Categories</h5>
            <ul className="categories-list">
                {categories.map(category => (<li key={category.slug}>
                    <Link href={`/blog/category/${category.slug}`}>
                        <a>{category.name}</a>
                    </Link>
                </li>))}
            </ul>
        </div>
    )
}