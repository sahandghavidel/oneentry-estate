import ListingItem from '@/components/ListingItem';
import { defineOneEntry } from 'oneentry';

const { Products } = defineOneEntry('https://sahandestate.oneentry.cloud', {
  token: process.env.NEXT_PUBLIC_ONEENTRY_TOKEN,
});

export default async function Listings() {
  const allListings = await Products.getProductsByPageUrl('listings');
  return (
    <div>
      <h1 className='text-3xl font-semibold text-slate-600 text-center my-10'>
        Recent listings
      </h1>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {allListings && allListings.length > 0 && (
          <div className='flex flex-wrap gap-4'>
            {allListings.map((listing) => (
              <ListingItem listing={listing} key={listing.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}