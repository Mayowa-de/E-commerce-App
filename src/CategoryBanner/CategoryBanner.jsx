import { useEffect, useState } from 'react'
import mens_banner from '../assets/Assets/banner_mens.png'
import womens_banner from '../assets/Assets/banner_women.png'
import kids_banner from '../assets/Assets/banner_kids.png'

const banners = [
  { name: 'Mens collection', image: mens_banner },
  { name: 'Womens collection', image: womens_banner },
  { name: 'Kids collection', image: kids_banner },
]

export default function CategoryBanner({ activeCategory }) {
  const initialIndex = Math.max(0, banners.findIndex((banner) => banner.name.toLowerCase().startsWith(activeCategory)))
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  useEffect(() => {
    setActiveIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % banners.length)
    }, 5500)

    return () => window.clearInterval(rotation)
  }, [])

  const activeBanner = banners[activeIndex]

  return (
    <section className="w-full" aria-label="K-SHOP category banners">
      <div className="relative aspect-[31/7] w-full overflow-hidden">
        <img
          key={activeBanner.name}
          loading="eager"
          src={activeBanner.image}
          alt={activeBanner.name}
          className="block h-full w-full object-contain motion-safe:animate-[campaign-image-in_800ms_ease-out_both]"
        />
        <div className="absolute bottom-3 left-3 flex gap-1.5 sm:bottom-5 sm:left-5" aria-label="Banner slides">
          {banners.map((banner, index) => (
            <button
              key={banner.name}
              type="button"
              aria-label={`Show ${banner.name}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 transition-all ${activeIndex === index ? 'w-9 bg-[#b24835]' : 'w-4 bg-[#77736f]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}