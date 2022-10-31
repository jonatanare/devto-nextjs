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
        <a class='text-decoration-none  listing__card' href='#'>
          <div class='p-3 nav-tabs'>
            <p class='listing__text mb-1 listing__card'>{title}</p>
            <ul className='d-flex flex-wrap'>
              {tags.map((tag) => {
                return (
                  <li class='listing__figcaption d-flex justify-content-center ms-3'>{tag}</li>
                )
              })}
            </ul>
          </div>
        </a>
      </>
    )
  }

  return (
    <>
      <div class='card__hover card'>
        <div class='d-flex card__hover--containerimage'>
          <div class='d-flex align-items-center me-0'>
            <img class='card__hover--img' src='/assets/home/avatar-home.webp' alt='' />
          </div>
          <div class='ms-2 align-items-end d-flex'>
            <p class='card__hover--title'>Movebike</p>

          </div>
        </div>
        <div class='mt-2'>
          <button class='btn btn-continue'>Follow</button>
        </div>
        <p class='mt-4'>
          Obsessed with low-code and automation, responsible for 2.8 million downloads at NuGet, and plays 5 musical instruments if you extort me
        </p>

        <ul>
          <li>
            <label class='card__hover--key'>Work</label>
            <label class='card__hover--value'>Mx🇲🇽</label>
          </li>
          <li>
            <label class='card__hover--key'>Location</label>
            <label class='card__hover--value'>Cyprus</label>
          </li>
          <li>
            <label class='card__hover--key'>Joined</label>
            <label class='card__hover--value'><time datetime='2022-03-13T08:00:39Z' class='date'>March 13, 2022</time></label>
          </li>
        </ul>
      </div>
      <section class='aside card mt-3'>
        <div class='d-flex nav-tabs p-3  justify-content-between align-items-center'>
          <h4 class='aside__list form-inline m-0'>More from <a href='#'>Movebike</a></h4>
        </div>
        {data.map((card) => {
          return (
            <ul class='d-flex justify-content-between ps-0 pt-1 mb-0 pe-1'>

              <RightAsideCard
                key={card.title}
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
