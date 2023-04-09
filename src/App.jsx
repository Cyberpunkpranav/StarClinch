
import { useState } from 'react';
import '../src/css/App.css';
import '../src/css/bootstrap.css'
import { Anchor, Comedian, Singer, Dj, Instrumentalist, AllArtists } from './components/artists';
import { Catalog } from './components/catalog';
function App() {
  const [artist, setartist] = useState()
  let artists = [
    {
      type: 'Anchors',
    },
    {
      type: 'Singers',
    },
    {
      type: 'Comedians',
    },
    {
      type: 'Live Band',
    },
    {
      type: 'Make-Up Artists/Stylists',
    },
    {
      type: 'Photo/Videographars',
    },
    {
      type: 'Speakers',
    },
    {
      type: 'Celebraties',
    },
    {
      type: 'Dancers',
    },
    {
      type: 'Intrumentalists',
    },
    {
      type: 'Magicians',
    },
    {
      type: 'Models',
    },
    {
      type: 'Variety Artists',
    },
  ]
  const [count, setcount] = useState(0)
  function ShowAll() {
    if (count == 1) {
      return (
        <Anchor />
      )
    }
    if (count == 2) {
      return (
        <Comedian />
      )
    }
    if (count == 3) {
      return (
        <Dj />
      )
    }
    if (count == 4) {
      return (
        <Singer />
      )
    }
    if (count == 5) {
      return (
        <Instrumentalist />
      )
    }
    else {
      return (
        <AllArtists />
      )
    }
  }
  console.log(artist)
  return (
    <div className="App ">
      <div className='ps-3 navbars position-sticky top-0  pt-2 pb-1 border-1 border-bottom border-red' style={{ zIndex: '2' }}>
        <div className="row justify-content-between align-items-center p-0 m-0">
          <div className="col-auto">
            <img alt='logo' src={process.env.PUBLIC_URL + '../images/logo1.png'} className='img-fluid logo' />
            <span className='logotext fw-semibold ms-2'>StarClinch</span>
          </div>
          <div className="col-6">
            <input placeholder='Search for artists here...' className='form-control border-1 border-red' />
          </div>
          <div className="col-3">
            <button className="btn btn-sm button-red text-white" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Explore</button>
          </div>
        </div>
      </div>
      <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header bg-lightred">
          <h5 className="offcanvas-title col-12 text-red" id="offcanvasExampleLabel">StarClinch</h5>
          <button type="button" className="btn-close position-absolute end-0 me-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="col-12 my-3">
            <button className='btn btn-danger'>Login </button>
          </div>
          <div className="col-12 my-3">
            <button className='btn btn-danger'>SignUp </button>
          </div>
          <div className="col-12 my-3">
            <button className='btn btn-warning'> Join As Member </button>
          </div>
          <div className="col-12 my-3">
            <button className='btn btn-danger'>Carrer in StarClinch </button>
          </div>
        </div>
      </div>
      <div className="container-fluid scroll">
        <div className="d-flex p-0 m-0 m-2  ">
          {

            artists.map((data, i) => (
              <div>
                <button className={`btn position-relative col-auto ms-3 button-${artist == i ? 'red' : ''} text-${artist == i ? 'white' : 'red'}`} onClick={() => { artist==i ? setartist():setartist(i) }}>{data.type}</button>
                {
                  artist == i ? (
                    <div className="container-fluid position-absolute start-0 border border-1 bg-babypowder h-75 mt-2" style={{ zIndex: '4' }}>
                      <Catalog data={data} />
                    </div>
                  ) : (<></>)

                }

              </div>
            ))
          }
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-5">
          <div className="links">
            <button className={`btn btn-sm button-${count == 0 ? 'red' : ''} text-${count == 0 ? 'white' : 'red'} position-absolute fs-4 `} onClick={() => setcount(0)}>Artists</button>
            <ul className="links__list" style={{ '--item-total': 5 }}>

              <li className="links__item" style={{ '--item-count': 1 }} onClick={() => setcount(1)}>
                <a className={`text-red fw-semibold links__link bg-${count == 1 ? 'lightred' : ''}`} href='#'>
                  <img alt='artist' className='links__icon' src={process.env.PUBLIC_URL + '../images/anchor.png'} />
                  <span className="links__text">Anchor</span>

                </a>

              </li>

              <li className="links__item" style={{ '--item-count': 2 }} onClick={() => setcount(2)}>
                <a className={`text-red fw-semibold links__link bg-${count == 2 ? 'lightred' : ''}`} href='#' >
                  <img alt='artist' className='links__icon' src={process.env.PUBLIC_URL + '../images/comedian.png'} />
                  {/* <span className="links__text">Comedian</span> */}

                </a>
              </li>
              <li className="links__item" style={{ '--item-count': 3 }} onClick={() => setcount(3)}>
                <a className={`text-red fw-semibold links__link bg-${count == 3 ? 'lightred' : ''}`} href='#'>
                  <img alt='artist' className='links__icon' src={process.env.PUBLIC_URL + '../images/dj.png'} />
                  {/* <span className="links__text">DJ</span> */}

                </a>
              </li>
              <li className="links__item" style={{ '--item-count': 4 }} onClick={() => setcount(4)}>
                <a className={`text-red fw-semibold links__link bg-${count == 4 ? 'lightred' : ''}`} href='#'>
                  <img alt='artist' className='links__icon' src={process.env.PUBLIC_URL + '../images/mic.png'} />
                  {/* <span className="links__text">Singer</span> */}
                </a>
              </li>
              <li className="links__item" style={{ '--item-count': 5 }} onClick={() => setcount(5)}>
                <a className={`text-red fw-semibold links__link bg-${count == 5 ? 'lightred' : ''}`} href='#'>
                  <img alt='artist' className='links__icon' src={process.env.PUBLIC_URL + '../images/instrumentist.png'} />
                  {/* <span className="links__text">Instrumentalist</span> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-7">
          <div className=''>
            {
              ShowAll()
            }
          </div>

        </div>
      </div>
      <div className="container-fluid text-center mt-5">
        <h6 className='text-red fw-bold fs-4 bg-lightred p-3 border-red border-bottom' style={{ wordSpacing: '1rem', letterSpacing: '0.15rem' }}>How Far We Have Been Reached</h6>
        <div className="container-fluid">
          <div className="row p-0 m-0">
            <div className="col-3">
              <div className="card mt-3 border-0 shadow-sm rounded-2" style={{ maxWidth: '18rem' }}>
                <div className="row">
                  <div className="col-4">
                    <img className="lazy img-fluid gm-lazy" data-src="https://stcdn.starclinch.in/images/home/worth_booking.svg" alt="Booking Worth  Rs10Cr" style={{ width: '5rem' }} loading="lazy" src="https://stcdn.starclinch.in/images/home/worth_booking.svg" />
                  </div>
                  <div className="col-8 text-start">
                    <h6 className='card-title text-primary mt-2'>Worth of Bookings</h6>
                    <h4 className='text-pigmentgreen p-0 m-0'>18+ Crore</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card mt-3 border-0 shadow-sm rounded-2" style={{ maxWidth: '18rem' }}>
                <div className="row">
                  <div className="col-4">
                    <img className="lazy img-fluid gm-lazy" data-src="https://stcdn.starclinch.in/images/home/performances.svg" alt="8000+ Performance" loading="lazy" src="https://stcdn.starclinch.in/images/home/performances.svg" />
                  </div>
                  <div className="col-8 text-start">
                    <h6 className='card-title text-primary mt-2'>Performances</h6>
                    <h4 className='text-pigmentgreen p-0 m-0'>10K+</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card mt-3 border-0 shadow-sm rounded-2" style={{ maxWidth: '18rem' }}>
                <div className="row">
                  <div className="col-4">
                    <img className="lazy img-fluid gm-lazy" data-src="https://stcdn.starclinch.in/images/home/mins_of_stage_time.svg" alt="400+ Mins of Stage times" loading="lazy" src="https://stcdn.starclinch.in/images/home/mins_of_stage_time.svg" />
                  </div>
                  <div className="col-8 text-start">
                    <h6 className='card-title text-primary mt-2'>Mins of Stage times</h6>
                    <h4 className='text-pigmentgreen p-0 m-0'>700K+</h4>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card mt-3 border-0 shadow-sm rounded-2" style={{ maxWidth: '18rem' }}>
                <div className="row">
                  <div className="col-4">
                    <img className="lazy img-fluid gm-lazy" data-src="https://stcdn.starclinch.in/images/home/management_artist.svg" alt="20000+ artist management" loading="lazy" src="https://stcdn.starclinch.in/images/home/management_artist.svg" />
                  </div>
                  <div className="col-8 text-start">
                    <h6 className='card-title text-primary mt-2'>Artists</h6>
                    <h4 className='text-pigmentgreen p-0 m-0'>20K+</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-babypowder text-charcoal my-4 p-3">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row p-0 m-0">
                <div className="col-4 text-end">
                  <img src={process.env.PUBLIC_URL + './artists/user.png'} className="img-fluid w-25" alt="..." />
                </div>
                <div className="col-7">
                  <p>Great platform for budding artists. Here, you are dealing with professional. Proper documentation is done for any gig. I am highly satisfied with the service and recommend it to others. </p>
                  <h4>Ruchi Singh </h4>
                </div>
              </div>

            </div>
            <div class="carousel-item">
              <div className="row p-0 m-0">
                <div className="col-4 text-end">
                  <img src={process.env.PUBLIC_URL + './artists/user.png'} className="img-fluid w-25" alt="..." />
                </div>
                <div className="col-7">
                  <p>"It was the first time experience with StarClinch... And must they are the best at their job... Well coordinated team.. And trustworthy with their suggestions and decisions... Looking forward to work with them in future for sure... Keep up the good work guys."</p>
                  <h4>Aditya Goyal </h4>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row p-0 m-0">
                <div className="col-4 text-end">
                  <img src={process.env.PUBLIC_URL + './artists/user.png'} className="img-fluid w-25" alt="..." />
                </div>
                <div className="col-7">
                  <p>Great platform for budding artists. Here, you are dealing with professional. Proper documentation is done for any gig. I am highly satisfied with the service and recommend it to others. </p>
                  <h4>Ruchi Singh </h4>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export { App };
