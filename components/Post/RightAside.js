import React from 'react'

export const RightAside = () => {
  const data = [
    {
      title: 'Side Project Sunday! Whats the latest?',
      tags: ['#showdev', '#sideprojects']
    },
    {
      title: 'Meme Monday 😍',
      tags: ['#discuss', '#watercooler', '#jokes']
    },
    {
      title: 'Where do you stand on "magic" within languages and frameworks?',
      tags: ['#discuss ', '#codequality']
    }
  ]

  const RightAsideCard = ({ title, tags }) => {
    return (
      <>
      <div>
        <a className='text-decoration-none  listing__card' href='#'>
          <div className='p-3 nav-tabs'>
            <p className='listing__text mb-1 listing__card'>{title}</p>
            <ul className='d-flex flex-wrap'>
              {tags.map((tag) => {
                return (
                  <li key={tag} className='listing__figcaption d-flex justify-content-center ms-3'>{tag}</li>
                )
              })}
            </ul>
          </div>
        </a>
        </div>
      </>
    )
  }

  return (
    <>
      <div className='card__hover card'>
        <div className='d-flex card__hover--containerimage'>
          <div className='d-flex align-items-center me-0'>
            <img className='card__hover--img' src='/assets/home/avatar-home.webp' alt='' />
          </div>
          <div className='ms-2 align-items-end d-flex'>
            <p className='card__hover--title'>Movebike</p>

          </div>
        </div>
        <div className='mt-2'>
          <button className='btn btn-continue'>Follow</button>
        </div>
        <p className='mt-4'>
          Obsessed with low-code and automation, responsible for 2.8 million downloads at NuGet, and plays 5 musical instruments if you extort me
        </p>

        <ul>
          <li>
            <label className='card__hover--key'>Work</label>
            <label className='card__hover--value'>Mx🇲🇽</label>
          </li>
          <li>
            <label className='card__hover--key'>Location</label>
            <label className='card__hover--value'>Cyprus</label>
          </li>
          <li>
            <label className='card__hover--key'>Joined</label>
            <label className='card__hover--value'><time dateTime='2022-03-13T08:00:39Z' className='date'>March 13, 2022</time></label>
          </li>
        </ul>
      </div>
      <section className='aside card mt-3'>
        <div className='d-flex nav-tabs p-3  justify-content-between align-items-center'>
          <h4 className='aside__list form-inline m-0'>More from <a href='#'>Movebike</a></h4>
        </div>
        {data.map((card) => {
          return (
            <ul key={card.title} className='d-flex justify-content-between ps-0 pt-1 mb-0 pe-1'>

              <RightAsideCard
                title={card.title}
                tags={card.tags}
              />
            </ul>

          )
        })}
      </section>
    </>
  )
}
