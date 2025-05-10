
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar: string;
  region?: string;
  games?: string[];
  steamId?: string;
  bio?: string;
  joinedDate?: string;
}

export interface EditedProfile {
  username: string;
  email: string;
  region: string;
  steamId: string;
  bio: string;
}
