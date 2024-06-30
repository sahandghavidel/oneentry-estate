import ListingItem from '@/components/ListingItem';
import { defineOneEntry } from 'oneentry';

const { Products } = defineOneEntry('https://sahandestate.oneentry.cloud', {
  token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
});

export default async function Rent() {
  const rentListings = await Products.getProductsByPageUrl('rent');
  return (
    <div>
      <h1 className='text-3xl font-semibold text-slate-600 text-center my-10'>
        Recent places for rent
      </h1>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {rentListings && rentListings.length > 0 && (
          <div className='flex flex-wrap gap-4'>
            {rentListings.map((listing) => (
              <ListingItem listing={listing} key={listing.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}