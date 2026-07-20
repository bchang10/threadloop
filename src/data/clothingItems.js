// The clothing catalog.
// Each item needs: id (unique), name, pricePerWeek (in dollars), and image (URL).
// Swap the placeholder image URLs for your real product photos.

export const clothingItems = [
  {
    id: 1,
    name: 'Silk Slip Dress',
    pricePerWeek: 24,
    image: 'https://placehold.co/600x750/e8e0d4/5c5347?text=Silk+Slip+Dress',
    gallery: [
      'https://placehold.co/900x1100/e8e0d4/5c5347?text=Silk+Slip+Dress+Front',
      'https://placehold.co/900x1100/d7cab7/5c5347?text=Silk+Slip+Dress+Back',
      'https://placehold.co/900x1100/f1ebe1/5c5347?text=Silk+Slip+Dress+Detail',
    ],
    description:
      'A fluid slip dress cut from luminous silk with a softly draped silhouette that moves easily from dinner reservations to wedding weekends.',
    highlights: ['Bias-cut drape', 'Adjustable straps', 'Midweight silk sheen'],
    details: 'Best for evening wear, special events, and layered styling.',
    care: 'Professional dry clean only.',
  },
  {
    id: 2,
    name: 'Wool Overcoat',
    pricePerWeek: 32,
    image: 'https://placehold.co/600x750/d8d2c8/5c5347?text=Wool+Overcoat',
    gallery: [
      'https://placehold.co/900x1100/d8d2c8/5c5347?text=Wool+Overcoat+Front',
      'https://placehold.co/900x1100/c9bfb1/5c5347?text=Wool+Overcoat+Collar',
      'https://placehold.co/900x1100/e7dfd3/5c5347?text=Wool+Overcoat+Texture',
    ],
    description:
      'A structured overcoat with a clean longline shape, warm wool handle, and enough room for layered knits and tailoring underneath.',
    highlights: ['Tailored shoulders', 'Hidden button placket', 'Wool-blend warmth'],
    details: 'Works best for cold-weather rentals and commute layering.',
    care: 'Steam lightly and dry clean between rentals.',
  },
  {
    id: 3,
    name: 'Linen Blazer',
    pricePerWeek: 18,
    image: 'https://placehold.co/600x750/e3ddd0/5c5347?text=Linen+Blazer',
    gallery: [
      'https://placehold.co/900x1100/e3ddd0/5c5347?text=Linen+Blazer+Front',
      'https://placehold.co/900x1100/d5ccbf/5c5347?text=Linen+Blazer+Lapel',
      'https://placehold.co/900x1100/f2ede5/5c5347?text=Linen+Blazer+Weave',
    ],
    description:
      'An easy linen blazer with a relaxed shape that keeps outfits polished while staying breathable through warmer days.',
    highlights: ['Breathable linen', 'Unstructured fit', 'Patch pockets'],
    details: 'Ideal for office-to-dinner dressing and travel wardrobes.',
    care: 'Machine wash cold on gentle or dry clean if preferred.',
  },
  {
    id: 4,
    name: 'Pleated Midi Skirt',
    pricePerWeek: 14,
    image: 'https://placehold.co/600x750/ded6c6/5c5347?text=Pleated+Midi+Skirt',
    gallery: [
      'https://placehold.co/900x1100/ded6c6/5c5347?text=Pleated+Midi+Skirt+Front',
      'https://placehold.co/900x1100/cfc6b7/5c5347?text=Pleated+Midi+Skirt+Pleats',
      'https://placehold.co/900x1100/f3eee7/5c5347?text=Pleated+Midi+Skirt+Motion',
    ],
    description:
      'A fluid midi skirt with crisp pleats and a graceful swing that pairs well with knits, shirts, and fitted tops.',
    highlights: ['Sharp pleats', 'Mid-length hem', 'Easy elastic waist'],
    details: 'A versatile rental for work, brunch, and weekend plans.',
    care: 'Hang to dry and press lightly if needed.',
  },
  {
    id: 5,
    name: 'Cashmere Sweater',
    pricePerWeek: 20,
    image: 'https://placehold.co/600x750/e8e2d8/5c5347?text=Cashmere+Sweater',
    gallery: [
      'https://placehold.co/900x1100/e8e2d8/5c5347?text=Cashmere+Sweater+Front',
      'https://placehold.co/900x1100/d9d0c3/5c5347?text=Cashmere+Sweater+Knit',
      'https://placehold.co/900x1100/f4efe8/5c5347?text=Cashmere+Sweater+Closeup',
    ],
    description:
      'A soft cashmere sweater with a relaxed handfeel and refined finish, designed for easy rotation through cool-season looks.',
    highlights: ['Soft cashmere', 'Relaxed fit', 'Ribbed trim'],
    details: 'Layer it over shirts or wear it on its own for a clean silhouette.',
    care: 'Dry clean only and fold for storage.',
  },
  {
    id: 6,
    name: 'Velvet Evening Gown',
    pricePerWeek: 45,
    image: 'https://placehold.co/600x750/d4ccc0/5c5347?text=Velvet+Evening+Gown',
    gallery: [
      'https://placehold.co/900x1100/d4ccc0/5c5347?text=Velvet+Evening+Gown+Front',
      'https://placehold.co/900x1100/c6b8ab/5c5347?text=Velvet+Evening+Gown+Back',
      'https://placehold.co/900x1100/f0e8de/5c5347?text=Velvet+Evening+Gown+Texture',
    ],
    description:
      'A dramatic velvet gown with a rich finish and elongated line, made for formal events that call for a statement piece.',
    highlights: ['Plush velvet', 'Floor-length profile', 'Formal event ready'],
    details: 'Best for galas, black-tie dinners, and holiday occasions.',
    care: 'Handle carefully and dry clean after each wear.',
  },
  {
    id: 7,
    name: 'Denim Trucker Jacket',
    pricePerWeek: 12,
    image: 'https://placehold.co/600x750/dcd6ca/5c5347?text=Denim+Jacket',
    gallery: [
      'https://placehold.co/900x1100/dcd6ca/5c5347?text=Denim+Trucker+Front',
      'https://placehold.co/900x1100/cdc2b3/5c5347?text=Denim+Trucker+Back',
      'https://placehold.co/900x1100/f1ece4/5c5347?text=Denim+Trucker+Seams',
    ],
    description:
      'A classic trucker jacket with a structured denim feel and easy worn-in character for everyday layering.',
    highlights: ['Classic trucker cut', 'Structured denim', 'Year-round layering'],
    details: 'Use it to finish casual outfits or to soften tailored looks.',
    care: 'Spot clean and wash sparingly to preserve the denim finish.',
  },
  {
    id: 8,
    name: 'Tailored Trousers',
    pricePerWeek: 16,
    image: 'https://placehold.co/600x750/e6dfd2/5c5347?text=Tailored+Trousers',
    gallery: [
      'https://placehold.co/900x1100/e6dfd2/5c5347?text=Tailored+Trousers+Front',
      'https://placehold.co/900x1100/d6ccbf/5c5347?text=Tailored+Trousers+Pleat',
      'https://placehold.co/900x1100/f4efe7/5c5347?text=Tailored+Trousers+Fit',
    ],
    description:
      'Precision-cut trousers with a clean drape and polished finish that work equally well with tees, blouses, or matching blazers.',
    highlights: ['Clean tailoring', 'Straight-leg drape', 'Office-ready finish'],
    details: 'A dependable rental for smart-casual and workwear rotations.',
    care: 'Press on low heat and dry clean as needed.',
  },
]
