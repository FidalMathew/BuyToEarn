import React from 'react'
import Product from './Product'

function Products() {

    const products = [
        {
            _id: "1",
            title: "Headphones",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis.",
            img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s73-pai-163_1_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=21a06350dae1885793d76eea053790ef",
            categories: ["electronics"],
            color: ["blue", "black"],
            price: 15,
            review: 4,
            inStock: true,

        },
        {
            _id: "2",
            title: "DELL Laptop",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis.",
            img: "https://4.imimg.com/data4/OK/UY/MY-10908630/dell-latitude-e5430-500x500.jpg",
            categories: ["electronics"],
            color: ["black"],
            price: 1000,
            review: 3,
            inStock: true,

        },
        {
            _id: "3",
            title: "DELL Laptop",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis.",
            img: "https://4.imimg.com/data4/OK/UY/MY-10908630/dell-latitude-e5430-500x500.jpg",
            categories: ["electronics"],
            color: ["black"],
            price: 1000,
            review: 3,
            inStock: true,

        },
        {
            _id: "4",
            title: "DELL Laptop",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, omnis.",
            img: "https://4.imimg.com/data4/OK/UY/MY-10908630/dell-latitude-e5430-500x500.jpg",
            categories: ["electronics"],
            color: ["black"],
            price: 1000,
            review: 3,
            inStock: true,

        }
    ]

    return (
        <div className='flex justify-around mt-5 px-4'>
            {products.map((val) => {
                return (
                    val.inStock &&
                    <Product
                        key={val._id}
                        title={val.title}
                        desc={val.desc}
                        img={val.img}
                        categories={val.categories}
                        color={val.color}
                        price={val.price}
                        review={val.review}
                    />
                )
            })
            }

        </div>
    )
}

export default Products