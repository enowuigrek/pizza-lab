const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '';
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '';

export const cloudinaryConfig = {
  cloudName,
  uploadPreset,
};

// Generate Cloudinary URL with transformations
export const getCloudinaryUrl = (publicId, options = {}) => {
  if (!cloudName) return publicId;

  const { width, height, crop = 'fill', quality = 'auto' } = options;

  let transformations = `q_${quality}`;
  if (width) transformations += `,w_${width}`;
  if (height) transformations += `,h_${height}`;
  if (crop) transformations += `,c_${crop}`;

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
};

// Check if Cloudinary is configured
export const isCloudinaryConfigured = () => {
  return cloudName !== '' && uploadPreset !== '';
};
