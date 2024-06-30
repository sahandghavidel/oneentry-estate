import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link href={`/listing/${listing.id}`}>
        <img
          src={
            listing.attributeValues.image.value.downloadLink ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-slate-700'>
            {listing.attributeValues.title.value}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm text-gray-600 truncate w-full'>
              {listing.attributeValues.address.value}
            </p>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2'>
            {listing.attributeValues.description.value}
          </p>
          <p className='text-slate-500 mt-2 font-semibold '>
            ${listing.attributeValues.price.value.toLocaleString('en-US')}
            {listing.attributeValues.type.value.title === 'rent' && ' / month'}
          </p>
          <div className='text-slate-700 flex gap-4'>
            <div className='font-bold text-xs'>
              {listing.attributeValues.bed.value > 1
                ? `${listing.attributeValues.bed.value} beds `
                : `${listing.attributeValues.bed.value} bed `}
            </div>
            <div className='font-bold text-xs'>
              {listing.attributeValues.bath.value > 1
                ? `${listing.attributeValues.bath.value} baths `
                : `${listing.attributeValues.bath.value} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}