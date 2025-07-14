import Image from 'next/image'

export default function SwissReLogo() {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 relative">
        <Image
          src="/media/sr_small.png"
          alt="Swiss Re Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </div>
  )
}