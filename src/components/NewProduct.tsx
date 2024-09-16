import ProductCard from "./ProductCard"

const NewProduct = () => {
    const productData=[
        {
            img:"/shous1.png",
            title:"sports",
            desc:"Tarketing a Runging shoes",
            rating:3,
            price:"40.00"
        },
        {
            img:"/2.png",
            title:"sports",
            desc:"Tarketing a Runging shoes",
            rating:3,
            price:"40.00"
        },
        {
            img:"/shous1.png",
            title:"sports",
            desc:"Tarketing a Runging shoes",
            rating:3,
            price:"40.00"
        },
        {
            img:"/shous3.png",
            title:"sports",
            desc:"Tarketing a Runging shoes",
            rating:3,
            price:"40.00"
        },
        {
            img:"/shous1.png",
            title:"sports",
            desc:"Tarketing a Runging shoes",
            rating:3,
            price:"40.00"
        },
        {
            img:"/shous4.png",
            title:"sports",
            desc:"Tarketing a Runging shoes",
            rating:3,
            price:"40.00"
        }
    ]
  return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4"> new products</h2>
            <div className="grid  grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2
            lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl-gap-y-10 ">
                {productData.map((item,index)=>( 
                    <ProductCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    des={item.desc}
                    rating={item.rating}
                    price={item.price}
                
                    
                    
                    />
                ))}

            </div>
        </div>
    </div>
  )
}

export default NewProduct