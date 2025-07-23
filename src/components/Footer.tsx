import { ScreenShare } from "lucide-react"


function Footer() {
  return (
    <div className="mt-10">
      <footer className="footer footer-horizontal footer-center p-10">
  <aside>

     <ScreenShare className="h-10 w-10" />
        
    <p className="font-bold">
     SK<span className='text-accent'>DEV</span>
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
