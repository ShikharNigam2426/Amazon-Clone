import React from 'react'
import './Style/Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className='home'>
            <div className="homeContainer">
                <img className='homeImage' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            </div>

            <div className="homeRow">

                <Product id={1} title='Steelbird Full Face Graphic Helmet for Men and Women Motorbike Helmet  (Glossy White Grey with Anti Fog Clear Visor)' price='3119' rating={4} image='https://m.media-amazon.com/images/I/61Upycd4L5L._AC_UF1000,1000_QL80_.jpg' />

                <Product id={2} title='ORAZO Mens IBIS TRAIL Water Resistant Bike Riding Boots' price='699' rating={5} image='https://m.media-amazon.com/images/I/51OQnzJbwRL._SY575_.jpg' />
            </div>
            <div className="homeRow">

                <Product id={3} title='Wired Optical Gaming Mouse With 6 Keys & RGB Lights Life Ent001 Wired Optical Gaming Mouse  (USB 2.0, Black)' price='119' rating={3} image='https://eadn-wc04-4324053.nxedge.io/cdn/pub/media/catalog/product/cache/e95bba16e1ec9f0f048c9cb1c87cb500/d/f/dfckikjjksjsw7dwilduwsydydggazya6.jpg' />

                <Product id={4} title='Akvanar Cullinan 1:32 Rolls Royce Metal car open Door with Light&Music multicolor pc 1  (MUL, Pack of: 1)' price='1110' rating={5} image='https://rukminim2.flixcart.com/image/416/416/xif0q/remote-control-toy/s/c/h/cullinan-1-32-rolls-royce-metal-car-open-door-with-light-music-original-imaghn3rqmhexkkq.jpeg?q=70&crop=false' />

                
                <Product id={5} title='Maisto Maisto 1:12 Kawasaki Ninja ZX-10R (Random Color)-EduToys ' price='1200' rating={4} image='https://rukminim2.flixcart.com/image/416/416/vehicle-pull-along/b/4/m/maisto-1-12-kawasaki-ninja-zx-10r-random-color-edutoys-maisto-original-imaerzz8brvggaez.jpeg?q=70&crop=false' />

            </div>
            <div className="homeRow">

                <Product id={6} title='Samsung 57-inch(144.87cm) Odyssey Neo G9 Dual QHD, 240Hz, 1ms Curved Gaming Monitor, USB Hub, HAS, Quantum Mini LED, HDR1000, Smart TV, AMD FreeSync Premium Pro (LS57CG950NWXXL, Black)' price='5000' rating={5} image='https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/06/samsung-odyssey-g9-1593002928.jpg' />
            </div>
        </div>
    )
}

export default Home