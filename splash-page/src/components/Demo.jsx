
import gif from '../assets/fathom_demo_quick.gif';
export default function Demo() {
  return (
    <div className=" bg-demoColor text-white hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={gif} className="max-w-4xl rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Stats you need</h1>
      <p className="py-6 text-2xl" >With constant fetches and server-side rendering, Fathom gives you a wealth of metrics at unbelievable speed! </p>
      
    </div>
  </div>
</div>
  )
}
