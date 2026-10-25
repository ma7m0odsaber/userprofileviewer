export interface User {
  _id: string;
  name: string;
  email: string;
  bio: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface UsersApiResponse {
  success: boolean;
  count: number;
  data: User[];
}
