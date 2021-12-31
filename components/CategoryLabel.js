import Link from "next/link"

export default function CategoryLabel({children}) {
const colorKey = {
    JavaScript: 'red',
    CSS : 'Orange',
    Python : 'Lime',
    PHP : 'Green',
    Ruby : 'Yellow',

}

    return (
        <div className={`mx-2 my-1 bg-${colorKey[children]}-600 tex-gray-100 font-bold rounded `}>
            <Link href={`/blog/category/${children}`} >
                {children}
            </Link>

        </div>
    )
}
