import { createBucketClient } from '@cosmicjs/sdk'
import { Tip, FreeAlternative, hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getAllTips(): Promise<Tip[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'tips' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.objects as Tip[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch tips');
  }
}

export async function getTipBySlug(slug: string): Promise<Tip | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'tips', slug })
      .depth(1);
    return response.object as Tip;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch tip');
  }
}

export async function getAllAlternatives(): Promise<FreeAlternative[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'free-alternatives' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    return response.objects as FreeAlternative[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch alternatives');
  }
}

export async function getAlternativeBySlug(slug: string): Promise<FreeAlternative | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'free-alternatives', slug })
      .depth(1);
    return response.object as FreeAlternative;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch alternative');
  }
}