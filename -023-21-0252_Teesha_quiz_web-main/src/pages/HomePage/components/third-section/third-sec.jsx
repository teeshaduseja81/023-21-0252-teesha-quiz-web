import React from 'react'
import arrowimg from "../../../../assets/images/span.svg"
import girlimg from "../../../../assets/images/Ideate_faster.png.svg"




const ThirdSection = () => {
  return (
    <div className='bg-color2'>

        <div className='text-center container pt-5 mb-0'>
            <h6>
                use case
            </h6>
            <h2 className='mt-0'> Automate what’s automatable in content</h2>
            <h5>
            Writer accelerates your writing
            workflow, from <br/>
            writing
            <img className='px-2' src={arrowimg} alt="" />
Ideation  <img className='px-2' src={arrowimg} alt="" />
illustrating
            </h5>


        </div>

        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class=" col-lg-3 py-4">

        <div className='border-start px-4 border-dark'> 
      <h5 class=" fw-bold mb-3 ">Ideate faster</h5>
        <p> Use AI as your brainstorming partner</p>
</div>
       
        <div className='text-secondary start px-4'>
        <h5 class=" fw-bold mb-3 ">Write faster</h5>
        <p> Generate first drafts in seconds</p>

        <h5 class=" fw-bold mb-3 ">Edit faster</h5>
        <p> Automate brand, editorial, and style edits</p>

        <h5 class=" fw-bold mb-3 ">Illustrate faster</h5>
        <p> Instantly produce distribution content</p>

        <h5 class=" fw-bold mb-3 ">Publish faster</h5>
        <p>Turn a blog post into a case study — or vice versa</p>
        </div>
      
      </div>
      <div class="col-lg-9">
      <img className="w-100" src={girlimg} alt="" />
        </div>
      </div>
    </div>
  </div>
 
      
   
  )
}

export default ThirdSection
