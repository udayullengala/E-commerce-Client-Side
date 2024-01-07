import React from 'react'
// import shoes from "../assests/shoes.png"
import shoes from "../assests/hero-background.jpeg"
import About from './About'
import ProductSection from '../components/ProductSection'

const Home = () => {
  return (
    <>
        <div className='container-fluid py-5 text-white position-relative d-flex justify-content-center align-items-center' style={{background: `url(${shoes}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: 'calc(100vh - 70px)'}}>
            <div className="overlay"></div>
            <div className="row">
                <div className="col-md-12 z-2">
                    <div className="text-center">
                        <h5>Perfect Pairs, Every Step</h5>
                        <h1>Comfy Style: Your Shoe Stop</h1>
                        <p className='text-white'>Welcome to FootwearFusion, where style meets comfort. Explore our curated shoe collection for every occasion. Step confidently in comfort and style.</p>

                    </div>
                </div>
            </div>
        </div>
        <ProductSection title={"Best Sellers"} />
        <About />
    </>
  )
}

export default Home