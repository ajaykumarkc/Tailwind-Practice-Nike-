import React from 'react'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
import Nav from './components/Nav'

const App = () => {
  return (
    <main>
      <Nav />
      <section className='xl:padding-l
      wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:p-32 py-16'>
       <Subscribe />
      </section>
      <section className='padding-x padding-t bg-black pb-8 text-white'>
        <Footer />
      </section>
    </main>
  )
}

export default App