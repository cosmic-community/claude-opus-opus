export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Tip extends CosmicObject {
  type: 'tips';
  metadata: {
    title?: string;
    content?: string;
    category?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface FreeAlternative extends CosmicObject {
  type: 'free-alternatives';
  metadata: {
    name?: string;
    description?: string;
    replaces?: string;
    website_url?: string;
    logo_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}