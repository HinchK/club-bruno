// src/pages/api/upload.js

export async function post({ request }) {
  const formData = await request.formData()
  const imageFile = formData.get('image')

  // Upload imageFile to storage

  return {
    success: true,
    message: 'Image uploaded!'
  }
}
