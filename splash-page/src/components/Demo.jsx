
import gif from '../assets/fathom_demo_quick.gif';
export default function Demo() {
  return (
    <div className=" bg-demoColor hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={gif} className="max-w-4xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      
    </div>
  </div>
</div>
  )
}
