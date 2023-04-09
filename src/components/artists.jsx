import React from 'react'
import '../css/bootstrap.css'
import '../css/artists.css'

const Anchor = () => {
    let anchors = [
        {
            name: 'Manish Paul',
            type: 'Anchor',
            img: './artists/user.png',

        },
        {
            name: 'Manish Paul',
            type: 'Anchor',
            img: './artists/user.png',

        },
        {
            name: 'Manish Paul',
            type: 'Anchor',
            img: './artists/user.png',

        },
        {
            name: 'Manish Paul',
            type: 'Anchor',
            img: './artists/user.png',

        },
        {
            name: 'Manish Paul',
            type: 'Anchor',
            img: './artists/user.png',

        },
        {
            name: 'Manish Paul',
            type: 'Anchor',
            img: './artists/user.png',

        },
      
    ]
    return (
        <div className="row artistcontainer p-0 m-0 ">
            <div className='card border-0'>
                <div className="card-body">
                    <h5 className='card-title'>Anchors</h5>
                    <h6 className='card-subtitle'>Choose who speaks best according to you</h6>
                    <div className="row p-0 m-0 mt-4 g-3">
                        {
                            anchors.map((data) => (
                                <div className="col-4">
                                    <div className="card cards btn text-start p-0 border-bottom border-lightred">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={process.env.PUBLIC_URL + data.img} className='img-fluid rounded-circle' style={{ width: '4rem' }} />
                                                </div>
                                                <div className="col-8">
                                                    <h5 className="card-title">{data.name}</h5>
                                                    <h6 className='card-subtitle text-secondary'>{data.type}</h6>
                                                    <p className='card-text text-red'>know more..</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Anchor }

const Comedian = () => {
    let comedian = [
        {
            name: 'Zakir khan',
            type: 'Comedian',
            img: './artists/zakir.jpg'
        },
        {
            name: 'Zakir khan',
            type: 'Comedian',
            img: './artists/zakir.jpg'
        },
        {
            name: 'Zakir khan',
            type: 'Comedian',
            img: './artists/zakir.jpg'
        }, {
            name: 'Zakir khan',
            type: 'Comedian',
            img: './artists/zakir.jpg'
        },
        {
            name: 'Zakir khan',
            type: 'Comedian',
            img: './artists/zakir.jpg'
        },
        {
            name: 'Zakir khan',
            type: 'Comedian',
            img: './artists/zakir.jpg'
        }
    ]
    return (
        <div className="row artistcontainer p-0 m-0 ">
            <div className='card border-0'>
                <div className="card-body">
                    <h5 className='card-title'>Comedians</h5>
                    <h6 className='card-subtitle'>Choose who can make your party laugh more</h6>
                    <div className="row p-0 m-0 mt-4 g-3">
                        {
                            comedian.map((data) => (
                                <div className="col-4">
                                    <div className="card cards btn text-start p-0 border-bottom border-lightred">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={process.env.PUBLIC_URL + data.img} className='img-fluid rounded-circle' style={{ width: '4rem' }} />
                                                </div>
                                                <div className="col-8">
                                                    <h5 className="card-title">{data.name}</h5>
                                                    <h6 className='card-subtitle text-secondary'>{data.type}</h6>
                                                    <p className='card-text text-red'>know more..</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export { Comedian }

const Dj = () => {
    let djs = [
        {
            name: 'shubh',
            type: 'DJ',
            img: './artists/user.png',

        },
        {
            name: 'shubh',
            type: 'DJ',
            img: './artists/user.png',

        },
        {
            name: 'shubh',
            type: 'DJ',
            img: './artists/user.png',

        },
        {
            name: 'shubh',
            type: 'DJ',
            img: './artists/user.png',

        },
        {
            name: 'shubh',
            type: 'DJ',
            img: './artists/user.png',

        },
        {
            name: 'shubh',
            type: 'DJ',
            img: './artists/user.png',

        },
    ]
    return (
        <div className="row artistcontainer p-0 m-0 ">
            <div className='card border-0'>
                <div className="card-body">
                    <h5 className='card-title'>Djs</h5>
                    <h6 className='card-subtitle'>Choose who can rock your stage</h6>
                    <div className="row p-0 m-0 mt-4 g-3">
                        {
                            djs.map((data) => (
                                <div className="col-4">
                                    <div className="card cards btn text-start p-0 border-bottom border-lightred">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={process.env.PUBLIC_URL + data.img} className='img-fluid rounded-circle' style={{ width: '4rem' }} />
                                                </div>
                                                <div className="col-8">
                                                    <h5 className="card-title">{data.name}</h5>
                                                    <h6 className='card-subtitle text-secondary'>{data.type}</h6>
                                                    <p className='card-text text-red'>know more..</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Dj }

const Instrumentalist = () => {
    let intrumentalists = [
        {
            name: 'Shisha Bali',
            type: 'Intrumentalist',
            img: './artists/user.png',
        },
        {
            name: 'Shisha Bali',
            type: 'Intrumentalist',
            img: './artists/user.png',
        },
        {
            name: 'Shisha Bali',
            type: 'Intrumentalist',
            img: './artists/user.png',
        },
        {
            name: 'Shisha Bali',
            type: 'Intrumentalist',
            img: './artists/user.png',
        },
        {
            name: 'Shisha Bali',
            type: 'Intrumentalist',
            img: './artists/user.png',
        },
        {
            name: 'Shisha Bali',
            type: 'Intrumentalist',
            img: './artists/user.png',
        },
    ]
    return (
        <div className="row artistcontainer p-0 m-0 ">
            <div className='card border-0'>
                <div className="card-body">
                    <h5 className='card-title'>Intrumentalists</h5>
                    <h6 className='card-subtitle'>Choose whose beats makes you dance</h6>
                    <div className="row p-0 m-0 mt-4 g-3">
                        {
                            intrumentalists.map((data) => (
                                <div className="col-4">
                                    <div className="card cards btn text-start p-0 border-bottom border-lightred">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={process.env.PUBLIC_URL + data.img} className='img-fluid rounded-circle' style={{ width: '4rem' }} />
                                                </div>
                                                <div className="col-8">
                                                    <h5 className="card-title">{data.name}</h5>
                                                    <h6 className='card-subtitle text-secondary'>{data.type}</h6>
                                                    <p className='card-text text-red'>know more..</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Instrumentalist }

const Singer = () => {
    let singers = [
        {
            name: 'Arjit Singh',
            type: 'Singer',
            img: './artists/user.png',

        },
        {
            name: 'Arjit Singh',
            type: 'Singer',
            img: './artists/user.png',

        },
        {
            name: 'Arjit Singh',
            type: 'Singer',
            img: './artists/user.png',

        },
        {
            name: 'Arjit Singh',
            type: 'Singer',
            img: './artists/user.png',

        },
        {
            name: 'Arjit Singh',
            type: 'Singer',
            img: './artists/user.png',

        },
        {
            name: 'Arjit Singh',
            type: 'Singer',
            img: './artists/user.png',

        },
      
    ]
    return (
        <div className="row artistcontainer p-0 m-0 ">
            <div className='card border-0'>
                <div className="card-body">
                    <h5 className='card-title'>Singers</h5>
                    <h6 className='card-subtitle'>Choose whom you love to listen</h6>
                    <div className="row p-0 m-0 mt-4 g-3">
                        {
                            singers.map((data) => (
                                <div className="col-4">
                                    <div className="card cards btn text-start p-0 border-bottom border-lightred">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={process.env.PUBLIC_URL + data.img} className='img-fluid rounded-circle' style={{ width: '4rem' }} />
                                                </div>
                                                <div className="col-8">
                                                    <h5 className="card-title">{data.name}</h5>
                                                    <h6 className='card-subtitle text-secondary'>{data.type}</h6>
                                                    <p className='card-text text-red'>know more..</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Singer }

const AllArtists = () => {
    return (
        <div className='card p-0 m-0 border-0'>
            <div className="card-body">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                    <h5 className="card-title">All Artists</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Find best artists according to your need</h6>
                    </div>
                    <div className="col-2">
                <button className='btn btn-sm button-red text-white'>Show All</button>
                </div>
                </div>
     
            </div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row justify-content-around">
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>

                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Zakir Khan</h5>
                                        <p className="card-text p-0 m-0">Comedian</p>
                                        <p className="card-text p-0 m-0">From Rs 10,000 | 30min-1hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Manish Paul</h5>
                                        <p className="card-text p-0 m-0">Anchor</p>
                                        <p className="card-text p-0 m-0">From Rs 10,000 | 30min-1hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>

                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Shraddha Kapoor</h5>
                                        <p className="card-text p-0 m-0">Actor | Dancer</p>
                                        <p className="card-text p-0 m-0">From Rs 10,000 | 30min-1hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="row justify-content-around">
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>

                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Zakir Khan</h5>
                                        <p className="card-text p-0 m-0">Comedian</p>
                                        <p className="card-text p-0 m-0">From Rs 10,000 | 30min-1hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Manish Paul</h5>
                                        <p className="card-text p-0 m-0">Anchor</p>
                                        <p className="card-text p-0 m-0">From Rs 25,000 | 45min-1hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>

                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Srihari</h5>
                                        <p className="card-text p-0 m-0">Photographer</p>
                                        <p className="card-text p-0 m-0">From Rs 40,000 | 30min-2hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row justify-content-around">
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>

                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Ranbir Kapoor</h5>
                                        <p className="card-text p-0 m-0">Actor</p>
                                        <p className="card-text p-0 m-0">From Rs 40,000 | 30min-1hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Sunny Leone</h5>
                                        <p className="card-text p-0 m-0">Actor | dancer</p>
                                        <p className="card-text p-0 m-0">From Rs 55,000 | 45min-3hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card" style={{ width: '18rem' }}>

                                    <img src={process.env.PUBLIC_URL + './artists/zakir.jpg'} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title p-0 m-0">Kashish Sharma</h5>
                                        <p className="card-text p-0 m-0">Photographer</p>
                                        <p className="card-text p-0 m-0">From Rs 20,000 | 45min-1hr</p>
                                        <p className="card-text text-red btn btn-sm px-0 w-100 text-start">know more..</p>
                                        <button className='btn btn-sm bg-lightred'> Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export { AllArtists }
