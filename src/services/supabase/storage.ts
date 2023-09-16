import { supabase } from './client';

const BUCKET_NAME = 'images';

export async function uploadImage(img: File, folder: string) {
  const imagName = new Date().toISOString() + img.name;

  const { data: imgUploadRes, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(`${folder}/${imagName}`, img);

  if (error) throw new Error(error.message);

  const {
    data: { publicUrl },
  } = supabase.storage.from(BUCKET_NAME).getPublicUrl(imgUploadRes.path);

  return publicUrl;
}
