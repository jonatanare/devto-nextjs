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
        <div class="d-flex tools">  
    {toolsComponent.map((tool) =>{ 
        return(
    <img className='crayons-icon me-3' src={tool.icon} alt="" />)}
    )}
    </div>
    )
    }

export default function CreatePost ({}) {
return(
<section class ="container-fluid " id="create-post">
<div class="container crePost">
    <div class="row d-flex justify-content-between mt-3 crePost__letters">
        <div class="col-auto d-flex">
            <a class="navbar-brand" href="/"><img
                    src="/assets/logos/logo-devto.png"></img></a>
            <p class="mt-2 ms-3">Create Post</p>
        </div>
        <div class="col-auto d-flex align-items-center">
            <button class="me-2 btn">Edit</button>
            <button class="btn">Preview</button>
        </div>
    </div>
    <div class="row crePost__container card">
        <div class="col-auto">
            <article class="crePost__card mt-4">
                <div>
                    <button class="crePost__btnAdd mt-2 mb-4 ms-2">Add a cover image</button>
                    <input type="text" class="form-control border-0 crePost__input" id="input-title"
                        aria-describedby="emailHelp" placeholder="New post title here..." />
                    <p class="ms-3  mb-4 mt-2 cePost__label">Add up to 4 tags...</p>
                </div>
            </article>
        </div>
    </div>
    <div class="row text-center crePost__component flex-wrap align-items-center mb-2">
        <div class="col-12 d-flex flex-row justify-content-between">
           <IconTools toolsComponent= {tools} />
            <div class="d-flex align-items-center">
                <img src="/assets/icons/createPost/tool11.svg" alt="" />
            </div>
        </div>
    </div>

    <div class="row crePost__container crePost__container--text card">
        <div class="col-auto">
            <textarea name="user-message" id="contenido" cols="20" rows="10" class="form-control border-0"
                placeholder="Write your post content here"></textarea>
        </div>
    </div>
    <div>
        <button class="btn btn-primary btn-publish mt-3" id="savePost">Publish</button>
    </div>
</div>
</section> 
)
}



