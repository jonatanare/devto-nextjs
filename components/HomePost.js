import React from 'react'
import date from 'date-and-time'


export default function HomePosts({author, createdAt = date.format(new Date, 'MMM, DD'),  title, tags}){
    return(
        <article className="article article-single card mb-2">
        <div className="px-4 pt-3">
            <div className="d-flex ">
                <div className="d-flex align-items-center me-0">
                    <img className="article__autor rounded-circle" src="/assets/home/avatar-home.webp" alt="Profile picture" />
                        </div>
                        <div className="ms-2"> 
                            <p className=" btn article__btn name mb-0 p-1">{author}</p>
                    <label className="article__down article__down--date d-block ms-1">{createdAt} ({timeAgo})</label>
                </div>
            </div>
            <div className="identation p-3 ms-4 pt-2 wrapper-tags">
                <a className="article__link" href="./article.html?id=@doc_id@">
                    <h2 className="article__title ms-1">{title}
                    </h2>
                </a> 
                <div className="article d-flex">
                   {tags.map( (tag) =>(
                     <TagTopic tag = {tag}/>
                     ))}
                </div>
            </div>
        </div>
        <ActionPost />
        </article>
    )
}


const TagTopic = ({tag}) => {
    return(
        <a className= {`btn article__btn article__btn--${tag}`}>
            <span> {tag} </span>
          </a>  
    )
}

const ActionPost = ({reactions, readTime}) => {
    return(
    <div className="d-flex justify-content-between mb-2">
    <div>
        <a className="btn article__btn article__btn--action">
            <img src="/assets/home/heart.svg" alt="Icon " />
            {reactions} Reactions
        </a>
        <a className="btn article__btn article__btn--action">
           <img src="/assets/home/comment.svg" alt="" />
            Add Comment
        </a>
    </div>
    <div>
        <span className='ms-2'>{Math.floor(Math.random(readTime) * 11)+1} min read</span>
        <a>
        <img className='btn article__btn me-1' src="/assets/home/save.svg" alt="Icon " />
        </a>
    </div>
</div>
    )
}


function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(),a.getHours() , a.getMinutes(), a.getSeconds());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(),b.getHours(), b.getMinutes(), b.getSeconds());
  
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

/* 
  function getRamdomDateInBetween(start, end) {
    start = Date.parse(start);
    end = Date.parse(end);

    return new Date(Math.floor(Math.random() * (end - start + 1) + start));
}
   */
  const longAgo = dateDiffInDays(new Date(('2022-10-29 18:00:00')), new Date())
  console.log('tiempooo',longAgo);
  let timeAgo = longAgo+' hours ago'
  let s = 's'
  if(longAgo >= 24){
    timeAgo = Math.floor(longAgo/24)
    if(timeAgo == '1'){
        s = ''
    }
    timeAgo = `${timeAgo} day${s} ago` 
  }
