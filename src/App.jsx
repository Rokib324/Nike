import { Hero,
    PopularProducts,
    SuperQuality,
    Services,
    SpecialOffer,
    CustomerReviews,
    Subscribe,
    Footer } from "./sections"
    import Nav from "./components/Nav"

const App = () => {
  return (
    <main className='relative '>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'><Hero/></section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='padding-x padding-t pb-8 bg-black'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
