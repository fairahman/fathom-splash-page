import heroImg from '../assets/heroImg.png'
export default function Hero() {
  return (
    <div className="text-white bg-heroColor hero min-h-screen bg-base-200"> 
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={heroImg} className=" max-w-2xl  rounded-lg shadow-2xl" />
        {/* <img src={heroImg} className="max-w-lg  rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl font-bold">Follow the numbers</h1>
          <p className="py-6">Get real-time, accurate metrics from your Kubernetes cluster.  See CPU and memory usage, update your IP, and more.</p>
          <div className="flex justify-start pl-10">
            <a href ='https://github.com/oslabs-beta/Fathom-for-Kubernetes/tree/mvpBranch'><button className="btn btn-primary">Get Started</button></a>
          </div>
        </div>
      </div>
    </div>
  )
  
}