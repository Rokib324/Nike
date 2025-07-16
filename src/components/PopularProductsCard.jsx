import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating = 4.5 }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          const isFullStar = rating >= starValue;
          const isHalfStar = rating >= starValue - 0.5 && rating < starValue;
          
          return (
            <div key={index} className="relative">
              <img 
                src={star} 
                alt='rating icon' 
                width={24} 
                height={24}
                className='opacity-30'
              />
              {isFullStar && (
                <img 
                  src={star} 
                  alt='rating icon' 
                  width={24} 
                  height={24}
                  className='absolute top-0 left-0 opacity-100'
                />
              )}
              {isHalfStar && (
                <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                  <img 
                    src={star} 
                    alt='rating icon' 
                    width={24} 
                    height={24}
                    className='opacity-100'
                  />
                </div>
              )}
            </div>
          );
        })}
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          ({rating})
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;