export interface User {
  name: string;
  id: string;
}

export interface AlbumData {
  id: string;
  title: string;
  userId: string;
}

export interface PhotoData {
  id: string;
  url: string;
  albumId: string;
}
