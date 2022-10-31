import React from 'react'

const tools=[
    {
        icon: '/assets/icons/createPost/tool1.svg'
    },
    {
        icon: '/assets/icons/createPost/tool2.svg'
    },
    {
        icon: '/assets/icons/createPost/tool3.svg'
    },
    {
        icon: '/assets/icons/createPost/tool4.svg'
    },
    {
        icon: '/assets/icons/createPost/tool5.svg'
    },
    {
        icon: '/assets/icons/createPost/tool6.svg'
    },
    {
        icon: '/assets/icons/createPost/tool7.svg'
    },
    {
        icon: '/assets/icons/createPost/tool8.svg'
    },
    {
        icon: '/assets/icons/createPost/tool9.svg'
    },
    {
        icon: '/assets/icons/createPost/tool10.svg'
    }  
]

const IconTools = ({toolsComponent}) => {
    return(
        <div className="d-flex tools">  
    {toolsComponent.map((tool) =>{ 
        return(
    <img className='crayons-icon me-3' src={tool.icon} alt="" />)}
    )}
    </div>
    )
    }

export default function CreatePost ({}) {
return(
<section className ="container-fluid " id="create-post">
<div className="container crePost">
    <div className="row d-flex justify-content-between mt-3 crePost__letters">
        <div className="col-auto d-flex">
            <a className="navbar-brand" href="/"><img
                    src="/assets/logos/logo-devto.png"></img></a>
            <p className="mt-2 ms-3">Create Post</p>
        </div>
        <div className="col-auto d-flex align-items-center">
            <button className="me-2 btn">Edit</button>
            <button className="btn">Preview</button>
        </div>
    </div>
    <div className="row crePost__container card">
        <div className="col-auto">
            <article className="crePost__card mt-4">
                <div>
                    <button className="crePost__btnAdd mt-2 mb-4 ms-2">Add a cover image</button>
                    <input type="text" className="form-control border-0 crePost__input" id="input-title"
                        aria-describedby="emailHelp" placeholder="New post title here..." />
                    <p className="ms-3  mb-4 mt-2 cePost__label">Add up to 4 tags...</p>
                </div>
            </article>
        </div>
    </div>
    <div className="row text-center crePost__component flex-wrap align-items-center mb-2">
        <div className="col-12 d-flex flex-row justify-content-between">
           <IconTools toolsComponent= {tools} />
            <div className="d-flex align-items-center">
                <img src="/assets/icons/createPost/tool11.svg" alt="" />
            </div>
        </div>
    </div>

    <div className="row crePost__container crePost__container--text card">
        <div className="col-auto">
            <textarea name="user-message" id="contenido" cols="20" rows="10" className="form-control border-0"
                placeholder="Write your post content here"></textarea>
        </div>
    </div>
    <div>
        <button className="btn btn-primary btn-publish mt-3" id="savePost">Publish</button>
    </div>
</div>
</section> 
)
}



